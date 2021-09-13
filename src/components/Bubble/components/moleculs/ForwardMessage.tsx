import React, { memo } from 'react'
import styled from 'styled-components'
import * as styles  from '../../../styles'

type Props = {
	isSelf?: boolean
	sender: string
	shortText?: string
	attachDiscription: string
}

const DirtyHack = () => <>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</>

export default memo((props: Props) => {
	const { shortText, isSelf, sender, attachDiscription } = props
	return (
		<Container isSelf={isSelf}>
			<Sender isSelf={isSelf}>{sender}</Sender>
			{!!shortText && (
				<Body isSelf={isSelf}>
					{shortText}
					{!attachDiscription && (
						<DirtyHack />
					)}
				</Body>
			)}
			{!!attachDiscription && (
				<Body isSelf={isSelf}>
					{attachDiscription}
					<DirtyHack />
				</Body>
			)}
		</Container>
	)
})

const Container = styled.div<Pick<Props, 'isSelf'>>`
	border-left: 2px solid ${({ isSelf }) => (isSelf ? 'white' : ' #5faf2d')};
	padding: 0 0 0 8px;

	display: flex;
	flex-direction: column;

	margin-bottom: 8px;
`

const Sender = styled.div<Pick<Props, 'isSelf'>>`
	color: ${({ isSelf }) => (isSelf ? 'white' : 'rgba(44, 42, 41, 0.8)')};
	${styles.medium.t2}
`

const Body = styled.div<Pick<Props, 'isSelf'>>`
	color: ${({ isSelf }) => (isSelf ? 'hsla(0,0%,100%,.8)' : 'rgba(44, 42, 41, 0.4)')};
	overflow: hidden;
	text-overflow: ellipsis;
	${styles.regular.t2}
`
