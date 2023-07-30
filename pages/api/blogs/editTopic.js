import { ObjectId } from "mongodb";
import { mongoConnectBlogs } from "../../../lib/mongoConnectBlogs";

export default async function handler(req, res) {
  // this is for getting data of specific post data
  // if (req.method === "GET") {
  //   try {
  //     const db = await mongoConnectLearn(); // my function to connect with db
  //     console.log(req.query);
  //     const collection = db.collection("topics"); // creating collection with name of trade

  //     const topicData = await collection
  //       .find({ _id: new ObjectId(req.query.id) })
  //       .toArray();

  //     res.status(200).json({ ok: "yes ok hai", topicData: topicData[0] });
  //     return res.end();

  //   } catch (error) {
  //     console.log(error);
  //     res.status(200).json({ error });
  //     res.end();
  //   }
  // }

  // this is post request for update the topicData
  if (req.method === "POST") {
    try {
      const db = await mongoConnectBlogs(); // my function to connect with db
      // console.log(req.body);
      const collection = db.collection("blogs"); // creating collection with name of trade

      const updated = await collection.updateOne(
        { _id: new ObjectId(req.body.id) },
        {
          $set: {
            title: req.body.title,
            seo_description: req.body.seo_description,
            seo_keywords: req.body.seo_keywords,
            author: req.body.author,
            read_minutes: req.body.read_minutes,
            publish_date: req.body.publish_date,
            thumbnail: req.body.thumbnail,
            editorContent: req.body.editorContent,
          },
        }
      );
      res.status(200).json({ ok: "data edited successfully", updated });
      return res.end();
    } catch (error) {
      console.log(error);
      res.status(200).json({ error });
      res.end();
    }
  }
}
