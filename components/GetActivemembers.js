import { motion, useReducedMotion } from "framer-motion";
import ProfileCard from "./ProfileCard";

const GetActivemembers = ({ users }) => {
  const shouldReduceMotion = useReducedMotion();
  const hoverAnimation = shouldReduceMotion
    ? {}
    : {
        zIndex: 1,
        scale: [1, 1.1, 1.1],
      };

  return users.profiles.map((user) => (
    <motion.div key={user.name} whileHover={hoverAnimation}>
      <ProfileCard
        username={user.name}
        avatarUrl={user.avatarUrl}
        socials={[
          { type: "github", username: user.github },
          { type: "twitter", username: user.twitter },
          { type: "youtube", username: user.youtube },
          { type: "twitch", username: user.twitch },
          { type: "blog", username: user.blogUrl },
          { type: "linkedin", username: user.linkedin },
        ]}
      />
    </motion.div>
  ));
};

export default GetActivemembers;
