import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const DispDate = ({ date }) => {
  const dateStr = date;
  return (
    <span>
      <FontAwesomeIcon icon={faCalendarAlt} fixedWidth />
      {dateStr}
    </span>
  );
};

DispDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DispDate;
