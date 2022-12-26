import React, { useState } from "react";
import GetActivemembers from "./GetActivemembers";
import Users from "./Users";

// import contributors data
import activeMembers from "../content/activemembers.json";
import Title from "./Title";

const ActiveMembers = () => {
  let vr = {
    profiles: [],
  };
  const [currentUsers, setCurrentUsers] = useState(activeMembers);

  const searchHandler = (event) => {
    console.log(event.target.value);
    event.preventDefault();

    let user = [];
    for (let i = 0; i < activeMembers.profiles.length; i++) {
      let name = activeMembers.profiles[i].name.toLowerCase();
      let cas = event.target.value.toLowerCase();
      if (name.includes(cas)) {
        user.push(activeMembers.profiles[i]);
        console.log(true);
      }
    }
    vr.profiles.push(user);
    setCurrentUsers(vr);
    // console.log(currentUsers,"dd", vr,"dd", activeMembers);
  };
  const [tab] = useState("Active Members");
  return (
    <div className="mt-[3em] flex items-center justify-center">
      <section className="max-w-bodyContainer items-center  justify-center flex-1 text-center  font-bold text-white">
        <Title heading="Active Members" />
        <div className="flex self-center m-auto max-w-[800px] relative">
          <input
            placeholder="Search here"
            className="w-full h-10 border-slate-200 placeholder-slate-700 contrast-more:border-slate-400 py-3 outline-none px-5 text-black contrast-more:placeholder-slate-500"
            onInput={searchHandler}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white rotate-90 sm:text-slate-400 absolute right-3 top-1/2 -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="m-2 flex flex-wrap items-center justify-center overflow-y-auto pb-4">
          {tab === "Active Members" ? (
            <GetActivemembers users={currentUsers.profiles} />
          ) : (
            <Users users={currentUsers.profiles} />
          )}
        </div>
      </section>
    </div>
  );
};

export default ActiveMembers;
