import { insertLinkDocument, removeLinkDocument } from "../index.js";

const socket = io()

socket.emit("get:document", (documents) => {
    documents.forEach(document => {
        insertLinkDocument(document.name);
    });
});

export function emitAddDocument(name){
    socket.emit("add:document", name);
}

socket.on("add:interface", (name) => {
    insertLinkDocument(name);
})

socket.on("doc:existing", (name) => {
  alert(`The document ${name} already exists.`);
});

socket.on("doc:delete-success", (name) => {
  removeLinkDocument(name);
});