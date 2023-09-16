"use client"

import { AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

const AnimatePresenceWrapper = ({
  children,
  mode,
}: {
  children: ReactNode
  mode?: "wait" | "popLayout" | "sync"
}) => {
  return <AnimatePresence mode={mode ?? "wait"}>{children}</AnimatePresence>
}

export default AnimatePresenceWrapper
