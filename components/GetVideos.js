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
          <div className="flex w-full flex-wrap items-center justify-center p-10">
            {allVideos.videos.map((video, index) => (
              <div
                key={index}
                className="details hov-bg-theme my-4 w-auto w-full cursor-pointer rounded rounded-xl bg-white bg-[#f1f5f9] bg-opacity-20 p-4 text-white shadow shadow-md backdrop-blur-lg transition-all ease-out hover:-translate-y-1 sm:m-5 sm:w-80 sm:p-6"
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
