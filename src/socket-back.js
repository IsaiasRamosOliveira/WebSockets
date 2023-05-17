import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Client connected. ID:", socket.id);
    socket.on("chat:message", (message) => {
        socket.broadcast.emit("chat:message-client", message);
    })
});