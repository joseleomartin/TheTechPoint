'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

export function ContactCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
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
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <FadeIn delay={0.2}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-full text-sm font-medium text-primary mb-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 2 
                }}
              >
                <MessageCircle className="h-4 w-4" />
              </motion.div>
              Estamos aquí para ayudarte
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              ¿Necesitas ayuda con tecnología o trámites?
            </h2>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Contáctanos hoy y descubre cómo podemos simplificar tu vida digital
              y administrativa.
            </p>
          </FadeIn>

          <FadeIn delay={0.8} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white group relative overflow-hidden">
                  <Link href="/contact" className="relative z-10 flex items-center">
                    Contáctanos Ahora
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
                  <a
                    href="https://wa.me/5491128583157"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10"
                  >
                    WhatsApp
                    <motion.div
                      className="absolute inset-0 bg-green-500/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                    />
                  </a>
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
