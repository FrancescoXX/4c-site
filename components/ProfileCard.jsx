import React from "react";
import { FaBlog, FaGithub, FaTwitter } from "react-icons/fa";
import SocialLink from "./SocialLink";

const socialMediaData = {
  github: {
    url: "https://github.com/",
    icon: FaGithub,
  },
  twitter: {
    url: "https://twitter.com/",
    icon: FaTwitter,
  },
  blog: {
    icon: FaBlog,
  },
};

const getSocials = (socials) => {
  socials = socials.filter((social) => social.username);

  return socials.map((social) => {
    const socialMedia = socialMediaData[social.type];

    return (
      <SocialLink
        link={socialMedia.url + social.username}
        Icon={socialMedia.icon}
        label={social.type}
        key={social.type}
      />
    );
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
