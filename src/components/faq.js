import Faqs from "data/faq.json"
import FaqAccordian from "components/FaqAccordian"
import Title from "components/Title"

const Faq = () => {
  return (
    <div>
        <div className="page-title mb-16 mt-[30px] text-center text-white">
          <Title heading="Frequently asked questions" />
        </div>
        <ul className="flex flex-col items-center justify-center">
          {Faqs.map((faq, idx) => (
            <FaqAccordian key={idx} faq={faq} />
          ))}
        </ul>
    </div>
  )
}

export default Faq
