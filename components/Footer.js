import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-10 text-center gap-4 text-white/80 bg-[#0d1117]">
      <div className="flex items-center">
        <div className="flex gap-10">
          <a
            className="text-2xl hover:text-white"
            href="https://github.com/FrancescoXX/4c-site"
          >
            <span className="sr-only">Github Repository</span>
            <FaGithub aria-hidden="true" />
          </a>
          <a
            className="text-2xl hover:text-white"
            href="https://discord.com/invite/TcmA2kbJeA"
          >
            <span className="sr-only">Discord Server</span>
            <FaDiscord aria-hidden="true" />
          </a>
          <a
            className="text-2xl hover:text-white"
            href="https://twitter.com/4ccommunityhq"
          >
            <span className="sr-only">Twitter</span>
            <FaTwitter aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="font-medium text-white/90">
        4C | Developed by 4C Community &#169; 2022
      </p>
    </footer>
  );
};
export default Footer;
