
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Analytics } from "@vercel/analytics/react"
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { Hero } from "@/components/Hero";
import { AcercaDe } from "@/components/AcercaDe";
import { Video } from "@/components/Video";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });
const heroData = {
  heading: "¿Sueñas con tu hogar perfecto?",
   text: "Yo te ayudo a encontrarlo",
   cta: {
     href: "https://niddo.ai/niddia",
     text: "Plática con Niddia",
     external: true,
   },
   image: {
     url: "/img/niddiaHero.png",
     alternativeText: "hero image",
     name: "hero.png",
   },
   bg: {
     url: "/img/bg.png",
     alternativeText: "background image",
     name: "bg-hero.png",
   }
 };
const navItems = [
  { name: "Inicio", link: "#inicio", icon: <Hero data={heroData} /> },
  { name: "Acerca de", link: "#acerca", icon: <AcercaDe /> },
  { name: "Desarrollos", link: "#desarrollos"},
];
const logo = {
  href: "/img/logoblack.png"
};

export const metadata: Metadata = {
  title: "Niddo Real Estate",
  description: "Diseñado por Oasis Creativa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
        <FloatingNav navItems={navItems} className="" logo={logo}/>
          <div>{children}</div>
         
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
