import React from "react";
import Card from "../Card";

export default {
  title: "Example/Card",
  component: Card,
};

export const Template = args => <Card {...args} />;

export const withTitle = Template.bind({});

withTitle.args = {
    title: 'Hola!'
}

export const withoutTitle = Template.bind({});

withoutTitle.args = {
    content: 'Note you can change the folder that Storybook uses by setting the -c flag to your start-storybook and build-storybook scripts.!'
}

