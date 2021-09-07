import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-blue-600">
      <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-1 w-0">
            <p className="ml-3 text-2xl font-medium text-white truncate">
              {/* <span className="md:hidden">Lorem Ipsum</span> */}
              <span
                className="font-sans font-semibold bg-black border-2 border-transparent hiddden md:inline text-l rounded-md shadow-sm"
              >
                4C
              </span>
            </p>
          </div>
          <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://github.com/FrancescoXX/4c-site"
              target="_blank"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-500"
            >
              <span className="px-1">
                <FaGithub />
              </span>
              4C Github Repo
            </a>
          </div>
          <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="flex p-2 -mr-1 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
