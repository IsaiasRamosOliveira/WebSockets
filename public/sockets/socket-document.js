import { updateChat } from "../document.js";

const socket = io()

export function emitChat(chat){
    socket.emit("chat:message", chat);
}

socket.on("chat:message-client", message => {
    updateChat(message)
})