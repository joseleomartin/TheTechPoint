import { Metadata } from 'next';
import { SectionTitle } from '@/components/SectionTitle';
import { ContactCTA } from '@/components/ContactCTA';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Laptop,
  Smartphone,
  Globe,
  Home,
  ShoppingCart,
  FileText,
  Cpu,
  Camera,
  Wrench,
  Shield,
  Zap,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios Técnicos en Quilmes, Bernal, Don Bosco | Reparación PC y Móviles',
  description: 'Servicio técnico profesional en Quilmes, Bernal y Don Bosco. Reparación de computadoras, móviles, diseño web, domótica y trámites administrativos. Atención en Zona Sur GBA.',
  keywords: 'servicio técnico Quilmes, reparación PC Bernal, arreglo celulares Don Bosco, técnico informático zona sur, reparación notebooks Quilmes, servicio técnico computadoras Bernal, reparación tablets Don Bosco, diseño web Quilmes, domótica Bernal, trámites ANSES Don Bosco',
};

const techServices = [
  {
    icon: Laptop,
    title: 'Reparación de Computadoras',
    description: 'Diagnóstico y reparación profesional de equipos de escritorio y portátiles. Resolvemos problemas de hardware, software, actualizaciones y optimización del sistema.',
    features: ['Diagnóstico completo', 'Reparación de hardware', 'Instalación de software', 'Limpieza y mantenimiento'],
  },
  {
    icon: Smartphone,
    title: 'Reparación de Móviles y Tablets',
    description: 'Servicio técnico especializado para dispositivos móviles de todas las marcas. Cambio de pantallas, baterías, cámaras y más.',
    features: ['Cambio de pantalla', 'Reemplazo de batería', 'Reparación de placa', 'Actualización de software'],
  },
  {
    icon: Cpu,
    title: 'Armado de PCs a Medida',
    description: 'Diseñamos y ensamblamos computadoras personalizadas según tus necesidades: gaming, edición, oficina o proyectos especiales.',
    features: ['Asesoramiento personalizado', 'Componentes de calidad', 'Instalación y configuración', 'Garantía incluida'],
  },
  {
    icon: Camera,
    title: 'Instalación de Cámaras',
    description: 'Sistemas de seguridad y videovigilancia para hogares y negocios. Instalación, configuración y acceso remoto.',
    features: ['Cámaras IP y analógicas', 'Grabación en la nube', 'Acceso remoto', 'Visión nocturna'],
  },
  {
    icon: Globe,
    title: 'Diseño Web y Aplicaciones',
    description: 'Desarrollo de sitios web profesionales, tiendas online y aplicaciones personalizadas para tu negocio.',
    features: ['Diseño responsive', 'E-commerce', 'SEO optimizado', 'Mantenimiento incluido'],
  },
  {
    icon: Home,
    title: 'Domótica',
    description: 'Automatización inteligente de tu hogar u oficina. Control de luces, persianas, climatización y seguridad desde tu móvil.',
    features: ['Control por voz', 'Automatizaciones', 'Ahorro energético', 'Integración total'],
  },
];

const businessServices = [
  {
    icon: ShoppingCart,
    title: 'Soluciones de Pago Digital',
    description: 'Integración de medios de pago electrónicos para tu negocio. Acepta tarjetas, QR, transferencias y más.',
    features: ['Múltiples métodos de pago', 'Integración rápida', 'Comisiones competitivas', 'Soporte técnico'],
  },
  {
    icon: Zap,
    title: 'Presencia Digital',
    description: 'Crea y gestiona la imagen digital de tu negocio. Redes sociales, Google My Business y más.',
    features: ['Perfil profesional', 'Gestión de redes', 'Marketing digital', 'Análisis de resultados'],
  },
];

const adminServices = [
  {
    icon: FileText,
    title: 'Trámites ANSES',
    description: 'Gestión de trámites ante ANSES: jubilaciones, pensiones, asignaciones familiares, AUH y más.',
  },
  {
    icon: FileText,
    title: 'Trámites PAMI',
    description: 'Afiliación, altas, cambios de plan, autorizaciones médicas y gestiones ante PAMI.',
  },
  {
    icon: FileText,
    title: 'Trámites AFIP',
    description: 'Alta de monotributo, recategorización, presentaciones y consultas tributarias.',
  },
  {
    icon: Users,
    title: 'Servicios Varios',
    description: 'Gestión de trámites ante proveedores de servicios: Edesur, Movistar, Metrogas, Telecentro, Flow, Starlink y más.',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Soluciones completas en tecnología y gestión administrativa para simplificar tu vida
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Servicios Tecnológicos"
            subtitle="Reparación, instalación y desarrollo de soluciones tecnológicas"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Soluciones para Negocios"
            subtitle="Impulsa tu negocio con herramientas digitales profesionales"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {businessServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Trámites Administrativos"
            subtitle="Te ayudamos con todos tus trámites de forma rápida y sencilla"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adminServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
