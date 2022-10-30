import Link from "next/link";
import { BsX } from "react-icons/bs";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

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
    <header className="p-[2em] my-[0] w-full">
      <div className="container">
        <nav className="flex items-start justify-between">
          <div className="relative flex flex-wrap items-center justify-between gap-6 w-[100%]  ">
            <Link href="/">
              <img
                className="w-[100%] max-w-[50px] hover:cursor-pointer"
                frameBorder="0"
                allowtransparency="true"
                src="https://raw.githubusercontent.com/FrancescoXX/4c-site/main/mediakit/4c-logo-circle.png"
              />
            </Link>
            <div
              className={`fixed md:relative flex flex-col md:flex-row p-2 bg-[#708fe6] md:bg-transparent h-[100vh] md:h-full top-0 md:top-0 right-0 md:right-0 all ease-in-out gap-6 transition ease-in-out delay-150  ${
                menuActive ? "" : "hidden"
              } z-50  `}
            >
              <button
                className=" text-xl md:hidden"
                onClick={() => setMenuActive(false)}
              >
                <BsX />
              </button>
              <Link href="/active-members">
                <button className=" font-bold text-white transition-all ease-out hover:drop-shadow-lg">
                  Active Members
                </button>
              </Link>

              <Link href="/projects">
                <button className=" font-bold text-white transition-all ease-out hover:drop-shadow-lg">
                  Projects
                </button>
              </Link>

              <Link href="/blog">
                <button className=" font-bold text-white transition-all ease-out hover:drop-shadow-lg">
                  Blog
                </button>
              </Link>

              <Link href="/activities">
                <button className=" font-bold text-white transition-all ease-out hover:drop-shadow-lg">
                  Activities
                </button>
              </Link>

              <Link href="/videos">
                <button className=" font-bold text-white transition-all ease-out hover:drop-shadow-lg ">
                  Videos
                </button>
              </Link>

              <Link href="/faq">
                <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme transition-all ease-out">
                  FAQ
                </button>
              </Link>
            </div>
            <button
              className="text-xl  md:hidden "
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
