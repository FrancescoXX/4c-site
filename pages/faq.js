import Layout from "../components/Layout";
import Faqs from "../content/faq.json";
import FaqAccordian from "../components/FaqAccordian";

const Faq = () => {
  return (
    <Layout className="flex flex-col justify-center text-5xl items-left">
      <div className="mb-16 text-center text-white page-title">
        <h1
          role="heading"
          class="font-semibold text-white xl:text-6xl md:text-5xl leading-10 uppercase tracking-wider"
        >
          Frequently asked questions
        </h1>
      </div>
      <ul className="flex flex-col items-center justify-center">
        {Faqs.map((faq) => (
          <FaqAccordian faq={faq} />
        ))}
      </ul>
    </Layout>
  );
};

export default Faq;
