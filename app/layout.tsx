import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
  default: "Vectors AI | Intelligent Business Agents",
  template: "%s | Vectors AI",
  },
  description: "Vectors AI builds intelligent AI agents that automate workflows, streamline operations, and scale with your business. Discover the power of Vectors AI automation.",
  generator: "v0.dev",
  metadataBase: new URL("https://vectors.build"),
  openGraph: {
    title: "Vectors AI | Intelligent Business Agents",
    description: "Automate your workflows with AI agents that adapt to your business needs.",
    url: "https://vectors.build",
    siteName: "Vectors",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vectors AI | Intelligent Business Agents",
    description: "Automate your workflows with AI agents that adapt to your business needs.",
    images: ["/opengraph-image.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
