import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { Root, Header, Footer, Title } from "./Card.styles";

const Card = props => {
  const { children, title, header, footer } = props;

  const showHeader = header || title;

  return (
    <Root>
      {showHeader && <Header>{<Title>{title}</Title>}</Header>}
      {footer && <Footer>{footer}</Footer>}
    </Root>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  header: React.ReactNode,
  footer: React.ReactNode,
  stretch: PropTypes.bool,
};

export default Card;
