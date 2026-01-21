const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

async function run() {
  try {
    await client.connect();
    const col = client.db("statsdb").collection("uscensus");

    const doc = await col.findOne({ city: "Corona", state: "NY" }, { projection: { zip: 1, _id: 0 } });
    console.log(`Task 5: Corona, NY zip code is ${doc?.zip} ✅`);
  } catch (e) {
    console.log("Task 5 failed ❌", e);
  } finally {
    await client.close();
  }
}
run();
