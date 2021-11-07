import React from 'react'
import Chips from './Chips'
import Card from '../Card'
import './Chips.stories.scss'
import { Grid } from './components'

export default {
	title: 'Example/Chips',
	component: Chips,
}

const Template = ({ content, icon }) => (
	<Card className="chips-container">
		<Grid className="chips-grid_grey">
			{/* Size-L */}
			<Chips size="l" value={content} />
			<Chips size="l" icon={icon} value={content} />
			<Chips size="l" icon={icon} reverse value={content} />
			<Chips size="l" icon={icon} />

			<Chips disabled size="l" value={content} />
			<Chips disabled size="l" icon={icon} value={content} />
			<Chips disabled size="l" icon={icon} reverse value={content} />
			<Chips disabled size="l" icon={icon} />

			{/* Size-S */}
			<Chips size="s">{content}</Chips>
			<Chips size="s" icon={icon} value={content} />
			<Chips size="s" icon={icon} reverse value={content} />
			<Chips size="s" icon={icon} />

			<Chips disabled size="s" value={content} />
			<Chips disabled size="s" icon={icon} value={content} />
			<Chips disabled size="s" icon={icon} reverse value={content} />
			<Chips disabled size="s" icon={icon} />
		</Grid>

		<Grid className="chips-grid_white">
			{/* Size-L */}
			<Chips size="l">{content}</Chips>
			<Chips size="l" icon={icon} />
			<Chips size="l" icon={icon} reverse />
			<Chips size="l" icon={icon} />

			<Chips disabled size="l" />
			<Chips disabled size="l" icon={icon} />
			<Chips disabled size="l" icon={icon} reverse />
			<Chips disabled size="l" icon={icon} />

			{/* Size-S */}
			<Chips size="s">{content}</Chips>
			<Chips size="s" icon={icon} />
			<Chips size="s" icon={icon} reverse />
			<Chips size="s" icon={icon} />

			<Chips disabled size="s" />
			<Chips disabled size="s" icon={icon} />
			<Chips disabled size="s" icon={icon} reverse />
			<Chips disabled size="s" icon={icon} />
		</Grid>
	</Card>
)

export const all = Template.bind({})

all.args = {
	content: 'Chips',
	icon: 'loader (not working)',
}
