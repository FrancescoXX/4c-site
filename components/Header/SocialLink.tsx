import { IconType } from "react-icons";
import { ReactElement } from "react";

interface Props {
  link: string;
  Icon: IconType;
  label: string;
}

export default function SocialLink({label, link, Icon}: Props): ReactElement {
  return <a href={link} target="_blank" rel="noopener noreferrer">
    <Icon className="text-2xl" />
    <span className="sr-only">{label}</span>
  </a>;
}