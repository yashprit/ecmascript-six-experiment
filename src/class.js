'use strict'

let chalk = require('chalk');

let information = chalk.green;
let keyword = chalk.yellow.bold.underline;
let error = chalk.red;

let log = console.log;


let errorMsg = "\n" + keyword("%s") + information("\n   ES6 classes are syntactical sugar over the Objects and prototypes that we're used to working with. They simply offer a much nicer, cleaner and clearer syntax for creating these objects and dealing with inheritance.");


//create supper class
class Person {
  constructor(name) {
    this.name = name;
  }
  describe() {
    return "Person is called " + this.name;
  }
}

//create sub class
class Employee extends Person {
  constructor(name, title) {
    super.constructor(name);
    this.title = title;
  }
  describe() {
    return super.describe() + " ( " + this.title + " )";
  }
  print(){
    log(error(errorMsg), 'class');
  }
}

module.exports = new Employee("Ruby", "Engineer");


