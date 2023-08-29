import AboutSection from "@/components/about-section"
import Hero from "@/components/hero"
import SlideImages from "@/components/slide-images"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SlideImages />
      <section className="w-full h-screen"></section>
      <section className="w-full h-screen"></section>
    </>
  )
}
