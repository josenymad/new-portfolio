import React from "react";
import apiVideo from "../../assets/API refactoring - edited sound.mp4";

const BookLibraryAPI = () => {
  return (
    <figure>
      <video src={apiVideo} muted controls className="rounded-lg" />
      <figcaption className="text-center text-xl mb-4">
        Book Library API
      </figcaption>
      <ul className="list-disc list-inside mb-4">
        <li>
          Express API that uses CRUD operations to manage data being transferred
          to and from a PostgreSQL database asynchronously
        </li>
        <li>
          Instead of querying the database using SQL as with previous projects,
          I used models with Sequelize as an Object Relational Mapper
        </li>
      </ul>
      <a
        href="https://github.com/josenymad/book-library"
        className="w-fit underline block mx-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check it out on GitHub
      </a>
    </figure>
  );
};

export default BookLibraryAPI;
