import {Link} from "react-router-dom";

const IconLink = () => {
  return (
    <Link to={{ pathname: { repo } }} target="_blank">
      <img
        id="github"
        src={`${process.env.PUBLIC_URL}/assets/graphics/github.svg`}
        alt="github logo"
        width="20"
      />
    </Link>
  );
};

export default IconLink;
