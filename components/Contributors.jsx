import React, { useState } from "react";
import GetContributors from "./GetContributors";
import Sponsors from "./Sponsors";

// import contributors data
import contributors from "../content/contributors.json";

const Contributors = () => {
  const [tab, setTab] = useState("Contributors");
  return (
    <div className="flex items-start justify-start mt-20">
      <section className="hidden mt-40 text-2xl bg-orange-100 md:flex md:flex-col max-w-max">
        <button
          onClick={() => setTab("Contributors")}
          className={`py-4 px-6  rounded hover:text-orange-600 transition-all delay-100 ease-out cursor-pointer ${
            tab === "Contributors" ? "text-orange-600" : "text-gray-700"
          }`}
        >
          Contributors
        </button>
        <button
          onClick={() => setTab("Sponsors")}
          className={`py-4 px-6 rounded hover:text-orange-600 transition-all delay-100 ease-out cursor-pointer ${
            tab === "Sponsors" ? "text-orange-600" : "text-gray-700"
          }`}
        >
          Sponsors
        </button>
      </section>
      <section className="flex-1 text-4xl font-bold text-center text-orange-600">
        <h1>{tab}</h1>
        <div className="flex flex-wrap items-center justify-center m-4 overflow-y-auto">
          {tab === "Contributors" ? (
            <GetContributors users={contributors} />
          ) : (
            <Sponsors users={contributors.sponsors} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Contributors;
