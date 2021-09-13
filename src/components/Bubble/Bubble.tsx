import React from 'react'
import styled from 'styled-components'
import { Body, Container, Sender, Content, Meta } from './components/atoms'
import { ForwardMessage, FileAttach, Images } from './components/moleculs'

export default class Bubble extends React.Component<React.ComponentProps<typeof Container>> {
	static Body = Body
	static File = FileAttach
	static Sender = Sender
	static Content = Content
	static Images = Images
	static Forward = ForwardMessage
	static Meta = styled(Meta)`
		position: absolute;
		bottom: 6px;
		right: 8px;
	`

	render() {
		return <Container {...this.props} />
	}
}
