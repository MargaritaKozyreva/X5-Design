import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import * as styles from '../../../styles'

type Props = {
	isSelf?: boolean
	isAttach?: boolean
	time: string
	isReaded: boolean

	className?: string
}

export default memo<Props>(({ isSelf, time, className, isAttach }) => (
	<Div className={className} isSelf={isSelf} isAttach={isAttach}>
		<Time>{time}</Time>
	</Div>
))

const attachMode = ({ isAttach }: Pick<Props, 'isAttach'>) =>
	isAttach &&
	css`
		background: rgba(0, 0, 0, 0.6);
		color: white;
	`

const selfMode = ({ isSelf }: Pick<Props, 'isSelf'>) =>
	isSelf
		? css`
				color: rgba(255, 255, 255, 0.6);
		  `
		: css`
				color: rgba(44, 42, 41, 0.6);
		  `

const Div = styled.div<Pick<Props, 'isAttach' | 'isSelf'>>`
	padding: 2px 8px;
	display: flex;
	border-radius: 12px;
	${selfMode}
	${attachMode}
`

const Time = styled.span`
	${styles.regular.t3}
	text-align: center;
`
