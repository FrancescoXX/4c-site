import React from "react";
import { FaTwitter, FaLink } from "react-icons/fa";
import blogs from "../content/blog.json";

const styles = "transition-all ease-in hover:text-sky-700 cursor-pointer";
const BlogCard = () => {
  return (
    <section className="flex flex-wrap items-center justify-center p-10 w-full">
      {blogs.blogs.map((blog, index) => (
        <div
          key={index}
          className="text-black group w-[330px] h-[450px] hover:h-[max-content] hov-bg-theme transition-all ease-out hover:-translate-y-1 xl:w-[380px] bg-[#f1f5f9] rounded-xl  shadow-md p-5 m-5"
        >
          <div className="flex justify-between text-2xl">
            <a href={blog.twitter} target="_blank">
              <FaTwitter className={styles} />
            </a>
            <a href={blog.link} target="_blank">
              <FaLink className={styles} />
            </a>
          </div>
          <div>
            <h2 className="title text-2xl my-10">{blog.title}</h2>
          </div>
          <a href={blog.link} target="_blank">
            <img
              className="rounded-md max-h-[20rem] object-contain"
              src={blog.screenshot}
            />
          </a>
          <div>
            <p className="text-[18px] text-black/80 group-hover:line-clamp-none line-clamp-2  mt-5 leading-6">
              {blog.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogCard;
