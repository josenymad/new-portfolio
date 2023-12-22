import React from "react";
import Slider from "react-slick";
import Certags from "./Certags.tsx";
import CocktailCompanion from "./CocktailCompanion.tsx";
import Portfolio from "./Portfolio.tsx";
import BookLibraryAPI from "./BookLibraryAPI.tsx";

interface SoftwareDevelopmentProps {
  setPreviousSlide: React.Dispatch<React.SetStateAction<number>>;
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
  setNextActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

const SoftwareDevelopment: React.FC<SoftwareDevelopmentProps> = ({
  setPreviousSlide,
  setActiveSlide,
  setNextActiveSlide,
}) => {
  return (
    <section className="mb-8">
      <Slider
        className="w-4/6 mx-auto"
        dots
        afterChange={(current) => {
          setActiveSlide(current);
        }}
        beforeChange={(current, next) => {
          setPreviousSlide(current);
          setNextActiveSlide(next);
        }}
      >
        <Certags />
        <CocktailCompanion />
        <BookLibraryAPI />
        <Portfolio />
      </Slider>
    </section>
  );
};

export default SoftwareDevelopment;
