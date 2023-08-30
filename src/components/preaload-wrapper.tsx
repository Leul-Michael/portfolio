"use client"

import { useState, useEffect } from "react"
import PreaLoader from "./preloader"
import { AnimatePresence } from "framer-motion"
import imagesLoaded from "imagesloaded"
import useScroll from "@/context/ScrollProvider"

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
    <AnimatePresence mode="wait">{isLoading && <PreaLoader />}</AnimatePresence>
  )
}

export default PrealoadWrapper
