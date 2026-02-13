"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { LogoIcon } from "@/components/logo-icon";
import { Mail, ExternalLink } from "lucide-react";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "tej sukhatme",
    "givenName": "tej",
    "familyName": "sukhatme",
    "alternateName": ["tej", "sukhatme", "tejsukhatme"],
    "url": "https://sukhat.me",
    "image": "https://sukhat.me/me.jpg",
    "sameAs": [
      "https://x.com/TejSukhatme",
      "https://github.com/tejsukhatme",
      "https://tejsukhatme.substack.com",
      "https://linkedin.com/in/tejsukhatme"
    ],
    "jobTitle": "full stack engineer & aec founder",
    "worksFor": {
      "@type": "Organization",
      "name": "weatherpromise",
      "url": "https://weatherpromise.com"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "birla institute of technology and science, pilani",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "hyderabad",
        "addressCountry": "india"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "berlin",
      "addressCountry": "germany"
    },
    "nationality": "indian",
    "knowsAbout": [
      "software engineering",
      "aec technology",
      "construction tech",
      "proptech",
      "fullstack development",
      "dating app development",
      "chemical factory tools",
      "arduino programming",
      "mma training",
      "kotlin",
      "spring boot",
      "react.js",
      "python",
      "java",
      "flutter",
      "firebase",
      "aws",
      "machine learning",
      "nice guys recovery",
      "domain specific languages",
      "weather data"
    ],
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "software engineer",
        "occupationalCategory": "technology"
      },
      {
        "@type": "Occupation",
        "name": "startup founder",
        "occupationalCategory": "entrepreneurship"
      }
    ],
    "description": "tej sukhatme is a software engineer pivoting into AEC (Architecture, Engineering, and Construction). currently in berlin, building for the built world. previously at aws, kodex ai, and rippling."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hidden SEO content for name variations */}
      <div className="sr-only">
        tej sukhatme, aec startup, contech india, proptech mumbai, tej berlin, software engineer mumbai,
        aec ai startup, construction software india, tej sukhatme bits pilani,
        tej weatherpromise, tej aws, tej kodex ai, tej rippling,
        mumbai real estate tech, building for architects, nice guys recovery, mma fighter berlin
      </div>
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-24 font-sans text-zinc-800 bg-white">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            hi, i&apos;m <span itemProp="name">tej sukhatme</span>.
          </h1>

          <div className="text-base sm:text-lg md:text-xl text-zinc-600 mb-8 space-y-3 md:space-y-4 max-w-3xl mx-auto px-4">
            <p>
              after 3 years of engineering at places like <span className="text-teal-700">AWS</span> and <span className="text-teal-700">Rippling</span>, i&apos;ve decided to stop building for &quot;the cloud&quot; and start building for the physical world.
            </p>
            <p>
              i&apos;m a software engineer trying to figure out how to build the future of AEC (Architecture, Engineering, and Construction).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 px-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                get in touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <a
                href="https://tejsukhatme.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                read my blog
              </a>
            </Button>
          </div>

          <Card className="max-w-2xl mx-auto mb-12">
            <CardContent className="p-6 sm:py-8 text-left">
              <h3 className="font-semibold text-lg mb-4">the 2026 plan:</h3>
              <div className="text-zinc-600 space-y-2 text-sm sm:text-base">
                <p>– diving deep into the AEC domain</p>
                <p>– shadowing architects and site managers to find a &quot;hair on fire&quot; problem</p>
                <p>– training for an MMA fight (still trying not to die in the process)</p>
                <p>– looking for a co-founder who is as frustrated with construction inefficiency as i am</p>
              </div>
            </CardContent>
          </Card>

          <div className="px-4">
            <Image
              src="/me.jpg"
              alt="Tej Sukhatme"
              width={400}
              height={400}
              className="rounded-lg border border-teal-500 mx-auto max-w-full h-auto w-full max-w-sm sm:max-w-md"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">the transition</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-zinc-700">
              <p>
                i&apos;ve spent my career in high-growth tech: <a href="https://weatherpromise.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">weatherpromise</a>, AWS S3, and generative AI at Kodex AI.
              </p>
              <p>
                but i come from a family of architects. my dad runs an architecture firm in mumbai, and i&apos;ve realized that while tech moves at lightspeed, the way we build our physical world is still stuck in the age of excel and whatsapp.
              </p>
              <p>
                i&apos;m currently spending my time between berlin and india, preparing to go full-time on a new venture in the AEC space. i have the engineering skills, i have the industry access, and i have just enough savings to be dangerous.
              </p>
              <p>
                i built <a href="https://hiccup.wtf/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">hiccup</a> (a dating app) to learn how to scale. i built chemical factory tools to learn domain complexity. now, i&apos;m building for construction.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">what i&apos;m looking for</h3>
                <div className="space-y-2 text-zinc-600">
                  <p>i&apos;m looking to connect with AEC professionals—architects, structural engineers, and developers—who are tired of the status quo.</p>
                  <p>i&apos;m also looking for a co-founder. if you are an AEC veteran with an itch to build something tech-heavy, we should talk.</p>
                  <p>still passionate about helping <a href="https://www.amazon.com/No-More-Mr-Nice-Guy/dp/0762415339" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">&quot;nice guys&quot;</a> recover—because building a startup requires a level of grit and candor that &quot;nice guy&quot; syndrome usually kills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Focus on Complexity */}
      <section id="projects" className="section-padding px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">proof of work</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProjectCard
              title="dsl chemical process tool"
              description="my first foray into industrial tech. a domain-specific language for modeling complex chemical processes."
              technologies={[
                { name: "typescript", variant: "blue" },
                { name: "node.js", variant: "green" },
                { name: "parsing", variant: "purple" }
              ]}
            />

            <ProjectCard
              title="hiccup* dating app"
              description="my first startup venture. crowdfunded, built from scratch, and matched indians through shared digital tastes."
              technologies={[
                { name: "flutter", variant: "blue" },
                { name: "firebase", variant: "orange" }
              ]}
              liveUrl="https://hiccup.wtf/"
              logoCompany="hiccup"
            />

            <ProjectCard
              title="kodex ai platform"
              description="built a b2b generative ai platform for deutsche bank, handling massive unstructured data sets with llms."
              technologies={[
                { name: "python", variant: "yellow" },
                { name: "ai", variant: "purple" },
                { name: "react.js", variant: "blue" }
              ]}
              logoCompany="kodex"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">experience</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <LogoIcon company="weatherpromise" size={40} />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-semibold mb-1 sm:mb-0">full stack engineer</h3>
                      <span className="text-zinc-500 text-sm sm:text-base">current</span>
                    </div>
                    <p className="text-lg text-teal-600">weatherpromise</p>
                  </div>
                </div>
                <p className="text-zinc-600 mb-4 text-sm md:text-base">berlin · building high-availability systems for weather-based insurance</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <LogoIcon company="aws" size={40} />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">software engineer</h3>
                    <p className="text-lg text-teal-600">amazon web services (aws)</p>
                  </div>
                </div>
                <p className="text-zinc-600 mb-4 text-sm md:text-base">berlin · amazon s3 intelligent-tiering team</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <LogoIcon company="rippling" size={40} />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">software engineer</h3>
                    <p className="text-lg text-teal-600">rippling</p>
                  </div>
                </div>
                <p className="text-zinc-600 mb-4 text-sm md:text-base">bengaluru · built global workforce management (eor) systems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">writing</h2>
          <div className="text-center mb-8">
            <p className="text-lg text-zinc-600 mb-6">
              i&apos;m documenting my journey of leaving the comfortable world of big tech to build in the dusty world of indian construction.
            </p>
            <Button asChild>
              <a
                href="https://tejsukhatme.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mx-auto w-fit"
              >
                <ExternalLink size={18} />
                read my substack
              </a>
            </Button>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">let&apos;s talk AEC</h2>
          <p className="text-lg text-zinc-600 mb-8">
            especially if you are in mumbai, have a problem in construction that needs software, or want to spar (in the ring or on a whiteboard).
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg">
              <a
                href="mailto:tejsukhatme@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail size={18} />
                email me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://linkedin.com/in/tejsukhatme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink size={18} />
                linkedin
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}