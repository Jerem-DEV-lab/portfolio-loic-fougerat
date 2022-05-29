import React from 'react'

export interface TitleProps {
    title: string,
    className?: string

}
export const Title = ({title, className}: TitleProps) => {
  return <h1 className={className ? className : ""}>{title}</h1>
}
