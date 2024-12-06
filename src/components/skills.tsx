import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  {
    title: "Frontend",
    description: "Desarrollo de interfaces de usuario interactivas y responsivas.",
    technologies: [
      { name: "React", avatar: "/react-icon.svg" },
      { name: "Next.js", avatar: "/nextjs-icon.svg" },
      { name: "Tailwind CSS", avatar: "/tailwind-icon.svg" },
      { name: "TypeScript", avatar: "/typescript-icon.svg" }
    ]
  },
  {
    title: "Backend",
    description: "Creación de APIs robustas y escalables.",
    technologies: [
      { name: "Node.js", avatar: "/nodejs-icon.svg" },
      { name: "Express", avatar: "/express-icon.svg" },
      { name: "MongoDB", avatar: "/mongodb-icon.svg" },
      { name: "PostgreSQL", avatar: "/postgresql-icon.svg" }
    ]
  },
  {
    title: "Cloud",
    description: "Despliegue y gestión de aplicaciones en la nube.",
    technologies: [
      { name: "AWS", avatar: "/aws-icon.svg" },
      { name: "Docker", avatar: "/docker-icon.svg" },
      { name: "Kubernetes", avatar: "/kubernetes-icon.svg" },
      { name: "Vercel", avatar: "/vercel-icon.svg" }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Mis Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="flex items-center gap-1 px-2 py-1">
                      <Image
                        src={tech.avatar}
                        alt={`${tech.name} icon`}
                        width={16}
                        height={16}
                        className="rounded-full"
                      />
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

