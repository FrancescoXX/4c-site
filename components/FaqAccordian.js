import React, { useState } from "react";

const FaqAccordian = ({ faq }) => {
  const [box, setBox] = useState(false);
  return (
    <div class="flex items-center justify-center w-full mb-8 lg:w-1/2 md:w-8/12 sm:w-9/12 flex-column">
      <div
        class="w-full p-8 bg-white rounded shadow cursor-pointer"
        onClick={() => setBox(!box)}
      >
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-base font-semibold leading-none text-gray-800">
              {faq.questions}
            </h2>
          </div>
          <button class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white">
            {box ? (
              <svg
                role="button"
                aria-label="close dropdown"
                width="14"
                height="14"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5L5 1L9 5"
                  stroke="#4B5563"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="14"
                role="button"
                aria-label="open dropdown"
                height="14"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#4B5563"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {box && (
          <ul class="">
            <li>
              <p class="mt-4 text-base leading-normal text-gray-600 lg:w-96">
                {faq.answers}
              </p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FaqAccordian;
