(function(){
	'use strict'
	
	//letting object
	let obj = {first: 'Balram', last: 'Singh'};
	console.log(obj)
	let {first:'Balram', last: 'Singh'} = obj;
	console.log(obj);

  let x = 20;
  console.log(x);
	
  /*
	//in array
	let [x,y] = ["a", "b"];
	console.log(x, y);
	[x,y]= [y,x];
	console.log(x, y);
	
	let [all, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2999-12-31');
	console.log(all);
	
	// Variable declarations:
	let [x] = ['a'];

	// Assignments:
	[x] = ['a'];

	// Parameter definitions:
	function f([x]) { 
		console.log([x]) 
	}
	f(['a']);*/
	
})()
