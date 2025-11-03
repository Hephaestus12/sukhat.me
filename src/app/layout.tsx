import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sukhat.me'),
  title: "tej sukhatme - fullstack engineer | dating apps to chemical factories | berlin",
  description: "fullstack software engineer who went from building dating apps to chemical factory tools. currently at weatherpromise in berlin. arduino enthusiast turned mma fighter. passionate about helping recovering nice guys.",
  keywords: ["tej", "sukhatme", "tej sukhatme", "fullstack engineer", "software engineer", "dating app developer", "chemical factory tools", "hiccup dating app", "arduino", "mma fighter", "berlin developer", "weatherpromise", "aws engineer", "kodex ai", "rippling", "bits pilani", "kotlin", "react", "python", "spring boot", "firebase", "flutter", "spotify matching", "youtube matching", "scuba diving", "surfing", "skiing", "rock climbing", "nice guys recovery", "no more mr nice guy", "mumbai", "hyderabad", "bangalore", "covid projects", "side projects", "chemical process engineering", "domain specific languages", "dsl", "machine learning", "weather data", "agricultural technology"],
  authors: [{ name: "tej sukhatme" }],
  creator: "tej sukhatme",
  publisher: "tej sukhatme",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sukhat.me",
    title: "tej sukhatme - fullstack engineer | dating apps to chemical factories",
    description: "fullstack software engineer who went from building dating apps to chemical factory tools. arduino enthusiast turned mma fighter in berlin. passionate about helping recovering nice guys.",
    siteName: "tej sukhatme",
    images: [
      {
        url: "/me.jpg",
        width: 1000,
        height: 1000,
        alt: "tej sukhatme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "tej sukhatme - fullstack engineer | dating apps to chemical factories",
    description: "fullstack software engineer who went from building dating apps to chemical factory tools. arduino enthusiast turned mma fighter in berlin. passionate about helping recovering nice guys.",
    creator: "@TejSukhatme",
    images: ["/me.jpg"],
  },
  alternates: {
    canonical: "https://sukhat.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
