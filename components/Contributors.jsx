import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import ProfileCard from "./ProfileCard";

// import contributors data
import contributors from "../content/contributors.json";

const getContributors = (users) => {
  let contribs = [...users.github, ...users.external];
  return contribs.map((user) => (
    <ProfileCard
      username={user.name}
      avatarUrl={user.avatarUrl}
      socials={[
        { type: "github", username: user.github },
        { type: "twitter", username: user.twitter },
        { type: "blog", username: user.blogUrl },
      ]}
    />
  ));
};

const getSponsors = (users) => {
  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 p-8 text-lg text-gray-600 bg-orange-300 shadow-md space-y-6 rounded-md">
        <p>
          None yet. But do you want to support us? Join our discord and shoot a
          message. We'll love to talk!
        </p>
        <a
          href="https://discord.com/invite/TcmA2kbJeA"
          className="btn btn-primary"
        >
          <FaDiscord />
          Join the Community!
        </a>
      </div>
    );
  }
  return users.map((user) => (
    <ProfileCard
      username={user.name}
      avatarUrl={user.avatarUrl}
      socials={[
        { type: "github", username: user.github },
        { type: "twitter", username: user.twitter },
        { type: "blog", username: user.blogUrl },
      ]}
    />
  ));
};

const Contributors = () => {
  const [tab, setTab] = useState("Contributors");
  return (
    <main className="flex items-start justify-start w-full mt-20">
      <section className="hidden mt-40 text-2xl bg-orange-100 md:block max-w-max">
        <h6
          onClick={() => setTab("Contributors")}
          className={`py-4 px-6  rounded hover:text-orange-600 transition-all delay-100 ease-out cursor-pointer ${
            tab === "Contributors" ? "text-orange-600" : "text-gray-700"
          }`}
        >
          Contributors
        </h6>
        <h6
          onClick={() => setTab("Sponsors")}
          className={`py-4 px-6 rounded hover:text-orange-600 transition-all delay-100 ease-out cursor-pointer ${
            tab === "Sponsors" ? "text-orange-600" : "text-gray-700"
          }`}
        >
          Sponsors
        </h6>
      </section>
      <section className="flex-1 text-4xl font-bold text-center text-orange-600">
        <h2>{tab}</h2>
        <div className="flex flex-wrap items-center justify-center m-4 overflow-y-auto">
          {tab === "Contributors"
            ? getContributors(contributors)
            : getSponsors(contributors.sponsors)}
        </div>
      </section>
    </main>
  );
};

export default Contributors;
