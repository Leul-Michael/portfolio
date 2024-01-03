"use client"

import { cn } from "@/lib/utils"
import { useSetShowMenu, useShowMenu } from "@/lib/zustand"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

import Wrapper from "../wrapper"
import Link from "next/link"

const menuSlide = {
  initial: { y: "-100%" },
  enter: { y: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    y: "-100%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  },
}

const link = {
  initial: { y: 100 },
  enter: (i: number) => ({
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.25 * i },
  }),
  exit: (i: number) => ({
    y: 100,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
}

const Menu = () => {
  const router = useRouter()
  const setShowMenu = useSetShowMenu()

  return (
    <motion.nav
      className="fixed top-0 left-0 w-screen min-h-screen h-full z-[99] bg-background"
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Wrapper className="h-full max-w-screen-lg">
        <div className="flex md:flex-row flex-col md:justify-between justify-center md:gap-2 gap-20 items-center h-full">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="flex w-full overflow-hidden"
              onClick={() => {
                setShowMenu(false)
              }}
            >
              <motion.div
                className="ml-12 flex gap-5 items-end justify-start group cursor-pointer"
                custom={0}
                variants={link}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <span className="group-hover:border-primary leading-none text-xl w-[40px] h-[40px] border border-border rounded-full flex justify-center items-center">
                  1
                </span>
                <h1 className="lg:text-[10rem] md:text-[8rem] text-[5rem] font-bold capitalize leading-[0.8] tracking-tighter group-hover:tracking-wide duration-300">
                  Index
                </h1>
              </motion.div>
            </Link>
            <Link
              href="/"
              className="flex w-full overflow-hidden"
              onClick={() => {
                setShowMenu(false)
              }}
            >
              <motion.div
                className="flex gap-5 items-end justify-start group cursor-pointer"
                custom={1}
                variants={link}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <span className="group-hover:border-primary leading-none text-xl w-[40px] h-[40px] border border-border rounded-full flex justify-center items-center">
                  2
                </span>
                <h1 className="lg:text-[10rem] md:text-[8rem] text-[5rem] font-bold capitalize leading-[0.8] tracking-tighter group-hover:tracking-wide duration-300">
                  Work
                </h1>
              </motion.div>
            </Link>
            <Link
              href="/"
              className="flex w-full overflow-hidden"
              onClick={() => {
                setShowMenu(false)
              }}
            >
              <motion.div
                className="ml-12 flex gap-5 items-end justify-start group cursor-pointer"
                custom={2}
                variants={link}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <span className="group-hover:border-primary leading-none text-xl w-[40px] h-[40px] border border-border rounded-full flex justify-center items-center">
                  3
                </span>
                <h1 className="lg:text-[10rem] md:text-[8rem] text-[5rem] font-bold capitalize leading-[0.8] tracking-tighter group-hover:tracking-wide duration-300">
                  About
                </h1>
              </motion.div>
            </Link>
          </div>
          <div className="flex flex-col gap-4 md:min-w-[300px] justify-center items-center">
            <Link
              href="/"
              className="flex self-start w-max overflow-hidden"
              onClick={() => {
                setShowMenu(false)
              }}
            >
              <motion.div
                className="ml-12 flex gap-5 items-end justify-start group cursor-pointer"
                custom={1}
                variants={link}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <h1 className="text-4xl font-semibold capitalize leading-[0.8] tracking-tighter group-hover:tracking-wide duration-300">
                  Blog
                </h1>
              </motion.div>
            </Link>
            <Link
              href="/contact"
              className="flex self-start w-max overflow-hidden"
              onClick={() => {
                setShowMenu(false)
              }}
            >
              <motion.div
                className="ml-12 flex gap-5 items-end justify-start group cursor-pointer"
                custom={2}
                variants={link}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <h1 className="text-4xl font-semibold capitalize leading-[0.8] tracking-tighter group-hover:tracking-wide duration-300">
                  Contact
                </h1>
              </motion.div>
            </Link>
          </div>
        </div>
      </Wrapper>
    </motion.nav>
  )
}

export default Menu
