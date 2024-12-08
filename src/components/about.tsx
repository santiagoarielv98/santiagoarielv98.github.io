import Image from 'next/image'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations("about")
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
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">{t('title')}</h2>
            <p className="text-lg mb-6 text-center md:text-left">
              {t('description')}
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>{t('phone')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>{t('email')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{t('location')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>{t('website')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

