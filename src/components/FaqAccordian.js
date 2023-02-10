import React, { useState } from "react"

const FaqAccordian = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li className="flex-column mb-8 flex w-9/12 items-center justify-center sm:w-9/12 md:w-8/12 lg:w-1/2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={() => setIsOpen(!isOpen)}
        tabIndex={0}
        role="button"
        className="details w-full cursor-pointer rounded bg-white bg-opacity-[.2] p-8 shadow backdrop-blur-lg"
      >
        <summary className="relative list-none pr-4 text-base font-bold leading-none text-white after:absolute after:-top-2 after:right-0 after:rotate-90 after:text-2xl after:font-light after:text-[#fdfdfd] after:transition-all after:duration-300 after:ease-in-out">
          {faq.questions}
        </summary>

        {isOpen && (
          <p className="mt-4 text-base leading-normal text-white">
            {faq.answers}
          </p>
        )}
      </div>
    </li>
  )
}

export default FaqAccordian
