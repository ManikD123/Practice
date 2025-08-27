// Q17. Write an async function safeDivide(a, b) that 
// returns a / b. If b == 0, throw an error "Division by zero".

// Q17 Template
async function safeDivide(a, b) {
   // your code here
   if( b === 0 ) throw new Error("Division by Zero");
   return a/b;
}

safeDivide(10, 2).then(console.log).catch(console.error); // Expected: 5
safeDivide(10, 0).then(console.log).catch(console.error); // Expected: Division by zero
