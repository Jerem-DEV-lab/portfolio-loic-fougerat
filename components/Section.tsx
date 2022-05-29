import React from 'react'
import type { ReactChild } from '../types'

export interface SectionProps extends ReactChild {
    className?: string,
    children: React.ReactNode
}

const Section = ({ children, className }: SectionProps) => {
    return <section className={`${className ? className : ""} px-3 py-4 bg-slate-100 dark:bg-stone-900`}>
        {children}
    </section>
}

export default Section