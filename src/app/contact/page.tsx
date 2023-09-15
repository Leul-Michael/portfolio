import Button from "@/components/button"
import Wrapper from "@/components/wrapper"

export default function Contact() {
  return (
    <section className="flex flex-col w-full h-full">
      <Wrapper className="relative pt-40 pb-20 gap-20 lg:gap-4 flex justify-start lg:flex-row flex-col lg:justify-between items-start">
        <div className="lg:sticky lg:top-28 flex flex-col gap-4 w-full lg:w-[40%]">
          <h1 className="2xl:text-[6vw] lg:text-[6rem] md:text-[5rem] sm:text-[4.5rem] text-[4rem] font-bold leading-[0.7]">
            Let&apos;s start
          </h1>
          <h1 className="ml-1 sm:ml-3 md:ml-6 2xl:text-[6vw] lg:text-[6rem] md:text-[5rem] sm:text-[4.5rem] text-[4rem] font-bold leading-[0.7]">
            Creating
          </h1>
          <h1 className="2xl:text-[6vw] lg:text-[6rem] md:text-[5rem] sm:text-[4.5rem] text-[4rem] font-bold leading-[0.7]">
            Together
          </h1>
        </div>

        <div className="flex flex-col gap-4 p-4 md:p-6 border border-primary/10 rounded-lg w-full lg:w-[60%]">
          <span className="text-lg font-medium">Your data</span>
          <input
            type="text"
            placeholder="Name*"
            className="max-w-[450px] px-3 border border-primary/40 h-[50px] rounded-lg bg-transparent outline-none focus:ring-offset-transparent focus:ring-2 focus:ring-offset-1 focus:ring-border"
          />
          <input
            type="email"
            placeholder="Email*"
            className="max-w-[450px] px-3 border border-primary/40 h-[50px] rounded-lg bg-transparent outline-none focus:ring-offset-transparent focus:ring-2 focus:ring-offset-1 focus:ring-border"
          />
          <span className="text-lg font-medium">You are intersted in</span>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="cursor-pointer px-8 py-[0.6rem] flex items-center justify-center border border-primary/40 rounded-full whitespace-nowrap">
              Front-end
            </span>
            <span className="cursor-pointer px-8 py-[0.6rem] flex items-center justify-center border border-primary/40 rounded-full whitespace-nowrap">
              Back-end
            </span>
            <span className="cursor-pointer px-8 py-[0.6rem] flex items-center justify-center border border-primary/40 rounded-full whitespace-nowrap">
              Full-stack
            </span>
            <span className="cursor-pointer px-8 py-[0.6rem] flex items-center justify-center border border-primary/40 rounded-full whitespace-nowrap">
              Animation
            </span>
            <span className="cursor-pointer px-8 py-[0.6rem] flex items-center justify-center border border-primary/40 rounded-full whitespace-nowrap">
              Other
            </span>
          </div>
          <span className="text-lg font-medium">Budget in USD</span>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="cursor-pointer px-8 py-[0.6rem] flex items-center justify-center border border-primary/40 rounded-full whitespace-nowrap">
              Under $1k
            </span>
            <span className="cursor-pointer px-8 py-[0.6rem] flex items-center justify-center border border-primary/40 rounded-full whitespace-nowrap">
              1k - 3k
            </span>
            <span className="cursor-pointer px-8 py-[0.6rem] flex items-center justify-center border border-primary/40 rounded-full whitespace-nowrap">
              3k - 5k
            </span>
            <span className="cursor-pointer px-8 py-[0.6rem] flex items-center justify-center border border-primary/40 rounded-full whitespace-nowrap">
              Above $5k
            </span>
          </div>
          <span className="text-lg font-medium">Describe your project</span>
          <textarea
            placeholder="Project details"
            className="resize-y min-h-[200px] p-3 border border-primary/40 h-[50px] rounded-lg bg-transparent outline-none focus:ring-offset-transparent focus:ring-2 focus:ring-offset-1 focus:ring-border"
          />
          <Button
            name="Send Message"
            className="px-6 py-2 mt-8 mb-4 self-start text-xl capitalize font-semibold rounded-full text-primary-muted"
          />
        </div>
      </Wrapper>
    </section>
  )
}
