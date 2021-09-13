import styled, { css } from 'styled-components'

export type Props = {
	isSelf?: boolean
	isFinish?: boolean
	isStart?: boolean
}

const selfProps = ({ isSelf }: Props) =>
	isSelf
		? css`
				background-color: ${({ theme }) => theme.colors.GREEN};
				color: white;
		  `
		: css`
				background-color: white;
		  `

const blockStyle = ({ isSelf, isStart }: Props) =>
	isSelf
		? css`
				border-top-left-radius: 20px;
				border-top-right-radius: ${isStart ? 20 : 8}px;
				border-bottom-left-radius: 20px;
				border-bottom-right-radius: 8px;
		  `
		: css`
				border-top-left-radius: ${isStart ? 20 : 8}px;
				border-top-right-radius: 20px;
				border-bottom-left-radius: 8px;
				border-bottom-right-radius: 20px;
		  `

export default styled.div<Props>`
	border-radius: 8px;
	position: relative;
	display: block;
	overflow: hidden;
	max-width: 100%;
	box-shadow: 0 8px 48px rgb(0 0 0 / 2%);
	${selfProps}
	${blockStyle}
`
