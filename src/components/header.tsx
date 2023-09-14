"use client"

import { cn } from "@/lib/utils"
import { useSetShowMenu, useShowMenu } from "@/lib/zustand"
import { motion } from "framer-motion"

const Header = () => {
  const showMenu = useShowMenu()
  const setShowMenu = useSetShowMenu()

  return (
    <header className="fixed z-[99] top-0 left-0 w-screen h-[70px] md:px-16 px-5 flex flex-col">
      <div className="flex justify-between items-center gap-4 flex-wrap py-2">
        <h1 className="lg:text-[2rem] md:text-[1.65rem] text-[1.25rem] font-bold">
          Leul Michael ©
        </h1>
        <motion.div
          role="button"
          className={cn(`menu-icon`, showMenu ? "show" : "")}
          onClick={() => setShowMenu(!showMenu)}
        >
          <span></span>
          <span></span>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
