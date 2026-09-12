import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ganpati Utsav at our home · 14–19 September 2026",
  description:
    "You and your family are warmly invited for Ganpati at our home in Bandra. Choose when you may visit, see who else is coming, and join us for Aarti and prasad.",
  alternates: { canonical: "https://sukhat.me/ganpati" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sukhat.me/ganpati",
    title: "Ganpati Utsav at our home 🪔",
    description:
      "14–19 September 2026 · Bandra West. Choose your day, see who else is coming, and join us for Aarti and prasad.",
    siteName: "Ganpati at the Sukhatmes",
    images: [
      {
        url: "/ganpati-preview-2026.png",
        width: 1200,
        height: 630,
        alt: "Invitation to Ganpati Utsav at our home, 14–19 September 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganpati Utsav at our home 🪔",
    description:
      "14–19 September 2026 · Bandra West. Choose your day and join us for Aarti and prasad.",
    images: ["/ganpati-preview-2026.png"],
  },
};

export default function GanpatiPage() {
  return (
    <iframe
      src="https://ganapati-rsvp.tejsukhatme.chatgpt.site"
      title="Ganpati at our home"
      className="fixed inset-0 h-dvh w-full border-0 bg-[#fff5d7]"
      allow="clipboard-write"
    />
  );
}
