import GoToTop from "components/GoToTop"
import Layout from "components/Layout"
import GetActivities from "components/GetActivities"

const Projects = () => {
  return (
    <div>
      <Layout className="flex flex-col items-center justify-center text-3xl ">
        <GetActivities />
      </Layout>
      <GoToTop />
    </div>
  )
}

export default Projects
