import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const ButtonRamdon = ({ color, random, name }) => {
  return (
    <div className="buttonAndAuthor">
      <div>
        <p>{name}</p>
      </div>
      <div>
        <button
          style={{ backgroundColor: color, color: "#fff", fontSize: "1.3em" }}
          onClick={random}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default ButtonRamdon;
