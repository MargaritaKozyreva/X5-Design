import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import * as styles  from '../../../styles'

type Props = {
	deleted: boolean
	text?: string
	children?: React.ReactNode
}

export default memo<Props>(({ deleted, text, children }) => (
	<Div deleted={deleted}>{text || children}</Div>
))

const modeDeleted = ({ deleted }: Pick<Props, 'deleted'>) =>
	deleted &&
	css`
		opacity: 0.7;
	`

const Div = styled.div<Pick<Props, 'deleted'>>`
	${styles.regular.t1}
	${modeDeleted}
	margin-bottom: 8px;
`
