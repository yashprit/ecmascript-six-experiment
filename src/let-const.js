'use strict'

let chalk = require('chalk');

let information = chalk.green;
let keyword = chalk.yellow.bold.underline;
let output = chalk.blue;
let error = chalk.red;

let log = console.log;

let globalScope = 20;
function letFun(){
  
  let errorMsg = "\n" + keyword("%s") + information("    Allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used, accessing property outside scope is an error: ") + error("%s");
  
  log(output('global level scope %s'), globalScope); //20
  let functionScope = 30;
  let out = "";
  log(output('function level scope %s'), functionScope); //30

  for(let i = 0; i < 10; i++){
    out += (i + " "); //i is block level scope, should undefined outside this block
  }
  log(output('for loop output is %s'), out);

  //try or catch, to avoid interrupting script
  try{
     log(i); //undefined
  } catch(e){
    log(error(errorMsg),'let\n', e);
  }
}

function constFun(){

  const errorMsg = "\n" + keyword("%s") + information("   Allows you to creates a constant that can be global or local to the function in which it is declared. Constants are block-scoped. The value of a constant cannot change through re-assignment, and a constant cannot be re-declared. An initializer for a constant is required. A constant cannot share its name with a function or a variable in the same scope. Re-assignment should throw an error: ") + error("%s");

  const arr = [10,20];
  arr.push(30); //no error
  log(output('Should out array with normal execution %s'), arr);

  //try or catch, to avoid interrupting script
  try{
   arr = 20; //this is error
  } catch(e){
     log(error(errorMsg),'const\n', e); 
  }
}

exports.constFun = constFun;
exports.letFun = letFun;

