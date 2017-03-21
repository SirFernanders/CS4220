/**
 * Created by Fernando on 3/2/17.
 */
const
    yargs = require('yargs'),
    game = require('./app');

const flags = yargs.usage('$0: usage --run')
    .options('h', {
        alias: 'help',
        describe: 'displays help'
    })
    .options('d', {
        alias: 'difficulty',
        describe: 'choose the difficulty of game',
        choices: ['easy', 'hard'],
    })
    .argv;


if (flags.help)
    yargs.showHelp();



if (flags.difficulty)
    if(flags.difficulty=="hard"){
    game.run(true);
    }
    else {
        console.log(game.run(false));

    }