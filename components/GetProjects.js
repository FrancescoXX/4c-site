import React from "react";

// import contributors data
import allProjects from "../content/projects.json";

const GetProjects = () => {
  return (
    <div className="flex items-start justify-start mt-[3em]">
      <section className="flex-1 text-center text-white">
        <h1 className="text-4xl mb-10 tracking-widest uppercase">Projects</h1>
        <div className="flex flex-wrap items-center text-left justify-center pb-4 m-2 overflow-y-auto">
          {allProjects.projects.map((project) => (
            <a href={project.link}>
              <div className="border-0 cursor-pointer itemsGroup flex flex-col p-3  justify-between w-64 h-64 m-4  bg-white bg-opacity-20 backdrop-blur-sm transition-all ease-out shadow rounded-md hover:shadow-lg hover:-translate-y-1">
                <div className="w-100 h-32 flex justify-center items-center shadow-sm text-center rounded-md">
                  <img
                    className="h-full w-full rounded-sm overflow-hidden object-contain"
                    src={project.screenshot}
                  />
                </div>
                <div className="text-white">
                  <span className="mt-3 text-md text-white font-bold">
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
