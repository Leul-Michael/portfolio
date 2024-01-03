"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import imagesLoaded from "imagesloaded"

import PreaLoader from "./preloader"
import useScroll from "@/context/ScrollProvider"
import AnimatePresenceWrapper from "@/components/animate-presence-wrapper"

const PrealoadWrapper = () => {
  const pathname = usePathname()
  const { lenis } = useScroll()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (pathname !== "/") return
    imagesLoaded(document.querySelector("#hero")!, function () {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    })
  }, [pathname])

  useEffect(() => {
    if (pathname !== "/") return
    if (isLoading) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [lenis, isLoading, pathname])

  if (pathname !== "/") {
    return null
  }

  return (
    <AnimatePresenceWrapper>
      {isLoading && <PreaLoader />}
    </AnimatePresenceWrapper>
  )
}

export default PrealoadWrapper
