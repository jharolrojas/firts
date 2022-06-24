import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const QuoteBox = ({ cite }) => {
  return (
    <div className="cite">
      <FontAwesomeIcon icon={faQuoteLeft} style={{ fontSize: "3rem" }} />
      <p> {cite}</p>
    </div>
  );
};

export default QuoteBox;
