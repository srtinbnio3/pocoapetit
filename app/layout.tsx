import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP, Cormorant } from 'next/font/google';
import { cn } from '@/lib/utils';
import StructuredData from '@/components/structured-data';

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'POCO A PETIT(ポコアペティ)',
  description: '福岡・桜坂で愛され続ける創作和フレンチレストラン「POCO A PETIT」。伝統的なフレンチと和の技法を融合させた独創的な料理をご提供いたします。',
  keywords: 'POCO A PETIT, ポコアペティ, 創作和フレンチ, 福岡, 桜坂, レストラン, フレンチ, 和食, 料理, ディナー, ランチ',
  authors: [{ name: 'POCO A PETIT' }],
  creator: 'POCO A PETIT',
  publisher: 'POCO A PETIT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pocoapetit.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'POCO A PETIT - 福岡・桜坂の創作和フレンチ',
    description: '福岡・桜坂で愛され続ける創作和フレンチレストラン「POCO A PETIT」。伝統的なフレンチと和の技法を融合させた独創的な料理をご提供いたします。',
    url: 'https://pocoapetit.com',
    siteName: 'POCO A PETIT',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'POCO A PETIT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'POCO A PETIT - 福岡・桜坂の創作和フレンチ',
    description: '福岡・桜坂で愛され続ける創作和フレンチレストラン「POCO A PETIT」。伝統的なフレンチと和の技法を融合させた独創的な料理をご提供いたします。',
    images: ['/og-image.jpg'],
  },
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
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={cn(notoSansJP.variable, cormorant.variable)}>
      <body className="font-sans antialiased">
        <StructuredData />
        <main>{children}</main>
      </body>
    </html>
  );
}