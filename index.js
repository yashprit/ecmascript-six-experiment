'use strict';

let letOrConst = require('./src/let-const.js');
let classes = require('./src/class.js');
let genrator = require('./src/generators.js');

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

log(magenta('\n=======================================\n'));
let itGet = genrator.get();
log(output(itGet.next().value));
log(output('second value ' + itGet.next().value));
let itLoopGetValue = genrator.loopGetValue();
log(output('yeild genrators ' + itLoopGetValue.next().value));


