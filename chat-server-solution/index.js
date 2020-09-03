var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
var io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("new-user", clientName => {
    const name = "Server"
    const time = new Date().toLocaleTimeString();
    const message = `${clientName} has joined the lobby`
    io.emit("new-message", {name, time, message})
  })
  console.log("a user has connected");
  socket.on("new-message", (message) => {
    console.log("message:", message);
    io.emit("new-message", message);
  });
});

server.listen(5000, () => {
  console.log("listening on *:5000");
});
