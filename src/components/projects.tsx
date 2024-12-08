import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Projects() {
  const t = useTranslations("projects")
  const keys = ['project1', 'project2', 'project3']

  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keys.map((key, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  // src={project.image}
                  src='https://v0.dev/placeholder.svg?height=200&width=400'
                  alt={t(`projectsList.${key}.title`)}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{t(`projectsList.${key}.title`)}</CardTitle>
                <CardDescription>{t(`projectsList.${key}.description`)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="flex items-center gap-1">
                      <Code className="h-3 w-3" />
                      {tech}
                    </Badge>
                  ))} */}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t('repo')}
                  </Link>
                </Button>
                {/* {project.demo && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t('demo')}
                    </Link>
                  </Button>
                )} */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

