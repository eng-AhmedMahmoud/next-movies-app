import Addmovie from "../components/Addmovie";
import { getSession, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

const addamovie = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);
  if (loading) return "loading....";
  return <Addmovie />;
};

export default addamovie;
