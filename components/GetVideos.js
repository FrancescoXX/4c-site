import React from "react";
// import contributors data
import allVideos from "../content/videos.json";

const GetVideos = () => {
  return (
    <div className="flex items-center justify-center mt-[3em]">
      <section className="flex-1 text-center text-white max-w-bodyContainer">
        <h1 className="mb-5 text-4xl tracking-widest uppercase">Videos</h1>
        <p className="text-white/70">Videos by 4c community Members</p>
        <div className="mx-4 lg:mx-12">
          <div className="flex flex-wrap items-center justify-center w-full p-10">
            {allVideos.videos.map((video, index) => (
              <div
                key={index}
                className="w-full p-6 bg-white rounded shadow cursor-pointer details bg-opacity-20 backdrop-blur-lg hov-bg-theme m-5 w-80 rounded-xl bg-[#f1f5f9]  p-5 text-white shadow-md transition-all ease-out hover:-translate-y-1 "
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
                  <div className="text-left">
                    <h2 className="text-lg">{video.videoTitle}</h2>
                    <span className="text-sm font-thin text-gray-200">
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
