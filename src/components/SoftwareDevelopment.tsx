import React from "react";
import Slider from "react-slick";
import Certags from "./Certags.tsx";
import CocktailCompanion from "./CocktailCompanion.tsx";
import Portfolio from "./Portfolio.tsx";
import BookLibraryAPI from "./BookLibraryAPI.tsx";

interface SoftwareDevelopmentProps {
  slides: {
    previousSlide: number;
    activeSlide: number;
    nextActiveSlide: number;
  };
  setSlides: React.Dispatch<
    React.SetStateAction<{
      previousSlide: number;
      activeSlide: number;
      nextActiveSlide: number;
    }>
  >;
}

const SoftwareDevelopment: React.FC<SoftwareDevelopmentProps> = ({
  slides,
  setSlides,
}) => {
  return (
    <section className="mb-8">
      <Slider
        className="w-4/6 mx-auto"
        dots
        afterChange={(current) => {
          setSlides({ ...slides, activeSlide: current });
        }}
        beforeChange={(current, next) => {
          setSlides({
            ...slides,
            previousSlide: current,
            nextActiveSlide: next,
          });
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
