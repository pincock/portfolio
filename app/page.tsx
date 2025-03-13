import Image from "next/image"
import { ExternalLink, Github, Linkedin, Mail, MapPin, School, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a href="/" className="mr-6 flex items-center space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarFallback>LP</AvatarFallback>
              </Avatar>
              <span className="hidden font-bold sm:inline-block">Luke Pincock</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="hidden transition-colors hover:text-foreground/80 sm:block">
                About
              </a>
              <a href="#athletics" className="hidden transition-colors hover:text-foreground/80 sm:block">
                Athletics
              </a>
              <a href="#tech" className="hidden transition-colors hover:text-foreground/80 sm:block">
                Technology
              </a>
              <a href="#business" className="hidden transition-colors hover:text-foreground/80 sm:block">
                Business
              </a>
              <a href="#contact" className="hidden transition-colors hover:text-foreground/80 sm:block">
                Contact
              </a>
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="sm:hidden">
                  <User className="h-4 w-4" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Luke Pincock</SheetTitle>
                  <SheetDescription>XC & Track Runner, Developer, Entrepreneur</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
                    About
                  </a>
                  <a href="#athletics" className="text-foreground/80 hover:text-foreground transition-colors">
                    Athletics
                  </a>
                  <a href="#tech" className="text-foreground/80 hover:text-foreground transition-colors">
                    Technology
                  </a>
                  <a href="#business" className="text-foreground/80 hover:text-foreground transition-colors">
                    Business
                  </a>
                  <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
                    Contact
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?q=80&w=2731&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Silhouette of person walking on beach at sunset"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="container absolute bottom-0 left-0 right-0 px-4 py-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Luke Pincock</h1>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
                XC & Track Runner, Aspiring Developer, and Digital Marketing Enthusiast
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1">
                  <MapPin className="mr-1 h-3 w-3" /> Orem, Utah
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <School className="mr-1 h-3 w-3" /> Timpanogos High
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <User className="mr-1 h-3 w-3" /> 15 Years Old
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                <p className="mt-4 text-muted-foreground">
                  I'm a 15-year-old student-athlete from Orem, Utah with a passion for running, technology, and
                  business.
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Badge className="px-2 bg-black text-white hover:bg-black/90">Running</Badge>
                    <span className="text-sm text-muted-foreground">Cross Country & Track athlete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="px-2 bg-black text-white hover:bg-black/90">Coding</Badge>
                    <span className="text-sm text-muted-foreground">Learning web development & programming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="px-2 bg-black text-white hover:bg-black/90">Business</Badge>
                    <span className="text-sm text-muted-foreground">Real estate & digital marketing</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Facts</CardTitle>
                    <CardDescription>A few things about me</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">School</span>
                        <span className="text-sm text-muted-foreground">Timpanogos High School</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Location</span>
                        <span className="text-sm text-muted-foreground">Orem, Utah</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Age</span>
                        <span className="text-sm text-muted-foreground">15</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Sports</span>
                        <span className="text-sm text-muted-foreground">Cross Country, Track</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Athletics Section */}
        <section id="athletics" className="bg-muted/50 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-3xl font-bold tracking-tight">Athletics</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                My journey as a runner has shaped my discipline, perseverance, and goal-setting abilities.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Cross Country</CardTitle>
                    <CardDescription>Distance running across varied terrain</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      As a dedicated cross country runner at Timpanogos High School, I've developed endurance, mental
                      toughness, and a love for challenging myself on different courses and conditions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Track</CardTitle>
                    <CardDescription>Speed and technique on the track</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Track has taught me the importance of technique, speed work, and specialized training. I'm
                      constantly working to improve my times while contributing to my team's success.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Training Philosophy</CardTitle>
                    <CardDescription>Consistency and progression</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      I believe in consistent training, gradual progression, and balancing intensity with recovery.
                      Running has taught me valuable life lessons about persistence and overcoming challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="tech" className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight">Technology</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              I'm passionate about coding and developing my technical skills to build innovative solutions.
            </p>

            <div className="mt-10">
              <Card>
                <CardHeader>
                  <CardTitle>Coding & Development</CardTitle>
                  <CardDescription>Learning to build for the web and beyond</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    I'm currently exploring various programming languages and frameworks, enjoying the problem-solving
                    aspects of coding and the ability to create something from nothing. My goal is to combine my
                    technical knowledge with my other interests to build innovative solutions and applications.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-medium">Learning</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">HTML/CSS</Badge>
                        <Badge variant="outline">JavaScript</Badge>
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Next.js</Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-medium">Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Web Development</Badge>
                        <Badge variant="outline">App Design</Badge>
                        <Badge variant="outline">UI/UX</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Section */}
        <section id="business" className="bg-muted/50 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-3xl font-bold tracking-tight">Business</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Developing skills in real estate and digital marketing to build a diverse professional foundation.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Real Estate</CardTitle>
                    <CardDescription>Learning the property market</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      I'm fascinated by real estate and am learning about market trends, property valuation, and
                      investment strategies. This knowledge is helping me understand business fundamentals and long-term
                      wealth building.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Digital Marketing</CardTitle>
                    <CardDescription>Building online presence and strategy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Digital marketing combines my interests in technology and business. I'm learning about content
                      creation, social media strategy, and online advertising to help businesses connect with their
                      audiences effectively.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Feel free to reach out if you'd like to connect or collaborate.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="w-full sm:w-auto bg-black text-white hover:bg-black/90">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-black text-black hover:bg-black/10">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-black text-black hover:bg-black/10">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Luke Pincock. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">External Link</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

