import React, { Component } from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export default class TagButtons extends Component {
  static propTypes = {
    tags: PropTypes.any.isRequired,
  };

  render() {
    const tags = this.props.tags;

    return (
      <span className="tag-button">
        {tags && tags.length
          ? tags.map((tag) => (
              <Link to={`/tags/${kebabCase(tag)}/`}>
                <span class="tag is-light"><FontAwesomeIcon icon={faTag} fixedWidth />{tag}</span>
              </Link>
            ))
          : null}
      </span>
    );
  }
}
