import React from "react";
import YouTube from "react-youtube";
// import contributors data
import allVideos from "../content/videos.json";

const GetVideos = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="flex items-start justify-start mt-[3em]">
      <section className="flex-1 text-center text-white">
        <h1 className="mb-5 text-4xl tracking-widest uppercase">Videos</h1>
        {/* <p className="text-white/70">Projects by 4c community Members</p> */}
        <div className="overflow-y-auto text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center pt-[.3rem] my-[2rem] gap-[1rem]">
          {allVideos.videos.map((video, index) => (
            <div
              key={index}
              className="p-2 rounded-lg group transition-all ease-in-out duration-200"
            >
              <YouTube videoId={video.videoId} opts={opts} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GetVideos;
