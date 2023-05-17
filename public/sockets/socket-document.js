import { updateChat } from "../document.js";

const socket = io()


export function emitChat(chat, name){
    socket.emit("chat:message", chat, name);
}

export function selectionDocument(name){
    socket.emit("selection:document", name);
}


socket.on("chat:message-client", message => {
    updateChat(message)
})