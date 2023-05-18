import { redirect, updateChat } from "../document.js";

const socket = io()


export function emitChat(chat, name){
    socket.emit("chat:message", chat, name);
}

export function selectionDocument(name){
    socket.emit("selection:document", name, (text) => {
        updateChat(text)
    });
}


socket.on("chat:message-client", message => {
    updateChat(message)
})

export function emitDeleteDocument(name){
    socket.emit("doc:delete", name)
}

socket.on("doc:delete-success", (name) => {
  redirect(name);
});