import Wrapper from "@/components/wrapper"

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col w-full h-full">
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
      <Wrapper className="relative z-10 flex flex-col h-full w-full sm:justify-center justify-end min-h-screen py-32 md:py-20">
        <div className="flex w-max flex-col">
          <h1 className="2xl:text-[8vw] lg:text-[8rem] md:text-[6rem] sm:text-[4.5rem] text-[4rem] font-bold leading-[0.7]">
            Minimalist
          </h1>
          <h1 className="ml-3 sm:ml-6 md:ml-12 2xl:text-[8vw] lg:text-[8rem] md:text-[6rem] sm:text-[4.5rem] text-[4rem] font-bold leading-[0.7]">
            & Creative
          </h1>
          <h1 className="2xl:text-[2vw] text-[1.8rem] font-semibold leading-[1.1] text-primary-muted self-end">
            Website Developer
          </h1>
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero
