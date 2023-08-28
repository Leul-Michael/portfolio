"use client"

import Lenis from "@studio-freight/lenis"
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

type ScrollContextProps = {
  lenis: Lenis | null
}

const ScrollContext = createContext({} as ScrollContextProps)

export default function useScrollProvider() {
  return useContext(ScrollContext)
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  const raf = useCallback(
    (time: number) => {
      lenis?.raf(time)
      requestAnimationFrame(raf)
    },
    [lenis]
  )

  useEffect(() => {
    if (!lenis) {
      setLenis(new Lenis())
    }

    requestAnimationFrame(raf)

    return () => {
      lenis?.destroy()
    }
  }, [lenis, raf])

  lenis?.on(
    "scroll",
    ({ scroll, limit, velocity, direction, progress }: Lenis) => {
      // console.log(progress)
    }
  )

  return (
    <ScrollContext.Provider value={{ lenis }}>
      {children}
    </ScrollContext.Provider>
  )
}
