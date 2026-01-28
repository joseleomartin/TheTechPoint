'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Laptop, Smartphone, Globe, Home, Cpu, Camera, Shield, Code, Wrench, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { CircuitAnimation } from '@/components/animations/CircuitAnimation';

const techIcons = [
  { Icon: Cpu, delay: 0.1, x: -80, y: -60, size: 80, z: 10 },
  { Icon: Shield, delay: 0.2, x: 60, y: -40, size: 70, z: 8 },
  { Icon: Camera, delay: 0.3, x: 100, y: 20, size: 75, z: 9 },
  { Icon: Globe, delay: 0.4, x: -40, y: 80, size: 65, z: 7 },
  { Icon: Laptop, delay: 0.5, x: 20, y: -80, size: 60, z: 6 },
  { Icon: Smartphone, delay: 0.6, x: -100, y: 30, size: 55, z: 5 },
  { Icon: Code, delay: 0.7, x: 80, y: 70, size: 50, z: 4 },
  { Icon: Home, delay: 0.8, x: -60, y: -20, size: 45, z: 3 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />


      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <FadeIn delay={0.2}>
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 rounded-full text-sm font-semibold text-primary mb-4 border border-primary/20 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Zap className="h-4 w-4" strokeWidth={2.5} />
                </motion.div>
                Soluciones Tecnológicas Profesionales
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Tecnología y gestión{' '}
                <motion.span 
                  className="text-primary inline-block"
                  animate={{
                    backgroundPosition: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    backgroundImage: 'linear-gradient(90deg, hsl(0, 100%, 50%), hsl(0, 100%, 60%), hsl(0, 100%, 50%))',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  simplificadas
                </motion.span>
              </motion.h1>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Brindamos soluciones tecnológicas integrales y servicios administrativos
                para hogares y empresas en Argentina.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white group relative overflow-hidden">
                    <Link href="/contact" className="relative z-10 flex items-center">
                      Contáctanos
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild size="lg" variant="outline" className="relative overflow-hidden group">
                    <Link href="/services">
                      <span className="relative z-10">Ver Servicios</span>
                      <motion.div
                        className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                      />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>

            {/* Premium Stats */}
            <FadeIn delay={1} direction="up">
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8">
                <motion.div
                  className="group relative flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 }}
                >
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center border border-primary/30 shadow-inner"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Wrench className="h-7 w-7 text-primary" strokeWidth={2} />
                  </motion.div>
                  <div className="text-left">
                    <motion.div 
                      className="font-bold text-2xl text-gray-900 dark:text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 }}
                    >
                      +500
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Reparaciones</div>
                  </div>
                </motion.div>
                <motion.div
                  className="group relative flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3 }}
                >
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center border border-primary/30 shadow-inner"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="h-7 w-7 text-primary" strokeWidth={2} />
                  </motion.div>
                  <div className="text-left">
                    <motion.div 
                      className="font-bold text-2xl text-gray-900 dark:text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.4 }}
                    >
                      +200
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Clientes</div>
                  </div>
                </motion.div>
                <motion.div
                  className="group relative flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                >
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center border border-primary/30 shadow-inner"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="h-7 w-7 text-primary" strokeWidth={2} />
                  </motion.div>
                  <div className="text-left">
                    <motion.div 
                      className="font-bold text-2xl text-gray-900 dark:text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.6 }}
                    >
                      100%
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Satisfacción</div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Right side - Professional Circuit Animation */}
          <FadeIn delay={0.6} direction="left">
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[600px] flex items-center justify-center">
                <CircuitAnimation />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-950 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </section>
  );
}
