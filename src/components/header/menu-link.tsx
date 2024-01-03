import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

type MenuLinkProps = {
  name: string
}

const MenuLink = ({ name }: MenuLinkProps) => {
  const linkRef = useRef(null)
  const [isHover, setIsHover] = useState(false)

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 1,
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
    slide: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    still: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  const linkTextContent = name.split("").map((l, i) => (
    <motion.span key={i} variants={link} initial="still" animate="slide">
      {l}
    </motion.span>
  ))

  return (
    <motion.div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className="nav-link__inner"
    >
      <motion.div className={cn(`animated`, isHover ? "hovered" : "")}>
        {linkTextContent}
        <motion.div
          ref={linkRef}
          variants={variants}
          className="normal"
          animate={isHover ? "open" : "closed"}
          initial="closed"
        >
          {linkTextContent}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default MenuLink
