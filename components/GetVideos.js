import React from "react";
import YouTube from "react-youtube";
// import contributors data
import allVideos from "../content/videos.json";

const GetVideos = () => {
  const opts = {
    height: "300px",
    width: "500px",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="flex items-start justify-start mt-[3em]">
      <section className="flex-1 text-center text-white">
        <h1 className="mb-5 text-4xl tracking-widest uppercase">Videos</h1>
        {/* <p className="text-white/70">Projects by 4c community Members</p> */}
        <div className="flex flex-wrap items-center justify-center pb-4 m-2 overflow-y-auto">
          {allVideos.videos.map((video) => (
            <div className="p-2 flex flex-col rounded-lg transition-all ease-in-out duration-200">
              <YouTube videoId={video.videoId} opts={opts} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GetVideos;
