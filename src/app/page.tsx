"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20 font-sans text-zinc-800 bg-white">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-4">hi, i'm tej.</h1>

        <p className="mb-3">
          i build tools for chemical companies and debug my mind while i do it.
        </p>
        <p className="mb-3">
          based in mumbai & berlin. currently fullstack @ WeatherPromise. also
          writing about solo building, emotional healing, and long-term freedom.
        </p>
        <p className="mb-6">
          want to collaborate, talk process design, or swap healing stories?
        </p>

        <div className="flex gap-4 mb-8">
          <Button asChild>
            <a
              href="https://tejsukhatme.substack.com/?r=1rcrg9&utm_campaign=pub-share-checklist"
              target="_blank"
              rel="noopener noreferrer"
            >
              see my newsletter
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://x.com/TejSukhatme"
              target="_blank"
              rel="noopener noreferrer"
            >
              follow on twitter
            </a>
          </Button>
        </div>

        <Card>
          <CardContent className="py-6 text-sm text-zinc-600">
            <p>
              currently:
              <br />– building a DSL-based tool to model chemical processes
              <br />– learning to speak German fluently
              <br />– writing every week
              <br />– healing from narcissistic patterns
              <br />– chasing abs and emotional regulation
            </p>
          </CardContent>
        </Card>

        <img
          src="/me.jpg"
          alt="Tej Sukhatme"
          width={1000}
          height={1000}
          className="mt-6 mb-8 border border-teal-500"
        />

        <div className="mt-8 text-sm text-zinc-600">
          <p>
            p.s: If you want to contact me, ping me on{" "}
            <a
              className="text-teal-700 hover:underline"
              href="mailto:tejsukhatme@gmail.com"
            >
              tejsukhatme@gmail.com
            </a>
            . I generally reply to every email with less than 300 characters and
            a clear ask.
          </p>
        </div>
      </div>
    </main>
  );
}
