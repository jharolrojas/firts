import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const QuoteBox = ({ title, name, firts, direction, phone, email, img }) => {
  return (
    <div>
      <div className="contenidoArticle">
        <h1>
          {title} {name} {firts}
        </h1>
        <div className="containerImg">
          <img src={img} alt="user" />
        </div>
        <div className="containerInformation">
          <p>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} /> {email}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faPhone} /> {phone}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} /> {direction}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
