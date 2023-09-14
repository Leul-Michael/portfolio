"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import Wrapper from "./wrapper"
import Button from "./button"
import BlogExcerpt from "./blog-excerpt"
import blogs from "@/lib/blog.json"

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
}

const Blogs = () => {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal
  const modalContainer = useRef(null)
  const container = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const height = useTransform(scrollYProgress, [0, 0.9], [100, 0])

  let xMoveContainer = useRef<gsap.QuickToFunc | null>(null)
  let yMoveContainer = useRef<gsap.QuickToFunc | null>(null)

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    })
  }, [])

  const moveItems = (x: number, y: number) => {
    xMoveContainer.current!(x)
    yMoveContainer.current!(y)
  }

  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number
  ) => {
    moveItems(x, y)
    setModal({ active, index })
  }

  return (
    <section
      ref={container}
      className="relative flex flex-col py-20 w-full h-full"
    >
      <Wrapper
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY)
        }}
        className="flex flex-col gap-16"
      >
        <h1 className="text-2xl font-bold py-2">Blogs</h1>
        <div className="flex flex-col">
          {blogs.blogs.map((blog) => (
            <BlogExcerpt
              key={blog.slug}
              blog={blog}
              manageModal={manageModal}
            />
          ))}
        </div>
        <Button
          name="More Blogs"
          className="px-6 py-2 self-start text-xl capitalize font-semibold rounded-full text-primary-muted"
        />
      </Wrapper>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="fixed w-[250px] h-[200px] rounded-lg top-[50%] left-[50%] z-[3] pointer-events-none overflow-hidden"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="relative w-full h-full blog-img-slider"
        >
          {blogs.blogs.map((blog, index) => {
            const { imgPath, color } = blog
            return (
              <div
                className="w-full h-full flex justify-center items-center"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <Image
                  src={imgPath}
                  width={250}
                  height={0}
                  alt="image"
                  className="object-cover w-auto h-full"
                />
              </div>
            )
          })}
        </div>
      </motion.div>
      <motion.div style={{ height }} className="blogs-overlay">
        <div className="blogs-overlay-circle"></div>
      </motion.div>
    </section>
  )
}

export default Blogs
