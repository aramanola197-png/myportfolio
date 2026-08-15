import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { ParticleField } from "@/components/ParticleField";
import { Footer } from "@/components/Footer";
import { PfpTransition } from "@/components/PfpTransition";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Raman Ola — AI Specialist",
  description:
    "AI Specialist operating across AI Graphics Design, Website & Software Building, and Writing. Approximately four years working with AI as a creative and production tool.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased bg-[#0a0a0a] text-[#e8e8e8] font-[family-name:var(--font-montserrat)]">
        <PfpTransition>
          <ParticleField />
          <Navigation />
          <main className="relative z-10 min-h-screen">{children}</main>
          <Footer />
        </PfpTransition>
      </body>
    </html>
  );
}
