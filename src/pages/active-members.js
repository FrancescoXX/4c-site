import Layout from "components/Layout"
import ActiveMembers from "components/ActiveMembers"
import { OramaProvider } from "context/OramaProvider"
import activeMembers from "data/activemembers"
import activemembersSchema from "context/schemas/activemembersSchema"

export default function Home() {
  return (
    <OramaProvider schema={activemembersSchema} initialData={activeMembers}>
      <Layout className="flex flex-col justify-start mt-[7rem]">
        <ActiveMembers />
      </Layout>
    </OramaProvider>
  )
}
