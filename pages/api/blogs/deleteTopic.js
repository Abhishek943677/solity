import { ObjectId } from "mongodb";
import { mongoConnectBlogs } from "../../../lib/mongoConnectBlogs";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const db = await mongoConnectBlogs(); // my function to connect with db

            // console.log(req.body)
            const collection = db.collection("blogs"); // creating collection with name of trade

            // const questions = await collection.find({"_id":new ObjectId("6440320c2590bb362173e95d")}).project({_id:1,trade:1,"que.question":1}).toArray()
            console.log(req.body)
            const deleted = await collection.deleteOne({ "_id": new ObjectId(req.body.id) })
            console.log(deleted)
            res.status(200).json({ ok: "post topics deleted secceessfully", deleted });
            return res.end();

        } catch (error) {
            console.log(error)
            res.status(200).json({ error:error.message });
            res.end();
        }
    }
};


