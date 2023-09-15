"use client"

import { cn } from "@/lib/utils"
import { useSetShowMenu, useShowMenu } from "@/lib/zustand"
import Wrapper from "./wrapper"
import Link from "next/link"

const Menu = () => {
  const showMenu = useShowMenu()
  const setShowMenu = useSetShowMenu()

  return (
    <nav
      className={cn(
        "menu fixed top-0 left-0 w-screen min-h-screen h-full z-[99] bg-background",
        showMenu ? "show" : ""
      )}
    >
      <Wrapper className="h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="ml-12 flex gap-5 items-end justify-start group cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <span className="leading-none text-xl w-[40px] h-[40px] border border-border rounded-full flex justify-center items-center">
                1
              </span>
              <h1 className="lg:text-[10rem] md:text-[8rem] text-[5rem] font-bold capitalize leading-[0.8] tracking-tighter group-hover:tracking-wide duration-300">
                Index
              </h1>
            </Link>
            <Link
              href="/"
              className="flex gap-5 items-end justify-start group cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <span className="leading-none text-xl w-[40px] h-[40px] border border-border rounded-full flex justify-center items-center">
                2
              </span>
              <h1 className="lg:text-[10rem] md:text-[8rem] text-[5rem] font-bold capitalize leading-[0.8] tracking-tighter group-hover:tracking-wide duration-300">
                Work
              </h1>
            </Link>
            <Link
              href="/"
              className="ml-12 flex gap-5 items-end justify-start group cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <span className="leading-none text-xl w-[40px] h-[40px] border border-border rounded-full flex justify-center items-center">
                3
              </span>
              <h1 className="lg:text-[10rem] md:text-[8rem] text-[5rem] font-bold capitalize leading-[0.8] tracking-tighter group-hover:tracking-wide duration-300">
                About
              </h1>
            </Link>
          </div>
        </div>
      </Wrapper>
    </nav>
  )
}

export default Menu
