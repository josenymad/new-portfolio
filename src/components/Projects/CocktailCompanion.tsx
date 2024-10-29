import React from "react";

const CocktailCompanion = () => {
  return (
    <figure>
      <iframe
        className="w-full h-[35vw] rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/9MXMxw37I-k?si=3Sg_0gfo6TQ6mAiH"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <figcaption className="text-center text-xl mb-4">
        Cocktail Companion
      </figcaption>
      <ul className="list-disc list-inside mb-4">
        <li>
          Cocktail making guide built collaboratively using React -{" "}
          <a
            href="https://cocktail-companion.onrender.com/"
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            take a look!
          </a>
        </li>
        <li>
          Created using the full scope of the software development life cycle
          through agile methodologies, such as sprints and prioritisation
          techniques.
        </li>
        <li>
          Applied leadership skills to promote fluid collaboration, motivating
          the team towards meeting our deadlines and surpassing MVP targets.
        </li>
      </ul>
      <a
        href="https://github.com/josenymad/cocktail-companion"
        className="w-fit underline block mx-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check it out on GitHub
      </a>
    </figure>
  );
};

export default CocktailCompanion;
