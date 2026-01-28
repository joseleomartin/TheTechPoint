import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto - THE TECH POINT | Servicio Técnico Quilmes, Bernal, Don Bosco',
  description: 'Contacta con THE TECH POINT en Quilmes, Bernal y Don Bosco. Servicio técnico de computadoras y móviles. WhatsApp: +54 11 2858-3157. Atención en Zona Sur GBA.',
  keywords: 'contacto técnico Quilmes, servicio técnico Bernal, teléfono Don Bosco, WhatsApp técnico zona sur, consulta reparación Quilmes, presupuesto Bernal',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos a la brevedad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Hablemos de tu proyecto
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                  También puedes contactarnos directamente por WhatsApp o teléfono.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Teléfono</CardTitle>
                        <CardDescription>
                          <a
                            href="tel:+541128583157"
                            className="text-primary hover:underline"
                          >
                            +54 11 2858-3157
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">WhatsApp</CardTitle>
                        <CardDescription>
                          <a
                            href="https://wa.me/5491128583157"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Enviar mensaje
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Email</CardTitle>
                        <CardDescription>
                          <a
                            href="mailto:thetechpointhd@gmail.com"
                            className="text-primary hover:underline"
                          >
                            thetechpointhd@gmail.com
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Ubicación</CardTitle>
                        <CardDescription>
                          Buenos Aires, Argentina
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Horarios</CardTitle>
                        <CardDescription>
                          Lunes a Viernes: 9:00 - 18:00<br />
                          Sábados: 9:00 - 13:00
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <div>
              <Card className="border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y te contactaremos a la brevedad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
