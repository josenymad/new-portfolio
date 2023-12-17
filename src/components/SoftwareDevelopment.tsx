import React from "react";
import Slider from "react-slick";
import Certags from "./Certags.tsx";
import CocktailCompanion from "./CocktailCompanion.tsx";
import TranslateDesignToCode from "./TranslateDesignToCode.tsx";
import BookLibraryAPI from "./BookLibraryAPI.tsx";

const SoftwareDevelopment = () => {
  return (
    <section className="mb-8">
      <Slider className="w-4/6 mx-auto" adaptiveHeight>
        <Certags />
        <CocktailCompanion />
        <TranslateDesignToCode />
        <BookLibraryAPI />
      </Slider>
    </section>
  );
};

export default SoftwareDevelopment;
