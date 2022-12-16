import React from "react";
// import contributors data
import allVideos from "../content/videos.json";

const GetVideos = () => {
  return (
    <div className="flex items-start justify-start mt-[3em]">
      <section className="flex-1 text-center text-white">
        <h1 className="mb-5 text-4xl tracking-widest uppercase">Videos</h1>
        <p className="text-white/70">Videos by 4c community Members</p>
        <div className="mx-4 lg:mx-12">
          <div className="items-center justify-center pt-4 text-left grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-flow-row my-[1rem] gap-[1.5rem]">
            {allVideos.videos.map((video, index) => (
              <div
                key={index}
                className="flex flex-col p-2 rounded-lg transition-all ease-in-out duration-200"
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
