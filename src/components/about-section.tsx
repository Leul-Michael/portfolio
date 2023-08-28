"use client"

import { ReactElement, useCallback, useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import Wrapper from "./wrapper"

const phrase =
  "I am Leul michael, a full-stack software developer, who loves to create, modify, design, and develop websites. I design and develop digital solutions with attractive and well-coded interface which are perceived as easier to use and make users loyal."

const AboutSection = () => {
  let refs: any = useRef([])
  const container = useRef(null)

  const splitWords = (phrase: string) => {
    let body: ReactElement[] = []
    phrase.split(" ").forEach((word: string, i: number) => {
      const letters = splitLetters(word)
      body.push(<p key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word: string) => {
    let letters: ReactElement[] = []
    word.split("").forEach((letter: string, i: number) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el)
          }}
        >
          {letter}
        </span>
      )
    })

    return letters
  }

  const createAnimation = useCallback(() => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `-50%`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    })
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    createAnimation()
  }, [createAnimation])

  return (
    <Wrapper>
      <section
        ref={container}
        className="flex w-full h-full flex-col justify-center py-20"
      >
        <div className="grid lg:grid-cols-[150px_1fr] grid-cols-1 items-start gap-8">
          <h1 className="text-2xl font-bold py-2">About</h1>
          <div className="phrase-txt flex flex-wrap gap-2 font-bold">
            {splitWords(phrase)}
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default AboutSection
