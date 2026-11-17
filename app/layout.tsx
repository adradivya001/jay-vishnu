import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/shared/FloatingContact';
import { HOSPITAL_DATA } from '@/data/hospital';

export const metadata: Metadata = {
  metadataBase: new URL('https://jayvishnuhospital.com'),
  title: {
    default: 'Jay Vishnu Hospital | Anantapur',
    template: '%s'
  },
  description: 'Jay Vishnu Hospital, located in Sai Nagar, Anantapur, offers neurological consultations, eye checkups, cataract surgery and diagnostic services.',
  keywords: [
    'Jay Vishnu Hospital Anantapur',
    'Dr. Bharat Vishnu Reddy Neurologist Anantapur',
    'Dr. Leela Padmini Ophthalmologist Anantapur',
    'Neurologist Anantapur',
    'Eye Hospital Anantapur',
    'Cataract Surgery Anantapur',
    'Sai Nagar Hospital Anantapur'
  ],
  authors: [{ name: 'Jay Vishnu Hospital' }],
  creator: 'Jay Vishnu Hospital',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jayvishnuhospital.com',
    title: 'Jay Vishnu Hospital | Anantapur',
    description: 'Jay Vishnu Hospital, located in Sai Nagar, Anantapur, offers neurological consultations, eye checkups, cataract surgery and diagnostic services.',
    siteName: 'Jay Vishnu Hospital'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    name: HOSPITAL_DATA.name,
    description: 'Premier healthcare destination in Sai Nagar, Anantapur established in 2019, providing neurological consultations, diagnostic services, eye checkups, cataract surgeries, and general OT facilities.',
    url: 'https://jayvishnuhospital.com',
    telephone: HOSPITAL_DATA.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3rd Cross Road, Ashok Nagar, Sai Nagar',
      addressLocality: 'Anantapur',
      addressRegion: 'Andhra Pradesh',
      postalCode: HOSPITAL_DATA.pinCode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 14.681123,
      longitude: 77.5956034
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-sky-100 selection:text-sky-900">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
