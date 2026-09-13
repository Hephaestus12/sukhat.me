import type { Metadata } from "next";
import { notFound } from "next/navigation";

const languages = {
  en: { locale: "en_IN", title: "Sukhatme's Ganpati @ Rocky Hill", date: "14–19 September 2026", description: "14–19 September 2026 · Choose your day, see who else is coming, and join us for Aarti and prasad." },
  mr: { locale: "mr_IN", title: "सुखात्मे यांचा गणपती @ रॉकी हिल", date: "१४–१९ सप्टेंबर २०२६", description: "१४–१९ सप्टेंबर २०२६ · तुमचा दिवस निवडा, कोण येणार आहे ते पाहा आणि आरती व प्रसादासाठी या." },
  gu: { locale: "gu_IN", title: "સુખાત્મે પરિવારના ગણપતિ @ રૉકી હિલ", date: "૧૪–૧૯ સપ્ટેમ્બર ૨૦૨૬", description: "૧૪–૧૯ સપ્ટેમ્બર ૨૦૨૬ · તમારો દિવસ પસંદ કરો, કોણ આવશે તે જુઓ અને આરતી તથા પ્રસાદ માટે આવો." },
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
    openGraph: { type: "website", locale: copy.locale, url, title: `${copy.title} 🪔`, description: copy.description, siteName: copy.title, images: [{ url: "/ganpati-invite-reminder.png", width: 1024, height: 1536, alt: copy.title }] },
    twitter: { card: "summary_large_image", title: `${copy.title} 🪔`, description: copy.description, images: ["/ganpati-invite-reminder.png"] },
  };
}

export default async function LocalizedGanpatiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!(lang in languages)) notFound();
  return <iframe src={`https://ganapati-rsvp.tejsukhatme.chatgpt.site/${lang}`} title={languages[lang as Language].title} className="fixed inset-0 h-dvh w-full border-0 bg-[#fff5d7]" allow="clipboard-write" />;
}
