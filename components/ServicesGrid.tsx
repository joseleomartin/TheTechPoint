import Link from 'next/link';
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
} from 'lucide-react';

const services = [
  {
    icon: Laptop,
    title: 'Reparación de Computadoras',
    description: 'Diagnóstico y reparación de equipos de escritorio y portátiles.',
  },
  {
    icon: Smartphone,
    title: 'Reparación de Móviles',
    description: 'Servicio técnico especializado para smartphones y tablets.',
  },
  {
    icon: Cpu,
    title: 'Armado de PCs a Medida',
    description: 'Configuración y ensamblado de equipos según tus necesidades.',
  },
  {
    icon: Camera,
    title: 'Instalación de Cámaras',
    description: 'Sistemas de seguridad y videovigilancia para tu hogar o negocio.',
  },
  {
    icon: Globe,
    title: 'Diseño Web',
    description: 'Sitios web profesionales y aplicaciones personalizadas.',
  },
  {
    icon: Home,
    title: 'Domótica',
    description: 'Automatización inteligente para tu hogar u oficina.',
  },
  {
    icon: ShoppingCart,
    title: 'Soluciones de Pago',
    description: 'Integración de medios de pago digitales para tu negocio.',
  },
  {
    icon: FileText,
    title: 'Trámites Administrativos',
    description: 'Gestión de trámites ante ANSES, PAMI, AFIP y más.',
  },
];

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <Card
          key={index}
          className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-gray-200 dark:border-gray-800"
        >
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <service.icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              {service.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
