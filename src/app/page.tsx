import AboutSection from "./about-section"
import Blogs from "./blogs"
import Hero from "./hero"
import Projects from "./projects"
import HeroWrapper from "./hero-wrapper"
import Footer from "@/components/footer"
import SlideImages from "@/components/slide-images"

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
