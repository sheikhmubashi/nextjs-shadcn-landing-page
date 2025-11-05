import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";
import { ThemeProvider } from "@/components/theme-provider";
// app/page.tsx

export const metadata: Metadata = {
 title: "Landing Page — Shadcn UI",
 description:
  "A beautifully designed landing page built with Shadcn UI, Tailwind CSS, and Next.js.",
 keywords: [
  "Next.js",
  "Tailwind CSS",
  "Shadcn UI",
  "Landing Page",
  "Dark Mode",
  "Lenis Scroll",
 ],
 authors: [{ name: "Your Name" }],
 openGraph: {
  title: "Landing Page — Shadcn UI",
  description:
   "Experience a modern, minimal, and smooth landing page built with Shadcn UI and Tailwind CSS.",
  url: "https://your-domain.com",
  siteName: "Shadcn Landing Page",
  images: [
   {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Shadcn Landing Page Preview",
   },
  ],
  locale: "en_US",
  type: "website",
 },
 icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
 },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en">
   <body className={`antialiased`}>
    <ThemeProvider
     attribute="class"
     defaultTheme="dark"
     enableSystem
     disableTransitionOnChange
    >
     {children}
    </ThemeProvider>
   </body>
  </html>
 );
}
