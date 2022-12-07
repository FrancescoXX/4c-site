import { BsX } from "react-icons/bs";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// import navbar data
import navbarData from "../content/navbar.json";

const navItems = navbarData.pages;

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize <= 800) {
      setMenuActive(false);
    } else {
      setMenuActive(true);
    }
  }, [screenSize]);
  return (
    <header className="p-[3em] my-[0] max-w-[940px]">
      <div className="container">
        <nav className="flex items-start justify-between">
          <div className="relative flex flex-wrap items-center justify-between gap-6 w-[100%]  ">
            <a href="/">
              <img
                className="w-[100%] max-w-[50px] hover:cursor-pointer"
                frameBorder="0"
                allowtransparency="true"
                src="https://raw.githubusercontent.com/FrancescoXX/4c-site/main/mediakit/4c-logo-circle.png"
              />
            </a>
            <div
              className={`fixed md:relative flex flex-col md:flex-row p-2 bg-[#708fe6] md:bg-transparent h-[100vh] md:h-full top-0 md:top-0 right-0 md:right-0 all ease-in-out gap-6 transition delay-150  ${
                menuActive ? "" : "hidden"
              } z-50  `}
            >
              <button
                className=" text-xl md:hidden"
                onClick={() => setMenuActive(false)}
              >
                <BsX />
              </button>
              <ul className="flex flex-col items-center justify-center list-none gap-[2rem] md:gap-[0.5rem] md:flex-row">
                {navItems.map((navItem, idx) => (
                  <li key={idx}>
                    <a
                      href={navItem.href}
                      className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme transition-all ease-out hover:-translate-y-1"
                    >
                      {navItem.pageName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="text-xl hamburger"
              onClick={() => setMenuActive(true)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
