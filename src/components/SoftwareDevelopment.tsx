import React from "react";
import Slider from "react-slick";
import certagsVideo from "../assets/Certags artwork portal demo recording.mp4";
import design from "../assets/Jose Wills - Front End Engineer Technical Challenge Design - compressed.pdf";
import apiVideo from "../assets/API refactoring - edited sound.mp4";

const SoftwareDevelopment = () => {
  return (
    <section>
      <Slider className="w-3/4 mx-auto">
        <figure>
          <video src={certagsVideo} muted controls />
          <figcaption>Certags Artwork Portal</figcaption>
        </figure>
        <figure>
          <iframe
            src="https://www.youtube.com/embed/9MXMxw37I-k?si=3Sg_0gfo6TQ6mAiH"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <figcaption>Cocktail Companion</figcaption>
        </figure>
        <figure>
          <object data={design} type="application/pdf">
            Figma design mock up
          </object>
          <figcaption>Design To Code</figcaption>
        </figure>
        <figure>
          <video src={apiVideo} muted controls />
          <figcaption>Book Library API</figcaption>
        </figure>
      </Slider>
    </section>
  );
};

export default SoftwareDevelopment;
