import React, { useState } from "react";
import GetProject from "./GetProject";

// import contributors data
import projects from "../content/projects.json";

const ProjectsContainer = () => {
  const [tab] = useState("Projects Showcase");
  return (
    <div className="flex items-start justify-start mt-4">
      <section className="flex-1 text-4xl font-bold text-center text-white">
        <h1 className="mb-12">{tab}</h1>
        <div className="flex flex-wrap items-center justify-center pb-4 m-2 overflow-y-auto">
          <GetProject projects={projects} />
        </div>
      </section>
    </div>
  );
};

export default ProjectsContainer;
