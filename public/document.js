import { emitChat } from "./sockets/socket-document.js";


const chat = document.querySelector("#editor-texto");

chat.addEventListener("keyup", () => {
    emitChat(chat.value);
})

export function updateChat(message) {
    chat.value = message
}