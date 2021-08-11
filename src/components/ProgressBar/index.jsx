import React from "react";
import PropTypes from "prop-types";
import {
  Root,
  Box,
  CircleBox,
  CircleSVG,
  CircleBack,
  CircleProgress,
  CircleContent,
  Line,
  Progress,
} from "./ProgressBar.styles";

const ProgressBar = props => {
  const {
    size = "m",
    view = "line",
    value = 100,
    title = "Прогресс",
    children,
    ...attrs
  } = props;

  switch (view) {
    case "circle": {
      return (
          <CircleBox {...attrs}>
            <CircleSVG size={size}>
              <CircleBack size={size} />
              <CircleProgress size={size} value={value} />
            </CircleSVG>
            {children && <CircleContent size={size}>{children}</CircleContent>}
          </CircleBox>
      );
    }
    case "line":
    default: {
      return (
        <Root {...attrs} size={size}>
          {title && (
            <div className="root-title">
              <span className="title">{title}</span>
              <span className="percent">{value}</span>
            </div>
          )}
          <Box {...attrs} size={size}>
            <Line />
            <Progress width={value > 100 ? 100 : value} />
            <span>{value}</span>
          </Box>
        </Root>
      );
    }
  }
};

ProgressBar.propTypes = {
  title: PropTypes.string,
  view: PropTypes.oneOf(["line", "circle"]),
  size: PropTypes.oneOf(["s", "m", "l"]),
  value: PropTypes.number,
};

export default ProgressBar;
