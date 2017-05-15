const chalk = require('chalk');
const inquirer = require('inquirer');
const figlet = require('figlet');
const readline = require('readline');
const colors = require('colors');
const colorsSafe = require('colors/safe')
const validator = require('validator')

/*******************
 *
 *
 * Fernando's Code
 *
 *
 *******************/

const fernando = ()=> {
    let convertedTextArt = "", colorOutline = 'blue', colorFiller = 'gray', background = 'bgRed';

    const bgColors = {
        Black: "bgBlack",
        Red: "bgRed",
        Green: "bgGreen",
        Yellow: "bgYellow",
        Blue: "bgBlue",
        Magenta: "bgMagenta",
        Cyan: "bgCyan",
        White: "bgWhite"
    };
    const Rcolors = {
        Black: 'black',
        Red: 'red',
        Green: 'green',
        Yellow: 'yellow',
        Blue: 'blue',
        Magenta: 'magenta',
        Cyan: 'cyan',
        White: 'white',
        Gray: 'gray'
    };

    const inputStart = () => {
        inquirer.prompt([{
            type: 'list',
            name: 'answer',
            message: `What background color do you want?`,
            choices: ['Black', 'Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan', 'White', 'Gray']
        }]).then((list) => {
            background = list.answer;
            inquirer.prompt([{
                type: 'list',
                name: 'answer',
                message: `What outline color do you want?`,
                choices: ['Black', 'Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan', 'White', 'Gray']
            }]).then((list) => {
                colorOutline = list.answer;
                inquirer.prompt([{
                    type: 'list',
                    name: 'answer',
                    message: `What filler color do you want?`,
                    choices: ['Black', 'Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan', 'White', 'Gray']
                }]).then((list) => {
                    colorFiller = list.answer;
                    textInput();
                })
            })
        })
    };

    const textInput = () => {
        inquirer.prompt([{
            type: 'input', name: 'text', message: 'Input some text to change?'
        }]).then((list) => {
            figlet.text(list.text, {
                font: 'Doh', horizontalLayout: 'default', verticalLayout: 'default'
            }, function (err, data) {
                textConvert((data + "").split(""));
            });
        })
    };
//**************************************************************//
//**************************************************************//
    const textConvert = function (text) {

        const chalkBackground = chalk[bgColors[background]];
        const chalkFiller = chalk[Rcolors[colorFiller]];
        const chalkOutline = chalk[Rcolors[colorOutline]];

        text.forEach((element) => {
            if ("\n" === element) {
                convertedTextArt += element;
            }
            else if (":" === element) {
                convertedTextArt += chalkFiller(chalkBackground(element));
            }
            else if (" " === element) {
                convertedTextArt += chalkBackground(element);
            }
            else {
                convertedTextArt += chalkOutline(chalkBackground(element));
            }

        });

        console.log(convertedTextArt);
        inquirer.prompt([{
            type: 'list', name: 'answer', message: `Would you like to do it again?`, choices: ['yes', 'no']
        }]).then((list) => {
            console.log("\n");
            if (list.answer === 'yes') {
                inputStart();
            }
            else {
                start();
            }
        })

    };
    inputStart();
};


/*******************
 *
 *
 *  Walters's Code
 *
 *
 *******************/

const walter = ()=> {
    const ONE_MINUTE_THIRSTY_SECONDS_IN_MILLISECONDS = 90000;

    setTimeout(function () {
        //chalkified(coloring and styling) string - chaining styles and colors
        console.log(chalk.bold.red.bgRed("friendly reminder. ~ ONE MINUTE Thirty SECONDS HAVE PASSED!"));
    }, ONE_MINUTE_THIRSTY_SECONDS_IN_MILLISECONDS);

//applying themes(colors+styles) to a string (in a function-like manner)
    const boldGreen = chalk.bold.green;
    const blkbgWhite = chalk.bold.black.bgWhite;
    const bgBlue = chalk.blue.bgBlue;
    const boldMagenta = chalk.bold.magenta;
    const boldYellow = chalk.bold.yellow;

    const arrayOfThemes = [boldGreen, blkbgWhite, bgBlue, boldMagenta, boldYellow];

    let originalString = 'This is a string.';
    console.log(originalString + "...Which will soon be chalkified\n");
    let newStringWithThemes = "";

//applying a random theme to each character in the original string and putting each of these new characters in a new string
    for (let i = 0; i < originalString.length; i++) {
        let randTheme = arrayOfThemes[Math.floor(Math.random() * arrayOfThemes.length)];
        newStringWithThemes = newStringWithThemes + randTheme(originalString[i]);
        console.log(newStringWithThemes);
    }

    console.log("\nFinal Chalkified String: " + newStringWithThemes);

//fun vs practicality('chalkifying each character in a string for fun vs enhancing the visibility/emphasizing the importance of logs/messages')


    start();
};


