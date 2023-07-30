import { mongoConnectBlogs } from "../../../lib/mongoConnectBlogs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const db = await mongoConnectBlogs(); // my function to connect with db
      const collectionName = "blogs";
      const collection = db.collection(collectionName); // creating collection with name of trade

      const inserted = await collection.insertOne(req.body);
      console.log(req.body);
      res.status(200).json({ ok: "data saved successfully , it will be updated soon on website", inserted });
      return res.end();
    } catch (error) {
      res.status(200).json({ error:error.message });
      res.end();
    }
  }
}
