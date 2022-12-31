import React from "react";
import allVideos from "../content/videos.json";
import Title from "./Title";

const GetVideos = () => {
  return (
    <div className="flex items-center justify-center mt-[3em]">
      <section className="flex-1 text-center text-white max-w-bodyContainer">
        <Title heading="Videos" />
        <p className="text-white/70">Videos by 4c community Members</p>
        <div className="mx-4 lg:mx-12">
          <div className="flex flex-wrap items-center justify-center w-full p-10">
            {allVideos.videos.map((video, index) => (
              <div
                key={index}
                className="w-auto w-full p-4 my-4 text-white bg-white rounded shadow shadow-md cursor-pointer details hov-bg-theme rounded-xl bg-[#f1f5f9] bg-opacity-20 backdrop-blur-lg transition-all ease-out hover:-translate-y-1 sm:m-5 sm:w-80 sm:p-6"
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    className="rounded"
                    alt={video.videoTitle}
                  />
                  <div>
                    <h2>{video.videoTitle}</h2>
                    <span className="text-sm font-thin text-gray-300">
                      {video.videoAuthor}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetVideos;