/*******************
 *
 *
 *  Vincents's Code
 *
 *
 *******************/

const vince = ()=>{

    const fire = chalk.red.bold('Fire ')
    const water = chalk.blue.bold('Water ')
    const earth = chalk.green.bold('Earth ')

    let userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let randomType = getRandomIntInclusive(1, 3)

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function type(){

        switch(randomType) {
            case 1:
                randomType = fire
                break;
            case 2:
                randomType = water
                break;
            case 3:
                randomType = earth
                break;
        }

        return randomType
    }

    monsterAttack = (type() + 'monster attacks you.\n')

    monsterDie = (type() + 'monster dies.\n')

    youDie = chalk.bold.red('You die immediately afterwards.')

    youLive = chalk.bold.cyan('Congratulations! You live to fight another day.')


    console.log(chalk.blue.inverse('You are an adventurer with a tragic backstory\
 and knows basic magic.\nYou are trying to reach an ultimate goal while facing\
 enemies along your path.\nYou are aware of the basic elements of battle.'))

    console.log(fire + 'beats ' + earth)
    console.log(water + 'beats ' + fire)
    console.log(earth + 'beats ' + water +'\n')


    function monster(){
        console.log(chalk.underline('Today, you encounter a ' + type() + 'monster.'))
    }

    monster()

    userInput.question(chalk.bold.cyan('How do you attack? \n'), (answer) =>{
        if (type() == fire ){
            if (`${answer}` == 'Fire'){
                console.log('You attacked with ' + fire + '\n' + chalk.dim('It was not effective...\n') + monsterAttack + youDie)
            }
            else if (`${answer}` == 'Water'){
                console.log('You attacked with ' + water + '\n' + chalk.bold('It was very effective!\n') + monsterDie + youLive)
            }
            else if (`${answer}` == 'Earth'){
                console.log('You attacked with ' + earth + '\n' + chalk.dim('It was not effective...\n') + monsterAttack + youDie)
            }
            else{
                console.log('You spout gibberish. ' + fire + 'Monster is unfazed by your words.\n' + monsterAttack + youDie)
            }
        }
        else if (type() == water ){
            if (`${answer}` == 'Fire'){
                console.log('You attacked with ' + fire + '\n' + chalk.dim('It was not effective...\n') + monsterAttack + youDie)
            }
            else if (`${answer}` == 'Water'){
                console.log('You attacked with ' + water + '\n' + chalk.dim('It was not effective...\n') + monsterAttack + youDie)
            }
            else if (`${answer}` == 'Earth'){
                console.log('You attacked with ' + earth + '\n' + chalk.bold('It was very effective!\n') + monsterDie + youLive)
            }
            else{
                console.log('You spout gibberish. ' + water + 'Monster is unfazed by your words.\n' + monsterAttack + youDie)
            }
        }
        else {
            if (`${answer}` == 'Fire'){
                console.log('You attacked with ' + fire + '\n' + chalk.bold('It was very effective!\n') + monsterDie + youLive)
            }
            else if (`${answer}` == 'Water'){
                console.log('You attacked with ' + water + '\n' + chalk.dim('It was not effective...\n') + monsterAttack + youDie)
            }
            else if (`${answer}` == 'Earth'){
                console.log('You attacked with ' + earth + '\n' + chalk.dim('It was not effective...\n') + monsterAttack + youDie)
            }
            else{
                console.log('You spout gibberish. ' + earth + 'Monster is unfazed by your words.\n' + monsterAttack + youDie)
            }
        }
        userInput.close();
        start();
    });

};


/*******************
 *
 *
 *  Frank's Code
 *
 *
 *******************/

