import { BsX } from "react-icons/bs"
import { useState, useEffect } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link"

// import navbar data
import navbarData from "data/navbar.json"
import Image from "next/image"
import logoImage from "assets/logo.png"
const navItems = navbarData.pages

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [screenSize, setScreenSize] = useState()
  const [activeButton, setActiveButton] = useState()

  useEffect(() => {
    const local = window.localStorage.getItem("active")
    setActiveButton(local)
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  useEffect(() => {
    if (screenSize <= 1024) {
      setMenuActive(false)
    } else {
      setMenuActive(true)
    }
  }, [screenSize])
  return (
    <div className="container flex max-w-bodyContainer items-center justify-center">
      <header className="my-[0] w-full px-0 py-[3em] md:p-[3em]">
        <div className="container px-1 sm:px-2">
          <nav className="flex items-start justify-between  md:justify-center">
            <div className="relative flex w-[100%] flex-wrap items-center justify-between gap-6">
              <Link href="/" legacyBehavior>
                <Image
                  width={50}
                  height={50}
                  className="hover:cursor-pointer"
                  alt="4C Logo"
                  src={logoImage}
                />
              </Link>
              <div
                className={`all fixed top-0 right-0 flex h-[100vh] flex-col gap-6 bg-[#708fe6] p-2 drop-shadow-3xl transition delay-150 ease-in-out lg:relative lg:top-0 lg:right-0 lg:h-full lg:flex-row lg:bg-transparent lg:drop-shadow-sm
              ${menuActive ? "" : "hidden"} z-50  `}
              >
                <button
                  className="text-3xl text-white lg:hidden"
                  onClick={() => setMenuActive(!menuActive)}
                >
                  <BsX />
                </button>
                <div className="flex list-none flex-col items-center justify-center gap-[2rem] lg:flex-row lg:gap-[0.6rem]">
                  {navItems.map((navItem, idx) => (
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
                      className={`hov-bg-theme w-[100%] rounded  px-4 py-2 font-bold transition-all ease-out hover:-translate-y-1 hover:cursor-pointer lg:w-auto
                    ${activeButton === navItem.href
                          ? "bg-theme bg-[#70b7e6] text-white"
                          : "bg-white text-black"
                        }`}
                    >
                      {navItem.pageName}
                    </Link>
                  ))}
                </div>
              </div>
              <button
                className="hamburger text-3xl"
                aria-label="Menu button"
                onClick={() => setMenuActive(!menuActive)}
              >
                <GiHamburgerMenu className="text-white" />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
