import "./sockets/socket-index.js"
const listOfDocument = document.querySelector("#lista-documentos");
const form = document.querySelector("#form-adiciona-documento");
const input = document.querySelector("#input-documento")

export function insertLinkDocument(name){
    listOfDocument.innerHTML += `
        <a href="document.html?name=${name}" class="list-group-item list-group-item-action">
            ${name}
        </a>
    `
}