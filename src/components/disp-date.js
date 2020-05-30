import React from "react";
import Proptype from "prop-types";

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

DispDate.proptype = {
  date: Proptype.string.isRequired,
};

export default DispDate;
