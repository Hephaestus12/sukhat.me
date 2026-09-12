import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ganpati at our home · 14–19 September",
  description:
    "See who is planning to visit and add your plan for Ganpati at our home.",
  alternates: { canonical: "https://sukhat.me/ganpati" },
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
