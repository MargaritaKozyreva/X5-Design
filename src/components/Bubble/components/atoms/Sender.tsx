import React, { memo } from 'react'
import styled from 'styled-components'
import * as styles from '../../../styles'

type Props = {
	indexColor?: number
	person: string
}

export default memo<Props>(({ indexColor, person }) => (
	<Div indexColor={indexColor}>{person}</Div>
))

const Div = styled.div<Pick<Props, 'indexColor'>>`
	${styles.medium.t1}
	color: ${({ indexColor = 0, theme }) => theme.messageSenderColor[indexColor]};
`
