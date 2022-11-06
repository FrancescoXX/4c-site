import React from "react";
import { FaTwitter, FaLink } from "react-icons/fa";
import blogs from "../content/blog.json";

const styles = "hover:text-gray-300 cursor-pointer";
const BlogCard = () => {
  return (
    <section className="flex flex-wrap items-center justify-between p-10">
      {blogs.blogs.map((blog) => (
        <div className="text-white w-[400px] bg-gray-800 shadow-md p-5 m-5">
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
            <div>
              <img
                className="rounded-md w-max h-[200px]"
                src={blog.screenshot}
              />
            </div>
          </a>
          <div>
            <p className="text-[18px] text-gray-300 mt-5 leading-6">
              {blog.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogCard;
