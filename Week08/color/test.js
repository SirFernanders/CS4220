/**
 * Created by Fernando on 3/22/17.
 */
const color = require('colors');
const colr = require('colors/safe');

const txt = 'Hello CS4220!!!';

// text colors
//     black
//     red
//     green
//     yellow
//     blue
//     magenta
//     cyan
//     white
//     gray
//     grey

console.log();
console.log('///////////////');
console.log('/ Text Colors /');
console.log('///////////////');
console.log();

console.log('Black text with a white background:', txt.bgWhite.black);
console.log('Red text:', txt.red);
console.log('Green text:', txt.green);
console.log('Yellow text:', txt.yellow);
console.log('Blue text with a cyan background:', txt.bgCyan.blue);
console.log('Magenta text:', txt.magenta);
console.log('Cyan text:', txt.cyan);
console.log('White text:', txt.white);
console.log('Gray text:', txt.gray);
console.log('Grey text:', txt.grey);

// background colors
//     bgBlack
//     bgRed
//     bgGreen
//     bgYellow
//     bgBlue
//     bgMagenta
//     bgCyan
//     bgWhite

console.log();
console.log('/////////////////////');
console.log('/ Background Colors /');
console.log('/////////////////////');
console.log();

console.log('Black background with white text:', txt.bgBlack.white);
console.log('Red background:', txt.bgRed);
console.log('Green background:', txt.bgGreen);
console.log('Yellow background:', txt.bgYellow);
console.log('Blue background:', txt.bgBlue);
console.log('Magenta background:', txt.bgMagenta);
console.log('Cyan background:', txt.bgCyan);
console.log('White background with black text:', txt.bgWhite.black);

// styles
//     reset
//     bold
//     dim
//     italic
//     underline
//     inverse
//     hidden
//     strikethrough

console.log();
console.log('//////////');
console.log('/ Styles /');
console.log('//////////');
console.log();

console.log('Reset Text:', colr.reset(txt));
console.log('Bold Text:', colr.bold(txt));
console.log('Dim Text:', colr.dim(txt));
console.log('Italic Text:', colr.italic(txt));
console.log('Underline Text:', colr.underline(txt));
console.log('Inverse Text:', colr.inverse(txt));
console.log('Hidden Text:', colr.hidden(txt));
console.log('Strikethrough Text:', colr.strikethrough(txt));

// extras
//     rainbow
//     zebra
//     america
//     trap
//     random

console.log();
console.log('//////////');
console.log('/ Extras /');
console.log('//////////');
console.log();

console.log('Rainbow Text:', txt.rainbow);
console.log('Zebra Text:', txt.zebra);
console.log('America Text:', txt.america);
console.log('Trap Text:', txt.trap);

//random
console.log();
console.log('////////////////');
console.log('/ Random Texts /');
console.log('////////////////');
console.log();

console.log(colr.random(txt));
console.log(colr.random(txt));
console.log(colr.random(txt));
console.log(colr.random(txt));
console.log(colr.random(txt));

//Special
//     zalgo
console.log();
console.log('////////////////////////');
console.log('/ Special Extra: Zalgo /');
console.log('////////////////////////');
console.log();

console.log(txt.zalgo);