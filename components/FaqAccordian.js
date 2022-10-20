const FaqAccordian = ({ faq }) => {
  return (
    <li className="flex items-center justify-center w-9/12 mb-8 lg:w-1/2 md:w-8/12 sm:w-9/12 flex-column">
      <details className="w-full p-8 bg-white rounded shadow cursor-pointer details">
        <summary className="relative pr-4 text-base font-semibold leading-none text-gray-800 list-none after:absolute after:transition-all after:duration-300 after:ease-in-out after:-top-2 after:right-0 after:text-[#4B5563] after:font-light after:text-2xl after:rotate-90">
          {faq.questions}
        </summary>

        <p className="mt-4 text-base leading-normal text-gray-600 lg:w-96">
          {faq.answers}
        </p>
      </details>
    </li>
  );
};

export default FaqAccordian;
