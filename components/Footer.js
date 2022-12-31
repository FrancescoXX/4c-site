import { FaGithub, FaTwitter, FaDiscord, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="md:max-md: flex flex-col items-center gap-4 bg-[#0d1117] p-4 py-8 text-center text-white/80">
      <div className="flex items-center">
        <div className="flex gap-10">
          <a
            target="_blank"
            className="text-2xl hover:text-white"
            href="https://github.com/FrancescoXX/4c-site"
          >
            <span className="sr-only">Github Repository</span>
            <FaGithub aria-hidden="true" />
          </a>
          <a
            target="_blank"
            className="text-2xl hover:text-white"
            href="https://discord.com/invite/TcmA2kbJeA"
          >
            <span className="sr-only">Discord Server</span>
            <FaDiscord aria-hidden="true" />
          </a>
          <a
            target="_blank"
            className="text-2xl hover:text-white"
            href="https://twitter.com/4ccommunityhq"
          >
            <span className="sr-only">Twitter</span>
            <FaTwitter aria-hidden="true" />
          </a>
          <a
            target="_blank"
            className="text-2xl hover:text-white"
            href="https://www.linkedin.com/company/4ccommunity/about/"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="md:max-md: text-xs font-medium text-white/80">
        4C | Developed by 4C Community &#169; 2022
      </p>
    </footer>
  );
};
export default Footer;
