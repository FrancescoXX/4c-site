import { RiMenu4Fill, RiCloseFill } from "react-icons/ri"
import { useState, useEffect } from "react"
import Link from "next/link"

// import navbar data
import navItems from "data/navbar"
import Image from "next/image"
import logoImage from "assets/logo.png"

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [activeButton, setActiveButton] = useState()
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    const local = window.localStorage.getItem("active")
    setActiveButton(local)
  }, [])

  const addBlur = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  return (
    <div className="container -ml-4  items-center justify-center z-[1] block fixed">
      <div className={ navbar ? "backdrop-blur-lg" : "bg-transparent"}>
        <header className="w-[100vw] px-5 py-[0.7rem] md:px-[2rem]">
          <div className="container max-w-bodyContainer  px-1 sm:px-2">
            <nav className="flex items-start justify-between  md:justify-center">
              <div className="relative flex w-full flex-wrap items-center justify-between gap-6 z-50">
                <Link href="/">
                  <Image
                    width={50}
                    height={50}
                    id="four-c-logo"
                    className="hover:cursor-pointer"
                    alt="4C Logo"
                    src={logoImage}
                    priority
                  />
                </Link>
                <button
                  className="text-4xl lg:hidden  text-white bg-[#030e2c] p-2 rounded"
                  aria-label="Menu button"
                  type="button"
                  onClick={() => setMenuActive(true)}
                >
                  <RiMenu4Fill />
                </button>
                <div
                  className={`w-full h-screen -z-40 fixed bg-[#030e2c] flex p-20 top-0 left-0 ${
                    menuActive ? "z-40" : ""
                  } flex-col items-center justify-center gap-[2rem] lg:flex-row lg:gap-[0.6rem] transition-all duration-1000 lg:w-max lg:h-max lg:!z-40 lg:static lg:bg-inherit lg:p-0 lg:top-auto lg:left-auto lg:![clip-path:unset] lg:transition-none`}
                  style={{
                    clipPath: menuActive
                      ? "circle(100% at 50% 50%)"
                      : "circle(0% at 100% 0)",
                  }}
                >
                  <button
                    className="text-4xl lg:hidden  text-white bg-[#030e2c] p-2 rounded fixed top-[4rem] right-[5rem]"
                    aria-label="Close button"
                    type="button"
                    onClick={() => setMenuActive(false)}
                  >
                    <RiCloseFill />
                  </button>
                  {/* {navItems.map((navItem, idx) => (
                    <Link
                      href={navItem.href}
                      key={idx}
                      onClick={() => {
                        window.localStorage.setItem("active", navItem.href)
                      }}
                      onKeyDown={() => {
                        window.localStorage.setItem("active", navItem.href)
                      }}
                      role="menuitem"
                      tabIndex={0}
                      className={`hov-bg-theme w-full rounded  px-4 py-2 font-bold transition-all ease-out hover:-translate-y-1 hover:cursor-pointer lg:w-auto text-center
                      ${
                        activeButton === navItem.href
                          ? "bg-theme bg-[#70b7e6] text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {navItem.pageName}
                    </Link>
                    ))} */}
                    <div className="flex gap-20 font-bold text-white text-lg">
                      <a href="#about">About</a>
                      <a href="#discover">Activities</a>
                      <div className="group inline-block relative">
                        <button
                          className="inline-flex items-center"
                        >
                          <span className="mr-1">Content</span>
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                          </svg>
                        </button>
                        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block w-36">
                          <li className="">
                            <a
                              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                              href="#videos"
                              >Videos</a
                            >
                          </li>
                          <li className="">
                            <a
                              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                              href="#blogs"
                              >Blogs</a
                            >
                          </li>
                        </ul>
                      </div>
                      <a href="#faq">FAQs</a>
                    </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Navbar
