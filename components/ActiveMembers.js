import React, { useState } from "react";
import GetContributors from "./GetContributors";
import Users from "./Users";

// import contributors data
import activeMembers from "../content/contributors.json";

const ActiveMembers = () => {
  const [tab] = useState("Active Members");
  return (
    <div className="flex items-start justify-start mt-[3em]">
      <section className="flex-1 text-4xl font-bold text-center text-white">
        <h1>{tab}</h1>
        <div className="flex flex-wrap items-center justify-center pb-4 m-2 overflow-y-auto">
          {tab === "Active Members" ? (
            <GetContributors users={activeMembers} />
          ) : (
            <Users users={activeMembers.profiles} />
          )}
        </div>
      </section>
    </div>
  );
};

export default ActiveMembers;
