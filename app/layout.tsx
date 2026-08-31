import type { Metadata, Viewport } from 'next';
import { fontHeading, fontSans, fontMono } from './fonts';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CartDrawer } from '@/components/cart/cart-drawer';
import { QuickViewModal } from '@/components/cart/quick-view-modal';
import { SearchModal } from '@/components/ui/search-modal';

export const metadata: Metadata = {
  title: {
    default: 'WG Stuff Malta | Work Stuff & Good Stuff Official Detailing Store',
    template: '%s | WG Stuff Malta',
  },
  description:
    'Official Malta importer for Work Stuff & Good Stuff professional car detailing equipment, Albino brushes, 1100 GSM King drying towels, and ceramic car care chemicals. Free island delivery over €50.',
  keywords: [
    'Car Detailing Malta',
    'Work Stuff Malta',
    'Good Stuff Malta',
    'Albino Brush',
    'King Drying Towel',
    'Car Wash Malta',
    'Ceramic Quick Detailer',
    'Microfiber Towels Malta',
    'Auto Detailing Equipment',
  ],
  authors: [{ name: 'WG Stuff Malta' }],
  creator: 'WG Stuff Malta',
  publisher: 'WG Stuff Malta',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://wgstuffmalta.com'),
  openGraph: {
    type: 'website',
    locale: 'en_MT',
    url: 'https://wgstuffmalta.com',
    siteName: 'WG Stuff Malta',
    title: 'WG Stuff Malta | Professional Car Detailing Equipment & Chemicals',
    description:
      'Official Malta importer of Work Stuff professional gear and Good Stuff car care chemicals. Fast island-wide delivery.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&h=630&q=85',
        width: 1200,
        height: 630,
        alt: 'WG Stuff Malta Detailing Equipment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WG Stuff Malta | Professional Car Detailing Equipment',
    description: 'Work Stuff & Good Stuff Official Importer in Malta.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#F8FAFC',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontSans.variable} ${fontMono.variable}`}
    >
      <body className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen flex flex-col selection:bg-amber-100 selection:text-amber-900">
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
        <CartDrawer />
        <QuickViewModal />
        <SearchModal />
      </body>
    </html>
  );
}
