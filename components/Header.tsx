import { FaGithub } from "react-icons/fa";
// import Link from "next/link";
import { ReactElement } from "react";
import SocialLink from "./Header/SocialLink";

export default function Header(): ReactElement {
  return (
    <header className="absolute z-50 w-full my-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* Logo - Todo update to SVG */}
            <p className="mr-16 text-2xl text-gray-900 font-heading">4C</p>

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

          <div>
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
}
