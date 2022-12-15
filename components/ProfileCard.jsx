import React from "react";
import {
  FaBlog,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaTwitch,
  FaLinkedin,
} from "react-icons/fa";
import SocialLink from "./SocialLink";
import Image from "next/image";

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
  youtube: {
    icon: FaYoutube,
  },
  twitch: {
    icon: FaTwitch,
  },
  linkedin: {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/",
  },
};

const getSocials = (socials, username) => {
  socials = socials.filter((social) => social.username);

  return socials.map((social) => {
    const socialMedia = socialMediaData[social.type];

    if (social.type == "blog" && !social?.username?.includes("http")) {
      social.username = `http://${social.username}`;
    }
    return (
      <SocialLink
        link={[
          socialMedia.url ? socialMedia.url + social.username : social.username,
        ]}
        Icon={socialMedia.icon}
        label={username + "'s " + social.type}
        key={social.type}
      />
    );
  });
};

const ProfileCard = ({ username, avatarUrl, socials = [], description }) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 m-4 rounded-md">
      <div className="w-32 h-32 overflow-hidden rounded-full shadow-sm">
        <Image
          src={avatarUrl}
          alt={username}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <span className="mt-3 text-lg text-white">{username}</span>
      {description?.length > 0 ? (
        <div className="text-sm truncate mt-[.2em] w-[20ch] hover:w-[30ch] hover:text-clip p-[.4em]">
          {description}
        </div>
      ) : (
        ""
      )}
      <div className="flex items-center justify-center pt-1 pb-1 pl-4 pr-4 rounded space-x-3 bg-blue-500/60">
        {getSocials(socials, username)}
      </div>
    </div>
  );
};

export default ProfileCard;
