/**
 * Created by Fernando on 4/30/17.
 */

const chalk = require('chalk');
const inquirer = require('inquirer');
const figlet = require('figlet');


/*******************
 *
 *
 * Fernando's Code
 *
 *
 *******************/
let convertedTextArt = "", colorOutline = 'blue', colorFiller = 'gray', background = 'bgRed';

const bgColors = { Black: "bgBlack", Red: "bgRed", Green: "bgGreen", Yellow: "bgYellow", Blue: "bgBlue", Magenta : "bgMagenta", Cyan : "bgCyan", White: "bgWhite"};
const colors = {Black :'black', Red : 'red', Green : 'green', Yellow : 'yellow', Blue : 'blue', Magenta : 'magenta', Cyan : 'cyan', White : 'white', Gray : 'gray'};

const FMstart = ()=>{
    inquirer.prompt([{
        type: 'list', name: 'answer', message: `What background color do you want?`, choices: ['Black', 'Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan', 'White', 'Gray']
    }]).then((list)=>{
        background = list.answer;
        inquirer.prompt([{
            type: 'list', name: 'answer', message: `What outline color do you want?`, choices: ['Black', 'Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan', 'White', 'Gray']
        }]).then((list)=>{
            colorOutline = list.answer;
            inquirer.prompt([{
                type: 'list', name: 'answer', message: `What filler color do you want?`, choices: ['Black', 'Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan', 'White', 'Gray']
            }]).then((list)=>{
                colorFiller = list.answer;
                textInput();
            })
        })
    })
};

const textInput = () =>{
    inquirer.prompt([{
        type: 'input', name: 'text', message: 'Input some text to change?'
    }]).then((list)=>{
        figlet.text(list.text, {
            font:'Doh', horizontalLayout: 'default', verticalLayout:'default'
        }, function (err, data) {
            textConvert((data+"").split(""));
        });
    })
};
//**************************************************************//
//**************************************************************//
const textConvert = function (text) {

    const chalkBackground = chalk[bgColors[background]];
    const chalkFiller = chalk[colors[colorFiller]];
    const chalkOutline = chalk[colors[colorOutline]];

        text.forEach((element)=>{
            if("\n"===element){
                convertedTextArt += element;
            }
            else if(":"===element){
                convertedTextArt += chalkFiller(chalkBackground(element));
            }
            else if(" "===element){
                convertedTextArt += chalkBackground(element);
            }
            else{
                convertedTextArt += chalkOutline(chalkBackground(element));
            }

        });

    console.log(convertedTextArt);
    inquirer.prompt([{
        type: 'list', name: 'answer', message: `Would you like to do it again?`, choices: ['yes', 'no']
    }]).then((list)=>{
        console.log("\n");
        if(list.answer==='yes'){FMstart();}
        else{start();}
    })
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




const start = ()=> {
    inquirer.prompt([{
        type: 'list', name: 'answer', message: `Demo?`, choices: ['Fernando', 'Walter', 'Frank', 'Wendy', 'Vincent', 'Kevin']
    }]).then((list) => {
        if (list.answer === 'Fernando') {
            FMstart();
        }
        else if (list.answer === 'Walter') {
            walter();
        }
        else if (list.answer === 'Frank') {

        }
        else if (list.answer === 'Wendy') {

        }
        else if (list.answer === 'Vincent') {

        }
        else if (list.answer === 'Kevin') {

        }

    });
};

start();