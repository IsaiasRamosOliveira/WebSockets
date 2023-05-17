import express from "express";
import url from "url";
import path from "path";
import http from 'http';
import { Server } from "socket.io";


const app = express();

const port = 3000 || process.env.port
const router = url.fileURLToPath(import.meta.url);
const directory = path.join(router, "../..", "public");

app.use(express.static(directory));

const serverHttp = http.createServer(app);

serverHttp.listen(port, (req, res) => {
    console.log(`listen in: ${port}`);
})

const io = new Server(serverHttp);

export default io;