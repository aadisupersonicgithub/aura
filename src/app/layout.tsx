import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura - Strong Body. Strong Mind.",
  description: "Aura is the ecosystem of discipline, fitness, and mindset mastery. We transform body + mind into a lifestyle of power and resilience.",
  keywords: "fitness, mindset, discipline, wellness, personal development, body transformation, mental strength",
  openGraph: {
    title: "Aura - Strong Body. Strong Mind.",
    description: "Transform your body and mind into a lifestyle of power and resilience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura - Strong Body. Strong Mind.",
    description: "Transform your body and mind into a lifestyle of power and resilience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
