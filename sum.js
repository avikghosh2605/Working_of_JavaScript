function addNumbers(a, b) {
    console.log(myVar); // undefined
    var myVar = "Hello World"; // variable hoisting
    return a + b;
  }
  
  console.log(addNumbers(2, 3)); // output: 5
  