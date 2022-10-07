import { FaDiscord, FaTwitter } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export default {
  main: {
    eyebrow: "👋 ",
    title: (
      <>
        <div className="">The</div>
        <div>
          <span className="text-primary">
            <span className="text-theme">C</span>ool{" "}
          </span>
          <span className="text-primary">
            <span className="text-theme">C</span>ommunity
          </span>
        </div>
        <div className="text-xs">of</div>
        <div>
          <span className="text-primary">
            <span className="text-theme">C</span>ontent{" "}
          </span>
          <span className="text-primary">
            <span className="text-theme">C</span>reators
          </span>
        </div>
      </>
    ),
    description: (
      <>
        <p>
          Creating content can be rewarding, but it can also be a challenge to
          come up with ideas, get your content out there, and get it noticed.
        </p>
        <p>
          Join our online community to connect with other like-minded creators,
          collaborate on ideas, and motivate each other to create and publish!
        </p>
      </>
    ),
    primaryLink: (
      <a
        href="https://discord.com/invite/TcmA2kbJeA"
        className="btn btn-primary"
        target="_blank"
      >
        <FaDiscord />
        Join Discord Server
      </a>
    ),
    twitterLink: (
      <a
        href="https://twitter.com/4ccommunityhq"
        className="btn btn-primary"
        target="_blank"
      >
        <FaTwitter />
        Follow on Twitter
      </a>
    ),
  },
};
