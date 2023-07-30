import { MongoClient } from "mongodb";

export async function mongoConnectBlogs() {
    try {
        const client = new MongoClient(process.env.MONOGDB_BLOG_URL);
      
        const dbName = "solity";
      
        await client.connect({ useUnifiedTopology: true, useNewUrlParser: true });
      
        console.log("Connected successfully to server");
      
        const db = client.db(dbName);
        return db;
        
    } catch (error) {
        
    }
}