const frank = ()=>{
    console.log('\x1Bc')


    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

// set theme
    colors.setTheme({
        lose: ['red', 'bold', 'inverse'],
        win: ['green', 'bold', 'underline'],
    })

    let selectOperator = () => {
        let randomOp = Math.floor(Math.random() * (2))
        switch (randomOp) {
            case 1:
                return "+"
            default:
                return "-"
        }
    }

    let run = () => {
        let first = Math.floor(Math.random() * 10)
        let second = Math.floor(Math.random() * 10)
        let operator = selectOperator();

        switch (operator) {

            case "+":
                rl.question(first + " " + operator + " " + second + " = ", (answer) => {
                    if (answer == first + second) {
                        console.log("Correct!".win)
                    } else {
                        console.log("Incorrect".lose)
                    }
                    rl.close()

                    start();


                })
            case "-":
                rl.question(first + " " + operator + " " + second + " = ", (answer) => {
                    if (answer == first - second) {
                        console.log("Correct!".win)
                    } else {
                        console.log("Incorrect".lose)
                    }
                    rl.close()
                    start();
                })
        }

    }

    run()
};


/*******************
 *
 *
 *  Wendy's Code
 *
 *
 *******************/

const wendy = () =>{
    const topCols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    const leftRows = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const maxNum = 8
    const board = {}
    const alreadyGuessed = {'A':[], 'B':[], 'C':[], 'D':[], 'E':[], 'F':[], 'G':[], 'H':[], 'I':[]}
    const shipLocations = {}
    let victory = false
    let numberOfGuesses = 3

////////////////////////
// CREATING THE BOARD //
////////////////////////
    function createBoard() {
        topCols.forEach( (c) => {
            board[c] = leftRows
        })
    }

//INSTRUCTIONS
    function printInstuctions() {
        console.log('=============================='.cyan)
        console.log('INSTRUCTIONS'.green)
        console.log('There is a hidden enemy ship. Input guesses to find and attack it.'.yellow)
        console.log('You have 3 chances to find the enemy ship.'.yellow)
        console.log('Input guesses with a letter and a number. Example: \'A0\''.yellow)
        console.log('=============================='.cyan)
    }

//RANDOMLY SELECT SHIP LOCATION
    function pickShipLocations() {
        //Random Formula: http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
        //Math.floor(Math.random() * (max - min + 1)) + min; //min (inclusive), max (exclusive)
        randomLocation = Math.floor( Math.random() * (maxNum + 1) ) //zeros omitted
        letter = topCols[randomLocation]
        num = leftRows[randomLocation]
        shipLocations[letter] = [num]
        console.log('***LOCATION OF THE SHIP FOR PRESENTATION PURPOSES:***'.cyan.bgBlue, shipLocations)
        console.log('=============================='.cyan)
    }

//PRINT THE GAME BOARD
    function printBoard() {
        console.log()
        console.log('                ' + ' BATTLESHIP '.cyan.bold.bgBlue)
        console.log()
        console.log('     ', leftRows.join('   '))
        console.log()

        //NOT SELECTED -> PRINT BLACK TEXT & WHITE BG
        //SELECTED BUT NO WIN -> PRINT WHITE WITH BLUE BG
        //WIN -> PRINT WHITE WITH RED BG
        topCols.forEach( (c) => {
            process.stdout.write('  ' + c + '  ')
            leftRows.forEach( (r) => {
                if( victory === true && !isNaN(shipLocations[c]) ) {
                    if(shipLocations[c].indexOf(r) > -1) {
                        process.stdout.write(' '.white.bgRed + board[c][r].toString().white.bgRed.bold + ' '.white.bgRed)
                        process.stdout.write(' ')
                    } else if(alreadyGuessed[c].indexOf(r) > -1) {
                        process.stdout.write(' '.white.bgBlue + board[c][r].toString().white.bgBlue.bold + ' '.white.bgBlue)
                        process.stdout.write(' ')
                    } else {
                        process.stdout.write(' '.black.bgWhite + board[c][r].toString().black.bgWhite + ' '.black.bgWhite)
                        process.stdout.write(' ')
                    }
                } else if(alreadyGuessed[c].indexOf(r) > -1) {
                    process.stdout.write(' '.white.bgBlue + board[c][r].toString().white.bgBlue.bold + ' '.white.bgBlue)
                    process.stdout.write(' ')
                } else {
                    process.stdout.write(' '.black.bgWhite + board[c][r].toString().black.bgWhite + ' '.black.bgWhite)
                    process.stdout.write(' ')
                }
            })
            process.stdout.write('\n\n')
        })
    }

//PROMPT USER FOR INPUT
    function guessLocation() {
        inquirer.prompt([{
            type: 'input',
            name: 'guess',
            message: 'Attack a location:'.red
        }]).then( (input) => {
            guessedLoc = input.guess.split('')
            if( alreadyGuessed[guessedLoc[0]].indexOf(guessedLoc[1]) === -1 ) {
                alreadyGuessed[guessedLoc[0]].push(parseInt(guessedLoc[1]))
            } else {
                alreadyGuessed[guessedLoc[0]] = [parseInt(guessedLoc[1])]
            }
            checkVictory(guessedLoc);
        });
    }

//PRINT NUMBER OF GUESSES REMAINING
    function showGuessesRemaining() {
        console.log('Number of Guesses Remaining:'.magenta, numberOfGuesses)
    }

//CHECK FOR A LOSS
    function checkGuessesRemaining() {
        numberOfGuesses -= 1

        printBoard();
        showGuessesRemaining();

        //IF NO WIN AND GUESSES RUN OUT, PLAYER LOSES
        if(numberOfGuesses <= 0) {
            console.log('--- YOU LOSE ---'.red)
            console.log('SHIP LOCATION:'.cyan, Object.keys(shipLocations)[0] + ':' + shipLocations[ Object.keys(shipLocations)[0] ])
            start();
        } else {
            guessLocation();
        }
    }

//CHECK FOR A WIN
//IF NO WIN, CHECK FOR A LOSS
    function checkVictory(guess) {
        if( !isNaN(shipLocations[guess[0]] )) {
            shipLocations[guess[0]].forEach( (sL) => {
                if( parseInt(guess[1]) === sL ) {
                    victory = true
                    printBoard();
                    console.log('SHIP LOCATION FOUND!!! ->'.rainbow, Object.keys(shipLocations)[0] + ':' + shipLocations[ Object.keys(shipLocations)[0] ])
                    console.log('--- YOU WIN!!!! ---'.yellow)
                    start();
                }
                else {
                    checkGuessesRemaining();
                }
            })
        }
        else {
            checkGuessesRemaining();
        }
    }

//START GAME
    function playGame() {
        createBoard();
        printInstuctions();
        pickShipLocations();

        printBoard();
        showGuessesRemaining();

        guessLocation();
    }

///////////////////////
// STARTING THE GAME //
///////////////////////
    playGame();

};


