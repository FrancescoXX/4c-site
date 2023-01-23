import { BsX } from "react-icons/bs"
import { useState, useEffect } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link"

// import navbar data
import navItems from "data/navbar"
import Image from "next/image"
import logoImage from "assets/logo.png"

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [activeButton, setActiveButton] = useState()

  useEffect(() => {
    const local = window.localStorage.getItem("active")
    setActiveButton(local)
  }, [])

  return (
    <div className="container flex max-w-bodyContainer items-center justify-center">
      <header className="my-[0] w-full px-0 py-[3em] md:p-[3em]">
        <div className="container px-1 sm:px-2">
          <nav className="flex items-start justify-between  md:justify-center">
            <div className="relative flex w-full flex-wrap items-center justify-between gap-6">
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
                className="text-4xl"
                aria-label="Menu button"
                onClick={() => setMenuActive(!menuActive)}
              >
                <BsX />
              </button>
              <div
                className={`w-full h-screen ${menuActive ? '' : 'hidden'}`}
              >
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
                      className={`hov-bg-theme w-full rounded  px-4 py-2 font-bold transition-all ease-out hover:-translate-y-1 hover:cursor-pointer lg:w-auto
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
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
