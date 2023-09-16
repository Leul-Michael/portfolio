import Wrapper from "@/components/wrapper"
import Form from "./form"
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://leul-michael.vercel.app"),
  title: "Contact",
  description: "Contact me by providing the required info using the from.",
}

export default function Contact() {
  return (
    <section className="flex flex-col w-full h-full">
      <Wrapper className="relative pt-40 pb-20 gap-20 lg:gap-4 flex justify-start lg:flex-row flex-col lg:justify-between items-start">
        <div className="lg:sticky lg:top-28 z-[1] flex flex-col gap-4 w-full lg:w-[40%]">
          <h1 className="2xl:text-[6vw] lg:text-[6rem] md:text-[5rem] sm:text-[4.5rem] text-[4rem] font-bold leading-[0.7]">
            Let&apos;s start
          </h1>
          <h1 className="ml-1 sm:ml-3 md:ml-6 2xl:text-[6vw] lg:text-[6rem] md:text-[5rem] sm:text-[4.5rem] text-[4rem] font-bold leading-[0.7]">
            Creating
          </h1>
          <h1 className="2xl:text-[6vw] lg:text-[6rem] md:text-[5rem] sm:text-[4.5rem] text-[4rem] font-bold leading-[0.7]">
            Together!
          </h1>
        </div>

        <Form />
      </Wrapper>
    </section>
  )
}
