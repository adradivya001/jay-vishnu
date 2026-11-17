import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES_DETAIL_DATA } from '@/data/services-detail';
import ServiceDetailPageView from '@/components/shared/ServiceDetailPageView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DETAIL_DATA[slug];
  if (!service) return { title: 'Speciality Not Found' };

  return {
    title: `${service.title} | Jay Vishnu Hospital, Anantapur`,
    description: service.shortDescription
  };
}

export function generateStaticParams() {
  return [
    { slug: 'neurology' },
    { slug: 'ophthalmology' }
  ];
}

export default async function SpecialityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DETAIL_DATA[slug];

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailPageView 
      service={service} 
      breadcrumbCategory="Medical Specialities" 
    />
  );
}

