import React from "react";
import { FaTwitter, FaLink } from "react-icons/fa";
import blogs from "../content/blog.json";

const styles = "transition-all ease-in hover:text-sky-700 cursor-pointer";
const BlogCard = () => {
  return (
    <section className="flex flex-wrap items-center justify-center p-10 w-full">
      {blogs.blogs.map((blog) => (
        <div className="text-black  w-[330px] h-[450px]  xl:w-[380px] bg-[#f1f5f9] rounded-xl  shadow-md p-5 m-5">
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
            <div className="w-[98%]">
              <img
                className="rounded-md w-fit h-40 object-cover"
                src={blog.screenshot}
              />
            </div>
          </a>
          <div>
            <p className="text-[18px] text-black/80  mt-5 leading-6">
              {blog.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogCard;
