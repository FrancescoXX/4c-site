import React from "react";
// import contributors data
import allVideos from "../content/videos.json";

const GetVideos = () => {
  return (
    <div className="mt-[3em] flex items-center justify-center">
      <section className="max-w-bodyContainer flex-1 text-center text-white">
        <h1 className="mb-5 text-4xl uppercase tracking-widest">Videos</h1>
        <p className="text-white/70">Videos by 4c community Members</p>
        <div className="mx-4 lg:mx-12">
          <div className="my-[1rem] grid grid-flow-row items-center justify-center gap-[1.5rem] pt-4 text-left md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allVideos.videos.map((video, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg p-2 transition-all duration-200 ease-in-out"
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    className="rounded"
                    alt=""
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
