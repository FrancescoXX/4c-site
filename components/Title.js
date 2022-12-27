import React from "react";

function Title({ heading }) {
  // Main Heading component
  return (
    <>
      <h1 className="mb-5 tracking-widest text-white uppercase headTitle">
        {heading}
      </h1>
    </>
  );
}

export default Title;
