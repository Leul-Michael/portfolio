import { Metadata } from "next"
import works from "@/lib/works.json"

import Wrapper from "@/components/wrapper"
import WorkExcerpt from "@/components/excerpts/work-excerpt"
import HeroWrapper from "../hero-wrapper"

export const metadata: Metadata = {
  title: "Works",
  description: "Wanna know what's in my verse? checkout my recent works.",
}

export default function Works() {
  return (
    <HeroWrapper className="relative z-[2] bg-background">
      <Wrapper className="flex-col py-20 gap-20">
        <h1 className="text-center 2xl:text-[8vw] lg:text-[8rem] md:text-[6rem] sm:text-[4.5rem] text-[4rem] font-bold leading-[0.7]">
          My Works.
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {works.works.slice(0, -1).map((work) => (
            <WorkExcerpt key={work.slug} project={work} />
          ))}
        </div>
      </Wrapper>
    </HeroWrapper>
  )
}
