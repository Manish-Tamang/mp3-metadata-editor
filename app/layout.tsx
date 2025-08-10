import type { Metadata } from "next"
import { Funnel_Sans } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const funnelSans = Funnel_Sans({ 
  subsets: ["latin"],
  variable: "--font-funnel-sans"
})

export const metadata: Metadata = {
  title: "MP3 Tag Editor",
  description: "Free online MP3 metadata editor. Edit title, artist, album, and cover image.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-white text-gray-900 ${funnelSans.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
