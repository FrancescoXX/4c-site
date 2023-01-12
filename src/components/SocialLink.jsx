import React from "react"

const SocialLink = ({ link, Icon, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300">
    <Icon className="text-2xl" />
    <span className="sr-only">{label}</span>
  </a>
)

export default SocialLink
