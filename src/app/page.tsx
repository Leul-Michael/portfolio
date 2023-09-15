import AboutSection from "@/components/about-section"
import Blogs from "@/components/blogs"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import SlideImages from "@/components/slide-images"
import HeroWrapper from "@/components/hero-wrapper"

export default function Home() {
  return (
    <HeroWrapper>
      <Hero />
      <AboutSection />
      <SlideImages />
      <Projects />
      <Blogs />
      <Footer />
    </HeroWrapper>
  )
}
