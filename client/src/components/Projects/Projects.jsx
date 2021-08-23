import ProjectDetails from "../ProjectDetails/ProjectDetails";
import "./Projects.css"

const Projects = ({projects}) => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      {projects.map(project => (
        <ProjectDetails key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;