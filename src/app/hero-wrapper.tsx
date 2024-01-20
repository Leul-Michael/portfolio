"use client"

import { cn } from "@/lib/utils"
import { useProjectBg } from "@/lib/zustand"
import { ReactNode } from "react"

const HeroWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  const projectBg = useProjectBg()

  return (
    <section
      className={cn(
        "hero-wrapper flex flex-col w-full h-full bg-background",
        className ?? "",
        projectBg
      )}
    >
      {children}
    </section>
  )
}

export default HeroWrapper
