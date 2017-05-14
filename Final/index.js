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

};


/*******************
 *
 *
 *  Wendy's Code
 *
 *
 *******************/

const wendy = () =>{

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