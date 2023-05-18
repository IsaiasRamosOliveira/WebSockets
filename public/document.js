import { emitChat, emitDeleteDocument, selectionDocument } from "./sockets/socket-document.js";

const params = new URLSearchParams(window.location.search);
const nameOfDocument = params.get("name");
const titleOfDocument = document.querySelector ("#titulo-documento");
const btnDelete = document.querySelector("#excluir-documento");

titleOfDocument.textContent = nameOfDocument || "Documento sem título";

const chat = document.querySelector("#editor-texto");

selectionDocument(nameOfDocument)

chat.addEventListener("keyup", () => {
    emitChat(chat.value, nameOfDocument);
})

export function updateChat(message) {
    chat.value = message
}

btnDelete.addEventListener("click", () => {
    emitDeleteDocument(nameOfDocument);
})

export function redirect(name){
    if(name == nameOfDocument){
        window.location.href = "/"
    }
}