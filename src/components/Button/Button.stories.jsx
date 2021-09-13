import React from "react";
import Button from "../Button";

export default {
  title: "Example/Card",
  component: Button,
};

const Template = args => <Button {...args} />;

export const withTitle = Template.bind({});

withTitle.args = {
    title: 'Hola!'
}


