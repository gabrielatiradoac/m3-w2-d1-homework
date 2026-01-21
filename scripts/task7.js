const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

async function run() {
  try {
    await client.connect();
    const col = client.db("statsdb").collection("uscensus");

    const res = await col.updateMany(
      { state: "AK" },
      { $set: { income: 38910, age: 46 } }
    );

    console.log(`Task 7: Updated Alaska. Matched: ${res.matchedCount}, Modified: ${res.modifiedCount} ✅`);
  } catch (e) {
    console.log("Task 7 failed ❌", e);
  } finally {
    await client.close();
  }
}
run();
