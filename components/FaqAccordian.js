import { useState } from "react";

const FaqAccordian = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="flex items-center justify-center w-9/12 mb-8 flex-column sm:w-9/12 md:w-8/12 lg:w-1/2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 bg-white rounded shadow cursor-pointer details bg-opacity-20 backdrop-blur-lg"
      >
        <summary className="relative pr-4 text-base font-bold leading-none text-white list-none after:absolute after:-top-2 after:right-0 after:rotate-90 after:text-2xl after:font-light after:text-[#fdfdfd] after:transition-all after:duration-300 after:ease-in-out">
          {faq.questions}
        </summary>

        {isOpen && (
          <p className="mt-4 text-base leading-normal text-white lg:w-96">
            {faq.answers}
          </p>
        )}
      </div>
    </li>
  );
};

export default FaqAccordian;
