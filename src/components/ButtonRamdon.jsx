import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
const ButtonRamdon = ({color,random}) => {
 
    return (
      
        <div>
            <button
          style={{ backgroundColor: color , fontSize: "1.3em" }}
          onClick={random}
        >
          <FontAwesomeIcon icon={faShuffle} />
        </button>
        </div>
    );
};

export default ButtonRamdon;