import React from "react";
import { FaTwitter, FaLink } from "react-icons/fa";
import blogs from "../content/blog.json";

const styles = "transition-all ease-in cursor-pointer";
const BlogCard = () => {
  return (
    <section className="flex flex-wrap items-center justify-center w-full p-10">
      {blogs.blogs.map((blog, index) => (
        <div
          key={index}
          className="p-5 m-5 text-black shadow-md w-[330px] h-[450px]  hov-bg-theme transition-all ease-out hover:-translate-y-1 xl:w-[380px] bg-[#f1f5f9] rounded-xl"
 
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
            <h2 className="my-10 text-2xl title">{blog.title}</h2>
          </div>
          <a href={blog.link} target="_blank">
            <img
              className="object-contain rounded-md max-h-[20rem]"
              src={blog.screenshot}
            />
          </a>
          <div>
            <p className="mt-5 text-[18px] text-black/80 line-clamp-2 leading-6">
              {blog.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogCard;
