import Image from 'next/image'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-8">
          <div className="w-48 h-48 relative overflow-hidden rounded-full mx-auto md:mx-0">
            <Image
              src="/profile-picture.jpg"
              alt="Tu nombre"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Sobre mí</h2>
            <p className="text-lg mb-6 text-center md:text-left">
              Soy un desarrollador web con experiencia en React, Next.js y diseño UI/UX. 
              Me apasiona crear aplicaciones web rápidas, accesibles y fáciles de usar.
            </p>
            <div className="grid grid-cols-1 gap-4">
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
        </div>
      </div>
    </section>
  )
}

