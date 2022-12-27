import React, { useState } from "react";
import GetActivemembers from "./GetActivemembers";
import Users from "./Users";

// import contributors data
import activeMembers from "../content/activemembers.json";
import Title from "./Title";

const ActiveMembers = () => {
  const [currentUsers, setCurrentUsers] = useState(activeMembers.profiles);

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
    setCurrentUsers(user);
    console.log(
      currentUsers.profiles,
      "dd",
      user,
      "dd",
      activeMembers.profiles
    );
  };
  const [tab] = useState("Active Members");
  return (
    <div className="mt-[3em] flex items-center justify-center">
      <section className="max-w-bodyContainer flex-1  items-center justify-center text-center  font-bold text-white">
        <Title heading="Active Members" />
        <div className="relative m-auto flex max-w-[800px] self-center">
          <input
            placeholder="Search here"
            className="contrast-more:border-slate-400 contrast-more:placeholder-slate-500 h-10 w-full border-slate-200 py-3 px-5 text-black placeholder-slate-700 outline-none"
            onInput={searchHandler}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-white sm:text-slate-400"
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
            <GetActivemembers users={currentUsers} />
          ) : (
            <Users users={activeMembers.profiles} />
          )}
        </div>
      </section>
    </div>
  );
};

export default ActiveMembers;
