import React from "react"
import Wrapper from "./wrapper"

const Hero = () => {
  return (
    <section className="relative flex flex-col w-full h-full">
      <video
        className="hero__video"
        width="100%"
        height="100%"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src="/video/hero-portfolio.mp4" type="video/mp4" />
      </video>
      <Wrapper className="relative z-10 flex flex-col h-full w-full justify-end  min-h-screen py-16">
        <h1 className="lg:text-[10rem] md:text-[8rem] sm:text-[5rem] text-[4.5rem] font-bold leading-[0.7]">
          Minimalist
        </h1>
        <h1 className="lg:text-[10rem] md:text-[8rem] sm:text-[5rem] text-[4.5rem] font-bold leading-[0.7]">
          & Creative
        </h1>
        <h1 className="lg:text-[5rem] md:text-[3rem] text-[2rem] font-black leading-[1.1] uppercase text-primary-muted">
          Website Developer
        </h1>
      </Wrapper>
    </section>
  )
}

export default Hero
