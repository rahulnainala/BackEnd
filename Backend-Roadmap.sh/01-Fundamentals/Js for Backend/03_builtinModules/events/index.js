const EventEmitter = require("events");
const eventEmmiter = new EventEmitter();

eventEmmiter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});
eventEmmiter.on("greetd", (name) => {
  console.log(`Hello ${name} formless`);
});
eventEmmiter.emit("greet", "rahul");
eventEmmiter.emit("greetd", "drac");
