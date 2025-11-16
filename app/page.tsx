import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { ServicesGrid } from '@/components/ServicesGrid';
import { ContactCTA } from '@/components/ContactCTA';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nuestros Servicios"
            subtitle="Soluciones integrales en tecnología y gestión administrativa para simplificar tu día a día"
          />
          <ServicesGrid />
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="¿Por qué elegirnos?"
            subtitle="Experiencia y profesionalismo al servicio de tu tranquilidad"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-gray-200 dark:border-gray-800">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Calidad Garantizada</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Trabajos certificados con garantía de satisfacción
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 dark:border-gray-800">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Atención Personalizada</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Asesoramiento personalizado para cada cliente
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 dark:border-gray-800">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Profesionales Certificados</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Equipo capacitado con amplia experiencia
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 dark:border-gray-800">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Respuesta Rápida</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Atención inmediata y soluciones eficientes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
