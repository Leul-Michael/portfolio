"use client"

import { useProjectBg } from "@/lib/zustand"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

import Wrapper from "./wrapper"
import Button from "./button"
import BlogExcerpt from "./blog-excerpt"

const Blogs = () => {
  return (
    <section className="flex flex-col py-20 w-full h-full">
      <Wrapper className="flex flex-col gap-16">
        <h1 className="text-2xl font-bold py-2">Blogs</h1>
        <div className="flex flex-col gap-4">
          <BlogExcerpt />
          <BlogExcerpt />
          <BlogExcerpt />
        </div>
        <Button
          name="More Blogs"
          className="px-6 py-2 self-start text-xl capitalize font-semibold hover:border-accent rounded-full text-primary-muted"
        />
      </Wrapper>
    </section>
  )
}

export default Blogs
