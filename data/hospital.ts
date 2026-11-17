export interface HospitalInfo {
  name: string;
  tagline: string;
  location: string;
  city: string;
  state: string;
  pinCode: string;
  address: string;
  phone: string;
  displayPhone: string;
  established: number;
  email: string;
  officialDescription: string;
  timingsNotice: string;
  googleMapsUrl: string;
  googleMapsEmbedSrc: string;
  whatsappNumber?: string;
}

export const HOSPITAL_DATA: HospitalInfo = {
  name: "JAY VISHNU HOSPITAL",
  tagline: "Healthcare with Care, Attention and Expertise",
  location: "Sai Nagar, Anantapur, Andhra Pradesh, India",
  city: "Anantapur",
  state: "Andhra Pradesh",
  pinCode: "515001",
  address: "3rd Cross Road, Ashok Nagar, Sai Nagar, Anantapur, Andhra Pradesh – 515001",
  phone: "+919703215567",
  displayPhone: "+91 97032 15567",
  established: 2019,
  email: "contact@jayvishnuhospital.com",
  officialDescription:
    "Welcome to JAY VISHNU HOSPITAL, a premier healthcare destination in Sai Nagar, Anantapur. Established in 2019, we offer comprehensive medical services tailored to meet your diverse healthcare needs. Our dedicated team, led by the acclaimed neurologist Dr. Bharat Vishnu Reddy and the talented ophthalmologist Dr. Leela Padmini, ensures you receive the highest quality of care. From neurological consultations and diagnostic services to eye checkups, cataract surgeries, and general OT facilities, we provide a safe and compassionate environment for your well-being. Experience exceptional healthcare with JAY VISHNU HOSPITAL.",
  timingsNotice:
    "For current consultation timings and availability, please contact Jay Vishnu Hospital directly.",
  googleMapsUrl:
    "https://maps.google.com/?q=Jay+Vishnu+Hospital,+3rd+Cross+Road,+Ashok+Nagar,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001",
  googleMapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.883713601557!2d77.5956034!3d14.681123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b00511679f1%3A0x6e902b4d994e7724!2sSai%20Nagar%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  whatsappNumber: "+919703215567"
};

export interface Department {
  id: string;
  name: string;
  slug: string;
  doctorName: string;
  shortDescription: string;
  fullDescription: string;
  topics: string[];
  icon: string;
  image: string;
}

export const DEPARTMENTS_DATA: Department[] = [
  {
    id: "neurology",
    name: "Neurology",
    slug: "neurology",
    doctorName: "Dr. Bharat Vishnu Reddy",
    shortDescription:
      "Medical consultations focused on neurological health, brain, spinal cord, and nervous system concerns.",
    fullDescription:
      "Neurology is the medical speciality concerned with conditions affecting the brain, spinal cord, and nervous system. Jay Vishnu Hospital lists neurological consultations among its healthcare services. Patients can contact the hospital to enquire about neurological consultations and appointment availability.",
    topics: [
      "Brain health and neurological wellness",
      "Nervous system health evaluation",
      "Neurological clinical consultations",
      "Medical assessment & diagnostic coordination",
      "Patient follow-up consultations"
    ],
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    slug: "ophthalmology",
    doctorName: "Dr. Leela Padmini",
    shortDescription:
      "Comprehensive eye health care, vision assessment, eye checkups, and cataract surgery services.",
    fullDescription:
      "Ophthalmology focuses on eye health, vision assessment, and the medical management of eye-related conditions. Jay Vishnu Hospital lists eye checkups and cataract surgeries among its healthcare services. Patients can contact the hospital to enquire about consultation availability and cataract surgery services.",
    topics: [
      "Routine & comprehensive eye checkups",
      "Eye health assessment",
      "Vision-related consultations",
      "Cataract evaluation",
      "Cataract surgery enquiries & guidance"
    ],
    icon: "Eye",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  }
];

export interface AdditionalService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
}

export const ADDITIONAL_SERVICES_DATA: AdditionalService[] = [
  {
    id: "diagnostic-services",
    title: "Diagnostic Services",
    slug: "diagnostic-services",
    shortDescription:
      "Diagnostic services to support medical evaluation and healthcare consultations.",
    fullDescription:
      "Jay Vishnu Hospital lists diagnostic services as part of its healthcare offerings. Patients can contact the hospital to enquire about available diagnostic investigations and related services.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "cataract-surgery",
    title: "Cataract Surgery",
    slug: "cataract-surgery",
    shortDescription:
      "Surgical eye care service specifically listed in the hospital's official profile.",
    fullDescription:
      "Cataract surgery is among the services mentioned in Jay Vishnu Hospital's public business description. Patients can contact the hospital for information about consultation and procedure availability.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "general-ot",
    title: "General Operation Theatre Facilities",
    slug: "general-ot",
    shortDescription:
      "Operation theatre facilities supporting required surgical procedures and arrangements.",
    fullDescription:
      "Jay Vishnu Hospital's public business description mentions general operation theatre facilities. Contact the hospital for details about available procedures and arrangements.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  }
];

export interface Doctor {
  id: string;
  name: string;
  speciality: string;
  profileDescription: string;
  image: string;
  isVerified: boolean;
}

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "dr-bharat-vishnu-reddy",
    name: "Dr. Bharat Vishnu Reddy",
    speciality: "Neurology",
    profileDescription:
      "Providing neurological consultations and patient care at Jay Vishnu Hospital.",
    image: "/images/dr-bharat-vishnu-reddy-portrait-card.jpg",
    isVerified: true
  },
  {
    id: "dr-leela-padmini",
    name: "Dr. Leela Padmini",
    speciality: "Ophthalmology",
    profileDescription:
      "Providing eye consultations and ophthalmology care at Jay Vishnu Hospital.",
    image: "", // Placeholder flagged - no official photograph provided in project assets
    isVerified: true
  }
];

export interface Facility {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  image: string;
}

export const FACILITIES_DATA: Facility[] = [
  {
    id: "hospital-environment",
    title: "Hospital Environment",
    shortDescription:
      "Clean, modern, and patient-friendly healthcare setting established in 2019 in Sai Nagar, Anantapur.",
    fullDescription:
      "A welcoming, well-illuminated, and safe healthcare environment designed to ensure patient comfort, dignity, and attentive care for individuals and accompanying families.",
    category: "Hospital Setting",
    image: "/images/jay-vishnu-hospital-corridor.jpg"
  },
  {
    id: "consultation-areas",
    title: "Patient Consultation Areas",
    shortDescription:
      "Dedicated clinical consultation chambers for private doctor-patient discussions and evaluations.",
    fullDescription:
      "Comfortable consultation spaces where patients can discuss health concerns and receive medical guidance directly from our associated doctors.",
    category: "Consultation",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "diagnostic-services-facility",
    title: "Diagnostic Services",
    shortDescription:
      "Diagnostic services mentioned in the hospital profile to support clinical evaluations.",
    fullDescription:
      "Diagnostic facilities and liaison to support thorough clinical consultations and accurate health assessments as stated in hospital records.",
    category: "Diagnostics",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "general-ot-facility",
    title: "General Operation Theatre Facilities",
    shortDescription:
      "General OT facilities listed in the hospital profile to support required procedures.",
    fullDescription:
      "Operating theatre facilities designated for supported surgical interventions and procedures. Contact the hospital for details regarding procedure availability.",
    category: "Surgical Facilities",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Departments", href: "/departments" },
  { name: "Our Doctors", href: "/doctors" },
  { name: "Facilities", href: "/facilities" },
  { name: "Emergency", href: "/emergency" },
  { name: "Contact Us", href: "/contact" }
];
