"use client"

import { useState, useEffect } from "react"
import PreaLoader from "./preloader"
// import imagesLoaded from "imagesloaded"
import useScroll from "@/context/ScrollProvider"
import AnimatePresenceWrapper from "./AnimatePresenceWrapper"
import { usePathname } from "next/navigation"

const PrealoadWrapper = () => {
  const pathname = usePathname()
  const { lenis } = useScroll()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (pathname !== "/") return
    // imagesLoaded(document.querySelector("#hero")!, function () {
    setTimeout(() => {
      setIsLoading(false)
      //   document.body.style.cursor = 'default'
      window.scrollTo(0, 0)
    }, 2000)
    // })
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
