import Layout from "components/Layout"
import GetActivities from "components/GetActivities"

const Projects = () => {
  return (
    <div>
      <Layout className="flex flex-col items-center justify-center text-3xl mt-[10rem]">
        <GetActivities />
      </Layout>
    </div>
  )
}

export default Projects
