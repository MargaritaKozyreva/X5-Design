import React from 'react'
import Button, { Props } from './Button'
import Card from '@ui/Card'
import Chips from '@ui/Chips'
import './Button.stories.scss'

export default {
	title: 'Example/Button',
	component: Button,
}

const Template = ({ content, icon }) => {
	return (
		<Card className={style.card}>
			<div className={style.value} />
			<Chips size="s" value="PRIMARY" className={style.mode} />
			<Chips size="s" value="SECONDARY" className={style.mode} />
			<Chips size="s" value="GHOST" className={style.mode} />

			<div className={style.size}>L</div>
			<Button icon={icon} mode="primary" size="l" value={content} />
			<Button icon={icon} mode="secondary" size="l" value={content} />
			<Button icon={icon} mode="ghost" size="l" value={content} />

			<div className={style.size}>M</div>
			<Button icon={icon} mode="primary" size="m" value={content} />
			<Button icon={icon} mode="secondary" size="m" value={content} />
			<Button icon={icon} mode="ghost" size="m" value={content} />

			<div className={style.size}>S</div>
			<Button icon={icon} mode="primary" size="s" value={content} />
			<Button icon={icon} mode="secondary" size="s" value={content} />
			<Button icon={icon} mode="ghost" size="s" value={content} />

			<div className={style.size}>disabled</div>
			<Button icon={icon} disabled mode="primary" size="l" value={content} />
			<Button icon={icon} disabled mode="secondary" size="m" value={content} />
			<Button icon={icon} disabled mode="ghost" size="s" value={content} />
		</Card>
	)
}

export const Text = Template.bind({})
export const TextIcon = Template.bind({})
export const Icon = Template.bind({})

Text.args = {
	content: 'Button',
}

TextIcon.args = {
	content: 'Button',
	icon: 'loader',
}

Icon.args = {
	icon: 'loader',
}

const CARD = 'button-card'

const style = {
	card: CARD,
	mode: `${CARD}__mode`,
	size: `${CARD}__size`,
	value: `${CARD}__value`,
}
