import { emitAddDocument } from "./sockets/socket-index.js";
const listOfDocument = document.querySelector("#lista-documentos");
const form = document.querySelector("#form-adiciona-documento");
const input = document.querySelector("#input-documento")

form.addEventListener("submit", e => {
    e.preventDefault();
    emitAddDocument(input.value);
    input.value = ''
})

export function insertLinkDocument(name){
    listOfDocument.innerHTML += `
        <a 
            href="document.html?name=${name}"        class="list-group-item list-group-item-action"
            id="document-${name}"
        >
            ${name}
        </a>
    `
}

export function removeLinkDocument(name){
    const element = document.getElementById(`document-${name}`);
    listOfDocument.removeChild(element);
}