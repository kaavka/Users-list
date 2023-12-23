import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import './globals.scss';
import style from './layout.module.scss';

const mono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Users list',
  description: 'Made by kavvka',
};
// shared layout among all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mono.className}>
        <Header />
        <main className={style.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
