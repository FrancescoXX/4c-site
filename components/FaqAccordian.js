const FaqAccordian = ({ faq }) => {
  return (
    <li className="flex items-center justify-center w-9/12 mb-8 lg:w-1/2 md:w-8/12 sm:w-9/12 flex-column">
      <details className="w-full p-8 bg-white bg-opacity-20 backdrop-blur-lg rounded shadow cursor-pointer details">
        <summary className="relative pr-4 text-base font-bold leading-none text-white list-none after:absolute after:transition-all after:duration-300 after:ease-in-out after:-top-2 after:right-0 after:text-[#fdfdfd] after:font-light after:text-2xl after:rotate-90">
          {faq.questions}
        </summary>

        <p className="mt-4 text-base leading-normal text-white lg:w-96">
          {faq.answers}
        </p>
      </details>
    </li>
  );
};

export default FaqAccordian;
