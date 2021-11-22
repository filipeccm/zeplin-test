import React from 'react';

import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
  rounded: false,
};
Primary.parameters = {
  zeplinLink: "zpl://components?pid=61956ef13990bfa950881901&coid=6196b02b4a6172a9962e1cb8"

}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  primary: false,
  rounded: false,
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Button',
  primary: true,
  rounded: true,
};

