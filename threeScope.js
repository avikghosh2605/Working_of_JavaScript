function demonstrateHoisting() {
    // Log variable values before they are declared
    console.log(x); // Output: undefined
    console.log(y); // Output: undefined
    console.log(z); // Throws ReferenceError: Cannot access 'z' before initialization
  
    // Declare three variables using let, var, and const
    let x = 'Hello';
    var y = 'World';
    const z = '!';
    
    // Log variable values after they are declared
    console.log(x); // Output: Hello
    console.log(y); // Output: World
    console.log(z); // Output: !
  
    // Try to reassign the values of the variables
    x = 'Goodbye'; // This works since x is declared with let
    y = 'Universe'; // This works since y is declared with var
    z = '?'; // This throws TypeError: Assignment to constant variable.
  
    // Log variable values after they are reassigned
    console.log(x); // Output: Goodbye
    console.log(y); // Output: Universe
    console.log(z); // Output: ! (unchanged because const variables are immutable)
  }
  
  demonstrateHoisting();
  