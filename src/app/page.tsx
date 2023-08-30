import AboutSection from "@/components/about-section"
import Blogs from "@/components/blogs"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import SlideImages from "@/components/slide-images"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SlideImages />
      <Projects />
      <Blogs />
    </>
  )
}
