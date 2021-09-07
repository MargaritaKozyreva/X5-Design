import React from "react";
import PropTypes from "prop-types";
import "../../components/style.css";
import "./index.css";
import { Root, Header, Footer, Title } from "./Card.styles";

const Card = props => {
  const { children, title, header, footer, ...attrs } = props;

  const showHeader = header || title;

  return (
    <Root>
      {showHeader && <Header>{<Title>{title}</Title>}</Header>}
      {footer && <Footer>{footer}</Footer>}
    </Root>
  );
};

export default Card;

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  header: React.ReactNode,
  footer: React.ReactNode,
  stretch: PropTypes.bool,
};
