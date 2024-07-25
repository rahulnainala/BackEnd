const EventEmitter = require("events");

const emitter = new EventEmitter();

//registering a listerner which is called when even emit has happen
emitter.on("messageLogged", (e) => {
  console.log("Listerner has been called", e);
});

//making a noise,produce  -- signaling an event has happened
emitter.on(`Logging`, (e) => {
  console.log("Logging", e);
});

emitter.emit("messageLogged", {
  id: 1,
  url: "https://somevale",
});

//raise an event
emitter.emit("Logging", {
  data: "message",
});
