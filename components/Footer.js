import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="text-black flex flex-col items-center text-center py-5 bg-white">
      <div className="flex items-center pb-3">
        <div className="flex gap-10">
          <a href="https://github.com/FrancescoXX/4c-site">
            <span className="sr-only">Github Repository</span>
            <FaGithub aria-hidden="true" />
          </a>
          <a href="https://discord.com/invite/TcmA2kbJeA">
            <span className="sr-only">Discord Server</span>
            <FaDiscord aria-hidden="true" />
          </a>
          <a href="https://twitter.com/4ccommunityhq">
            <span className="sr-only">Twitter</span>
            <FaTwitter aria-hidden="true" />
          </a>
        </div>
      </div>
      <p>4C | Developed by 4C Community &#169; 2022</p>
    </footer>
  );
};
export default Footer;
