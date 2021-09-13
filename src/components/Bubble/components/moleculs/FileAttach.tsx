import React, { memo } from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import Icon from '../../../Icon_v2'
import * as styles  from '../../../styles'
import { IAttachment } from '../../../../types'
import { useFileSize, useShortFileName } from '../../hooks'
import theme from '../../../../../.storybook/theme'


type Props = {
	attachment: IAttachment
	isSelf?: boolean
}

type ThemeProps = {
	theme: DefaultTheme
}

export default memo<Props>(({ attachment, isSelf }) => {
	const shortName = useShortFileName(attachment)
	const size = useFileSize(attachment)
	return (
		<Container>
			<Logo isSelf={isSelf}>
				<StyledIcon type="document" isSelf={isSelf} />
			</Logo>
			<Discription>
				<FileName isSelf={isSelf}>
					{shortName?.name}
					{shortName?.extension}
				</FileName>
				<FileSize isSelf={isSelf}>{size}</FileSize>
			</Discription>
		</Container>
	)
})

const Container = styled.div`
	display: flex;
	margin-bottom: 8px;
`

const Discription = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const colors = {
		GREEN: '#5FAF2D',
		GREEN2: '#005A28',
		BLACK: '#2C2A29',
		BLACK2: '#393F4C', // ?
		RED: '#E60041',
		SILVER: '#ECEFF4',
		GOLD: '#F2C141',
		GAINSBOROUGH: '#E5E5E5',
		GREY: '#7F8592',
		WHITE: '#FFFFFF',
}


const selfModes = {
	icon: ({ isSelf }: Pick<Props, 'isSelf'> & ThemeProps) =>
		isSelf
			? css`
					fill: ${colors.GREEN};
			  `
			: css`
					fill: ${colors.WHITE};
			  `,

	logo: ({ isSelf }: Pick<Props, 'isSelf'> & ThemeProps) =>
		isSelf
			? css`
					background-color: ${colors.WHITE};
			  `
			: css`
					background-color: ${colors.GREEN};
			  `,

	name: ({ isSelf }: Pick<Props, 'isSelf'> & ThemeProps) =>
		isSelf
			? css`
					color: ${colors.WHITE};
			  `
			: css`
					color: ${colors.GREEN};
			  `,

	size: ({ isSelf }: Pick<Props, 'isSelf'>) =>
		isSelf
			? css`
					color: rgba(255, 255, 255, 0.6);
			  `
			: css`
					color: rgba(44, 42, 41, 0.4);
			  `,
}

const StyledIcon = styled(Icon)<Pick<Props, 'isSelf'>>`
	width: 32px;
	height: 32px;
	${selfModes.icon}
`

const Logo = styled.div<Pick<Props, 'isSelf'>>`
	border-radius: 8px;
	width: 48px;
	height: 48px;
	flex: 0 48px;

	display: flex;
	align-items: center;
	justify-content: center;

	margin-right: 8px;
	${selfModes.logo}
`

const FileName = styled.span<Pick<Props, 'isSelf'>>`
	${styles.medium.t1}
	${selfModes.name}
`

const FileSize = styled.span`
	${styles.regular.t3}
	${selfModes.size}
`
