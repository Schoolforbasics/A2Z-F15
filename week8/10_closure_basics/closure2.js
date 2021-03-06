// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

// Closure basics
// Based on some examples from: https://www.manning.com/books/secrets-of-the-javascript-ninja


/****************** Getting trickier ******************/

var after;

function outerFunction() {
  // rainbow's scope is local only to this function!
  var rainbow = 'rainbow';

  function innerFunction() {
    console.log(rainbow);
  }
  after = innerFunction;
}

// When this function is called
// innerFunction is defined with a closure that stores
// everything currently in scope 
outerFunction();

// The variable rainbow is not in scope, this breaks everything!
// console.log(rainbow);

// But this one works b/c after stores a reference to innerFunction
// and so everything contained in the closure is maintained!
after();






