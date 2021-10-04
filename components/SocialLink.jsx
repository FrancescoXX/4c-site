import React from "react";

const SocialLink = ({ link, Icon, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <Icon className="text-2xl hover:text-orange-600" />
    <span className="sr-only">{label}</span>
  </a>
);

export default SocialLink;
