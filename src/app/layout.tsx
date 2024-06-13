import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
      <Script src="https://telegram.org/js/telegram-web-app.js" defer />
        <NextTopLoader />
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
