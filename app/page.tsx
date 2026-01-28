'use client';

import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { ServicesGrid } from '@/components/ServicesGrid';
import { ContactCTA } from '@/components/ContactCTA';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Clock, Zap, Shield } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { StaggerItem } from '@/components/animations/StaggerItem';
import { motion } from 'framer-motion';

const features = [
  {
    icon: CheckCircle,
    title: 'Calidad Garantizada',
    description: 'Trabajos certificados con garantía de satisfacción',
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Asesoramiento personalizado para cada cliente',
  },
  {
    icon: Award,
    title: 'Profesionales Certificados',
    description: 'Equipo capacitado con amplia experiencia',
  },
  {
    icon: Clock,
    title: 'Respuesta Rápida',
    description: 'Atención inmediata y soluciones eficientes',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2}>
            <SectionTitle
              title="Nuestros Servicios"
              subtitle="Soluciones integrales en tecnología y gestión administrativa para simplificar tu día a día"
            />
          </FadeIn>
          <FadeIn delay={0.4}>
            <ServicesGrid />
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2}>
            <SectionTitle
              title="¿Por qué elegirnos?"
              subtitle="Experiencia y profesionalismo al servicio de tu tranquilidad"
            />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="h-full"
                >
                  <Card className="text-center border-gray-200 dark:border-gray-800 h-full group hover:shadow-2xl hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <CardContent className="pt-8 relative z-10">
                      <motion.div 
                        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '500+', label: 'Reparaciones Realizadas', icon: CheckCircle },
                { number: '200+', label: 'Clientes Satisfechos', icon: Users },
                { number: '98%', label: 'Tasa de Éxito', icon: Award },
                { number: '24/7', label: 'Soporte Disponible', icon: Clock },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <motion.div
                    className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn delay={0.2}>
            <SectionTitle
              title="Nuestro Proceso"
              subtitle="Cómo trabajamos para darte la mejor experiencia"
            />
          </FadeIn>

          <div className="relative mt-16">
            {/* Connecting line - desktop only */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent">
              <motion.div
                className="h-full bg-primary/40"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </div>

            <div className="grid md:grid-cols-4 gap-6 lg:gap-8 relative">
              {[
                {
                  step: '01',
                  title: 'Consulta',
                  description: 'Cuéntanos tu necesidad y te asesoramos sin compromiso',
                  icon: Clock,
                  gradient: 'from-blue-500/10 via-cyan-500/10 to-blue-500/10',
                },
                {
                  step: '02',
                  title: 'Diagnóstico',
                  description: 'Evaluamos tu situación y te presentamos la mejor solución',
                  icon: CheckCircle,
                  gradient: 'from-green-500/10 via-emerald-500/10 to-green-500/10',
                },
                {
                  step: '03',
                  title: 'Ejecución',
                  description: 'Trabajamos con profesionalismo y eficiencia en tu proyecto',
                  icon: Zap,
                  gradient: 'from-yellow-500/10 via-amber-500/10 to-yellow-500/10',
                },
                {
                  step: '04',
                  title: 'Seguimiento',
                  description: 'Te acompañamos y damos soporte continuo post-entrega',
                  icon: Shield,
                  gradient: 'from-purple-500/10 via-pink-500/10 to-purple-500/10',
                },
              ].map((item, index) => (
                <FadeIn key={index} delay={0.3 + index * 0.15} direction="up">
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    whileHover={{ y: -12, scale: 1.02 }}
                  >
                    {/* Large background number - more subtle */}
                    <motion.div
                      className="absolute -top-12 -left-8 text-8xl font-black text-primary/15 dark:text-primary/10 -z-10 pointer-events-none select-none"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.5, type: "spring", stiffness: 200 }}
                    >
                      {item.step}
                    </motion.div>


                    {/* Enhanced Card */}
                    <Card className="relative z-10 border-2 border-gray-200 dark:border-gray-800 h-full hover:border-primary/50 transition-all duration-500 bg-white dark:bg-gray-900 overflow-hidden group/card shadow-lg">
                      {/* Gradient overlay on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"
                      />

                      <CardContent className="pt-14 pb-8 px-6 relative z-10">
                        {/* Icon with enhanced animation */}
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 relative group/icon"
                          whileHover={{ 
                            rotate: [0, -10, 10, -10, 0],
                            scale: 1.15
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover/icon:opacity-100 transition-opacity"
                          />
                          <item.icon className="h-8 w-8 text-primary relative z-10" strokeWidth={2} />
                          <motion.div
                            className="absolute -inset-2 border-2 border-primary/30 rounded-xl"
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                          className="font-bold text-xl mb-3 group-hover/card:text-primary transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {item.title}
                        </motion.h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Progress indicator */}
                        <motion.div
                          className="h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.6 }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.5, 
                              delay: index * 0.15 + 0.8,
                              ease: "easeOut"
                            }}
                          />
                        </motion.div>
                      </CardContent>

                      {/* Corner accent */}
                      <motion.div
                        className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover/card:opacity-100 transition-opacity"
                      />
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
