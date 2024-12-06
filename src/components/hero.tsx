import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-24 px-6 text-center bg-[url('/hero-background.jpg')] bg-cover bg-center text-white">
      <div className="max-w-3xl mx-auto bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a mi Portfolio</h1>
        <p className="text-xl mb-8">Soy un desarrollador web apasionado por crear experiencias digitales increíbles.</p>
        <Button variant="secondary">Ver mis proyectos</Button>
      </div>
    </section>
  )
}

