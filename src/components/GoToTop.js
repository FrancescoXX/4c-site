import React, { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

const GoToTop = () => {
  // state to display toggler
  const [isVisible, setIsVisible] = useState(false)

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  const listenToScroll = () => {
    const heightToHidden = 20
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll > heightToHidden) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
    return () => window.removeEventListener("scroll", listenToScroll)
  }, [])

  // classes for gototop button

  return (
    <div
      onClick={goToBtn}
      onKeyDown={goToBtn}
      role="button"
      tabIndex={0}
      className={`fixed bg-[#63b5ec] cursor-pointer  rounded-full p-3 right-12 bottom-12 ${!isVisible ? "hidden" : ""}`}
    >
      {isVisible && (
        <div>
          <FaArrowUp className="text-black" />
        </div>
      )}
    </div>
  )
}

export default GoToTop
