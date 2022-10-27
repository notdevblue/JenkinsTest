const { WebSocket } = require("ws");

const ws = new WebSocket("ws://localhost:33333");

ws.on("open", () => {
    console.log("Hello World");
});


ws.on("message", data => {
    console.log("Received: %s", data);
});