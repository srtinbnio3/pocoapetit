'use client';

import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'POCO A PETIT',
      image: 'https://pocoapetit.com/og-image.jpg',
      '@id': 'https://pocoapetit.com',
      url: 'https://pocoapetit.com',
      telephone: '+81-92-XXX-XXXX',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '福岡県福岡市中央区桜坂',
        addressLocality: '福岡市',
        addressRegion: '福岡県',
        postalCode: '810-0024',
        addressCountry: 'JP'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.579875,
        longitude: 130.384392
      },
      priceRange: '¥¥¥',
      servesCuisine: ['フレンチ', '和食'],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '11:30',
          closes: '15:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '18:00',
          closes: '22:00'
        }
      ],
      menu: 'https://pocoapetit.com/menu',
      hasMenu: {
        '@type': 'Menu',
        name: 'POCO A PETIT Menu',
        url: 'https://pocoapetit.com/menu'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
} 