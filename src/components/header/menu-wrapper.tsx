"use client"

import { useShowMenu } from "@/lib/zustand"

import AnimatePresenceWrapper from "@/components/animate-presence-wrapper"
import Menu from "./menu"

const MenuWrapper = () => {
  const showMenu = useShowMenu()

  return <AnimatePresenceWrapper>{showMenu && <Menu />}</AnimatePresenceWrapper>
}

export default MenuWrapper
