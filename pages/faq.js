import Layout from "../components/Layout";
import Faqs from "../content/faq.json";
import FaqAccordian from "../components/FaqAccordian";
import GoToTop from "../components/GoToTop";

const Faq = () => {
  return (
    <div>
      <Layout className="items-left mt-4 flex flex-col justify-center px-3">
        <div className="page-title mb-16 mt-[30px] text-center text-white">
          <h1
            role="heading"
            class="headTitle font-semibold uppercase leading-10 tracking-wider text-white"
          >
            Frequently asked questions
          </h1>
        </div>
        <ul className="flex flex-col items-center justify-center">
          {Faqs.map((faq, idx) => (
            <FaqAccordian key={idx} faq={faq} />
          ))}
        </ul>
      </Layout>
      <GoToTop />
    </div>
  );
};

export default Faq;
