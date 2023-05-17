import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Client connected. ID:", socket.id);
});