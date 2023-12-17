import React from "react";

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
      <figcaption className="text-center">Cocktail Companion</figcaption>
    </figure>
  );
};

export default CocktailCompanion;
