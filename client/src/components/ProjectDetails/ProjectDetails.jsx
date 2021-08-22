import { Link } from "react-router-dom";

const ProjectDetails = ({ project }) => {
  const { id, img, name, techstack, repo, site, description } = project;

  return (
    <div>
      <div>{img}</div>
      <div>
        {name}
        {techstack}
        <div>
          <Link to={{ pathname: { repo } }} target="_blank">
            <img
              id="github"
              src={`${process.env.PUBLIC_URL}/assets/graphics/github.svg`}
              alt="github logo"
              width="20"
            />
          </Link>
          <Link to={{ pathname: { site } }} target="_blank">
            <img
              id="linkedin"
              src={`${process.env.PUBLIC_URL}/assets/graphics/external-link.svg`}
              alt="external link logo"
              width="20"
            />
          </Link>
        </div>
        {description}
      </div>
    </div>
  );
};

export default ProjectDetails;
