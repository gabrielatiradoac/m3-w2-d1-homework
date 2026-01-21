const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

const stats = [
  { city: "San Juan",  zip: "00926", state: "PR", income: 34781, age: 44 },
  { city: "Corona",    zip: "11368", state: "NY", income: 50797, age: 32 },
  { city: "Chicago",   zip: "60629", state: "IL", income: 42019, age: 31 },
  { city: "El Paso",   zip: "79936", state: "TX", income: 54692, age: 31 },
  { city: "Los Angeles", zip: "90011", state: "CA", income: 36954, age: 28 },
  { city: "Norwalk",   zip: "90650", state: "CA", income: 66453, age: 35 }
];

async function run() {
  try {
    await client.connect();
    const col = client.db("statsdb").collection("uscensus");

    const res = await col.insertMany(stats);
    console.log(`Task 3: Inserted ${res.insertedCount} records ✅`);
  } catch (e) {
    console.log("Task 3 failed ❌", e);
  } finally {
    await client.close();
  }
}
run();
