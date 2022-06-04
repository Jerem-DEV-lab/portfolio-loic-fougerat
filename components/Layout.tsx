import React from 'react'
import type {ReactNode} from 'react'
import {Nav} from './Nav/Nav'
import MetaHead from './MetaHead'

export interface LayoutProps {
  children?: ReactNode,
  container?: boolean,
  nav: boolean | undefined,
  pageTitle: string
}

export const Layout = ({children, container, nav, pageTitle}: LayoutProps) => {
  return <>
    <MetaHead title={pageTitle}/>
    <div className="dark:bg-stone-900 dark:text-white bg-slate-100 dark:bg-stone-900">
      <div className={`${container ? "container mx-auto " : ""}`}>
        {nav ? <Nav/> : null}
        {children}
      </div>
    </div>
  </>
}
