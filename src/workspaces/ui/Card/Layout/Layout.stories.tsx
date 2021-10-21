import { H1, H2, H3, H4, H5, Span, P } from '@ui/Typography';
import React from 'react';
import { Layout, Props } from '.';
import Zone from '../Zone';

export default {
	title: 'Example/Layout',
	component: Layout
};

const DemoContent = () => (
	<div>
		<Zone margin="xl"> DemoContent </Zone>
	</div>
);

const Template = (args: Props) => (
	<Layout design="default" { ...args }>
		<DemoContent />
	</Layout>
);

export const withContent = Template.bind({});

withContent.args = {
	design: 'success',
	stretch: true
};
