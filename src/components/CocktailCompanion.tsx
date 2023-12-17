import React from "react";
import { Link } from "react-router-dom";

const CocktailCompanion = () => {
  return (
    <figure>
      <iframe
        className="w-full h-[35vw]"
        src="https://www.youtube.com/embed/9MXMxw37I-k?si=3Sg_0gfo6TQ6mAiH"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <figcaption className="text-center text-xl mb-4">
        Cocktail Companion
      </figcaption>
      <ul className="list-disc list-inside">
        <li>
          Cocktail making guide built collaboratively using React, check it out{" "}
          <Link
            to="https://www.cocktailcompanion.bar/"
            target="_blank"
            className="underline"
          >
            here!
          </Link>
        </li>
        <li>
          Created using the full scope of the software development life cycle
          through agile methodologies, such as sprints and MoSCoW prioritisation
          technique.
        </li>
        <li>
          Applied leadership skills to promote fluid collaboration, motivating
          the team towards meeting our deadlines and surpassing MVP targets.
        </li>
      </ul>
    </figure>
  );
};

export default CocktailCompanion;
