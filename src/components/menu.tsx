"use client"

import { motion } from "framer-motion"
import { useSetShowMenu, useShowMenu } from "@/lib/zustand"
import MenuLink from "./menu-link"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"

const Menu = () => {
  const router = useRouter()
  const pathname = usePathname()
  const showMenu = useShowMenu()
  const setShowMenu = useSetShowMenu()

  const nav = {
    open: { y: 0, transition: { duration: 0.35 } },
    closed: {
      y: "-100%",
      transition: { duration: 0.15, delay: 0.4 },
    },
  }

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const link = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  return (
    <motion.nav
      variants={nav}
      initial="closed"
      animate={showMenu ? "open" : "closed"}
      className={`nav`}
    >
      <motion.ul className="nav-links" variants={variants}>
        <motion.li
          variants={link}
          className={cn(
            `nav-link uppercase title small`,
            pathname === "/" ? "active" : ""
          )}
          onClick={() => {
            router.push("/")
            setShowMenu(false)
          }}
        >
          <MenuLink name="Home" />
        </motion.li>
        <motion.li
          variants={link}
          className={cn(
            `nav-link uppercase title small`,
            pathname === "/" ? "active" : ""
          )}
          onClick={() => {
            router.push("/")
            setShowMenu(false)
          }}
        >
          <MenuLink name="Works" />
        </motion.li>
        <motion.li
          variants={link}
          className={cn(
            `nav-link uppercase title small`,
            pathname === "/" ? "active" : ""
          )}
          onClick={() => {
            router.push("/about")
            setShowMenu(false)
          }}
        >
          <MenuLink name="About" />
        </motion.li>
      </motion.ul>
      <motion.div
        className="nav-footer"
        initial={{ opacity: 0 }}
        animate={showMenu ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: showMenu ? 0.5 : 0 }}
      >
        <ul className="socials">
          <li className="c-link-wrapper uppercase">
            <span className="c-link">
              Telegram <span>Telegram</span>
            </span>
          </li>
          <li className="c-link-wrapper uppercase">
            <span className="c-link">
              Github <span>Github</span>
            </span>
          </li>
          <li className="c-link-wrapper uppercase">
            <span className="c-link">
              Linkedin <span>Linkedin</span>
            </span>
          </li>
        </ul>
        <p className="uppercase copyright">Leul Michael © 2023.</p>
      </motion.div>
    </motion.nav>
  )
}

export default Menu
