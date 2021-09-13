export interface IAttachment {
	_id: string
	type: 'audio' | 'video' | 'image' | 'file' | 'sticker'
	filename: string
	link: string
	preview: string
	size: number
	height: number
	width: number
	title: string
	mimeType: string
}


export type SplitedAttachments = {
	[key in IAttachment['type']]: IAttachment[]
}