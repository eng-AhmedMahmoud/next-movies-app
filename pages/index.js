import Movieitems from "../components/Movieitems";
import { MongoClient } from "mongodb";
const home = (props) => {
  return <Movieitems movies={props.movies}></Movieitems>;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    process.env.MONGODB_URI
  );

  const db = client.db();
  const moviecollection = db.collection("moviesinfo");
  let movies = await moviecollection.find({}).toArray();
  return {
    props: {
      movies: movies.map((movies) => ({
        overview: movies.overview,
        poster_path: movies.poster_path,
        id: movies._id.toString(),
        title: movies.title,
      })),
    },
  };
}

export default home;
