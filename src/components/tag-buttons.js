import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const TagButtons = ({ tags }) => {
  return (
    <span className="tag-button">
      {tags && tags.length
        ? tags.map((tag, index) => <TagButton tag={tag} key={index} />)
        : null}
    </span>
  );
};

const TagButton = ({ tag }) => {
  return (
    <Link to={`/tags/${kebabCase(tag)}/`}>
      <span className="tag is-light">
        <FontAwesomeIcon icon={faTag} fixedWidth />
        {tag}
      </span>
    </Link>
  );
};

TagButtons.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TagButton.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default TagButtons;
