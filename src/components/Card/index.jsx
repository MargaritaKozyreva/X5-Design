import React from "react";
import PropTypes from "prop-types";
import "../../components/style.css";
import "./index.css";

const Card = ({ id, label, design, title, content }) => {
  const mode = design === "primary" ? "root--primary" : "root--secondary";
  return (
    <div id={id} className={["root", mode].join(" ")}>
      {title && <h1>{title}</h1>}
      {content && <div>{content}</div>}
    </div>
  );
};

export default Card;

Card.propTypes = {
  design: PropTypes.oneOf(["primary", "secondary"]),
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
};
