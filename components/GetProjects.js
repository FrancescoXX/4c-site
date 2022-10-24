import React from "react";

// import contributors data
import allProjects from "../content/projects.json";

const GetProjects = () => {
  return (
    <div className="flex items-start justify-start mt-[3em]">
      <section className="flex-1 text-center text-white">
        <h1 className="text-4xl mb-10">Projects</h1>
        <div className="flex flex-wrap items-center text-left justify-center pb-4 m-2 overflow-y-auto">
          {allProjects.projects.map((project) => (
            <a href={project.link}>
              <div className="cursor-pointer itemsGroup flex flex-col p-3  justify-between w-64 h-64 m-4 border bg-gray-300 shadow rounded-md hover:shadow-lg">
                <div className="w-100 h-32 flex justify-center items-center shadow-sm text-center rounded-md bg-black">
                  <img src={project.screenshot} />
                </div>
                <div className="text-black">
                  <span className="mt-3 text-md text-gray-800">
                    Author: {project.name}
                  </span>
                  <h6 className="mb-2">Title: {project.title}</h6>
                  {/* TODO */}
                  {/* description will show if hoverover itemsGroup(its a clas name. for now, description hidden)  */}
                  <p className="hidden">Except: {project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GetProjects;
