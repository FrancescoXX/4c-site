import Link from "next/link";

const Navbar = () => {
 
  return (
    <header className= "fixed z-10 h-19 w-full shadow-sm">
      <div className= "w-full">
        <nav className="flex items-center w-full h-20 bg-blue-900">
        <div className="flex items-center justify-between w-full mx-20">
          <div className="flex items-center justify-center flex-shrink-0">
            <Link href="/">
              <img
                className="w-[100%] max-w-[50px] hover:cursor-pointer"
                frameBorder="0"
                allowtransparency="true"
                src="https://raw.githubusercontent.com/FrancescoXX/4c-site/main/mediakit/4c-logo-circle.png"
              />
            </Link>
           </div>
            <div className="hidden md:block">
             <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/active-members">
                  <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                    Active Members
                  </button>
                  </Link>

                  <Link href="/Faq">
                    <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                      FAQ
                    </button>
                  </Link>

                  <Link href="/projects">
                    <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                      Projects
                    </button>
                  </Link>

                  <Link href="/Blog">
                    <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                      Blog
                    </button>
                  </Link>
                  
                  <Link href="/Videos">
                    <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                      Videos
                    </button>
                  </Link>
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=FrancescoXX&repo=4c-site&type=star&count=true&size=large"
                    frameBorder="0"
                    scrolling="0"
                    width="120"
                    height="30"
                    title="GitHub"
                  ></iframe>
                </div>
              </div>
           </div>

           
        </nav>
      </div>
    </header>
  );
};

export default Navbar;