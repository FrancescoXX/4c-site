import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="absolute w-full my-6 z-50">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* Logo - Todo update to SVG */}
            <p className="font-heading text-2xl text-gray-900 mr-16">4C</p>

            {/* Links (for the future) */}
            {/* <div className="text-gray-500 flex gap-12 font-medium">
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/more">
                <a>More</a>
              </Link>
            </div> */}
          </div>

          <div className="">
            <SocialLink
              link="https://github.com/FrancescoXX/4c-site"
              Icon={FaGithub}
              label="See the Repo"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const SocialLink = ({ link, Icon, label }) => (
  <a href={link} target="_blank">
    <Icon className="text-2xl" />
    <span className="sr-only">{label}</span>
  </a>
);
