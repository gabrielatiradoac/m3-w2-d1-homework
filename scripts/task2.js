const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

async function run() {
  try {
    await client.connect();
    const db = client.db("statsdb");
    await db.createCollection("uscensus");
    console.log("Task 2: Collection 'uscensus' created ✅");
  } catch (e) {
    // If it already exists, Mongo throws. That's okay for homework.
    if (String(e).includes("NamespaceExists")) {
      console.log("Task 2: Collection 'uscensus' already exists ✅");
    } else {
      console.log("Task 2 failed ❌", e);
    }
  } finally {
    await client.close();
  }
}
run();
