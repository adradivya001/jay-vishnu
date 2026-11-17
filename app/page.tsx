import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import DepartmentsPreview from '@/components/home/DepartmentsPreview';
import DoctorsPreview from '@/components/home/DoctorsPreview';
import FacilitiesPreview from '@/components/home/FacilitiesPreview';
import PatientJourney from '@/components/home/PatientJourney';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import ContactLocationSection from '@/components/home/ContactLocationSection';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* 2. Hospital Introduction Preview */}
      <div id="about">
        <AboutPreview />
      </div>

      {/* 3. Why Choose Us */}
      <WhyChooseUs />

      {/* 4. Our Medical Departments & Additional Services */}
      <div id="services">
        <DepartmentsPreview />
      </div>

      {/* 5. Meet Our Doctors */}
      <div id="doctors">
        <DoctorsPreview />
      </div>

      {/* 6. Hospital Facilities Preview */}
      <div id="facilities">
        <FacilitiesPreview />
      </div>

      {/* 7. Patient Journey */}
      <PatientJourney />

      {/* 8. Appointment CTA */}
      <AppointmentCTA />

      {/* 9. Contact and Location */}
      <div id="contact">
        <ContactLocationSection />
      </div>
    </div>
  );
}
