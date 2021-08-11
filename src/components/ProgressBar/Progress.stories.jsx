import React from "react";
import ProgressBar from "../ProgressBar";

export default {
  title: "Example/ProgressBar",
  component: ProgressBar,
};

export const Template = args => <ProgressBar {...args} />;

export const Line = Template.bind({});

Line.args = {
    title: "Прогресс",
    size: "m",
    value: 20,
    view: 'line'
}
export const Circle = Template.bind({});

Circle.args = {
    title: "Прогресс",
    size: "m",
    value: 50,
    view: 'circle'
}

