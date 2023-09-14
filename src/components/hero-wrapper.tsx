"use client"

import { cn } from "@/lib/utils"
import { useProjectBg } from "@/lib/zustand"
import { ReactNode, useEffect, useState } from "react"

const HeroWrapper = ({ children }: { children: ReactNode }) => {
  const projectBg = useProjectBg()
  const [bg, setBg] = useState(projectBg)

  useEffect(() => {
    setBg(projectBg)
  }, [projectBg])

  return (
    <section
      className={cn(
        "hero-wrapper flex flex-col w-full h-full bg-background",
        bg
      )}
    >
      {children}
    </section>
  )
}

export default HeroWrapper
