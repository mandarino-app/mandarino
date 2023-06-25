'use client'

import * as React from 'react'

type ButtonProps = {
  text: string
  onClick: () => void
  className: string
}

export const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}
