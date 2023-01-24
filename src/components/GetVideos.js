import React from "react"
import allVideos from "data/videos.json"
import Title from "components/Title"
import Image from "next/image"

const GetVideos = () => {
  return (
    <div className="mt-[3em] flex items-center justify-center">
      <section className="max-w-bodyContainer flex-1 text-center text-white">
        <Title heading="Videos" />
        <p className="text-white/70">Videos by 4c community Members</p>
        <div className="mx-4 lg:mx-12">
          <div className="flex w-full flex-wrap justify-center mt-4">
            {allVideos.videos.map((video, index) => (
              <div
                key={index}
                className="details hov-bg-theme medium:my-4 cursor-pointer rounded bg-white bg-opacity-[.2] :py-6 text-white shadow backdrop-blur-lg transition-all ease-out hover:-translate-y-1 m-4 w-[14rem] mobile:w-[17rem] medium:w-[20rem] laptop:w-[22rem]"
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank" rel="noreferrer"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    className="rounded mx-auto w-full"
                    alt={video.videoTitle}
                    width={272}
                    height={153}
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
  )
}

export default GetVideos
