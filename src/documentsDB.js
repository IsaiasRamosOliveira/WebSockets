import {
    DocumentCollection
} from "./config/dbConnect.js";

export function getDocuments(){
  const documents = DocumentCollection.find().toArray();
  return documents
}

export function searchDocument(name) {
  const document = DocumentCollection.findOne({
    name,
  });
  return document;
}

export function updateDocument(name, message) {
  const update = DocumentCollection.updateOne(
    {
      name,
    },
    {
      $set: {
        message,
      },
    }
  );
  return update;
}
