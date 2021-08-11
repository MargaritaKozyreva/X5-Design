import React from "react";

import Checkbox from "../Checkbox";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
};

const Template = args => <Checkbox {...args} />;

export const withLabel = Template.bind({});
withLabel.args = {
    label: 'accept'
};
