import React from "react";
import certagsVideo from "../../assets/Certags artwork portal demo recording - compressed.mp4";

const Certags = () => {
  return (
    <figure>
      <video
        src={certagsVideo}
        muted
        controls
        className="rounded-lg shadow-lg"
      />
      <figcaption className="text-center text-xl mb-4">
        Certags Artwork Portal
      </figcaption>
      <ul className="list-disc list-inside mb-4">
        <li>
          Full stack software application to store, view and manage
          industrial-grade tag and label designs from a centralised online
          portal.
        </li>
        <li>
          The front-end has been designed with Figma and created using React,
          the API was then integrated using Axios. I also configured an AWS
          Cognito user pool app client for authentication.
        </li>
        <li>
          I used Express as a JavaScript framework to write the API, an AWS S3
          bucket to store images, and a MongoDB database to store the image URIs
          alongside corresponding data.
        </li>
        <li>
          This project aims to improve efficiency and reliability across the
          business by organising information previously spread across different
          computers into a bespoke, accessible cloud based location.
        </li>
      </ul>
      <a
        href="https://github.com/josenymad/artworks-front-end"
        className="w-fit underline block mx-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check it out on GitHub
      </a>
    </figure>
  );
};

export default Certags;
