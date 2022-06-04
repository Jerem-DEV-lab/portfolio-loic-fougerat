import React from 'react'
import {ReactChild} from '../types'
import Link from 'next/link'

export interface ButtonProps extends ReactChild {
  isLink: boolean,
  href?: string,
  className?: string,
  type?: "button" | "submit" | "reset"

}

export const Button = ({children, isLink, href = "", className, type}: ButtonProps) => {
  return isLink ? <Link href={href}>
    <a className={`border border-amber-300 ${className ? className : ""} px-2 py-2 `}>{children}</a>
  </Link> : <button className={`border border-amber-300 px-2 py-2 ${className ? className : ""}`} type={type}>
    {children}
  </button>
}
