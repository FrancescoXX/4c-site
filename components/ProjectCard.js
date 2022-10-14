import React from "react";
import { FaTwitter } from "react-icons/fa";

const ProjectCard = ({ author, projectTitle, description, link, twitter }) => {
  return (
    <div className="flex flex-col items-center justify-center m-4 border border-gray-300 shadow w-80 h-[22rem] rounded-md hover:shadow-lg bg-sky-600">
      <a href={link} target="_blank">
        <span className="mt-3 text-2xl font-bold text-sky-100 hover:text-sky-300 hover:underline underline-offset-4">
          {projectTitle}
        </span>
      </a>
      <span className="mt-3 text-lg text-gray-900">{description}</span>
      <span className="mt-3 text-lg text-gray-800">{author}</span>
      <div className="flex items-center justify-center mt-12 space-x-3 hover:text-blue-200">
        <a href={twitter} target="_blank">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
