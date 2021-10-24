import React, { memo } from 'react'
import icon from '../../icons'
import cn from 'classnames'
import  './Icon.scss'

export type Props = {
  type: keyof typeof icon
  size?:  's'
	className?: string
}

export default memo<Props>(({ type, className, size = 's' }) => {
  const  style = {
    container: cn('icon', `icon_size_${size}`, className),
    svg: cn('icon__svg' , `icon__svg_size_${size}`),
  }

  // if (type) {
  // // TODO: Нужно сделать import icon from '../../icons' 
  // const Icon = icon[type]
  // return <Icon className={style.icon} />
  // } 
  return (
    <div className={style.container}>
      <img alt={type} src={require('./fake_icon.png')} className={style.svg} />
    </div>
  )
})
