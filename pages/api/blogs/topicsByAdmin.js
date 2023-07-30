import { ObjectId } from "mongodb";
import { mongoConnectBlogs } from "../../../lib/mongoConnectBlogs";

export default async function handler(req, res) {
    const totalTopicsPerPage = 10; // this is the total number of questions , simultaneously change the number at client level

    if (req.method === "POST") {
        try {
            const db = await mongoConnectBlogs(); // my function to connect with db

            // console.log(req.body)
            const collection = await db.collection("blogs"); // creating collection with name of trade
            const skipped = totalTopicsPerPage * (req.body.count - 1)

            const list = await collection.find().project({ _id: 1,title:1,url:1 }).limit(totalTopicsPerPage).skip(skipped).toArray()

            res.status(200).json({ ok: "yes ok hai", list});
            return res.end();

        } catch (error) {
            // console.log(error)
            res.status(200).json({ error:error.message });
            res.end();
        }
    }
};


