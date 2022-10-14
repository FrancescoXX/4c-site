import Layout from "../components/Layout";
import Faqs from "../content/faq.json";
import FaqAccordian from "../components/FaqAccordian";

const Faq = () => {
  return (
    <Layout className="flex flex-col justify-center text-5xl items-left">
      <div className="mb-16 text-center text-white page-title">
        <h1
          role="heading"
          class="text-xl font-bold text-white xl:text-6xl md:text-5xl leading-10"
        >
          Frequently asked questions
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        {Faqs.map((faq) => (
          <FaqAccordian faq={faq} />
        ))}
      </div>
    </Layout>
  );
};

export default Faq;
