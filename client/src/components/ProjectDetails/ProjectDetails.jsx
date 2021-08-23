import { Link } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = ({ project }) => {
  const { id, img, name, techstack, repo, site, description } = project;

  return (
    <div className="project-details">
      <div className="project-img">{img}</div>
      <div className="project-info">
        <p className="project-name">{name}</p>
        <p className="project-techstack">{techstack}</p>
        <div className="project-links">
          <Link to={{ pathname: repo }} target="_blank">
            <img
              id="github"
              src={`${process.env.PUBLIC_URL}/assets/graphics/github.svg`}
              alt="github logo"
              width="20"
              style={{fill: "white"}}
            />
          </Link>
          <Link to={{ pathname: site }} target="_blank">
            <img
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
