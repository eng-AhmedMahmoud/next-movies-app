import React from "react";
import ErrorPage from "../components/ErrorPage";
const error = () => {
  return <ErrorPage />;
};

export default error;
error.getLayout = function pageLayout(page) {
  return <> {page}</>;
};