/*******************
 *
 *
 *  Kevin's Code
 *
 *
 *******************/

const kevin = ()=>{
    console.log()
    console.log(colorsSafe.green('Not using string prototype'))
    console.log()


    let emptyString = ''
    let regString = 'hey'

    testEmptyString(emptyString)
    console.log()
    testEmptyString(regString)

//
    function testEmptyString(word){

        if (validator.isEmpty(word)){
            console.log('The string is empty'.blue)
        }
        else {
            console.log('False! Not an empty string'.red)
        }

    }


    let numericString = '1234'
    let nonNumericString = 'no numers here'

    console.log()
    testNumeric(numericString)
    console.log()
    testNumeric(nonNumericString)
    console.log()


//
    function testNumeric(word){
        if (validator.isNumeric(word)) {
            console.log('The string is numeric'.blue)
        }
        else{
            console.log('The string is NOT numeric'.red)
        }


    }

    let isEmail = 'foo@bar.com'
    let notEmail = 'not an email'

    testEmail(isEmail)
    console.log()
    testEmail(notEmail)
    console.log()


//
    function testEmail(email){
        if (validator.isEmail(email)) {
            console.log('The string is an email address'.underline.blue)
        }
        else {
            console.log('The string is not  an email address'.bold.red)
        }


    }

    let lowerCaseString = 'hey'
    let upperCaseString = 'HEY'

    testLowerCase(lowerCaseString)
    console.log()
    testLowerCase(upperCaseString)


//
    function testLowerCase(word){

        if (validator.isLowercase(word)) {
            console.log('The string is all lowercase'.underline.blue)
        }
        else {
            console.log('The string is not all lower case'.bold.red)
        }

    }

    start();
};





const start = ()=> {
    inquirer.prompt([{
        type: 'list', name: 'answer', message: `Demo?`, choices: ['Fernando', 'Walter', 'Vincent', 'Frank', 'Wendy', 'Kevin']
    }]).then((list) => {
        if (list.answer === 'Fernando') {
            fernando();
        }
        else if (list.answer === 'Walter') {
            walter();
        }
        else if (list.answer === 'Frank') {
            frank();
        }
        else if (list.answer === 'Wendy') {
            wendy();
        }
        else if (list.answer === 'Vincent') {
            vince();
        }
        else if (list.answer === 'Kevin') {
            kevin();
        }

    });
};
start();