import AboutSection from "./about-section"
import Blogs from "./blogs"
import Hero from "./hero"
import Works from "./works"
import HeroWrapper from "./hero-wrapper"
import SlideImages from "@/components/slide-images"

export default function Home() {
  return (
    <HeroWrapper>
      <Hero />
      <AboutSection />
      <SlideImages />
      <Works />
      <Blogs />
    </HeroWrapper>
  )
}
