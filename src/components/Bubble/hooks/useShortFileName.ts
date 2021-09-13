import { IAttachment } from '../../../types'

const pattern = /.([0-9a-z]+)(?:[?#]|$)/i
export default function useShortFileName({ filename }: IAttachment) {
	const findedExtension = filename.match(pattern)
	if (findedExtension) {
		const name = filename.slice(0, -findedExtension[0].length)
		return {
			extension: findedExtension[0],
			name: name.length > 25 ? `${name.substring(0, 20)}...${name.slice(-3)}` : name,
		}
	}
}
