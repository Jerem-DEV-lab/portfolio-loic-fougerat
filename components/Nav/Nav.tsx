import Link from 'next/link'
import React, { useRef } from 'react'
import { NavItem, NavItems } from './NavItems'
import { MenuIcon } from '@heroicons/react/outline'
import { useToggle } from '../../hooks/useToggle'


export const Nav = () => {
  const { state: open, toggle } = useToggle(false)
  return <nav
    className="
        flex flex-wrap
        items-center
        w-full
        py-4
        sm:py-0
        px-4
        justify-between
        text-gray-700
        dark:text-white
       border-b-[1px]
       dark:border-zinc-800
        bg-slate-100 dark:bg-stone-900
      "
  >
    <div>
      <Link href="/">
        <a className="font-semibold">
          Loic Fougerat
        </a>
      </Link>
    </div>
    <button className="cursor-pointer sm:hidden block" onClick={toggle}>
      <MenuIcon className="h-6 w-6" />
    </button>


    <div className={`${open ? "" : "hidden"} w-full sm:flex sm:items-center sm:w-auto sm:flex-1 sm:justify-center`}>
      <ul
        className="
            pt-4
            text-base text-gray-800
            sm:flex
            sm:justify-between 
            sm:pt-0"
      >
        {NavItems.map((i: NavItem, idx: number) => (
          <li key={idx}>
            <Link href={i.href}>
              <a className="sm:p-4 py-2 block hover:text-amber-400 dark:text-white">{i.label}</a>
            </Link>

          </li>
        ))}
      </ul>
    </div>
  </nav>
}
