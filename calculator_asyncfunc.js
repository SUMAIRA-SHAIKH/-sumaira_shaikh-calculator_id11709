#! /usr/bin/env node
import inquirer from "inquirer";
/*3
Calculator using async function
  
  It sounds like you want to create a loop that continues until the user decides to stop, and within each iteration of the loop, there's some asynchronous calculation happening. Here's how you can achieve that in JavaScript using an asynchronous function and async/await along with a loop
  
  If the user's input is not "yes", the loop will end, and the program will terminate. */
//calculation using swtich case 
let id = 11709;
let stdname = "Sumaira Aziz";
console.log(`\n\t created by '${stdname}' \t\t \tID: '${id}'`);
console.log("\t\t\t***~SIMPLE CALCULATOR~***");
console.log("\t\t\t=========================\n");
async function performCalculation() {
    const answer = await inquirer.prompt([
        { message: "\n\tPlease enter 1st number:", type: "number", name: "firstNumber" }, //input 1st no
        { message: "\tPlease enter 2nd number:", type: "number", name: "secondNumber" }, //input 2nd no
        {
            message: "\tPlease select one of the operators to perform operation", //taking input for operation
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Remainder"],
        },
    ]);
    // Conditional statement to perform calculations based on the selected operator
    let result;
    //switch /case conditions
    switch (answer.operator) {
        case "Addition": // if case ADDITION
            result = answer.firstNumber + answer.secondNumber;
            console.log(`\t\nYour result of Addition is: ${result}`);
            break; // TERMINATE ADDITION CASE
        case "Subtraction": //IF CASE SUB
            result = answer.firstNumber - answer.secondNumber;
            console.log(`\t\nYour result of Subtraction is: ${result}`);
            break; // TERMINATE SUB CASE
        case "Multiplication":
            result = answer.firstNumber * answer.secondNumber;
            console.log(`\t\nYour result of Multiplication is: ${result}`);
            break;
        case "Division":
            result = answer.firstNumber / answer.secondNumber;
            console.log(`\t\nYour result of Division is: ${result}`);
            break;
        case "Remainder":
            result = answer.firstNumber % answer.secondNumber;
            console.log(`\t\nRemainder of two numbers is: ${result}`);
            break;
        default: //INVALID OPERATION CASE
            console.log("\tInvalid operator selected.");
            break;
    } //TERMINATE invalid case
    console.log("\t-----------------------------------\n");
    const output = await inquirer.prompt([
        { message: "\t\nDo you wish to continue calculation YES or NO = (Y/N)?", type: "list", name: "wantagain", choices: ["YES", "NO"] }
    ]);
    if (output.wantagain === "YES") {
        await performCalculation(); // Recursive call to perform calculations again
    }
    else {
        console.log("\n\tThank you for using the calculator. See you next time!");
    }
}
performCalculation(); // calling function , all code excute here.
