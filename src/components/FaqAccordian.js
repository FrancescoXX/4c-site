import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { IoIosArrowDown } from "react-icons/io"

const FaqAccordian = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li className="flex items-center justify-center w-9/12 mb-8 flex-column sm:w-9/12 md:w-8/12 lg:w-1/2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={() => setIsOpen(!isOpen)}
        tabIndex={0}
        role="button"
        className={`w-full p-8 rounded shadow cursor-pointer details backdrop-blur-lg ${
          isOpen ? "bg-white/30" : "bg-white/20"
        }`}
      >
        <p className="relative flex items-center justify-between pr-4 text-base font-bold leading-none text-white list-none">
          <span>{faq.questions}</span>
          <IoIosArrowDown
            className={`text-2xl duration-200 ${
              isOpen && "rotate-180"
            }`}
          />
        </p>

        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 12 }}
              exit={{ opacity: 0, height: 0, margin: 0 }}
              className={"overflow-hidden text-base leading-normal text-white"}
            >
              {faq.answers}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </li>
  )
}

export default FaqAccordian
