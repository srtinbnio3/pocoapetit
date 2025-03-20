import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP, Cormorant } from 'next/font/google';
import { cn } from '@/lib/utils';

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
  title: 'POCO A PETIT - 福岡・桜坂の創作和フレンチ',
  description: '福岡・桜坂で愛され続ける創作和フレンチレストラン「POCO A PETIT」。伝統的なフレンチと和の技法を融合させた独創的な料理をご提供いたします。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={cn(notoSansJP.variable, cormorant.variable)}>
      <body className="font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}