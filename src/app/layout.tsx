import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const mono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Users list',
  description: 'Made by kavvka',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mono.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
