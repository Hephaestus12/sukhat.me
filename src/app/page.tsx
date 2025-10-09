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
    "jobTitle": "full stack engineer",
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
      "chemical engineering",
      "full stack development",
      "kotlin",
      "spring boot",
      "react.js",
      "python",
      "java",
      "flutter",
      "firebase",
      "aws",
      "machine learning",
      "domain specific languages",
      "chemical process engineering",
      "weather data",
      "agricultural technology"
    ],
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "software engineer",
        "occupationalCategory": "technology"
      },
      {
        "@type": "Occupation", 
        "name": "chemical engineer",
        "occupationalCategory": "engineering"
      }
    ],
    "description": "tej sukhatme is a full-stack engineer bridging chemical engineering and software development. tej currently builds weather data tools at weatherpromise in berlin, previously worked at aws, kodex ai, and rippling. sukhatme specializes in kotlin, react, python and chemical process tools."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hidden SEO content for name variations */}
      <div className="sr-only">
        tej sukhatme, tej, sukhatme, full stack engineer tej, software engineer sukhatme, 
        tej berlin, sukhatme weatherpromise, tej aws, sukhatme kodex ai, tej rippling, 
        sukhatme bits pilani, tej chemical engineer, sukhatme kotlin react python, 
        tej domain specific languages, sukhatme machine learning, tej weather data, 
        sukhatme agricultural technology, tej berlin germany, sukhatme hyderabad india
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
              i build tools for chemical companies and debug my mind while i do it.
            </p>
            <p>
              based in berlin. currently fullstack @ <a href="https://weatherpromise.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">weatherpromise</a>. also
              writing about solo building, emotional healing, and long-term freedom.
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
                href="https://tejsukhatme.substack.com/?r=1rcrg9&utm_campaign=pub-share-checklist"
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
              <h3 className="font-semibold text-lg mb-4">currently:</h3>
              <div className="text-zinc-600 space-y-2 text-sm sm:text-base">
                <p>– building a DSL-based tool to model chemical processes</p>
                <p>– writing every week</p>
                <p>– chasing abs and emotional regulation</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">about</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-zinc-700">
              <p>
                i&apos;m tej sukhatme, a full-stack engineer who bridges the gap between chemical engineering and software development. my journey as tej started with a be in computer science from bits pilani, and has taken sukhatme from building dating apps in mumbai to working on cloud infrastructure at aws in berlin.
              </p>
              <p>
                at weatherpromise, i&apos;m building tools that help agricultural companies make better decisions through weather data. previously, i&apos;ve worked on everything from amazon s3&apos;s intelligent tiering to ai platforms for deutsche bank, always focusing on systems that solve real-world problems.
              </p>
              <p>
                what drives me is the intersection of technical excellence and human impact. whether it&apos;s creating domain-specific languages for chemical processes or contributing to open-source ml projects, i believe in building tools that make complex problems more approachable.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">core skills</h3>
                <div className="space-y-2 text-zinc-600">
                  <p>• chemical process engineering</p>
                  <p>• full-stack development</p>
                  <p>• technical writing</p>
                  <p>• domain-specific languages</p>
                  <p>• data analysis & visualization</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">currently learning</h3>
                <div className="space-y-2 text-zinc-600">
                  <p>• emotional intelligence</p>
                  <p>• advanced process modeling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">projects</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProjectCard
              title="dsl chemical process tool"
              description="a domain-specific language for modeling chemical processes with intuitive syntax and powerful simulation capabilities."
              technologies={[
                { name: "typescript", variant: "blue" },
                { name: "node.js", variant: "green" },
                { name: "parsing", variant: "purple" }
              ]}
            />

            <ProjectCard
              title="epidemic prediction pipeline"
              description="google summer of code project: ml pipeline using wikipedia pageviews data to predict epidemic spread patterns for diseases like covid-19 and influenza."
              technologies={[
                { name: "python", variant: "yellow" },
                { name: "machine learning", variant: "purple" },
                { name: "docker", variant: "blue" },
                { name: "c++", variant: "orange" }
              ]}
              githubUrl="https://github.com/shogun-toolbox"
              logoCompany="google"
            />

            <ProjectCard
              title="hiccup* dating app"
              description="crowdfunded dating app for indians, connecting people based on shared youtube and spotify interests with real-time chat and matching algorithms."
              technologies={[
                { name: "flutter", variant: "blue" },
                { name: "firebase", variant: "orange" }
              ]}
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
                    <p className="text-lg text-teal-600">
                      <a href="https://weatherpromise.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        weatherpromise
                      </a>
                    </p>
                  </div>
                </div>
                <p className="text-zinc-600 mb-4 text-sm md:text-base">berlin, germany · hybrid</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">kotlin</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">spring boot</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">react.js</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <LogoIcon company="kodex" size={40} />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">software engineer</h3>
                    <p className="text-lg text-teal-600">kodex ai</p>
                  </div>
                </div>
                <p className="text-zinc-600 mb-4 text-sm md:text-base">berlin, germany · built b2b saas generative ai platform for deutsche bank</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">react.js</span>
                </div>
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
                <p className="text-zinc-600 mb-4 text-sm md:text-base">berlin, germany · amazon s3 intelligent-tiering team</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">kotlin</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">spring boot</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">java</span>
                </div>
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
                <p className="text-zinc-600 mb-4 text-sm md:text-base">bengaluru, india · global workforce management (eor) team</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">react.js</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <LogoIcon company="hiccup" size={40} />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">co-founder</h3>
                    <p className="text-lg text-teal-600">hiccup*</p>
                  </div>
                </div>
                <p className="text-zinc-600 mb-4 text-sm md:text-base">mumbai, india · dating app connecting people via shared interests</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">flutter</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">firebase</span>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">education</h3>
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <LogoIcon company="bits" size={48} />
                    <div className="text-center">
                      <h4 className="text-xl font-semibold mb-1">birla institute of technology and science, pilani</h4>
                      <p className="text-lg text-teal-600">bachelor of engineering in computer science</p>
                    </div>
                  </div>
                  <p className="text-zinc-600 text-sm md:text-base text-center">hyderabad campus, india</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">writing</h2>
          <div className="text-center mb-8">
            <p className="text-lg text-zinc-600 mb-6">
              i write about solo building, emotional healing, and long-term freedom on substack.
            </p>
            <Button asChild>
              <a
                href="https://tejsukhatme.substack.com/?r=1rcrg9&utm_campaign=pub-share-checklist"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mx-auto w-fit"
              >
                <ExternalLink size={18} />
                visit my substack
              </a>
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-zinc-600 mb-6">
              latest posts are available directly on my substack. i write about the intersection of technology and personal growth, sharing insights from building products and debugging both code and life.
            </p>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">let&apos;s connect</h2>
          <p className="text-lg text-zinc-600 mb-8">
            want to collaborate, talk process design, or swap healing stories?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg">
              <a
                href="mailto:tejsukhatme@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail size={18} />
                tejsukhatme@gmail.com
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://x.com/TejSukhatme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink size={18} />
                @TejSukhatme
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-zinc-500">
            i generally reply to every email with less than 300 characters and a clear ask.
          </p>
        </div>
      </section>
    </>
  );
}
