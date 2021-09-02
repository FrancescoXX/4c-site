const Navbar = () => {
  return (
    <header className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <p className="ml-3 font-mdeium text-white truncate">
              <span className="hiddden md:inline text-l font-sans font-semibold">
                4C
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://discord.com/invite/TcmA2kbJeA"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm
            text-sm font-medium text-red-600 bg-white hover:bg-red-50"
            >
              Join the community !
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2
              focus:ring-white sm:-mr-2"
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
