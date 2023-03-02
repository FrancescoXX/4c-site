import Layout from "components/Layout"
import Staff from "components/Staff"

export default function Home() {
  return (
    <Layout className="flex flex-col justify-start mt-[7rem]">
      <Staff />
    </Layout>
  )
}
