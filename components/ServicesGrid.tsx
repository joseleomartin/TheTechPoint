'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Laptop,
  Smartphone,
  Globe,
  Home,
  ShoppingCart,
  FileText,
  Cpu,
  Camera,
  Check,
  Clock,
  Shield,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { StaggerItem } from '@/components/animations/StaggerItem';
import Link from 'next/link';

const services = [
  {
    icon: Laptop,
    title: 'Reparación de Computadoras',
    description: 'Diagnóstico y reparación profesional de equipos de escritorio y portátiles. Resolvemos problemas de hardware, software y optimización.',
    color: 'from-blue-500/10 to-cyan-500/10',
    features: [
      'Diagnóstico completo gratuito',
      'Reparación de hardware y software',
      'Limpieza y mantenimiento',
      'Actualización de sistemas',
      'Recuperación de datos',
    ],
    time: '24-48 horas',
    guarantee: '3 meses',
  },
  {
    icon: Smartphone,
    title: 'Reparación de Móviles',
    description: 'Servicio técnico especializado para smartphones y tablets de todas las marcas. Cambio de pantallas, baterías y más.',
    color: 'from-purple-500/10 to-pink-500/10',
    features: [
      'Cambio de pantalla',
      'Reemplazo de batería',
      'Reparación de placa',
      'Actualización de software',
      'Desbloqueo y liberación',
    ],
    time: 'Mismo día',
    guarantee: '6 meses',
  },
  {
    icon: Cpu,
    title: 'Armado de PCs a Medida',
    description: 'Diseñamos y ensamblamos computadoras personalizadas según tus necesidades: gaming, edición, oficina o proyectos especiales.',
    color: 'from-green-500/10 to-emerald-500/10',
    features: [
      'Asesoramiento personalizado',
      'Componentes de calidad garantizada',
      'Instalación y configuración',
      'Optimización para tu uso',
      'Garantía extendida',
    ],
    time: '3-5 días',
    guarantee: '12 meses',
  },
  {
    icon: Camera,
    title: 'Instalación de Cámaras',
    description: 'Sistemas de seguridad y videovigilancia completos para tu hogar o negocio. Instalación profesional y acceso remoto.',
    color: 'from-red-500/10 to-orange-500/10',
    features: [
      'Cámaras IP y analógicas',
      'Grabación en la nube',
      'Acceso remoto desde móvil',
      'Visión nocturna y detección',
      'Soporte técnico incluido',
    ],
    time: '1-2 días',
    guarantee: '12 meses',
  },
  {
    icon: Globe,
    title: 'Diseño Web',
    description: 'Desarrollo de sitios web profesionales, tiendas online y aplicaciones personalizadas. Diseño responsive y optimizado.',
    color: 'from-indigo-500/10 to-blue-500/10',
    features: [
      'Diseño responsive',
      'E-commerce completo',
      'SEO optimizado',
      'Hosting y dominio incluido',
      'Mantenimiento mensual',
    ],
    time: '2-4 semanas',
    guarantee: 'Soporte continuo',
  },
  {
    icon: Home,
    title: 'Domótica',
    description: 'Automatización inteligente de tu hogar u oficina. Control de luces, persianas, climatización y seguridad desde tu móvil.',
    color: 'from-yellow-500/10 to-amber-500/10',
    features: [
      'Control por voz y app',
      'Automatizaciones personalizadas',
      'Ahorro energético garantizado',
      'Integración con asistentes',
      'Instalación profesional',
    ],
    time: '2-3 días',
    guarantee: '12 meses',
  },
  {
    icon: ShoppingCart,
    title: 'Soluciones de Pago',
    description: 'Integración de medios de pago digitales para tu negocio. Terminales POS, pasarelas de pago y más.',
    color: 'from-teal-500/10 to-cyan-500/10',
    features: [
      'Terminales POS',
      'Pasarelas de pago online',
      'QR y transferencias',
      'Facturación electrónica',
      'Capacitación incluida',
    ],
    time: '3-5 días',
    guarantee: 'Soporte técnico',
  },
  {
    icon: FileText,
    title: 'Trámites Administrativos',
    description: 'Gestión completa de trámites ante ANSES, PAMI, AFIP y más. Te acompañamos en todo el proceso.',
    color: 'from-rose-500/10 to-pink-500/10',
    features: [
      'ANSES y PAMI',
      'Trámites AFIP',
      'Monotributo y autónomos',
      'Asesoramiento personalizado',
      'Seguimiento continuo',
    ],
    time: 'Según trámite',
    guarantee: 'Gestión completa',
  },
];

export function ServicesGrid() {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <StaggerItem key={index}>
          <motion.div
            whileHover={{ 
              y: -12,
              scale: 1.02,
            }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className="h-full"
          >
            <Card className="group h-full border-gray-200 dark:border-gray-800 relative overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-500 flex flex-col">
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={false}
              />
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <CardHeader className="relative z-10 flex-shrink-0">
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative"
                  whileHover={{ 
                    rotate: [0, -5, 5, -5, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="h-6 w-6 text-primary relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
                <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 flex-grow flex flex-col">
                {/* Features list */}
                <div className="space-y-2 mb-4 flex-grow">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                    >
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Info badges */}
                <div className="flex gap-3 mb-4 flex-wrap">
                  <motion.div
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-primary/10 rounded-lg text-xs font-medium text-primary"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Clock className="h-3.5 w-3.5" />
                    <span>{service.time}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-primary/10 rounded-lg text-xs font-medium text-primary"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Shield className="h-3.5 w-3.5" />
                    <span>{service.guarantee}</span>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    asChild 
                    className="w-full bg-primary hover:bg-primary/90 text-white group/btn"
                    size="sm"
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      <span>Consultar</span>
                      <Zap className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
