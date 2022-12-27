import Layout from "../components/Layout";
import Faqs from "../content/faq.json";
import FaqAccordian from "../components/FaqAccordian";
import GoToTop from "../components/GoToTop";
import Title from "../components/Title";

const Faq = () => {
  return (
    <div>
      <Layout className="flex flex-col justify-center px-3 mt-4 items-left">
        <div className="mb-16 text-center text-white page-title mt-[30px]">
          <Title heading="Frequently asked questions" />
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
