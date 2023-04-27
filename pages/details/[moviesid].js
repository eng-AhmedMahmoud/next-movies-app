import React from "react";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";

const moviesid = (props) => {
  let route = useRouter();
  let movieID = route.query.moviesid;
  return (
    <>
      <div>
        <div>movie id is {movieID}</div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    process.env.MONGODB_URI
  );
  const db = client.db();
  const movieCollection = db.collection("moviesinfo");
  let movieid = await movieCollection.find({}, { _id: 1 }).toArray();
  return {
    fallback: true,
    paths: movieid.map((id) => ({
      params: { moviesid: id._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    process.env.MONGODB_URI
  );
  let movieId = context.params.moviesid;
  const db = client.db();
  let selectedmovie = await db
    .collection("moviesinfo")
    .findOne({ _id: movieId });

  console.log(selectedmovie);

  return {
    props: {
      movieId,
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const client = await MongoClient.connect(
//     process.env.MONGODB_URI
//   );
//   let movieId = context.params.moviesid;
//   const db = client.db();
//   let selectedmovie = await db
//     .collection("moviesinfo")
//     .findOne({ _id: movieId });
//   console.log(selectedmovie);
//   return {
//     props: {
//       movieId,
//     },
//   };
// }

export default moviesid;
