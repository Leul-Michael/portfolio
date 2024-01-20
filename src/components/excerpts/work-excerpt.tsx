"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useHoverdId, useSetHoverdId, useSetProjectBg } from "@/lib/zustand"
import { MouseEventHandler } from "react"

type Work = {
  slug: string
  imgPath: string
  title: string
  state: string
  desc: string
  url: string
  color: string
}

type ProjectExcerptProps = {
  project: Work
}

const WorkExcerpt = ({ project }: ProjectExcerptProps) => {
  const hoverId = useHoverdId()
  const setHoverId = useSetHoverdId()
  const setProjectBg = useSetProjectBg()

  const handleMouseEnter: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    setProjectBg(project.color)
    setHoverId(project.slug)
  }

  const handleMouseLeave: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    setProjectBg("bg-background")
    setHoverId("")
  }

  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "project flex flex-col gap-5",
        hoverId !== ""
          ? hoverId === project.slug
            ? "opacity-100 scale-100"
            : "opacity-50 scale-90"
          : "scale-[.98]"
      )}
    >
      <div className="project-image relative flex w-full rounded-xl overflow-hidden max-h-[400px] h-[70vh] md:max-h-[600px]">
        <Image
          src={project.imgPath}
          alt="project image"
          fill
          sizes="(max-width: 0px) 100vw"
          className="object-cover"
        />
      </div>
      <h1 className="text-[4rem] font-semibold leading-[0.8]">
        {project.title}
      </h1>
      <p className="text-2xl font-medium leading-none">{project.desc}</p>
    </Link>
  )
}

export default WorkExcerpt
