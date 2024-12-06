import { Phone, Mail, MapPin, Globe } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-muted">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg mb-8">
          Soy un desarrollador web con experiencia en React, Next.js y diseño UI/UX. 
          Me apasiona crear aplicaciones web rápidas, accesibles y fáciles de usar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-primary" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-primary" />
            <span>tucorreo@ejemplo.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Tu Ciudad, País</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>www.tuwebsite.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

