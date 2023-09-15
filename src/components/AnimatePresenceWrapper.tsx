"use client"

import { AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

const AnimatePresenceWrapper = ({ children }: { children: ReactNode }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>
}

export default AnimatePresenceWrapper
