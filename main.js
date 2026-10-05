// Groci: a shared grocery list tracker for households

// Loading readline-sync, so that the app can ask the user questions
const input = require('readline-sync');

// Pseudocode:
// 1. Create an array of item names
// 2. Create a matching array of quantities
// 3. Create a matching array of who added each item

// SKILL (Building Arrays): creating three matching arrays with square brackets
// SKILL (Values, Data Types, and Operations): names of items and users are strings while the items' quantities are numbers
let items = ["Eggs", "Avocado oil", "Tomato sauce", "Toilet paper", "Paper towel", "Detergent", "Salt", "Sugar"];
let quantities = [12, 1, 1, 4, 2, 1, 1, 1];
let addedBy = ["Martin", "Ineza", "Ineza", "Martin", "Aura", "Martin", "Ineza", "Ineza"];

// Pseudocode:
// 1. Ask the user for their name
// 2. Store it, so that the app knows who is about to add items
// 3. Show a welcome message to the user

let userName = input.question("What is your name? ");
console.log(`Welcome to Groci, ${userName}!`);
console.log("");

// Pseudocode:
// 1. Go through every item on the list by index
// 2. Print each item along with its quantity and who added it

// SKILL (Working With Loops): a for loop is going through every index of the list
console.log("Current grocery list:");
for (let i = 0; i < items.length; i++) {
    console.log(`${items[i]} -> Quantity: ${quantities[i]} -> Added by: ${addedBy[i]}`);
}
console.log("");

// Pseudocode:
// 1. Ask the user what item is needed
// 2. Ensure the item name matches the list's format
// 3. If the item is already on the list, let the user know
// 4. If the item is not on the list, ask how many, then add the item, its quantity, and the user's name

let newItem = input.question("What item do you need? ");

// SKILL (Stringing Characters Together): .trim() removes any extra spaces while
// .charAt(0).toUpperCase() and .slice(1).toLowerCase() format the item's name
let trimmedItem = newItem.trim();
let formattedItem = trimmedItem.charAt(0).toUpperCase() + trimmedItem.slice(1).toLowerCase();

// SKILL (Control Structures and Logic): using if/else to decide whether or not to add the item
if (items.includes(formattedItem)) {
    console.log(`${formattedItem} is already on the list.`);
} else {
    let newQuantity = input.questionInt("How many? ");
    // SKILL (Using Arrays): using .push() to add to the end of each array
    items.push(formattedItem);
    quantities.push(newQuantity);
    addedBy.push(userName);
    console.log(`${formattedItem} was added to the list by ${userName}.`);
}
console.log("");

// Pseudocode:
// 1. Ask whether the user bought an item
// 2. If yes, ask which item they bought and ensure its name matches the list's format
// 3. If the item is on the list, find its index and remove it from all the three arrays
// 4. If the item is not on the list, show the user a message letting them know
// 5. If the user did not buy anything, confirm that with a message and skip the check-off process

let boughtAnswer = input.question("Did you buy an item? (yes/no) ");

if (boughtAnswer.trim().toLowerCase() === "yes") {
    let boughtItem = input.question("Which item did you buy? ");
    let trimmedBought = boughtItem.trim();
    let formattedBought = trimmedBought.charAt(0).toUpperCase() + trimmedBought.slice(1).toLowerCase();

    if (items.includes(formattedBought)) {
        // SKILL (Using Arrays): using .indexOf() to find the item, and .splice() to remove it
        let boughtIndex = items.indexOf(formattedBought);
        items.splice(boughtIndex, 1);
        quantities.splice(boughtIndex, 1);
        addedBy.splice(boughtIndex, 1);
        console.log(`${formattedBought} was checked off and removed from the list.`);
    } else {
        console.log(`${formattedBought} is not on the list.`);
    }
} else {
    console.log("No items were checked off.");
}
console.log("");

// Showing the updated list
// Pseudocode:
// 1. Go through every item on the list by index
// 2. Print each item along with its quantity and who added it
console.log("Updated grocery list:");
for (let i = 0; i < items.length; i++) {
    console.log(`${items[i]} -> Quantity: ${quantities[i]} -> Added by: ${addedBy[i]}`);
}