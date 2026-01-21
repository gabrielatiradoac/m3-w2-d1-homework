const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

async function run() {
  try {
    await client.connect();
    const col = client.db("statsdb").collection("uscensus");

    const docs = await col
      .find({}, { projection: { _id: 0, city: 1, zip: 1, state: 1, income: 1, age: 1 } })
      .sort({ state: 1 })
      .toArray();

    console.log("Task 8: Sorted by state ascending ✅");
    console.log(docs);
  } catch (e) {
    console.log("Task 8 failed ❌", e);
  } finally {
    await client.close();
  }
}
run();
