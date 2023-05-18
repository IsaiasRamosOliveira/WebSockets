import { text } from "express";
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
        name: "Socket.io",
        text: "Text of Sockect.io"
    },
]

io.on("connection", (socket) => {
    console.log("Client connected. ID:", socket.id);
    socket.on("selection:document", (name, textResponse) => {
        const document = searchDocument(name);
        socket.join(name);
        if(document){
            socket.emit("document:text", document.text);
            textResponse(document.text);
        }
    })

    socket.on("chat:message", (message, name) => {
        const document = searchDocument(name);
        if(document){
            document.text = message;
            socket.to(name).emit("chat:message-client", message);
        }
    })
});

function searchDocument(name){
    const documentSearches = document.find(document => document.name === name);
    return documentSearches;
}