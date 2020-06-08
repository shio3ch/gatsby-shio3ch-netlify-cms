import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faBuilding,
  faSchool,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

import Image from "./image";

const Timeline = ({ timelineItems }) => {
  const nodes = timelineItems;

  return (
    <div>
      <div className="timeline">
        <header className="timeline-header">
          <span className="tag is-medium is-dark">DEPLOY</span>
        </header>

        {nodes && nodes.length
          ? nodes.map((node) => (
              <div className="timeline-item">
                <TimelineMarkerDiv
                  marker={node.marker}
                  markerIcon={node.markerIcon}
                />
                <div className="timeline-content">
                  <p className="heading">{node.period}</p>
                  <div className="content is-mideum">
                    <p className="subtitle is-4">{node.job}</p>
                    <Image
                      imageInfo={{
                        fileName: node.img,
                        alt: node.job,
                        imageStyle: {
                          width: "100%",
                          height: "240px",
                        },
                      }}
                    />
                  </div>
                  <Details details={node.details} />
                  <DispSkills skills={node.skills} />
                </div>
              </div>
            ))
          : null}

        <header className="timeline-header">
          <span className="tag is-medium is-dark">現在</span>
        </header>
      </div>
    </div>
  );
};

const DispSkills = ({ skills }) => {
  return (
    <div className="tag-list">
      <ul>
        {skills && skills.length
          ? skills.map((skill, index) => (
              <li key={index}>
                <span className="tag is-light">
                  <FontAwesomeIcon icon={faTag} fixedWidth />
                  {skill}
                </span>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

const TimelineMarkerDiv = ({ marker, markerIcon }) => {
  if (marker == null) {
    return null;
  }

  let icon;
  switch (markerIcon) {
    case "school":
      icon = faSchool;
      break;
    case "building":
      icon = faBuilding;
      break;
    case "project":
      icon = faProjectDiagram;
      break;
    default:
      icon = null;
  }

  if (icon == null) {
    let clazzName = "timeline-marker is-" + marker;
    return <div className={clazzName}></div>;
  } else {
    let clazzName = "timeline-marker is-" + marker + " is-icon";
    return (
      <div className={clazzName}>
        <FontAwesomeIcon icon={icon} />
      </div>
    );
  }
};

const Details = ({ details }) => {
  const brTag = /\n/;
  return (
    <div>
      {details.split(brTag).map((str, index) => {
        return <p key={index}>{str}</p>;
      })}
    </div>
  );
};

Timeline.propTypes = {
  timeline: PropTypes.any.isRequired,
};

export default Timeline;
