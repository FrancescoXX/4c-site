import React from "react"
import {
  FaBlog,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaTwitch,
  FaLinkedin,
} from "react-icons/fa"
import SocialLink from "components/SocialLink"
import Image from "next/image"

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
}

const getSocials = (socials, username) => {
  socials = socials.filter((social) => social.username)

  return socials.map((social) => {
    const socialMedia = socialMediaData[social.type]

    if (social.type === "blog" && !social?.username?.includes("http")) {
      social.username = `http://${social.username}`
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
    )
  })
}

const ProfileCard = ({ username, avatar, socials = [], description }) => {
  return (
    <div className="m-4 flex h-64 w-64 flex-col items-center justify-center rounded-md">
      <div className="h-32 w-32 overflow-hidden rounded-full shadow-sm">
        <Image
          src={avatar}
          alt={username}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <span className="mt-3 text-lg text-white">{username}</span>
      {description?.length > 0
        ? (
          <div className="mt-[.2em] w-[20ch] truncate p-[.4em] text-sm hover:w-[30ch] hover:text-clip">
            {description}
          </div>
          )
        : (
            ""
          )}
      <div className="flex items-center justify-center space-x-3 rounded py-1 px-4">
        {getSocials(socials, username)}
      </div>
    </div>
  )
}

export default ProfileCard
