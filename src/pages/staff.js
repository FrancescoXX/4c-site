import Layout from "components/Layout"
import Staff from "components/Staff"
import { OramaProvider } from "context/OramaProvider"
import staffmembersSchema from "context/schemas/staffmembersSchema"
import staff from "data/staff"

export default function Home() {
  return (
    <OramaProvider schema={staffmembersSchema} initialData={staff}>
      <Layout className="flex flex-col justify-start mt-[7rem]">
        <Staff />
      </Layout>
    </OramaProvider>
  )
}
