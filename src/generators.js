'use strict';

let chalk = require('chalk');

let information = chalk.green;
let keyword = chalk.yellow.bold.underline;
let error = chalk.red;

function* get(){
  yield  "\n" + keyword("Generators") + information("\n   With ES6 generators, we have a different kind of function, which may be paused in the middle, one or many times, and resumed later, allowing other code to run during these paused periods");
  yield 1;
}

function* loopGet(){
  var index = 0;
  while(true){
    yield index++;
  }
}

function* loopGetValue(){
  yield* loopGet();
}

exports.get = get;
exports.loopGet = loopGet;
exports.loopGetValue = loopGetValue;
