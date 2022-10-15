import Layout from "../components/Layout";
import Faqs from "../content/faq.json";

const Faq = () => {
  return (
    <Layout className="flex flex-col items-left justify-center text-5xl ">
      <div className=" mt-40 page-title text-center text-white">
      
        <h2>FAQ</h2>
      </div>
      <div className="faq-wrapper lg:px-20 px-10 text-white">
        <div className="accordion-items">
          {Faqs.map((item, index) => (
            <div className="items">
              <div className="questions text-sm mt-10">
                <h3>
                  {index + 1}. {item.questions}
                </h3>
              </div>
              <div className="answers pl-5 mt-2 text-gray-300 text-sm">
                <p>{item.answers}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
