import { insertLinkDocument } from "../index.js";

const socket = io()

socket.emit("get:document", (documents) => {
    documents.forEach(document => {
        insertLinkDocument(document.name);
    });
});
