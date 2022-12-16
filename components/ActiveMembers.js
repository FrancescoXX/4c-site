import React, { useState } from "react";
import GetActivemembers from "./GetActivemembers";
import Users from "./Users";

// import contributors data
import activeMembers from "../content/activemembers.json";

const ActiveMembers = () => {
  const [tab] = useState("Active Members");
  return (
    <div className="flex items-start justify-start mt-[3em]">
      <section className="flex-1 text-4xl font-bold text-center text-white">
        <h1 className="tracking-widest uppercase">{tab}</h1>
        <div className="flex flex-wrap items-center justify-center pb-4 m-2 overflow-y-auto">
          {tab === "Active Members" ? (
            <GetActivemembers users={activeMembers} />
          ) : (
            <Users users={activeMembers.profiles} />
          )}
        </div>
      </section>
    </div>
  );
};

export default ActiveMembers;
