import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { IAttachment } from '../../../../types'

type Props = {
	attachments: IAttachment[]
	isSelf?: boolean
	isStart?: boolean
	isBubbleHaveContent: boolean
}

export default memo<Props>(({ attachments, isBubbleHaveContent, isSelf, isStart }) => (
	<Container
		countItems={attachments.length}
		isBubbleHaveContent={isBubbleHaveContent}
		isSelf={isSelf}
		isStart={isStart}
	>
		{attachments.map(({ link }, index) => (
			<Preview key={link} index={index} src={link} />
		))}
	</Container>
))

type PropCountItem = {
	countItems?: number
}

const gridMode = ({ countItems }: PropCountItem) => {
	switch (countItems) {
		case 0:
			return css`
				display: none;
			`
		case 1:
			return css`
				display: flex;
			`
		case 2:
			return css`
				grid-template-areas: 'first second';
				grid-template-rows: 200px;
			`
		case 3:
			return css`
				grid-template-areas:
					'first second'
					'third third';
			`
		case 4:
		default:
			return css`
				grid-template-areas:
					'first second'
					'third fourth';
			`
	}
}

type ContainerModeProps = Omit<Props, 'attachments'>

const containerMode = ({ isSelf, isStart, isBubbleHaveContent }: ContainerModeProps) => {
	if (isBubbleHaveContent) {
		return isSelf
			? css`
					border-radius: 6px 6px 6px 18px;
			  `
			: css`
					border-radius: 6px 6px 18px 6px;
			  `
	}
	const topRadius = isStart ? 18 : 6
	return isSelf
		? css`
				border-radius: 18px ${topRadius}px 6px 18px;
		  `
		: css`
				border-radius: ${topRadius}px 18px 18px 6px;
		  `
}

const Container = styled.div<PropCountItem & ContainerModeProps>`
	display: grid;
	grid-template-columns: repeat(2, 200px);
	grid-template-rows: repeat(2, 200px);
	${gridMode}

	grid-gap: 2px;
	margin: 2px;
	border-radius: 6px;
	${containerMode}

	overflow: hidden;
`

type PropIndex = {
	index: number
}

const getGridArea = ({ index }: PropIndex) => {
	switch (index + 1) {
		case 1:
			return css`
				grid-area: first;
			`
		case 2:
			return css`
				grid-area: second;
			`
		case 3:
			return css`
				grid-area: third;
			`
		case 4:
			return css`
				grid-area: fourth;
			`
		default:
			return css`
				display: none;
			`
	}
}

const Preview = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	cursor: pointer;
	${getGridArea}
`
