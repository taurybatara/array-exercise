// 1. Using a loop, iterate through this array and console.log all of the people.
// 2. Write the command to remove "Mitchell" from the array.
// 3. Write the command to remove "Dewi" from the array.
// 4. Write the command to add "Zacharia" to the front of the array.
// 5. Write the command to add your "Precinio" to the end of the array.
// 6. Using a loop, iterate through this array and after console.log-ing "Mitchell", exit from the loop.
// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Taury" or "Mitchell".
// 8. Write the command that gives the indexOf where "Taury" is located.
// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Taury" from the array and add "Precinio" and "Zacharia". Your array should look like this when you are done ["Dewi", "Mitchell", "Brandon", "Zacharia", "Precinio"];.

// Elke vraag in een aparte function
// Function aanroepen in main
// Print all answers using loop with counter "1. Dewi" "2. Taury"
// Om niet de huidige people array aan te passen maak er een clone van met de spread operator
// Elk antwoord console.loggen en met een console log vooraf met de vraag nummer

let people = ["Dewi", "Taury", "Mitchell", "Brandon"];

main();

function main() {
    console.log('Hello');
    one([...people]);
}

function one(people) {
    console.log('Vraag 1');

    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        console.log((i+1) + ". " + person);
    }
}

