const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 33333 });

wss.on("listening", () => {
    console.log("Server listening on port 33333");
});

wss.on("connection", ws => {
    ws.send("Install Gentoo");

    ws.on("message", data => {
        ws.send(data.toString());
    })
});
