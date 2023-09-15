"use client"

import { cn } from "@/lib/utils"
import { useSetShowMenu, useShowMenu } from "@/lib/zustand"
import { motion } from "framer-motion"
import Link from "next/link"

import Magenet from "./magenet"

const Header = () => {
  const showMenu = useShowMenu()
  const setShowMenu = useSetShowMenu()

  return (
    <>
      <header className="fixed z-[99] top-0 left-0 w-screen h-[70px] md:px-16 px-5 flex flex-col">
        <div className="flex justify-between items-center gap-4 flex-wrap py-2">
          <Link
            href="/"
            className="lg:text-[2rem] md:text-[1.65rem] text-[1.25rem] font-bold"
          >
            Leul Michael ©
          </Link>
        </div>
      </header>
      <Magenet>
        <motion.div
          role="button"
          className={cn(
            `menu-icon z-[100] my-2 md:mr-16 mr-5`,
            showMenu ? "show" : ""
          )}
          onClick={() => setShowMenu(!showMenu)}
        >
          <span></span>
          <span></span>
        </motion.div>
      </Magenet>
    </>
  )
}

export default Header
