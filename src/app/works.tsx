import Link from "next/link"
import works from "@/lib/works.json"

import Wrapper from "@/components/wrapper"
import Button from "@/components/button"
import WorkExcerpt from "@/components/excerpts/work-excerpt"

const Works = () => {
  return (
    <section className="flex flex-col py-20 w-full h-full">
      <Wrapper className="flex flex-col gap-16">
        <h1 className="text-2xl font-bold py-2">Works</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {works.works.slice(0, 4).map((work) => (
            <WorkExcerpt key={work.slug} project={work} />
          ))}
        </div>
        <Link href="/works" className="self-start">
          <Button
            name="More Works"
            className="px-6 py-2 text-xl capitalize font-semibold rounded-full text-primary-muted"
          />
        </Link>
      </Wrapper>
    </section>
  )
}

export default Works
