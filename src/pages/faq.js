import Layout from "components/Layout"
import Faqs from "data/faq.json"
import FaqAccordian from "components/FaqAccordian"
import Title from "components/Title"

const Faq = () => {
  return (
    <div>
      <Layout className="items-left mt-4 flex flex-col justify-center px-3">
        <div className="page-title mb-16 mt-[30px] text-center text-white">
          <Title heading="Frequently asked questions" />
        </div>
        <ul className="flex flex-col items-center justify-center">
          {Faqs.map((faq, idx) => (
            <FaqAccordian key={idx} faq={faq} />
          ))}
        </ul>
      </Layout>
    </div>
  )
}

export default Faq
