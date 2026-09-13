import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sukhatme's Ganpati @ Rocky Hill · 14–19 September 2026",
  description:
    "You and your family are warmly invited to Sukhatme's Ganpati @ Rocky Hill. Choose when you may visit, see who else is coming, and join us for Aarti and prasad.",
  alternates: { canonical: "https://sukhat.me/ganpati" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sukhat.me/ganpati",
    title: "Sukhatme's Ganpati @ Rocky Hill 🪔",
    description:
      "14–19 September 2026 · Bandra West. Choose your day, see who else is coming, and join us for Aarti and prasad.",
    siteName: "Sukhatme's Ganpati @ Rocky Hill",
    images: [
      {
        url: "/ganpati-invite-reminder.png",
        width: 1024,
        height: 1536,
        alt: "Invitation to Sukhatme's Ganpati @ Rocky Hill, 14–19 September 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukhatme's Ganpati @ Rocky Hill 🪔",
    description:
      "14–19 September 2026 · Bandra West. Choose your day and join us for Aarti and prasad.",
    images: ["/ganpati-invite-reminder.png"],
  },
};

export default function GanpatiPage() {
  return (
    <iframe
      src="https://ganapati-rsvp.tejsukhatme.chatgpt.site"
      title="Sukhatme's Ganpati @ Rocky Hill"
      className="fixed inset-0 h-dvh w-full border-0 bg-[#fff5d7]"
      allow="clipboard-write"
    />
  );
}
