import ProjectDetails from "../ProjectDetails/ProjectDetails";
import "./Projects.css"

const Projects = ({projects}) => {
  return (
    <div id="projects-div">
      <h2>Projects</h2>
      <div id="projects-container">
        {projects.map(project => (
          <ProjectDetails key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;