const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

async function run() {
  try {
    await client.connect();
    await client.db("statsdb").command({ ping: 1 });
    console.log("Task 1: Database 'statsdb' created/ready ✅");
  } catch (e) {
    console.log("Task 1 failed ❌", e);
  } finally {
    await client.close();
  }
}
run();
