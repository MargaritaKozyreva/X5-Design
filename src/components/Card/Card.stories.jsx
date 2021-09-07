import React from "react";
import Card from "../Card";

export default {
  title: "Example/Card",
  component: Card,
};

const Template = args => <Card {...args} />;

export const withTitle = Template.bind({});

withTitle.args = {
    title: 'Hola!'
}


