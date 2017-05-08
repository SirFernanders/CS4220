/**
 * Created by Fernando on 4/30/17.
 */
const chalk = require('chalk');
const inquirer = require('inquirer');
const figlet = require('figlet');

let convertedTextArt = "";
let colorOutline = 'blue';
let colorFiller = 'gray';
let background = 'bgRed';


const bgColors = {
    Black: "bgBlack",
    Red: "bgRed",
    Green: "bgGreen",
    Yellow: "bgYellow",
    Blue: "bgBlue",
    Magenta : "bgMagenta",
    Cyan : "bgCyan",
    White: "bgWhite"
};
const colors = {
    Black :'black',
    Red : 'red',
    Green : 'green',
    Yellow : 'yellow',
    Blue : 'blue',
    Magenta : 'magenta',
    Cyan : 'cyan',
    White : 'white',
    Gray : 'gray'
}

const app = ()=>{
    inquirer.prompt([{
        type: 'list',
        name: 'answer',
        message: `What background color do you want?`,
        choices: [
            'Black',
            'Red',
            'Green',
            'Yellow',
            'Blue',
            'Magenta',
            'Cyan',
            'White',
            'Gray'
        ]
    }]).then((list)=>{
        background = list.answer;

        inquirer.prompt([{
            type: 'list',
            name: 'answer',
            message: `What outline color do you want?`,
            choices: [
                'Black',
                'Red',
                'Green',
                'Yellow',
                'Blue',
                'Magenta',
                'Cyan',
                'White',
                'Gray'
            ]
        }]).then((list)=>{
            colorOutline = list.answer;

            inquirer.prompt([{
                type: 'list',
                name: 'answer',
                message: `What filler color do you want?`,
                choices: [
                    'Black',
                    'Red',
                    'Green',
                    'Yellow',
                    'Blue',
                    'Magenta',
                    'Cyan',
                    'White',
                    'Gray'
                ]
            }]).then((list)=>{
                colorFiller = list.answer;

                textInput();
            })
        })
    })
};

const textInput = () =>{
    inquirer.prompt([{
        type: 'input',
        name: 'text',
        message: 'Input some text to change?'
    }]).then((list)=>{

        figlet.text(list.text, {
            font:'Doh',
            horizontalLayout: 'default',
            verticalLayout:'default'
        }, function (err, data) {


            textConvert((data+"").split(""));

        });


    })
};



let textConvert = function (text) {

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
        type: 'list',
        name: 'answer',
        message: `Would you like to do it again?`,
        choices: [
            'yes',
            'no'
            ]
    }]).then((list)=>{
        console.log("\n");
        if(list.answer==='yes'){
            app()
        }
    })



};

app();

