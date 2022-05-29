import React from 'react'

export interface TitleProps {
    title: string,

}
export const Title = ({title}: TitleProps) => {
  return <h1>{title}</h1>
}
