import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code } from 'lucide-react'

const projects = [
  {
    title: "Proyecto 1",
    description: "Una aplicación web construida con React y Next.js",
    image: "/placeholder.svg?height=400&width=600",
    repo: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Proyecto 2",
    description: "Un sitio de comercio electrónico con integración de pagos",
    image: "/placeholder.svg?height=400&width=600",
    repo: "https://github.com/yourusername/project2",
    demo: null,
    technologies: ["Vue.js", "Nuxt.js", "Stripe", "MongoDB"]
  },
  {
    title: "Proyecto 3",
    description: "Una aplicación móvil desarrollada con React Native",
    image: "/placeholder.svg?height=400&width=600",
    repo: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
    technologies: ["React Native", "Expo", "Firebase", "Redux"]
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="flex items-center gap-1">
                      <Code className="h-3 w-3" />
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Repo
                  </Link>
                </Button>
                {project.demo && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

