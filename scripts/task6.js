const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

async function run() {
  try {
    await client.connect();
    const col = client.db("statsdb").collection("uscensus");

    const docs = await col.find({ state: "CA" }, { projection: { _id: 0, city: 1, income: 1 } }).toArray();

    console.log("Task 6: California incomes ✅");
    docs.forEach(d => console.log(`- ${d.city}: ${d.income}`));
  } catch (e) {
    console.log("Task 6 failed ❌", e);
  } finally {
    await client.close();
  }
}
run();
