#! /usr/bin/env node
import readline from 'readline';
//redline to read input from console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, // Output stream
});
/*process.stdin and process.stdout are both built-in Node.js streams.

process.stdin is a readable stream that represents the standard input (stdin) of the current process.
process.stdout is a writable stream that represents the standard output (stdout) of the current process.
*/
const maxNumber = 10;
let round = 1;
let score = 0;
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}
function playRound() {
    const randomNumber = generateRandomNumber(maxNumber);
    console.log(`Round ${round}: Guess a number between 1 and ${maxNumber}`);
    //In the code you provided, rl.question is used to prompt the user to enter a guess. 
    //Once the user enters their guess and presses Enter, the input parameter of the callback function 
    //contains the user's input as a string.
    //The parseInt() method is then used to convert the user's input from a string to an integer. 
    //The second argument passed to parseInt() is the radix, or base, of the number system to use when 
    //parsing the string. In this case, a radix of 10 is used, which means that parseInt() will parse 
    //the input string as a decimal number.
    rl.question('> ', (input) => {
        const guess = parseInt(input, 10);
        if (isNaN(guess)) {
            console.log('Invalid input. Please enter a number.');
            playRound();
            return;
        }
        if (guess === randomNumber) {
            console.log(`Congratulations! You guessed the number ${randomNumber} correctly!`);
            score++;
        }
        else {
            console.log(`Sorry, the number was ${randomNumber}. Better luck next time!`);
        }
        round++;
        if (round <= 3) {
            playRound();
        }
        else {
            console.log(`Game over. Your final score is ${score}.`);
            rl.close();
        }
    });
}
console.log('Welcome to the Guess the Number Game!');
playRound();
