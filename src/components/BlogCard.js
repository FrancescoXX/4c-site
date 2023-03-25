import React from "react"
import { FaTwitter, FaLink } from "react-icons/fa"
import blogs from "data/blog"
import Image from "next/image"

const styles = "transition-all ease-in cursor-pointer"
const BlogCard = () => {
  return (
    <section className="flex w-full flex-wrap items-center justify-center p-4 sm:p-10">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="hov-bg-theme m-5 h-[510px] w-[330px] rounded-xl bg-[#f1f5f9] p-5 text-black shadow-md transition-all ease-out hover:-translate-y-1 xl:w-[380px]"
        >
          <div className="flex justify-between text-2xl">
            <a href={blog.twitter} target="_blank" rel="noreferrer">
              <FaTwitter className={styles} />
            </a>
            <a href={blog.link} target="_blank" rel="noreferrer">
              <FaLink className={styles} />
            </a>
          </div>
          <div>
            <h2 className="title my-10 text-2xl">{blog.title}</h2>
          </div>
          <a href={blog.link} target="_blank" rel="noreferrer">
            <Image
              alt={`Screenshot of ${blog.title}`}
              className="rounded-md object-contain"
              src={blog.screenshot}
              height={320}
              width={568.87}
            />
          </a>
          <div>
            <p className="mt-3 text-[18px] leading-6 text-black/80 line-clamp-2">
              {blog.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default BlogCard
