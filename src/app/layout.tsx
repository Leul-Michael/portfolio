import "./globals.css"
import type { Metadata } from "next"
import { Darker_Grotesque } from "next/font/google"
import { ScrollProvider } from "@/context/ScrollProvider"
import GoogleAnalytics from "@bradgarropy/next-google-analytics"

import Header from "@/components/header/header"
import MenuWrapper from "@/components/header/menu-wrapper"
import PrealoadWrapper from "@/app/preaload-wrapper"
import Footer from "@/components/footer"

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://leul-michael.vercel.app/"),
  title: {
    default: "Leul Michael",
    template: "%s | Leul Michael",
  },
  description:
    "Full-stack software developer, who loves to create, modify, design, and develop websites. I design and develop digital solutions with attractive and well-coded interface which are perceived as easier to use and make users loyal.",
  openGraph: {
    title: "Leul Michael",
    description:
      "Full-stack software developer, who loves to create, modify, design, and develop websites. I design and develop digital solutions with attractive and well-coded interface which are perceived as easier to use and make users loyal.",
    url: "https://leul-michael.vercel.app/",
    siteName: "Leul Michael",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Leul Michael",
    card: "summary_large_image",
  },
  verification: {
    google: "_BzowsjaZDmPjXqlfa5s5p5QaApNryfM4vkQZUwQjdg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="_BzowsjaZDmPjXqlfa5s5p5QaApNryfM4vkQZUwQjdg"
      />
      <body className={darkerGrotesque.className}>
        <ScrollProvider>
          <PrealoadWrapper />
          <Header />
          <MenuWrapper />
          <main className="flex min-h-screen flex-col h-full w-full">
            {children}
          </main>
          <Footer />
        </ScrollProvider>
        <GoogleAnalytics measurementId="G-CBCVL02J6P" />
      </body>
    </html>
  )
}
