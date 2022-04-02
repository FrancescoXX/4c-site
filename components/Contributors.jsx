import React, { useState } from "react";
import GetContributors from "./GetContributors";
import Users from "./Users";

// import contributors data
import contributors from "../content/contributors.json";

const Contributors = () => {
  const [tab] = useState("Contributors");
  return (
    <div className="flex items-start justify-start mt-20">
      <section className="flex-1 text-4xl font-bold text-center text-orange-600">
        <h1>{tab}</h1>
        <div className="flex flex-wrap items-center justify-center pb-4 m-4 overflow-y-auto">
          {tab === "Contributors" ? (
            <GetContributors users={contributors} />
          ) : (
            <Users users={contributors.profiles} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Contributors;
