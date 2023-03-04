import BlogCard from "components/BlogCard"
import Title from "components/Title"

const Blogs = () => {
  return (
    <div className="flex items-center flex-col justify-center">
      <Title heading="Blogs" />
      <BlogCard />
    </div>
  )
}

export default Blogs
