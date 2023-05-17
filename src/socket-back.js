import io from "./server.js";

const document = [
    {
        name: "JavaScript",
        text: "Text of javaScript"
    },
    {
        name: "Node",
        text: "Text of Node"
    }, {
        name: "Socket.IO",
        text: "Text of Sockect.io"
    },
]

io.on("connection", (socket) => {
    console.log("Client connected. ID:", socket.id);
    socket.on("selection:document", (name) => {
        socket.join(name);
    })

    socket.on("chat:message", (message, name) => {
        socket.to(name).emit("chat:message-client", message);
    })
});