import React from "react";

function Title({ heading }) {
  // Main Heading component
  return (
    <div>
      <h1 className="headTitle mb-5 uppercase text-white tracking-widest">
        {heading}
      </h1>
    </div>
  );
}

export default Title;
