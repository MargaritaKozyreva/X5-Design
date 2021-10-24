import React, { ButtonHTMLAttributes, useMemo } from 'react'
import  './Chips.scss'
import cn from 'classnames'
import Icon, { IconProps } from '../Icon';


export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 's' | 'l' 
  icon?: IconProps['type']
  children?: string
  value?: string
  rightIcon?: boolean
  active?: boolean
}

export default ({ children, size, value, icon, rightIcon, className, active, ...props }: Props) => {
  const styles = useMemo(() => ({
    container: cn('chips', { 
      'chips_size_s': size !== 'l',  
      'chips_size_l': size === 'l',  
      'chips_reverse': !!rightIcon,
      'chips_with-text': !!children || !!value,  
     }, className), 
    icon: cn('chips__icon', {
      'chips__icon_left': !rightIcon,
      'chips__icon_right': !!rightIcon,
    }), 
    text: cn('chips__text'), 
  }), [children, value, size, rightIcon, className, active])

	return (
    <button {...props} className={styles.container} >
      {icon && <Icon size='s'  type={icon} className={styles.icon} />}
      <span className={styles.text}  >{value || children}</span>
    </button>
	);
};



