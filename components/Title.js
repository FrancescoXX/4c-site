import React from "react";

function Title({ heading }) {
  // Main Heading component
  return (
    <>
      <h1 className="headTitle mb-5 uppercase tracking-widest text-white">
        {heading}
      </h1>
    </>
  );
}

export default Title;
