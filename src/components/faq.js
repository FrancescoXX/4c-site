import FaqAccordian from "components/FaqAccordian"
import Title from "components/Title"

import { faqData } from "data/faq"
import { useState } from "react"

const Faq = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  return (
    <div>
        <div className="page-title mb-16 mt-[30px] text-center text-white">
          <Title heading="Frequently asked questions" />
        </div>
        <ul className="flex flex-col items-center justify-center">
          {faqData.map((faq) => (
            <FaqAccordian key={faq.id} faq={faq} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
          ))}
        </ul>
    </div>
  )
}

export default Faq
