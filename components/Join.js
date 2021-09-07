import { FaDiscord } from "react-icons/fa";
const Join = () => {
  return (
    <main className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://discord.com/invite/TcmA2kbJeA"
              className="inline-flex items-center justtify-center px-5 py-3 border border-transparent
                text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-800"
            >
              <span className="px-1">
                <FaDiscord />
              </span>
              Join the Community!
            </a>
          </div>

          <div class="flex justify-center py-14">
            <iframe
              width="350"
              height="500"
              frameborder="0"
              allowtransparency="true"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              src="https://discord.com/widget?id=784142072763383858&theme=dark"
            >
            </iframe>
          </div>
        </div>
      </div>
    </main>
    // <div className="py-6 bg-white">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="inline-flex rounded-md shadow">
    //       <a
    //         href="https://discord.com/invite/TcmA2kbJeA"
    //         className="inline-flex items-center justtify-center px-5 py-3 border border-transparent
    //           text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-800"
    //       >
    //         Join the Community !
    //       </a>
    //     </div>
    //   </div>
    // </div>
    // <div className="bg-gray-30   mt-8">
    //   <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    //     <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    //       <span className="block">
    //         Want to work with creators around the World?
    //       </span>
    //       <span className="block text-red-600">Click on the button</span>
    //     </h2>
    //     <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">

    //       <div className="inline-flex rounded-md shadow">
    //         <a
    //           href="https://discord.com/invite/TcmA2kbJeA"
    //           className="inline-flex items-center justtify-center px-5 py-3 border border-transparent
    //             text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-800"
    //         >
    //           Join the Community !
    //         </a>
    //       </div>
    //     </div>

    //   </div>
    // </div>
  );
};

export default Join;
