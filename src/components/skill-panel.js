import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faCog } from "@fortawesome/free-solid-svg-icons";

const SkillPanel = ({ skills }) => {
  return (
    <div className="skill-panel">
      <SkillSetBar skills={skills} />
    </div>
  );
};

const SkillSetBar = ({ skills }) => {
  const CATEGORY_LANG = "lang";
  const CATEGORY_DB = "db";
  const CATEGORY_TOOL = "tool";

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
      case CATEGORY_TOOL:
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
                    <div
                      key={index}
                      className="skill-set-bar-item"
                      style={widthStyle(item.level)}
                    >
                      <div className="skill-set-bar-panel">{item.name}</div>
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

SkillPanel.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      comment: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default SkillPanel;
