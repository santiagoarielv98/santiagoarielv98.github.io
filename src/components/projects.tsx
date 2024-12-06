import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Proyecto 1",
    description: "Una aplicación web construida con React y Next.js",
    image: "/placeholder.svg?height=200&width=300",
    repo: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com"
  },
  {
    title: "Proyecto 2",
    description: "Un sitio de comercio electrónico con integración de pagos",
    image: "/placeholder.svg?height=200&width=300",
    repo: "https://github.com/yourusername/project2",
    demo: null
  },
  {
    title: "Proyecto 3",
    description: "Una aplicación móvil desarrollada con React Native",
    image: "/placeholder.svg?height=200&width=300",
    repo: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Repo
                  </Link>
                </Button>
                {project.demo && (
                  <Button variant="outline" asChild>
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

