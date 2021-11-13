import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full py-6 pb-10 bg-orange-50">
      <div className="container">
        <nav className="flex items-start justify-between">
          <div className="flex items-center gap-12">
            <Link href="/">
              <p className="text-2xl text-gray-900 cursor-pointer font-heading">
                4C
              </p>
            </Link>

            <div className="text-gray-500 flex gap-12 font-medium">
              <Link href="/contributors">
                <a>Contributors</a>
              </Link>
            </div>
          </div>

          <div className="flex items-center text-lg space-x-4">
            <Link href="/contributors">
              <span className="font-semibold cursor-pointer hover:text-orange-600"></span>
            </Link>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=FrancescoXX&repo=4c-site&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
