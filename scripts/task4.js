const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

const extra = [
  { city: "Pacoima",   zip: "91331", state: "CA", income: 60360, age: 33 },
  { city: "Ketchikan", zip: "99950", state: "AK", income: 0,     age: 0 }
];

async function run() {
  try {
    await client.connect();
    const col = client.db("statsdb").collection("uscensus");

    const res = await col.insertMany(extra);
    console.log(`Task 4: Inserted ${res.insertedCount} additional records ✅`);
  } catch (e) {
    console.log("Task 4 failed ❌", e);
  } finally {
    await client.close();
  }
}
run();
