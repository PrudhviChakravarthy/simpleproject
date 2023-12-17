const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("error", (error) => {
    console.error("Error in EventEmitter:", error.message);
});

emitter.emit("error", new Error("EventEmitter Error"));
