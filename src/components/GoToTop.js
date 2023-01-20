import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  // state to display toggler
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  // classes for Back to Top button

  return (
    <div
      onClick={goToBtn}
      onKeyDown={goToBtn}
      role="button"
      tabIndex={0}
      className={`fixed bg-gradient-to-b  from-green-400 to-blue-600 animate-bounce cursor-pointer  rounded-full p-3 right-12 bottom-12 ${
        !isVisible ? "hidden" : ""
      }`}
    >
      {isVisible && (
        <div>
          <FaArrowUp className="text-black" />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
