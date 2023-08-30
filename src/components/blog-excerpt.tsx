import React from "react"

const BlogExcerpt = () => {
  return (
    <article className="w-full flex flex-col py-8 border-t border-border h-full">
      <div className="grid grid-cols-layout-300 md:grid-cols-layout-500 h-full gap-8 md:gap-16">
        <div className="flex flex-col justify-between items-start h-full">
          <p className="text-sm">2 mins</p>
          <h1 className="text-[2.5rem] font-semibold leading-[0.8]">
            Some vlog title
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">Leul Michael</p>
            <p className="text-sm text-primary-muted">Jan 20</p>
          </div>
        </div>
        <p className="text-2xl font-medium leading-none h-full">
          Market research firm Gartner predicts that by 2026 one-fourth of
          people will spend at least 1 hour a day in metaverse worlds. We list 5
          key steps to help you take your brand into the metaverse.
        </p>
      </div>
    </article>
  )
}

export default BlogExcerpt
