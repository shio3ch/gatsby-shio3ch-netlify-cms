import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faCog } from "@fortawesome/free-solid-svg-icons";

import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

const SkillPanel = ({ skills }) => {
  return (
    <div className="skill-panel">
      <SkillSetBar skills={skills} />
      {/* <ul>
        {skills && skills.length
          ? skills.map((skill, index) => (
              <li key={index}>
                {skill.name}
                <DispStar level={skill.level} />
                {skill.comment}
              </li>
            ))
          : null}
      </ul> */}
    </div>
  );
};

const SkillSetBar = ({ skills }) => {
  const CATEGORY_LANG = "lang";
  const CATEGORY_DB = "db";
  const CATEGORY_OTHER = "other";

  const langCategories = [];
  const dbCategories = [];
  const otherCategories = [];

  for (let i = 0; i < skills.length; i++) {
    switch (skills[i].category) {
      case CATEGORY_LANG:
        langCategories.push(skills[i]);
        break;
      case CATEGORY_DB:
        dbCategories.push(skills[i]);
        break;
      case CATEGORY_OTHER:
        otherCategories.push(skills[i]);
    }
  }

  const SkillSetBar = ({ array, icon }) => {
    let levelTotal = array.reduce((acc, cur) => acc + cur.level, 0);

    function widthStyle(level) {
      let widthPercent = (level * 100) / levelTotal;
      let styleObj = { width: widthPercent + "%" };
      return styleObj;
    }

    return (
      <div>
        <div className="columns">
          <div className="column is-1 has-text-centered">
            <p className="subtitle is-4">
              <FontAwesomeIcon icon={icon} />
            </p>
          </div>
          <div className="column">
            <div className="skill-set-bar">
              {array && array.length
                ? array.map((item, index) => (
                    <div key={index} className="skill-set-bar-item" style={widthStyle(item.level)}>
                      <div
                        className="skill-set-bar-panel"
                      >
                        {item.name}
                      </div>
                      <div className="skill-set-bar-comment">
                        <p className="content is-small">{item.comment}</p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <SkillSetBar array={langCategories} icon={faCode} />
      <SkillSetBar array={dbCategories} icon={faDatabase} />
      <SkillSetBar array={otherCategories} icon={faCog} />
    </div>
  );
};

// draft

const DispStar = ({ level }) => {
  const MIN_STAR_CNT = 1;
  const MAX_STAR_CNT = 5;

  let star;

  if (level < MIN_STAR_CNT) {
    star = MIN_STAR_CNT;
  } else if (level > MAX_STAR_CNT) {
    star = MAX_STAR_CNT;
  } else {
    star = level;
  }

  const stars = [];
  for (let i = MIN_STAR_CNT; i <= MAX_STAR_CNT; i++) {
    if (i > star) {
      stars.push(<FontAwesomeIcon key={i} icon={faRegularStar} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faSolidStar} />);
    }
  }

  return <span>{stars}</span>;
};

SkillPanel.propTypes = {
  skills: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    comment: PropTypes.string,
  }).isRequired,
};

export default SkillPanel;
