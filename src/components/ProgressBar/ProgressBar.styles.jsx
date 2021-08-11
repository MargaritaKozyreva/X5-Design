import styled, { css } from "styled-components";
import { progressbarStyle } from "./progressbar";

const line = progressbarStyle.line;
const circle = progressbarStyle.circle;

const ROOT_WIDTH = {
  s: 20,
  m: 40,
  l: 100,
};

export const Root = styled.div`
  font-family: "Open Sans", sans-serif;
  color: #222429;
  ${props =>
    css`
      width: ${ROOT_WIDTH[props.size]}%;
    `};
  box-sizing: border-box;

  .root-title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
  }

  .title {
    font-size: 16px;
  }

  .percent {
    font-size: 18px;
    font-weight: 700;
  }
  .percent::after {
    content: "%";
  }
`;

export const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ width }) =>
    width !== undefined &&
    css`
      width: ${width}%;
      background-color: ${width >= 80
        ? "#ADE25C"
        : width >= 50 && width < 80
        ? "#FFA800"
        : "#FF493C"};
    `}

  ${line.progress.base}
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
`;

export const Line = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${line.back}
`;


export const CircleSVG = styled.svg`
  fill: none;
  ${props => circle.box.size[props.size]};
`;

const RADIUS = {
  s: 32,
  m: 44,
  l: 64,
};

const calculateCircleLength = r => Math.PI * 2 * r;

const calculateProgressLength = (r, value) => {
  const circleLength = calculateCircleLength(r);
  return (circleLength * (100 - value)) / 100;
};

export const CircleBack = styled.circle`
  ${props => circle.size[props.size]};
  ${circle.back};
`;

export const CircleProgress = styled.circle`
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50%;
  transition: ease-in .3s;


  ${props => circle.size[props.size]};
  ${circle.progress.base}

  ${({ size, value }) => css`
    stroke-dasharray: ${(calculateCircleLength(RADIUS[size]) * value) / 100}
      ${calculateProgressLength(RADIUS[size], value)};
    stroke: ${value >= 80
        ? "#ADE25C"
        : value >= 50 && value < 80
        ? "#FFA800"
        : "#FF493C"}
  `}

`;

export const CircleBox = styled.div`
  position: relative;
  display: inline-flex;
`;

export const CircleContent = styled.div`
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${props => circle.content.size[props.size]};
`;
