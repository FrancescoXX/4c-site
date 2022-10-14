import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const GetProject = ({ projects }) => {
  const shouldReduceMotion = useReducedMotion();
  const hoverAnimation = shouldReduceMotion
    ? {}
    : {
        zIndex: 1,
        scale: [1, 1.1, 1.1],
      };

  return projects.projects.map((project) => (
    <motion.div key={project.name} whileHover={hoverAnimation}>
      <ProjectCard
        author={project.name}
        projectTitle={project.title}
        description={project.description}
        link={project.link}
        twitter={project.twitter}
      />
    </motion.div>
  ));
};

export default GetProject;
