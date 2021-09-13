import React, { memo } from 'react'
import { icon, IconName } from '../../images/icons'

type Props = {
	type: IconName
	className?: string
}

export default memo(({ type, className }: Props) => {
	const Icon = icon[type]
	return <Icon className={className} />
})
