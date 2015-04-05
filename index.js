'use strict';

let letOrConst = require('./src/let-const.js');
let classes = require('./src/class.js');
let chalk = require('chalk');

let magenta = chalk.magenta.bgMagenta;
let output = chalk.blue;
let log = console.log;


log(magenta('\n=======================================\n'));
letOrConst.letFun();

log(magenta('\n=======================================\n'));
letOrConst.constFun();

log(magenta('\n=======================================\n'));
log(output(classes.describe()));
log(output(classes.print()));


