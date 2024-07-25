// What is first class citizens ??
// In Js functions are first class citizens => they are treated as a variable

function sayHello() {
  return "Hello World";
}

// Can Return from other Functions
function getGreetingFunction() {
  return sayHello;
}

let fn = sayHello;
fn(); // Outputs: "Hello World"

// Can be Passed as an Argument
function greet(fnMessage) {
  console.log(fnMessage()); // Logs: "Hello World"
}
greet(sayHello);
console.log(greet, greet(sayHello));

// Can Return from other Functions
function returnHello() {
  return sayHello;
}

let helloFn = returnHello();
helloFn();
console.log(helloFn, helloFn()); // Outputs: "Hello World"
