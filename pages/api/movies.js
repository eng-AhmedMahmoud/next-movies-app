import { MongoClient } from "mongodb";

const movieHandler = async (req, res) => {
  const client = await MongoClient.connect(
    process.env.MONGODB_URI
  );

  const db = client.db();
  const movieCollection = db.collection("moviesinfo");

  if (req.method == "POST") {
    let data = req.body;
    movieCollection.insertOne(data);
    res.send(200).json({
      message: "movies sended successfully",
      data: {
        movies: data,
      },
    });
  } else if (req.method == "GET") {
    let data = movieCollection.find({});
    res.send(200).json({
      movies: data,
    });
  }
};

export default movieHandler;
