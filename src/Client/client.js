const { WebSocket } = require("ws");

const ws = new WebSocket("ws://www.hanusegentoo.kro.kr:33333");

ws.on("open", () => {
    console.log("Hello World");
});


ws.on("message", data => {
    console.log("Received: %s", data);
});


setInterval(() => {
    ws.send("wa jenkins!");
}, 1000);