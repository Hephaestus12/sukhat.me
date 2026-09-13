import type { Metadata } from "next";
import { notFound } from "next/navigation";

const languages = {
  en: { locale: "en_IN", title: "Sukhatme's Ganpati @ Rocky Hill", date: "14–19 September 2026", description: "Click this link to choose your day and RSVP · 14–19 September 2026 · See who else is coming, Aarti times, prasad and directions." },
  mr: { locale: "mr_IN", title: "सुखात्मे यांचा गणपती @ रॉकी हिल", date: "१४–१९ सप्टेंबर २०२६", description: "तुमचा दिवस निवडून नोंद करण्यासाठी ही लिंक उघडा · १४–१९ सप्टेंबर २०२६ · कोण येणार आहे, आरतीची वेळ, प्रसाद आणि पत्ता पाहा." },
  gu: { locale: "gu_IN", title: "સુખાત્મે પરિવારના ગણપતિ @ રૉકી હિલ", date: "૧૪–૧૯ સપ્ટેમ્બર ૨૦૨૬", description: "તમારો દિવસ પસંદ કરી નોંધ કરવા આ લિંક ખોલો · ૧૪–૧૯ સપ્ટેમ્બર ૨૦૨૬ · કોણ આવશે, આરતીનો સમય, પ્રસાદ અને સરનામું જુઓ." },
} as const;
type Language = keyof typeof languages;

export function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!(lang in languages)) return {};
  const copy = languages[lang as Language];
  const url = `https://sukhat.me/ganpati/${lang}`;
  return {
    title: `${copy.title} · ${copy.date}`, description: copy.description,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: copy.locale, url, title: `${copy.title} 🪔`, description: copy.description, siteName: copy.title, images: [{ url: "/ganpati-whatsapp-preview-v2.jpg", width: 720, height: 1080, alt: copy.title, type: "image/jpeg" }] },
    twitter: { card: "summary_large_image", title: `${copy.title} 🪔`, description: copy.description, images: ["/ganpati-whatsapp-preview-v2.jpg"] },
  };
}

export default async function LocalizedGanpatiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!(lang in languages)) notFound();
  return <iframe src={`https://ganapati-rsvp.tejsukhatme.chatgpt.site/${lang}`} title={languages[lang as Language].title} className="fixed inset-0 h-dvh w-full border-0 bg-[#fff5d7]" allow="clipboard-write" />;
}
