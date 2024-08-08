import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextAuthProvider } from './providers/NextAuthProvider';
import AppLayout from './components/AppLaout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BMSIT-Announcements',
  description: 'Shows announcements for BMSIT students',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'w-full h-[100vh] relative'}>
        {' '}
        <NextAuthProvider>
          <AppLayout>{children}</AppLayout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
