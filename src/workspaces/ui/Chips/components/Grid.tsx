import React from 'react'
import  './styles.scss'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  className?: string
}

const Grid = ({ children, className }: Props) => {
  const style = {
    container: cn('grid', className)
  }

  const renderItem = (item, index = 0) => (<Grid.Item key={index}>
      {item}
    </Grid.Item>
    )

  return (
    <div className={style.container}>
      {Array.isArray(children) ? children.map(renderItem) : renderItem(children) }
    </div>
  )
}

Grid.Item = ({ children, }: Props) => (
  <div className='item'>
    {children}
  </div>
)

export default Grid