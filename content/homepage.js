import { FaDiscord, FaPlayCircle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default {
  hero: {
    eyebrow: "What is 4C?",
    title: (
      <>
        The Cool Community For{" "}
        <strong className="text-orange-600">Content Creators</strong>
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
      >
        <FaDiscord />
        Join the Community!
      </a>
    ),
    secondaryLink: (
      <a onClick={() => toast("Video coming soon!!!")} className="btn">
        <FaPlayCircle className="text-3xl text-orange-600" />
        Why 4C?
        <ToastContainer/>
      </a>
    ),
  },
};
