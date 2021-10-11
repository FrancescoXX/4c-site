import { motion, useReducedMotion } from "framer-motion";
import ProfileCard from "./ProfileCard";

const GetContributors = ({ users }) => {
  const shouldReduceMotion = useReducedMotion();

  const hoverAnimation = shouldReduceMotion
    ? {}
    : {
        position: "relative",
        zIndex: 1,
        scale: [1, 1.2, 1.1],
        rotate: [0, 2, -5, 0],
      };

  let contribs = users.contributors;
  return contribs.map((user) => (
    <motion.div key={user.name} whileHover={hoverAnimation}>
      <ProfileCard
        username={user.name}
        avatarUrl={user.avatarUrl}
        socials={[
          { type: "github", username: user.github },
          { type: "twitter", username: user.twitter },
          { type: "youtube", username: user.youtube },
          { type: "blog", username: user.blogUrl },
        ]}
        contributions={user.contributions}
      />
    </motion.div>
  ));
};

export default GetContributors;
