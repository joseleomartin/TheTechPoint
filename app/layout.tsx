import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Favicon } from '@/components/Favicon';
import { StructuredData } from '@/components/SEO/StructuredData';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'THE TECH POINT - Reparación de PC y Móviles en Quilmes, Bernal, Don Bosco | Servicios Tecnológicos',
  description: 'Servicio técnico de computadoras y móviles en Quilmes, Bernal y Don Bosco. Reparación de PC, smartphones, diseño web, domótica y trámites administrativos. Atención en Zona Sur GBA. +500 reparaciones realizadas.',
  keywords: 'reparación de computadoras Quilmes, servicio técnico Bernal, reparación de móviles Don Bosco, técnico en computadoras zona sur, reparación PC Quilmes, servicio técnico celulares Bernal, arreglo de computadoras Don Bosco, técnico en informática Quilmes, reparación de notebooks Bernal, servicio técnico Quilmes, reparación de tablets Don Bosco, diseño web Quilmes, domótica Bernal, trámites ANSES Quilmes, trámites PAMI Don Bosco, técnico en PC zona sur, reparación de celulares Quilmes, servicio técnico informático Bernal, Argentina, Buenos Aires, GBA sur',
  authors: [{ name: 'THE TECH POINT' }],
  creator: 'THE TECH POINT',
  publisher: 'THE TECH POINT',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://thetechpoint.com.ar',
    title: 'THE TECH POINT - Servicio Técnico en Quilmes, Bernal y Don Bosco',
    description: 'Reparación de computadoras y móviles en Quilmes, Bernal, Don Bosco. Servicios tecnológicos profesionales en Zona Sur del Gran Buenos Aires.',
    siteName: 'THE TECH POINT',
    images: [
      {
        url: '/Fondo transparente.png',
        width: 1200,
        height: 630,
        alt: 'THE TECH POINT - Soluciones Tecnológicas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE TECH POINT - Servicio Técnico Quilmes, Bernal, Don Bosco',
    description: 'Reparación de PC y móviles en Quilmes, Bernal y Don Bosco. Servicios tecnológicos profesionales.',
    images: ['/Fondo transparente.png'],
  },
  alternates: {
    canonical: 'https://thetechpoint.com.ar',
  },
  icons: {
    icon: [
      { url: '/Fondo transparente.png', sizes: '32x32', type: 'image/png' },
      { url: '/Fondo transparente.png', sizes: '64x64', type: 'image/png' },
      { url: '/Fondo transparente.png', sizes: '96x96', type: 'image/png' },
      { url: '/Fondo transparente.png', sizes: '128x128', type: 'image/png' },
      { url: '/Fondo transparente.png', sizes: '192x192', type: 'image/png' },
      { url: '/Fondo transparente.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: '/Fondo transparente.png',
    apple: [
      { url: '/Fondo transparente.png', sizes: '180x180', type: 'image/png' },
      { url: '/Fondo transparente.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Favicon />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
