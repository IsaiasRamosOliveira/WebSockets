import { getDocuments, searchDocument, updateDocument } from "./documentsDB.js";
import io from "./server.js";

io.on("connection", (socket) => {
  socket.on("get:document", async (documentsResponse) => {
    const documents = await getDocuments();
    documentsResponse(documents)
  })
  socket.on("selection:document", async (name, textResponse) => {
    const document = await searchDocument(name);
    socket.join(name);
    if (document) {
      socket.emit("document:text", document.message);
      textResponse(document.message);
    }
  });

  socket.on("chat:message", async (message, name) => {
    const update = await updateDocument(name, message);
    if (update.modifiedCount) {
      socket.to(name).emit("chat:message-client", message);
    }
  });
});
