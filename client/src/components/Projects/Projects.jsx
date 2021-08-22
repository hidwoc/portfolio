import ProjectDetails from "../ProjectDetails/ProjectDetails";

const Projects = ({projects}) => {
  return (
    <div>
      {projects.map(project => (
        <ProjectDetails key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;