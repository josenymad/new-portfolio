import React from "react";
import Slider from "react-slick";
import OriginalMusic from "./OriginalMusic.tsx";
import Remixes from "./Remixes.tsx";

const MusicProduction = () => {
  return (
    <Slider className="w-11/12 mx-auto mb-8" dots>
      <OriginalMusic />
      <Remixes />
      <iframe
        className="h-[500px]"
        src="https://open.spotify.com/embed/playlist/2h0LeB1mRdF1WksWxYF1QP?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Music Player"
      />
    </Slider>
  );
};

export default MusicProduction;
