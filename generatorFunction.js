// Genaratorr function in JavaScript

function* foo() {
	console.log('hello');
  yield 'stop'; 
  console.log('World');
}

const myFoo = foo();
// iterator Object
console.log(myFoo.next());

// first it calls foo() and stops at yeild
myFoo.next();

//	now it is resuming after yiled  
myFoo.next();