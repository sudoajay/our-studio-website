import React from 'react'
import { NavLink } from 'react-router-dom'

interface ButtonProps {
  onClick?: () => void
  type?: 'button' | 'link' | 'submit' | 'reset'
  isExternal?: boolean
  href?: string
  className?: string
  style?: React.CSSProperties
  target?: string
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  isExternal,
  href,
  className = '',
  style = {}, // Default empty object for style
  target,
  children
}) => {
  const onClickHandler = () => {
    if (onClick) onClick()
  }

  // Ensure style is always defined, even if empty
  const buttonStyle = style || {}

  if (type === 'link') {
    if (isExternal) {
      return (
        <a
          href={href}
          className={className}
          style={buttonStyle}
          target={target === '_blank' ? '_blank' : undefined}
          rel="noreferrer"
          onClick={onClickHandler}
        >
          {children}
        </a>
      )
    }

    return (
      <NavLink to={href || ''} className={className} style={buttonStyle} onClick={onClickHandler}>
        {children}
      </NavLink>
    )
  }

  return (
    <button className={className} type={type} style={buttonStyle} onClick={onClickHandler}>
      {children}
    </button>
  )
}

export default Button
