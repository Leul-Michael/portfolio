import { cn } from "@/lib/utils"
import { useHoverdBlogId, useSetHoverdBlogId } from "@/lib/zustand"
import React from "react"

type Blog = {
  slug: number
  imgPath: string
  title: string
  desc: string
  color: string
  min_read: number
}

type BlogExcerptProps = {
  manageModal: (active: boolean, index: number, x: number, y: number) => void
  blog: Blog
}

const BlogExcerpt = ({ manageModal, blog }: BlogExcerptProps) => {
  const hoverId = useHoverdBlogId()
  const setHoverId = useSetHoverdBlogId()

  return (
    <article
      onMouseEnter={(e) => {
        manageModal(true, blog.slug, e.clientX, e.clientY)
        setHoverId(`${blog.slug}`)
      }}
      onMouseLeave={(e) => {
        manageModal(false, blog.slug, e.clientX, e.clientY)
        setHoverId("")
      }}
      className={cn(
        "blog w-full flex flex-col py-8 border-t border-border h-full",
        hoverId !== ""
          ? hoverId === `${blog.slug}`
            ? "opacity-100 scale-100"
            : "opacity-50 scale-[.95]"
          : ""
      )}
    >
      <div className="grid grid-cols-layout-300 md:grid-cols-layout-500 h-full gap-8 md:gap-16 items-center">
        <div className="flex flex-col justify-between items-start gap-4 h-full">
          <p className="text-sm text-primary-muted/80">{blog.min_read} mins</p>
          <h1 className="text-[2.5rem] font-semibold leading-[0.8]">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">Leul Michael</p>
            <p className="text-sm text-primary-muted/80">Jan 20</p>
          </div>
        </div>
        <p className="text-2xl font-medium leading-none">{blog.desc}</p>
      </div>
    </article>
  )
}

export default BlogExcerpt
