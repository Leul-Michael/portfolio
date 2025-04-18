"use client"

import { cn } from "@/lib/utils"
import { MouseEventHandler, useCallback, useEffect, useRef } from "react"

const SvgCurve = ({ light }: { light?: boolean }) => {
  const containter = useRef<HTMLDivElement | null>(null)
  const path = useRef<SVGPathElement | null>(null)
  let progress = 0
  let x = 0.5
  let reqId: number
  let time = Math.PI / 2

  const animateIn = () => {
    //if the animationOut is running, cancel it and reset time
    if (reqId) {
      cancelAnimationFrame(reqId)
      time = Math.PI / 2
    }
    setPath(progress)
    reqId = requestAnimationFrame(animateIn)
  }

  const resetAnimation = () => {
    cancelAnimationFrame(reqId)
    animateOut()
  }

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

  const animateOut = () => {
    let newProgress = progress * Math.sin(time)
    setPath(newProgress)
    progress = lerp(progress, 0, 0.04)
    time += 0.2
    if (Math.abs(progress) > 0.5) {
      reqId = requestAnimationFrame(animateOut)
    }
    //If the slope is almost flat, we stop the animation
    else {
      time = Math.PI / 2
      progress = 0
    }
  }

  const setPath = useCallback(
    (value: number) => {
      const width = containter.current?.clientWidth
        ? containter.current?.clientWidth
        : window.innerWidth * 1
      path.current?.setAttributeNS(
        null,
        "d",
        `M 0 50 Q ${width * x} ${50 + value} ${width} 50`
      )
    },
    [x]
  )

  useEffect(() => {
    setPath(progress)
    window.addEventListener("resize", () => {
      setPath(progress)
    })
  }, [progress, setPath])

  const manageMouseMove: MouseEventHandler<HTMLSpanElement> = (e) => {
    const { movementY } = e
    const node = e.target as HTMLElement

    const box = node.getBoundingClientRect()
    x = (e.clientX - box.left) / box.width
    progress += movementY
  }

  return (
    <div ref={containter} className="w-full h-[1px] relative">
      <span
        onMouseEnter={() => {
          animateIn()
        }}
        onMouseLeave={() => {
          resetAnimation()
        }}
        onMouseMove={manageMouseMove}
        className="relative hover:h-[150px] h-[40px] w-full flex z-[1] -top-[20px] hover:-top-[75px]"
      ></span>
      <svg className="absolute w-full h-[100px] min-w-full -top-[50px] left-0">
        <path
          className={cn(
            "stroke-1 h-full w-full fill-transparent",
            light ? "stroke-primary-dark" : "stroke-primary"
          )}
          ref={path}
        ></path>
      </svg>
    </div>
  )
}

export default SvgCurve
