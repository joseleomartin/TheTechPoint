'use client';

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'THE TECH POINT',
    description: 'Soluciones tecnológicas integrales y servicios administrativos para hogares y empresas en Quilmes, Bernal, Don Bosco y toda la zona sur del Gran Buenos Aires, Argentina.',
    url: 'https://thetechpoint.com.ar',
    logo: 'https://thetechpoint.com.ar/Fondo transparente.png',
    image: 'https://thetechpoint.com.ar/Fondo transparente.png',
    telephone: '+541128583157',
    email: 'thetechpointhd@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Quilmes',
      addressRegion: 'Buenos Aires',
      addressCountry: 'AR',
      streetAddress: 'Buenos Aires, Argentina',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-34.7200',
      longitude: '-58.2542',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Quilmes',
      },
      {
        '@type': 'City',
        name: 'Bernal',
      },
      {
        '@type': 'City',
        name: 'Don Bosco',
      },
      {
        '@type': 'City',
        name: 'Zona Sur GBA',
      },
    ],
    priceRange: '$$',
    openingHours: 'Mo-Su 09:00-20:00',
    sameAs: [
      'https://www.youtube.com/@TheTechPointYT',
      'https://www.facebook.com/profile.php?id=61581377732375',
      'https://www.instagram.com/thepointtech/',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios Tecnológicos',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación de Computadoras',
            description: 'Diagnóstico y reparación de equipos de escritorio y portátiles en Quilmes, Bernal y Don Bosco',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación de Móviles',
            description: 'Servicio técnico especializado para smartphones y tablets',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Diseño Web',
            description: 'Sitios web profesionales y aplicaciones personalizadas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trámites Administrativos',
            description: 'Gestión de trámites ante ANSES, PAMI, AFIP y más',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
