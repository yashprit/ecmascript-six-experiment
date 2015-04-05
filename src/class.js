(function() {
	'use strict'
	
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
	}

	let ruby = new Employee("Ruby", "Engineer");
	var message = ruby.describe();
	console.log(message)
})()
