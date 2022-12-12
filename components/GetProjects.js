import React from "react";

// import contributors data
import allProjects from "../content/projects.json";

const GetProjects = () => {
  return (
    <div className="flex items-start justify-start mt-[3em]">
      <section className="flex-1 text-center text-white">
        <h1 className="mb-5 text-4xl tracking-widest uppercase text-black sm:text-white">
          Projects
        </h1>
        <p className="text-black/70 sm:text-white/70">
          Projects by 4c community Members
        </p>
        <div className="flex items-center justify-center ">
          <div className="max-w-[1400px]">
            <div className="grid grid-cols-5 grid-flow-row items-center justify-center pt-4 my-[1rem]  text-left gap-[1.5rem]">
              {allProjects.projects.map((project) => (
                <div
                  key={project.name}
                  className="p-2 flex flex-col shrink rounded-lg group max-w-[280px] transition-all ease-in-out duration-200"
                >
                  <div className="flex items-center h-full justify-center max-w-full text-center shadow-sm rounded-tl-xl rounded-tr-xl">
                    <img
                      className="object-cover w-full overflow-hidden h-full max-h-[8rem] rounded-tl-xl rounded-tr-xl transition-all ease-in-out duration-300"
                      src={project?.screenshot}
                    />
                  </div>
                  <div className="flex flex-col justify-self-end gap-[.2rem] w-full  bg-[#f1f5f9] p-[20px] rounded-br-xl rounded-bl-xl">
                    <div className="text-black ">
                      <h2 className="text-base w-[30ch] text-[.95rem]">
                        {project.title}
                      </h2>
                      <h4 className="flex items-center text-sm font-normal opacity-75 gap-2">
                        <svg
                          width="12"
                          height="24"
                          viewBox="0 0 30 34"
                          fill="none"
                        >
                          <path
                            d="M14.639 17.1666C18.863 17.1666 22.2872 13.7424 22.2872 9.51838C22.2872 5.29436 18.863 1.87012 14.639 1.87012C10.415 1.87012 6.99072 5.29436 6.99072 9.51838C6.99072 13.7424 10.415 17.1666 14.639 17.1666Z"
                            stroke="black"
                            strokeWidth="3.5"
                          />
                          <path
                            d="M22.2877 20.226H22.8262C23.9445 20.2263 25.0242 20.6349 25.8624 21.3752C26.7006 22.1154 27.2397 23.1362 27.3784 24.2459L27.9765 29.0245C28.0303 29.455 27.9919 29.892 27.8639 30.3065C27.7359 30.7211 27.5212 31.1036 27.234 31.4288C26.9469 31.754 26.5939 32.0144 26.1984 32.1928C25.8029 32.3711 25.374 32.4633 24.9401 32.4632H4.33878C3.90494 32.4633 3.47605 32.3711 3.08056 32.1928C2.68507 32.0144 2.33203 31.754 2.04488 31.4288C1.75772 31.1036 1.54301 30.7211 1.41501 30.3065C1.287 29.892 1.24862 29.455 1.30242 29.0245L1.89898 24.2459C2.03772 23.1357 2.57726 22.1144 3.41614 21.3741C4.25503 20.6338 5.33547 20.2255 6.45429 20.226H6.9912"
                            stroke="black"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {project.name}
                      </h4>
                      <div className="flex flex-auto my-[.5rem]">
                        <p className="text-sm w-full truncate">
                          {project.description}
                        </p>
                      </div>
                      {/* <p className="flex h-full text-md">{project.description}</p> */}
                    </div>
                    <div className="flex self-end items-center w-full h-10 mt-auto bg-red my-[10px]">
                      <a
                        className="flex items-center px-4 mr-3 text-sm rounded-full py-1.5 bg-[#1e293b] gap-2 transition-all ease-in  hover:bg-sky-700"
                        href={project.live_link}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
                          ></path>
                        </svg>
                        View
                      </a>
                      <a
                        className="flex items-center px-3 mr-3 text-sm rounded-full py-1.5 bg-[#111827] gap-2 transition-all ease-in hover:bg-sky-700"
                        href={project.link}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                        >
                          <g>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fillRule="nonzero"
                              d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
                            ></path>
                          </g>
                        </svg>
                        Repo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetProjects;
