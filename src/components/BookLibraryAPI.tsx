import React from "react";
import apiVideo from "../assets/API refactoring - edited sound.mp4";

const BookLibraryAPI = () => {
  return (
    <figure>
      <video src={apiVideo} muted controls />
      <figcaption className="text-center">Book Library API</figcaption>
    </figure>
  );
};

export default BookLibraryAPI;
