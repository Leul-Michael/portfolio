import { Dispatch, SetStateAction, useEffect } from "react"
import { motion } from "framer-motion"

import useScroll from "@/context/ScrollProvider"
import { Close, MailCheck, MailX } from "../svgs"
import AnimatePresenceWrapper from "@/components/AnimatePresenceWrapper"

type ResponseModalProps = {
  show: boolean
  loading: boolean
  success: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

const messages = {
  initial: { y: 10, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
}

const closeButton = {
  initial: { y: 10, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: 10,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
}

const ResponseModal = ({
  show,
  setShow,
  loading,
  success,
}: ResponseModalProps) => {
  const { lenis } = useScroll()

  useEffect(() => {
    if (show) {
      lenis?.stop()
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
      lenis?.start()
    }
  }, [show, lenis])

  return (
    <div className="modal fixed top-[50%] left-[50%] z-[200] -translate-x-[50%] -translate-y-[50%] p-6  rounded-lg bg-background max-w-[90%] sm:max-w-[400px] h-max w-full border border-border flex flex-col">
      <AnimatePresenceWrapper mode="popLayout">
        {!loading && (
          <motion.span
            onClick={() => setShow(false)}
            variants={closeButton}
            initial="initial"
            animate="enter"
            exit="exit"
            className="cursor-pointer self-end text-primary-muted/50 p-[0.4rem] w-[30px] h-[30px] rounded-full flex items-center justify-center border border-border"
          >
            <Close />
          </motion.span>
        )}
        {loading ? (
          <motion.div
            variants={messages}
            key="loading"
            initial="initial"
            animate="enter"
            exit="exit"
            className="flex flex-col gap-2"
          >
            <p>Sending please wait.</p>
            <div className="conversation-loader">
              <span className="long"></span>
              <span className="short"></span>
            </div>
          </motion.div>
        ) : success ? (
          <motion.div
            variants={messages}
            key="success"
            initial="initial"
            animate="enter"
            exit="exit"
            className="flex items-center gap-2 text-accent text-lg"
          >
            <MailCheck />
            <p className="font-bold">Message sent!</p>
          </motion.div>
        ) : (
          <motion.div
            variants={messages}
            key="error"
            initial="initial"
            animate="enter"
            exit="exit"
            className="flex items-center gap-2 text-red-500 text-lg"
          >
            <MailX />
            <p className="font-bold">Message failed!</p>
          </motion.div>
        )}
      </AnimatePresenceWrapper>
    </div>
  )
}

export default ResponseModal
