import { Metadata } from 'next';
import { SectionTitle } from '@/components/SectionTitle';
import { ContactCTA } from '@/components/ContactCTA';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Award, Users, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Nosotros - THE TECH POINT | Servicio Técnico Quilmes, Bernal, Don Bosco',
  description: 'THE TECH POINT: servicio técnico profesional en Quilmes, Bernal y Don Bosco. Más de 500 reparaciones realizadas. Especialistas en computadoras, móviles y soluciones tecnológicas en Zona Sur GBA.',
  keywords: 'técnico Quilmes, servicio técnico Bernal, reparación Don Bosco, técnico informático zona sur, empresa tecnología Quilmes, servicio técnico profesional Bernal',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Tu aliado en tecnología y gestión administrativa
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                ¿Quiénes Somos?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                THE TECH POINT es una empresa argentina especializada en brindar soluciones
                tecnológicas integrales y servicios de gestión administrativa. Nuestro objetivo
                es simplificar la vida de hogares y empresas, ofreciendo servicios profesionales
                de alta calidad que combinan experiencia técnica con atención personalizada.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Entendemos que la tecnología puede ser compleja y los trámites administrativos
                abrumadores. Por eso, nos dedicamos a hacer que todo sea más simple, rápido y
                eficiente para nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-gray-200 dark:border-gray-800">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Nuestra Misión
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Proporcionar soluciones tecnológicas y administrativas de calidad que
                  simplifiquen la vida de nuestros clientes, combinando profesionalismo,
                  eficiencia y atención personalizada.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Nuestra Visión
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Ser la empresa líder en soluciones tecnológicas y gestión administrativa
                  en Argentina, reconocida por nuestra calidad, innovación y compromiso con
                  la satisfacción del cliente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nuestros Valores"
            subtitle="Los principios que guían nuestro trabajo diario"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-gray-200 dark:border-gray-800">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Excelencia</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Compromiso con la calidad en cada servicio que ofrecemos
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
                  Cada cliente es único y merece un trato especial
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 dark:border-gray-800">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Eficiencia</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Soluciones rápidas sin comprometer la calidad
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 dark:border-gray-800">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Confianza</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Transparencia y honestidad en todas nuestras acciones
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 dark:border-gray-800">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Orientación al Cliente</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Tu satisfacción es nuestra prioridad
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 dark:border-gray-800">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Innovación</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Actualizados con las últimas tecnologías
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
