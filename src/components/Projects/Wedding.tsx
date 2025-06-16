import React from "react";

const Wedding = () => {
  return (
    <figure>
      <iframe
        src="https://wedding-jk1i.onrender.com/"
        title="wedding"
        className="m-auto w-[65vw] h-[90vh] rounded-lg shadow-lg hidden sm:block"
      />
      <div className="mt-[50vh] sm:mt-0">
        <a
          href="https://wedding-jk1i.onrender.com/"
          className="w-fit underline block text-xl mx-auto mb-4 text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ben and Neva&apos;s wedding website
        </a>
        <a
          href="https://github.com/josenymad/wedding"
          className="w-fit underline block mx-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out on GitHub
        </a>
      </div>
    </figure>
  );
};

export default Wedding;
