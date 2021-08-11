import React from "react";
import ProgressBar from "../ProgressBar";

export default {
  title: "Example/ProgressBar",
  component: ProgressBar,
};

const Template = args => <ProgressBar {...args} />;

export const Line = Template.bind({});

Line.args = {
    title: "Прогресс",
    size: "l",
    value: 50,
    view: 'line'
}
export const Circle = Template.bind({});

Circle.args = {
    title: "Прогресс",
    size: "l",
    value: 50,
    view: 'circle'
}

