import React from "react";

const Wedding = () => {
  return (
    <figure>
      <div>
        <iframe
          src="https://www.benandneva.life/"
          title="wedding"
          className="m-auto w-[65vw] h-[90vh] rounded-lg shadow-lg"
        />
      </div>
      <figcaption className="text-center text-xl mb-4">
        Ben and Neva&apos;s wedding website
      </figcaption>
      <ul className="list-disc list-inside mb-4">
        <a
          href="https://www.benandneva.life/"
          className="w-fit underline block mx-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out here
        </a>
      </ul>
    </figure>
  );
};

export default Wedding;
