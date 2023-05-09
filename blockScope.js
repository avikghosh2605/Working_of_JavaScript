function demoTemporalDeadZone() {
    if (true) {
      // variable declared inside block scope
      let myVar;
  
      console.log(myVar); // trying to log value before it is assigned will result in an error
      // Uncaught ReferenceError: myVar is not defined
  
      myVar = "Hello World!";
      console.log(myVar); // output: "Hello World!"
    }
  }
  