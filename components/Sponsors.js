import { FaDiscord } from "react-icons/fa";
import ProfileCard from "./ProfileCard";

const Sponsors = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 p-8 text-lg text-gray-600 bg-orange-300 shadow-md space-y-6 rounded-md">
        <p>
          None yet. But do you want to support us? Join our discord and shoot a
          message. We'll love to talk!
        </p>
        <a
          href="https://discord.com/invite/TcmA2kbJeA"
          className="btn btn-primary"
        >
          <FaDiscord />
          Join the Community!
        </a>
      </div>
    );
  }
  return users.map((user) => (
    <ProfileCard
      username={user.name}
      avatarUrl={user.avatarUrl}
      socials={[
        { type: "github", username: user.github },
        { type: "twitter", username: user.twitter },
        { type: "blog", username: user.blogUrl },
      ]}
    />
  ));
};

export default Sponsors;
