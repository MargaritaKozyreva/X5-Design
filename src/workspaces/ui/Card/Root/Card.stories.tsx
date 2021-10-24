import { H1, H2, H3, H4, H5, Span, P } from '@ui/Typography';
import React from 'react';
import Card, { Props } from './index';

export default {
	title: 'Example/Card',
	component: Card
};

const Template = (args: Props) => (
	<Card id={ 1 } design="default" { ...args }>
		<Card.Zone direction="row" margin="m">
			<H1>Мой прогресс</H1>
		</Card.Zone>

		<Card.Content margin="m">
			<H2 weight="bold" transform="capitalize">
				Содержание
			</H2>
			<Span weight="regular" size="s">
				Actually you are correct. I have not yet been convinced that dynamic definition of mixins is a good idea.
				However the issue you linked to was about including a mixin using a dynamic name. Which I am for. The OP's
				problem is solved better by accepting an argument to a single mixin instead of defining a unique mixin for each
				icon.
			</Span>
		</Card.Content>

		<Card.Zone direction="row" margin="m">
			<P size="m" weight="bold">
				Footer
			</P>
		</Card.Zone>
	</Card>
);

export const withContent = Template.bind({});

withContent.args = {
	design: 'success',
	stretch: true,
};
