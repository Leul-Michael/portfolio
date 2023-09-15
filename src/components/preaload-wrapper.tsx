"use client"

import { useState, useEffect } from "react"
import PreaLoader from "./preloader"
import imagesLoaded from "imagesloaded"
import useScroll from "@/context/ScrollProvider"
import AnimatePresenceWrapper from "./AnimatePresenceWrapper"

const PrealoadWrapper = () => {
  const { lenis } = useScroll()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    imagesLoaded(document.querySelector("#hero")!, function () {
      setTimeout(() => {
        setIsLoading(false)
        //   document.body.style.cursor = 'default'
        window.scrollTo(0, 0)
      }, 2000)
    })
  }, [])

  useEffect(() => {
    if (isLoading) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [lenis, isLoading])

  return (
    <AnimatePresenceWrapper>
      {isLoading && <PreaLoader />}
    </AnimatePresenceWrapper>
  )
}

export default PrealoadWrapper
