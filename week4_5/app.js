/**
 * Created by Fernando on 2/22/17.
 */

const words = require('./hw_4words');
const inquirer = require('inquirer');

module.exports.run = (hard) => {
    const game = new Game();
    game.init(hard);
};

class Game {
    constructor() {
        this.wrongAttemps = 0;
        this.maxWrongAttempts = 4;
        this.guesses = [];
        this.wordInChar = [];
        this.gameWordDisplay = "";
        this.gameDisplayTop = "--- Mystery Game -----------------------\n";
        this.gameDisplayBottom = "\n----------------------------------------";
        this.gameOver = false;
        this.won = false;
    }

    init(hard){
        if(hard){
            this.gameloop(words.hard[Math.floor((Math.random() * words.hard.length-1) + 1)]);
        }
        else{
            this.gameloop(words.easy[Math.floor((Math.random() * words.hard.length-1) + 1)]);
        }
    }

    gameloop(word){

        if(!this.gameOver) {
            if (this.gameWordDisplay.length < 2) {
                word = word.toUpperCase();
                for (let i in word) {
                    this.gameWordDisplay = this.gameWordDisplay + "_ ";
                    this.wordInChar.push(word.charAt(i));
                }
            }
            this.showDisplay();
            this.userChoice()
        }
        else{
                this.gameEnd();
        }
    }

    userChoice(){

        const choiceOne = "Guess a letter";
        const choiceTwo = "Get a hint.";
        const choiceThree = "View guessed letters.";

        inquirer.prompt([{
            type: 'list',
            name: 'answer',
            message: `What would you like to do?`,
            choices: [
                choiceOne,
                choiceTwo,
                choiceThree
            ]
        }]).then((list)=> {

            if(choiceOne==list.answer){
                this.chooseLetter();
            }
            else if(choiceTwo == list.answer){
                this.giveHint();
            }
            else{
                this.showGuessedLetters();
            }
        })

    }

    showGuessedLetters(){
        //simply show all the guessed letters
        let lettersToPrint = "";
        this.guesses.forEach((i)=>{
            lettersToPrint += (i+" ");
        });
        console.log("--- Guessed Letters --------------------\n");
        console.log(lettersToPrint);
        console.log("\n----------------------------------------");

        this.gameloop();
    }

    giveHint(){
        //hint logic goes here
        let somethingChanged = false;
        for(let i =0 ; i < this.wordInChar.length; i++){
            const regex = new RegExp(this.wordInChar[i],"gi");
            const repeats = this.wordInChar.join("").length - this.wordInChar.join("").replace(regex,"").length;
            if(repeats<2 && !(this.wordInChar[i]=="1")){
                const letter = this.wordInChar[i];
                let tempArray = this.gameWordDisplay.split("");

                if(this.wordInChar.indexOf(letter)<1) {
                    tempArray[this.wordInChar.indexOf(letter)] = letter;
                }
                else{

                    tempArray[this.wordInChar.indexOf(letter)*2] = letter;
                }
                this.wordInChar[this.wordInChar.indexOf(letter)]= "1";
                this.gameWordDisplay = tempArray.join("");

                if(!this.gameWordDisplay.includes("_")){
                    this.gameOver = true;
                    this.won = true;
                }

                somethingChanged = true;
                break;
            }

        }

        if (!somethingChanged){
            console.log("\n\n\n\n****************************");
            console.log("   Sorry, No More Hints");
            console.log("****************************");
        }

        this.gameloop();
    }

    chooseLetter(){
        //choose a letter then send that letter to get checked
        inquirer.prompt([{
            type: 'input',
            name: 'answer',
            message: `Pick a letter: `
        }]).then((input) => {
            if(input.answer.length > 1){
                console.log("**********************************************\nI said Pick a letter. That means 1 letter...\n**********************************************")
                this.chooseLetter();
            }
            else {
                this.guesses.push(input.answer.toUpperCase());
                this.checkLetter(input.answer.toUpperCase());
            }
        })


    }

    checkLetter(letter){
        /* check letter
            if right add to letter to game display and guesses then check for win
            if wrong add to guesses saw its wrong and go back to game loop
         */

        if(!this.wordInChar.includes(letter)){
            this.wrongAttemps++;
            if(this.maxWrongAttempts==this.wrongAttemps) {
                this.gameOver = true;
            }
            else {
                console.log("**********************************\n    YOU GOT IT WRONG\n    You have " + (this.maxWrongAttempts - this.wrongAttemps) + " wrong attempts left\n**********************************");
            }
        }
        while(this.wordInChar.includes(letter)){

            let tempArray = this.gameWordDisplay.split("");

            if(this.wordInChar.indexOf(letter)<1) {
                tempArray[this.wordInChar.indexOf(letter)] = letter;
            }
            else{

                tempArray[this.wordInChar.indexOf(letter)*2] = letter;
            }
            this.wordInChar[this.wordInChar.indexOf(letter)]= "1";
            this.gameWordDisplay = tempArray.join("");

            if(!this.gameWordDisplay.includes("_")){
                this.gameOver = true;
                this.won = true;
            }

        }


        this.gameloop();
    }

    showDisplay(){
        console.log(this.gameDisplayTop);
        console.log(this.gameWordDisplay);
        console.log(this.gameDisplayBottom);
    }
    gameEnd(){
        //game end function. depending on if true or false come on do accordingly
        this.showDisplay();
        if(!this.won){
            console.log("YOU LOST")
        }
        else{
            console.log("YOU WON")
        }

    }
}
