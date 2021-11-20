import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full py-6 pb-10 bg-orange-50">
      <div className="container">
        <nav className="flex items-start justify-between">
          <div className="flex items-center gap-6 md:gap-12">
            <Link href="/">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                4C
              </button>
            </Link>

            <div className="flex items-center gap-6 md:gap-12">
              <Link href="/contributors">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                  Contributors
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-6 md:gap-12">
              <iframe
                src="https://ghbtns.com/github-btn.html?user=FrancescoXX&repo=4c-site&type=star&count=true&size=large"
                frameBorder="0"
                scrolling="0"
                width="100%"
                height="30"
                title="GitHub"
              ></iframe>
            </div>
          </div>

          {/* GitHub Star Button */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
