import React from "react";
import { FaBlog, FaGithub, FaLink, FaTwitter } from "react-icons/fa";
import SocialLink from "./SocialLink";

const getSocials = (socials) => {
  socials = socials.filter((social) => social.username);
  return socials.map((social) => {
    switch (social.type) {
      case "github":
        return (
          <SocialLink
            link={`https://github.com/${social.username}`}
            Icon={FaGithub}
            label="github"
          />
        );
      case "twitter":
        return (
          <SocialLink
            link={`https://twitter.com/${social.username}`}
            Icon={FaTwitter}
            label="twitter"
          />
        );
      case "blog":
        return <SocialLink link={social.username} Icon={FaBlog} label="blog" />;
      default:
        return (
          <SocialLink
            link={social.username}
            Icon={FaLink}
            label="social link"
          />
        );
    }
  });
};

const ProfileCard = ({ username, avatarUrl, socials = [] }) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 m-4 border border-gray-300 shadow rounded-md hover:shadow-lg">
      <div className="w-32 h-32 overflow-hidden rounded-full shadow-sm">
        <img src={avatarUrl} alt={username} className="object-contain" />
      </div>
      <span className="mt-3 text-lg text-gray-700">{username}</span>
      <div className="flex items-center justify-center space-x-3">
        {getSocials(socials)}
      </div>
    </div>
  );
};

export default ProfileCard;
