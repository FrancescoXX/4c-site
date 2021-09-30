import { FaDiscord, FaPlayCircle } from "react-icons/fa";
const Join = () => {
  return (
    <main className="py-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex gap-4">
          <a
            href="https://discord.com/invite/TcmA2kbJeA"
            className="btn btn-primary"
          >
            <FaDiscord />
            Join the Community!
          </a>
          <a href="https://discord.com/invite/TcmA2kbJeA" className="btn">
            <FaPlayCircle className="text-3xl text-orange-400" />
            Why 4C?
          </a>
        </div>
      </div>
    </main>
  );
};

export default Join;
