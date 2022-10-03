import React, { useState } from "react";
import JoinUsForm from "./Form/JoinUsForm";

function JoinOurTeam() {
  const [tab] = useState("Join Our Team");
  return (
    <div className="flex items-start justify-start mt-18">
      <section className="flex-1 text-4xl font-bold text-center text-white">
        <h1>{tab}</h1>
        <JoinUsForm />
      </section>
    </div>
  );
}

export default JoinOurTeam;
