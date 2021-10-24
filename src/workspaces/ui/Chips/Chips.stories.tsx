import React from 'react';
import Chips from "./Chips";
import Card from "../Card";
import  './Chips.stories.scss'
import { Grid } from "./components";

export default {
	title: 'Example/Chips',
	component: Chips
};

const Template = ({ content, icon }) => (
  <Card className='chips-container'>
    <Grid className='chips-grid_grey'>
      {/* Size-L */}
      <Chips size='l' >{content}</Chips>
      <Chips size='l' icon={icon} >{content}</Chips>
      <Chips size='l' icon={icon} rightIcon >{content}</Chips>
      <Chips size='l' icon={icon} />

      <Chips disabled size='l' >{content}</Chips>
      <Chips disabled size='l' icon={icon} >{content}</Chips>
      <Chips disabled size='l' icon={icon} rightIcon >{content}</Chips>
      <Chips disabled size='l' icon={icon} />

      {/* Size-S */}
      <Chips size='s' >{content}</Chips>
      <Chips size='s' icon={icon} >{content}</Chips>
      <Chips size='s' icon={icon} rightIcon >{content}</Chips>
      <Chips size='s' icon={icon} />

      <Chips disabled size='s' >{content}</Chips>
      <Chips disabled size='s' icon={icon} >{content}</Chips>
      <Chips disabled size='s' icon={icon} rightIcon >{content}</Chips>
      <Chips disabled size='s' icon={icon} />

    </Grid>

    <Grid className='chips-grid_white'>
      {/* Size-L */}
      <Chips size='l' >{content}</Chips>
      <Chips size='l' icon={icon} >{content}</Chips>
      <Chips size='l' icon={icon} rightIcon >{content}</Chips>
      <Chips size='l' icon={icon} />

      <Chips disabled size='l' >{content}</Chips>
      <Chips disabled size='l' icon={icon} >{content}</Chips>
      <Chips disabled size='l' icon={icon} rightIcon >{content}</Chips>
      <Chips disabled size='l' icon={icon} />

      {/* Size-S */}
      <Chips size='s' >{content}</Chips>
      <Chips size='s' icon={icon} >{content}</Chips>
      <Chips size='s' icon={icon} rightIcon >{content}</Chips>
      <Chips size='s' icon={icon} />

      <Chips disabled size='s' >{content}</Chips>
      <Chips disabled size='s' icon={icon} >{content}</Chips>
      <Chips disabled size='s' icon={icon} rightIcon >{content}</Chips>
      <Chips disabled size='s' icon={icon} />
    </Grid>
  </Card>
);

export const all = Template.bind({});

all.args = {
  content: 'Chips', 
  icon: 'loader (not working)'
};
