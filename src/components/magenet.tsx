"use client"

import { gsap } from "gsap"
import { ReactElement, cloneElement, useEffect, useRef } from "react"

const Magenet = ({ children }: { children: ReactElement }) => {
  const magnetic = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const ref = magnetic.current
    if (!ref) return

    const xTo = gsap.quickTo(ref, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    })
    const yTo = gsap.quickTo(ref, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    })

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { height, width, left, top } = ref.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x * 0.35)
      yTo(y * 0.35)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    ref.addEventListener("mousemove", handleMouseMove)
    ref.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      ref.removeEventListener("mousemove", handleMouseMove)
      ref.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return cloneElement(children, { ref: magnetic })
}

export default Magenet
