"use client"

import { useProjectBg } from "@/lib/zustand"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

import projects from "@/lib/project.json"

import Wrapper from "./wrapper"
import Button from "./button"
import ProjectExcerpt from "./project-excerpt"

const Projects = () => {
  const projectBg = useProjectBg()
  const [bg, setBg] = useState(projectBg)

  useEffect(() => {
    setBg(projectBg)
  }, [projectBg])

  return (
    <section
      className={cn(
        "projects flex flex-col py-20 w-full h-full bg-background",
        bg
      )}
    >
      <Wrapper className="flex flex-col gap-16">
        <h1 className="text-2xl font-bold py-2">Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {projects.projects.slice(0, 4).map((project) => (
            <ProjectExcerpt key={project.slug} project={project} />
          ))}
        </div>
        <Button
          name="More Projects"
          className="px-6 py-2 self-start text-xl capitalize font-semibold rounded-full text-primary-muted"
        />
      </Wrapper>
    </section>
  )
}

export default Projects
