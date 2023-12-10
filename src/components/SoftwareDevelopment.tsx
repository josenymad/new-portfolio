import React from "react";
import Slider from "react-slick";
import certags from "../assets/Certags artwork portal demo recording.mp4";

const SoftwareDevelopment = () => {
  return (
    <section>
      <Slider className="w-3/4 mx-auto">
        <figure>
          <video muted controls>
            <source src={certags} />
          </video>
        </figure>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9MXMxw37I-k?si=3Sg_0gfo6TQ6mAiH"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Slider>
    </section>
  );
};

export default SoftwareDevelopment;
