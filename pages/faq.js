import Layout from "../components/Layout";
import Faqs from "../content/faq.json";
import FaqAccordian from "../components/FaqAccordian";
import GoToTop from "../components/GoToTop";

const Faq = () => {
  return (
    <div>
      <Layout className="flex flex-col justify-center text-5xl items-left">
        <div className="mb-16 text-center text-white page-title">
          <h1
            role="heading"
            class="font-semibold tracking-wider text-white uppercase xl:text-6xl md:text-5xl leading-10"
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
