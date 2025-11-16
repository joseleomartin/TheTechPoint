import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'THE TECH POINT - Soluciones Tecnológicas y Administrativas',
  description: 'Brindamos soluciones tecnológicas integrales y servicios administrativos para hogares y empresas en Argentina. Reparación de equipos, diseño web, domótica y más.',
  keywords: 'tecnología, reparación, computadoras, móviles, diseño web, domótica, trámites, Argentina',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
