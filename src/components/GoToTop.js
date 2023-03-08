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

    const footer = document.querySelector(".footer")
    const backToTopButton = document.querySelector(".backToTopButton")
    const mediaQuery = window.matchMedia("(max-width: 400px)")
    const footerIsVisible = footer.getBoundingClientRect().top <= window.innerHeight

    if (mediaQuery.matches) {
      if (footerIsVisible) {
        backToTopButton.style.bottom = `${footer.offsetHeight}px`
        backToTopButton.style.transition = "0.5s"
      } else {
        backToTopButton.style.bottom = "48px"
      }
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
      className={`backToTopButton fixed bg-gradient-to-b from-green-400 to-blue-600 animate-bounce cursor-pointer  rounded-full p-3 right-12 bottom-12 ${!isVisible ? "hidden" : "backToTop"}`}
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
