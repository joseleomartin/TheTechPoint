'use client';

import Link from 'next/link';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Youtube, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

const footerLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/services', label: 'Servicios' },
  { href: '/about', label: 'Nosotros' },
  { href: '/contact', label: 'Contacto' },
];

const footerServices = [
  'Reparación de Computadoras',
  'Diseño Web',
  'Domótica',
  'Trámites Administrativos',
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-primary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Logo className="brightness-0 invert" />
              </motion.div>
              <p className="text-sm text-gray-400">
                Soluciones tecnológicas y administrativas para tu hogar y negocio.
              </p>
              {/* Social Media Links - Horizontal */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-4 flex items-center gap-3"
              >
                <a
                  href="https://www.youtube.com/@TheTechPointYT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group whitespace-nowrap"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <Youtube className="h-5 w-5 text-primary" />
                  </motion.div>
                  <span>Síguenos en YouTube</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61581377732375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group whitespace-nowrap"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-primary" />
                  </motion.div>
                  <span>Síguenos en Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/thepointtech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group whitespace-nowrap"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                  </motion.div>
                  <span>Síguenos en Instagram</span>
                </a>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="font-semibold text-white mb-4">Enlaces</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-sm hover:text-primary transition-colors relative group inline-block"
                    >
                      {link.label}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                        initial={false}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h3 className="font-semibold text-white mb-4">Servicios</h3>
              <ul className="space-y-2 text-sm">
                {footerServices.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{ x: 5 }}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div>
              <h3 className="font-semibold text-white mb-4">Contacto</h3>
              <ul className="space-y-3">
                <motion.li
                  className="flex items-center gap-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Phone className="h-4 w-4 text-primary" />
                  </motion.div>
                  <a href="tel:+541128583157" className="hover:text-primary transition-colors">
                    +54 11 2858-3157
                  </a>
                </motion.li>
                <motion.li
                  className="flex items-center gap-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:info@thetechpoint.com.ar" className="hover:text-primary transition-colors">
                    thetechpointhd@gmail.com
                  </a>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span>Buenos Aires, Argentina</span>
                </motion.li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p>&copy; {new Date().getFullYear()} THE TECH POINT. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
