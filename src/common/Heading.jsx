import React from "react";

const Heading = ({ commonHeading, className }) => {
  return (
    <h2
      className={`text-3xl md:text-4xl  lg:text-5xl font-medium text-center lg:text-start font-Playfair text-black leading-md ${className}`}
    >
      {commonHeading}
    </h2>
  );
};

export default Heading;
