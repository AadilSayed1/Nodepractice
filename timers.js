setImmediate(function A() {
    setImmediate(function B() {
      console.log(1);
      setImmediate(function D() { 
        console.log(2);
      });
    });
  
    setImmediate(function C() {
      console.log(3);
      setImmediate(function E() { 
        console.log(4);
      });
    });.
});
  
console.log('Started...');

//Output
// Started...
// 1
// 3
// 2
// 4
//2. setInterval() method: It repeats the execution of the callback after every t time in milliseconds passed as a parameter.

// Executed after every 1000 milliseconds
// from the start of the program
setInterval(function A() {
    return console.log('Hello World!');
}, 1000);
  
// Executed right away
console.log('Executed before A...');

// //output
// Executed before A...
// Hello World!
// Hello World!
// Hello World!
// Hello World!
// Hello World!
// ...


