"use client"

import Image from "next/image"
import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"

const slider1 = [
  {
    color: "#e3e5e7",
    src: "c2.jpg",
  },
  {
    color: "#d6d7dc",
    src: "decimal.jpg",
  },
  {
    color: "#e3e3e3",
    src: "c2.png",
  },
  {
    color: "#21242b",
    src: "google.jpg",
  },
]

const slider2 = [
  {
    color: "#d4e3ec",
    src: "maven.jpg",
  },
  {
    color: "#e5e0e1",
    src: "nextaddis.jpg",
  },
  {
    color: "#d7d4cf",
    src: "mobile.jpg",
  },
  {
    color: "#e1dad6",
    src: "wix.jpg",
  },
]

const SlideImages = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <section
      ref={container}
      className="flex flex-col gap-8 relative z-[1] bg-primary h-full justify-center overflow-hidden mb-20"
    >
      <motion.div
        style={{ x: x1 }}
        className="relative w-[120vw] right-[40vw] md:right-[20vw] flex gap-4"
      >
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="min-w-[200px] w-[25%]  min-h-[100px] h-[200px] sm:h-[45vh] flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <div className="w-[80%] h-[80%] relative">
                <Image
                  fill
                  sizes="(max-width: 0px) 100vw"
                  alt={`image ${index}`}
                  src={`/images/${project.src}`}
                  className="object-cover"
                />
              </div>
            </div>
          )
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="relative w-[120vw] -right-0 flex gap-4"
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="min-w-[200px] w-[25%] min-h-[100px] h-[200px] sm:h-[45vh] flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className="w-[80%] h-[80%] relative">
                <Image
                  fill
                  sizes="(max-width: 0px) 100vw"
                  alt={"image"}
                  src={`/images/${project.src}`}
                  className="object-cover"
                />
              </div>
            </div>
          )
        })}
      </motion.div>
      {/* <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div> */}
    </section>
  )
}

export default SlideImages
