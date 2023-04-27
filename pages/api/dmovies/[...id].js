import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
const moviesHandler = async (req, res) => {
  let { id } = req.query;
  id = id[0];
  let objid = new ObjectId(id);

  const client = await MongoClient.connect(
    process.env.MONGODB_URI
  );

  const db = client.db();
  const movieCollection = db.collection("moviesinfo");
  if (req.method == "DELETE") {
    console.log(objid);
    let deleted = movieCollection.deleteOne({ _id: objid });
    res.status(200).json({ deleted });
  }
};

export default moviesHandler;
