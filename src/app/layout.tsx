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
  title: "tej sukhatme | tej | sukhatme - full stack engineer & chemical process expert",
  description: "tej sukhatme is a full-stack engineer bridging chemical engineering and software development. tej works at weatherpromise in berlin, previously at aws, kodex ai, and rippling. sukhatme specializes in kotlin, react, python and chemical process tools.",
  keywords: ["tej", "sukhatme", "tej sukhatme", "full stack engineer", "chemical engineer", "software developer", "berlin", "weatherpromise", "aws", "kodex ai", "rippling", "bits pilani", "kotlin", "react", "python", "spring boot", "firebase", "flutter", "chemical process engineering", "domain specific languages", "dsl", "machine learning", "weather data", "agricultural technology"],
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
    title: "tej sukhatme - full stack engineer & chemical process expert",
    description: "tej sukhatme is a full-stack engineer bridging chemical engineering and software development. tej works at weatherpromise in berlin, previously at aws, kodex ai, and rippling.",
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
    title: "tej sukhatme - full stack engineer & chemical process expert",
    description: "tej sukhatme is a full-stack engineer bridging chemical engineering and software development. tej works at weatherpromise in berlin, previously at aws, kodex ai, and rippling.",
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
