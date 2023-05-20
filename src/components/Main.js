import navItems from "data/navbar"
import Link from "next/link"

const Main = ({ eyebrow, title, description, primaryLink, twitterLink }) => {
  return (
    <div id="about">
      <div className="flex items-center justify-center">
        <section className="container mb-[4em] md:my-[4em] max-w-bodyContainer md:p-[2em] md:mb-[0em]">
          <div className="grid items-center gap-12 md:grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
              <p className="hidden text-2xl font-bold uppercase tracking-wide text-white md:block">
                {eyebrow}
              </p>

              <h1 className="main-title mt-2 text-5xl font-extrabold tracking-tight text-white md:text-6xl text-center md:text-left ">
                {title}
              </h1>

              <div className="main-description prose-lg my-8 mx-[auto] text-slate-200 md:text-left text-center">
                {description}
              </div>

              <ul className="my-8 flex flex-col flex-wrap gap-4 md:flex-row md:justify-start">
                <li className="self-center break:self-start">{primaryLink}</li>
                <li className="self-center break:self-start">{twitterLink}</li>
                <li className="self-center break:self-start">
                <Link
                    href={navItems[2].href}
                    role="menuitem"
                    tabIndex={0}
                    className={"rounded px-4 py-2 font-bold transition-all ease-out hover:-translate-y-1 hover:cursor-pointer lg:w-auto text-center text-white w-24 bg-[#111827]"}
                >
                  {navItems[2].pageName}
                </Link>
                </li>
                <li className="self-center break:self-start ml-6">
                <Link
                    href={navItems[0].href}
                    role="menuitem"
                    tabIndex={0}
                    className={"rounded px-4 py-2 font-bold transition-all ease-out hover:-translate-y-1 hover:cursor-pointer lg:w-auto text-center text-white bg-[#111827]"}
                >
                  {navItems[0].pageName}
                </Link>

                </li>
              </ul>
            </div>
            <div className="flex justify-end">
              <iframe
                title="Discord Widget"
                width="95%"
                height="500"
                allowtransparency="true"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                src="https://discord.com/widget?id=784142072763383858&theme=dark"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Main
