import React from "react";
import design from "../assets/Jose Wills - Front End Engineer Technical Challenge Design - compressed.pdf";

const TranslateDesignToCode = () => {
  return (
    <figure>
      <object data={design} type="application/pdf" className="w-full h-[35vw]">
        Figma design mock up
      </object>
      <figcaption className="text-center">
        Translate Figma Design To HTML & CSS Code
      </figcaption>
    </figure>
  );
};

export default TranslateDesignToCode;
