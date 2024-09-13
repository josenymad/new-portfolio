import React from "react";
import Slider from "react-slick";
import Certags from "./Projects/Certags.tsx";
import CocktailCompanion from "./Projects/CocktailCompanion.tsx";
import Portfolio from "./Projects/Portfolio.tsx";
import BookLibraryAPI from "./Projects/BookLibraryAPI.tsx";
import Wedding from "./Projects/Wedding.tsx";

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
  scrollY: number;
  setScrollY: React.Dispatch<React.SetStateAction<number>>;
}

const SoftwareDevelopment: React.FC<SoftwareDevelopmentProps> = ({
  slides,
  setSlides,
  scrollY,
  setScrollY,
}) => {
  return (
    <section className="mb-8">
      <Slider
        className="w-3/4 mx-auto"
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
        <Wedding />
        <BookLibraryAPI />
        <Portfolio scrollY={scrollY} setScrollY={setScrollY} />
      </Slider>
    </section>
  );
};

export default SoftwareDevelopment;
