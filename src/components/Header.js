import { RiMenu4Fill } from "react-icons/ri"
import { useState, useEffect } from "react"
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
    <div style={headerStyle} className="container flex max-w-bodyContainer items-center justify-center">
      <header className="my-[0] w-full px-0 py-[3em] md:p-[3em]">
        <div className="container px-1 sm:px-2">
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
                className="text-4xl z-50 lg:hidden  text-white bg-[#030e2c] p-2 rounded"
                aria-label="Menu button"
                type="button"
                onClick={() => setMenuActive(!menuActive)}
              >
                <RiMenu4Fill />
              </button>
              <div
                className={`w-full h-screen -z-40 fixed bg-[#030e2c] flex p-20 top-0 left-0 ${menuActive ? "z-40" : ""} flex-col items-center justify-center gap-[2rem] lg:flex-row lg:gap-[0.6rem] transition-all duration-1000 lg:w-max lg:h-max lg:!z-40 lg:static lg:bg-inherit lg:p-0 lg:top-auto lg:left-auto lg:![clip-path:unset] lg:transition-none`}
                style={{ clipPath: menuActive ? "circle(100% at 50% 50%)" : "circle(0% at 100% 0)" }}
              >
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
          </nav>
        </div>
      </header>
    </div>
  )
}

const headerStyle = {
  backgroundColor: '#000',
  height: '70px'
}

export default Navbar
