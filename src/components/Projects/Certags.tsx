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
          Deployed a full stack software application to store, view and manage
          industrial-grade tag and label designs from a centralised online
          portal.
        </li>
        <li>
          Designed the front-end with Figma, then translated that into a
          responsive app using React.
        </li>
        <li>
          Configured an AWS Cognito user pool app client for security and
          authentication.
        </li>
        <li>
          Used Express to write the API, connected that to an AWS S3 bucket to
          store the images, and finally deployed a MongoDB database to store the
          image URIs alongside any corresponding data.
        </li>
        <li>Integrated the API with the front-end using Axios.</li>
        <li>
          Improved efficiency and reliability across the business by organising
          information previously spread across different computers into a
          bespoke, accessible cloud based location.
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
