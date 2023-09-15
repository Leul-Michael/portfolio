import "./globals.css"
import type { Metadata } from "next"
import { Darker_Grotesque } from "next/font/google"
import { ScrollProvider } from "@/context/ScrollProvider"
import Header from "@/components/header"
import MenuWrapper from "@/components/menu-wrapper"

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://leul-michael.vercel.app"),
  title: "Leul Michael - Welcome",
  description:
    "full-stack software developer, who loves to create, modify, design, and develop websites. I design and develop digital solutions with attractive and well-coded interface which are perceived as easier to use and make users loyal.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={darkerGrotesque.className}>
        <ScrollProvider>
          <Header />
          <MenuWrapper />
          <main className="flex min-h-screen flex-col h-full w-full">
            {children}
          </main>
        </ScrollProvider>
      </body>
    </html>
  )
}
