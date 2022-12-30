import React, { ReactNode } from "react"

export interface IButtonProps {
  design: string
  size: string
  children: ReactNode
  onClick?: () => void
  [rest:string]: any
}

export interface IButtonStyle<StyleValue> {
  [key: string]: StyleValue
}

export interface ISlideButtonProps {
  format: string
  onClick: () => void
}

export interface IIconProps {
  color: string
  size: string
}