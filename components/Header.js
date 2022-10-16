import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [navbaropen, setNavbarOpen] = useState(false);

  return (
    <header className="p-[3em] my-[0] max-w-[940px]">
      <div className="container">
        <nav className="flex items-start justify-between">
          <div className="flex flex-wrap items-center gap-6 md:gap-5">
            <Link href="/">
              <img
                className="w-[100%] max-w-[50px] hover:cursor-pointer"
                frameBorder="0"
                allowtransparency="true"
                src="https://raw.githubusercontent.com/FrancescoXX/4c-site/main/mediakit/4c-logo-circle.png"
              />
            </Link>

            <button
              onClick={() => setNavbarOpen(!navbaropen)}
              data-collapse-toggle="navbar-default"
              type="button"
              className=" inline-flex items-center  p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div
              className={
                "sm:flex flec-grow  gap-6 flex-wrap items-center" +
                (navbaropen ? " flex" : " hidden")
              }
            >
              <Link href="/activeMembers">
                <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                  Active Members
                </button>
              </Link>

              <Link href="/faq">
                <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                  FAQ
                </button>
              </Link>

              <Link href="/projects">
                <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                  Projects
                </button>
              </Link>

              <Link href="/blog">
                <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                  Blog
                </button>
              </Link>

              <Link href="/activities">
                <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                  Activities
                </button>
              </Link>

              <Link href="/videos">
                <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                  Videos
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
