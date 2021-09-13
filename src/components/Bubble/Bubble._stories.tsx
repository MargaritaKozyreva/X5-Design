import React from "react";
import styled, { css } from "styled-components";
import { SplitedAttachments } from "../../types";
import { getDeclension } from "../../utils";
import Bubble from "./Bubble";

export default {
  title: "Example/Bubble",
  component: Bubble,
};


const Template = args => <Bubble {...args} />;

export const withTitle = Template.bind({});

withTitle.args = {
  isSelf: true,
  isFinish: false,
  isStart: false
}



// type ForwardMessage = {
//   shortBody: string
//   sender: string
//   attachLength: number
// }

// type Props = {
// 	member?: string
// 	body: string
// 	forwardedMessage: ForwardMessage
//   deleted: boolean
//   time: string
// 	splitedAttachs: SplitedAttachments
// 	isReaded: boolean

// 	colorCode?: number
// 	isSelf?: boolean
// 	isFinish?: boolean
// 	isStart?: boolean
// }

// const Template = (props: Props) => {
// 	const {
// 		member,
// 		colorCode,
// 		isFinish,
// 		isSelf,
// 		isStart,
// 		body,
// 		deleted,
// 		forwardedMessage,
// 		splitedAttachs,
// 		time,
// 		isReaded,
// 	} = props

// 	const isShowForward = !!forwardedMessage
// 	const isShowBody = !!body
// 	const isShowFile = splitedAttachs.file.length > 0

// 	const isShowTextContent = isShowBody || isShowForward || isShowFile
// 	const isShowSender = isShowTextContent && !isSelf && isStart

// 	const displaydAttachments = [
// 		// ...splitedAttachs.video, // добавить поддержку видео
// 		...splitedAttachs.image,
// 	]
//   const isShowImages = displaydAttachments.length > 0
  


// 	return (
// 		<Bubble isFinish={isFinish} isSelf={isSelf} isStart={isStart}>
// 			{isShowTextContent && (
// 				<Content mw={isShowImages ? 406 : undefined}>
// 					{isShowSender && !!member && (
// 						<Bubble.Sender
// 							indexColor={colorCode}
// 							person={member}
// 							//
// 						/>
// 					)}

// 					{!!forwardedMessage && (
// 						<Bubble.Forward
// 							isSelf={isSelf}
// 							shortText={forwardedMessage.shortBody}
//               sender={forwardedMessage.sender}
//               attachDiscription={`📎 ${forwardedMessage.attachLength} ${getDeclension(forwardedMessage.attachLength, ['фаил', 'файла', 'файлов'])}`}
// 						/>
// 					)}

// 					{isShowBody && (
// 						<Bubble.Body deleted={deleted}>
// 							{body}
// 							&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
// 						</Bubble.Body>
// 					)}

// 					{isShowFile &&
// 						splitedAttachs.file.map((attach) => (
// 							<DownloadFile href={attach.link}>
// 								<Bubble.File attachment={attach} isSelf={isSelf} />
// 							</DownloadFile>
// 						))}
// 				</Content>
// 			)}
// 			{isShowImages && (
// 						<Bubble.Images
// 							isSelf={isSelf}
// 							isStart={isStart}
// 							attachments={displaydAttachments}
// 							isBubbleHaveContent={isShowTextContent}
// 						/>
// 			)}
// 			<Bubble.Meta time={time} isReaded={isReaded} isSelf={isSelf} isAttach={isShowImages} />
// 		</Bubble>
// 	)
// }

// const Content = styled(Bubble.Content)<{ mw?: number }>`
// 	${({ mw }) =>
// 		mw &&
// 		css`
// 			max-width: ${mw}px;
// 		`}
// `

// const DownloadFile = styled.a.attrs({ download: true })``

// // export const withTitle = Template.bind({});

// // withTitle.args = {
// //     title: 'Hola!'
// // }
