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
      "spotify api",
      "youtube api",
      "scuba diving",
      "surfing",
      "skiing",
      "rock climbing",
      "nice guys recovery",
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
    "description": "tej sukhatme is a fullstack software engineer who went from building hiccup dating app to chemical factory tools. arduino enthusiast turned mma fighter in berlin. currently at weatherpromise, previously aws, kodex ai, rippling. passionate about helping recovering nice guys and extreme sports."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hidden SEO content for name variations */}
      <div className="sr-only">
        tej sukhatme, tej, sukhatme, fullstack engineer tej, software engineer sukhatme, 
        tej berlin, sukhatme weatherpromise, tej aws, sukhatme kodex ai, tej rippling, 
        sukhatme bits pilani, tej chemical engineer, sukhatme kotlin react python, 
        tej domain specific languages, sukhatme machine learning, tej weather data, 
        sukhatme agricultural technology, tej berlin germany, sukhatme hyderabad india,
        tej hiccup dating app, sukhatme spotify matching, tej youtube matching, sukhatme arduino,
        tej mma fighter, sukhatme scuba diving, tej surfing skiing, sukhatme rock climbing,
        tej nice guys recovery, sukhatme no more mr nice guy, tej mumbai bangalore, sukhatme covid projects,
        tej chemical factory tools, sukhatme side projects, tej firebase flutter, sukhatme dating app developer
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
              what job do you land after falling in love with <a href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">arduinos</a> and robots, realizing only your code works but never the hardware, building a <a href="https://the-potato-people.github.io/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">dating app that matches people through their spotify playlists</a>, and somehow getting a computer science degree? apparently, fullstack software engineering.
            </p>
            <p>
              hi there i&apos;m tej.
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
                <p>– building tools for chemical factories as a side project</p>
                <p>– working toward several goals: getting abs, being a better boyfriend, being a better son</p>
                <p>– training for <a href="https://en.wikipedia.org/wiki/Mixed_martial_arts" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">mma</a> and planning to take part in a fight in 2026</p>
                <p>– constantly feeling like i don&apos;t have free time</p>
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
                i was born in a small nursing home in <a href="https://en.wikipedia.org/wiki/Mumbai" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">mumbai</a>, spent my early years in <a href="https://en.wikipedia.org/wiki/Hyderabad" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">hyderabad</a> and <a href="https://en.wikipedia.org/wiki/Bangalore" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">bangalore</a>.
              </p>
              <p>
                took a year off to travel all across india before settling into the tech world.
              </p>
              <p>
                studied computer science at <a href="https://www.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">bits pilani</a> (though let&apos;s be honest, not much science involved).
              </p>
              <p>
                currently, i&apos;m a fullstack software engineer at <a href="https://weatherpromise.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">weatherpromise</a>.
              </p>
              <p>
                during covid in 2020, i built <a href="https://the-potato-people.github.io/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">hiccup</a>—a dating app for indians that matched people based on their youtube and <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">spotify</a> accounts. because apparently shared music taste is the foundation of love.
              </p>
              <p>
                i&apos;m working on a side project building tools for chemical factories. from dating apps to industrial chemistry—just your typical career progression.
              </p>
              <p>
                if i ever figure out what free time is, i&apos;ll probably fill it with another potentially dangerous hobby or side project. until then, i&apos;m just trying to balance code, chemical factories, and not dying while learning to fight.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">passionate about</h3>
                <div className="space-y-2 text-zinc-600">
                  <p>i&apos;m passionate about trying new experiences: i can <a href="https://en.wikipedia.org/wiki/Surfing" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">surf</a>, <a href="https://en.wikipedia.org/wiki/Skiing" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">ski</a>, <a href="https://en.wikipedia.org/wiki/Rock_climbing" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">climb</a>, and i&apos;m <a href="https://en.wikipedia.org/wiki/Scuba_diving" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">open water scuba certified</a>.</p>
                  <p>food is one of my biggest passions. i take eating very seriously.</p>
                  <p>i&apos;m passionate about helping recovering <a href="https://www.amazon.com/No-More-Mr-Nice-Guy/dp/0762415339" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">&quot;nice guys&quot;</a> feel better and be better. speaking from experience here.</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">dream goals</h3>
                <div className="space-y-2 text-zinc-600">
                  <p>i want to own and fly my own plane, and sail my own boat. (climate change, i&apos;m sorry in advance.)</p>
                  <p>fun personality quirk: most people who like me in the first few meetings tend to change their minds later, while the people who love me now almost hated me initially. i&apos;m an acquired taste, apparently.</p>
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

            <div id="hiccup-project">
              <ProjectCard
                title="hiccup* dating app"
                description="crowdfunded dating app for indians, connecting people based on shared youtube and spotify interests with real-time chat and matching algorithms."
                technologies={[
                  { name: "flutter", variant: "blue" },
                  { name: "firebase", variant: "orange" }
                ]}
                liveUrl="https://the-potato-people.github.io/"
                logoCompany="hiccup"
              />
            </div>
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
                    <p className="text-lg text-teal-600">
                      <a href="https://the-potato-people.github.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        hiccup*
                      </a>
                    </p>
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
              i write about solo building, emotional healing, long-term freedom, recovering from nice guy syndrome, and building dating apps to chemical factory tools on substack.
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
              latest posts are available directly on my substack. i write about the intersection of technology and personal growth, sharing insights from building hiccup dating app, arduino projects, mma training, chemical factory tools, and debugging both code and life. topics include nice guy recovery, extreme sports, fullstack development, and the journey from mumbai to berlin.
            </p>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">let&apos;s connect</h2>
          <p className="text-lg text-zinc-600 mb-8">
            want to collaborate on dating apps, chemical factory tools, discuss arduino projects, mma training, or swap nice guy recovery stories?
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
