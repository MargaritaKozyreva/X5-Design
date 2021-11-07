import React, { ButtonHTMLAttributes, useMemo } from 'react'
import './Chips.scss'
import cn from 'classnames'
import Icon, { IconProps } from '../Icon'

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: 's' | 'l'
	icon?: IconProps['type']
	children?: string
	value?: string
	reverse?: boolean
	active?: boolean
}

export default function Chips({
	children,
	size,
	value,
	icon,
	reverse,
	className,
	active,
	...props
}: Props) {
	const styles = useMemo(
		() => ({
			container: cn(
				BASE,
				`${BASE}_size_${byDefaulSize(size)}`,
				{
					[`${BASE}_reverse`]: !!reverse,
					[`${BASE}_with-text`]: !!children || !!value,
				},
				className,
			),
			icon: cn(ICON, { [`${ICON}_reverse`]: reverse }),
			text: cn(TEXT),
		}),
		[children, value, size, reverse, className],
	)

	return (
		<button {...props} className={styles.container}>
			{icon && <Icon size="s" type={icon} className={styles.icon} />}
			<span className={styles.text}>{value || children}</span>
		</button>
	)
}

const BASE = 'x5-design-chips'
const ICON = `${BASE}__icon`
const TEXT = `${BASE}__text`

const byDefaulSize = (size: Props['size'] = 'l') =>
	['s', 'l'].includes(size) ? size : 'l'
