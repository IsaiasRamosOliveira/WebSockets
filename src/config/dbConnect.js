import "dotenv/config";

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.PORT);
let DocumentCollection;
try {
    const database = client.db('dbSocket');
    DocumentCollection = database.collection('message');
    console.log("Connecting to database");
} catch (err) {
    console.log(err);
}

export {
    DocumentCollection
};