import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type TimelineItem = {
  title: string
  organization: string
  period: string
  description: string
  tags: string[]
}

const workExperience: TimelineItem[] = [
  {
    title: "Desarrollador Full Stack Senior",
    organization: "Tech Innovators Inc.",
    period: "2021 - Presente",
    description: "Lideré el desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS.",
    tags: ["React", "Node.js", "AWS", "Docker", "GraphQL"]
  },
  {
    title: "Desarrollador Front-end",
    organization: "Creative Web Solutions",
    period: "2018 - 2021",
    description: "Desarrollé interfaces de usuario responsivas y accesibles para clientes de diversos sectores.",
    tags: ["JavaScript", "React", "CSS", "Webpack", "Jest"]
  },
  // Puedes agregar más experiencias laborales aquí
]

const education: TimelineItem[] = [
  {
    title: "Máster en Ingeniería de Software",
    organization: "Universidad Tecnológica",
    period: "2017 - 2018",
    description: "Especialización en arquitecturas de software y metodologías ágiles.",
    tags: ["Agile", "Software Architecture", "Cloud Computing"]
  },
  {
    title: "Grado en Ciencias de la Computación",
    organization: "Universidad Estatal",
    period: "2013 - 2017",
    description: "Fundamentos de programación, estructuras de datos y algoritmos.",
    tags: ["Java", "Data Structures", "Algorithms", "Database Systems"]
  },
  // Puedes agregar más educación aquí
]

function TimelineSection({ title, items }: { title: string, items: TimelineItem[] }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <Card key={index} className="relative">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.organization}</p>
                </div>
                <Badge variant="secondary">{item.period}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function Resume() {
  return (
    <section id="resume" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Mi Trayectoria</h2>
        <TimelineSection title="Experiencia Laboral" items={workExperience} />
        <TimelineSection title="Educación" items={education} />
      </div>
    </section>
  )
}

