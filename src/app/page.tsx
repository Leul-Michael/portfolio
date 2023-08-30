import AboutSection from "@/components/about-section"
import Blogs from "@/components/blogs"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import SlideImages from "@/components/slide-images"
import { Metadata } from "next"
import PrealoadWrapper from "@/components/preaload-wrapper"

export const metadata: Metadata = {
  metadataBase: new URL("https://nextaddis.com"),
  title:
    "Digital Agency | Web Development, UI/UX Design, Mobile App Development, Software Development",
  description:
    "We are a digital agency that provides a wide range of services, including web development, UI/UX design, mobile app development, and software development. We help businesses of all sizes achieve their digital goals by creating innovative and user-friendly solutions.",
}

export default function Home() {
  return (
    <>
      <PrealoadWrapper />
      <Hero />
      <AboutSection />
      <SlideImages />
      <Projects />
      <Blogs />
      <Footer />
    </>
  )
}
