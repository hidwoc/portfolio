import { Link } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = ({ project }) => {
  const { img, name, techstack, repo, site, description } = project;

  return (
    <div className="project-details">
      <div className="project-img">
        {/* <img src={img} alt={name} width='300'/> */}
        <video width="400" controls >
          <source src={img}/>
        </video>
        </div>
      <div className="project-info">
        <p className="project-name">{name}</p>
        <p className="project-techstack">{techstack}</p>
        <div className="project-links">
          <Link to={{ pathname: repo }} target="_blank">
            <img
              className="link-logo"
              id="github"
              src={`${process.env.PUBLIC_URL}/assets/graphics/github.svg`}
              alt="github logo"
              width="20"
            />
          </Link>
          <Link to={{ pathname: site }} target="_blank">
            <img
              className="link-logo"
              id="linkedin"
              src={`${process.env.PUBLIC_URL}/assets/graphics/external-link.svg`}
              alt="external link logo"
              width="20"
            />
          </Link>
        </div>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
