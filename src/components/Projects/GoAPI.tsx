import React from "react";
import boulderDb from "../../assets/boulder-db-erd.png";

const GoAPI = () => {
  return (
    <figure>
      <img
        src={boulderDb}
        alt="Boulder DB"
        className="rounded-lg w-5/6 m-auto"
      />
      <figcaption className="text-center text-xl mb-4">
        Go RESTful CRUD API
      </figcaption>
      <ul className="list-disc list-inside mb-4">
        <li>
          Crafted using Go with the Gin framework, designed for high performance
          and efficiency in handling API requests.
        </li>
        <li>
          Leveraging PostgreSQL as the database, it ensures reliable data
          storage and retrieval.
        </li>
      </ul>
      <a
        href="https://github.com/josenymad/boulder-api"
        className="w-fit underline block mx-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check it out on GitHub
      </a>
    </figure>
  );
};
export default GoAPI;
