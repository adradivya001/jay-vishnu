export interface ServiceDetail {
  slug: string;
  category: 'Medical Speciality' | 'Additional Service & Facility';
  categoryLabel: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  aboutIntroLabel: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutImage: string;
  doctorName?: string;
  doctorSpeciality?: string;
  doctorImage?: string;
  doctorProfile?: string;
  overviewCard: {
    badge: string;
    title: string;
    description: string;
    highlight?: string;
  };
  coversCard: {
    badge: string;
    title: string;
    items: string[];
  };
  guidance: {
    badge: string;
    heading: string;
    points: string[];
  };
  faqs: {
    q: string;
    a: string;
  }[];
}

export const SERVICES_DETAIL_DATA: Record<string, ServiceDetail> = {
  'neurology': {
    slug: 'neurology',
    category: 'Medical Speciality',
    categoryLabel: 'NEUROLOGY DEPARTMENT',
    title: 'Neurology Consultation & Care',
    shortDescription: 'Dedicated consultations focusing on conditions affecting the brain, nerves, and nervous system, led by acclaimed neurologist Dr. Bharat Vishnu Reddy in Sai Nagar, Anantapur.',
    heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=900',
    aboutIntroLabel: 'ABOUT THIS SPECIALITY',
    aboutTitle: 'Dedicated Care for Your Neurological Health',
    aboutDescription: 'Neurology focuses on the medical evaluation and clinical diagnosis of concerns involving the brain, spine, and peripheral nervous system. At Jay Vishnu Hospital, patients receive focused clinical care from Dr. Bharat Vishnu Reddy, supported by authentic diagnostic and hospital facilities.',
    aboutImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900',
    doctorName: 'Dr. Bharat Vishnu Reddy',
    doctorSpeciality: 'Neurologist',
    doctorImage: '/images/dr-bharat-vishnu-reddy-transparent.png',
    doctorProfile: 'Dr. Bharat Vishnu Reddy is the neurologist associated with Jay Vishnu Hospital in Sai Nagar, Anantapur. He provides focused clinical evaluations and guidance for nervous system health.',
    overviewCard: {
      badge: 'CLINICAL SCOPE',
      title: 'Neurological Overview',
      description: 'Consultations evaluate symptoms such as headaches, neuropathic issues, nerve conditions, seizures, and related nervous system concerns.',
      highlight: 'Patients receive doctor consultations tailored to clinical history and medical evaluation.'
    },
    coversCard: {
      badge: 'WHAT THIS SERVICE COVERS',
      title: 'Consultation & Evaluation Scope',
      items: [
        'Detailed neurological history and clinical assessment',
        'Evaluation of persistent headache and migraine concerns',
        'Nerve and peripheral nervous system evaluations',
        'Coordination with hospital diagnostic services',
        'Follow-up guidance and preventive nervous system care'
      ]
    },
    guidance: {
      badge: 'PATIENT GUIDANCE',
      heading: 'When to Contact Our Neurology Team',
      points: [
        'Experiencing persistent headaches, dizziness, or sensory numbness',
        'Referred by a physician for specialist neurological evaluation',
        'Seeking expert second opinion on nerve or brain health concerns',
        'Requiring clinical follow-up for pre-existing neurological conditions',
        'In need of scheduling structured consultation timings'
      ]
    },
    faqs: [
      {
        q: 'What is neurology?',
        a: 'Neurology is the branch of medicine focused on diagnosing and treating conditions affecting the brain, spinal cord, nerves, and nervous system.'
      },
      {
        q: 'How can I enquire about a neurological consultation?',
        a: 'You can submit an online appointment request on this website or call the Jay Vishnu Hospital reception directly at +91 97032 15567.'
      },
      {
        q: 'Who is the neurologist at Jay Vishnu Hospital?',
        a: 'Dr. Bharat Vishnu Reddy is the neurologist at Jay Vishnu Hospital, located in Sai Nagar, Anantapur.'
      },
      {
        q: 'How can I request an appointment?',
        a: 'Simply click "Book Appointment" or contact our hospital desk. Our staff will check doctor availability and coordinate your consultation time.'
      }
    ]
  },

  'ophthalmology': {
    slug: 'ophthalmology',
    category: 'Medical Speciality',
    categoryLabel: 'OPHTHALMOLOGY DEPARTMENT',
    title: 'Eye Care & Ophthalmology Consultations',
    shortDescription: 'Comprehensive eye health evaluations, vision checkups, and consultations provided by ophthalmologist Dr. Leela Padmini at Jay Vishnu Hospital in Sai Nagar, Anantapur.',
    heroImage: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=900',
    aboutIntroLabel: 'ABOUT THIS SPECIALITY',
    aboutTitle: 'Dedicated Care for Your Vision & Eye Health',
    aboutDescription: 'Ophthalmology focuses on comprehensive eye health, vision evaluation, and clinical eye care. Patients visiting Jay Vishnu Hospital receive clinical consultations from ophthalmologist Dr. Leela Padmini.',
    aboutImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900',
    doctorName: 'Dr. Leela Padmini',
    doctorSpeciality: 'Ophthalmologist',
    doctorImage: 'https://images.unsplash.com/photo-1594824813681-efb45705a18a?auto=format&fit=crop&q=80&w=900',
    doctorProfile: 'Dr. Leela Padmini is the ophthalmologist associated with Jay Vishnu Hospital, providing consultations, vision checkups, and evaluations for eye-care needs.',
    overviewCard: {
      badge: 'CLINICAL SCOPE',
      title: 'Eye Care Overview',
      description: 'Consultations evaluate vision changes, eye strain, cataract symptoms, refractive concerns, and overall ocular health.',
      highlight: 'Patients receive careful examination and professional guidance tailored to their vision needs.'
    },
    coversCard: {
      badge: 'WHAT THIS SERVICE COVERS',
      title: 'Eye Care Examination Scope',
      items: [
        'Comprehensive clinical eye examinations and checkups',
        'Vision evaluation and visual acuity assessment',
        'Consultation and screening for cataract surgery suitability',
        'Guidance on eye strain, dry eyes, and ocular hygiene',
        'Post-consultation follow-ups and specialist eye advice'
      ]
    },
    guidance: {
      badge: 'PATIENT GUIDANCE',
      heading: 'When to Contact Our Eye Care Team',
      points: [
        'Noticing blurriness, cloudiness, or gradual vision changes',
        'Experiencing persistent eye discomfort, irritation, or strain',
        'Seeking consultation for cataract symptoms or eye checkup',
        'Due for routine eye health evaluation or doctor follow-up',
        'Arranging timely consultation slots with our ophthalmologist'
      ]
    },
    faqs: [
      {
        q: 'What is ophthalmology?',
        a: 'Ophthalmology is the medical speciality dedicated to eye care, vision health, and the diagnosis and management of eye conditions.'
      },
      {
        q: 'How can I enquire about an eye checkup?',
        a: 'You can submit an online request or call Jay Vishnu Hospital directly at +91 97032 15567 to book an eye evaluation.'
      },
      {
        q: 'Who is the ophthalmologist at Jay Vishnu Hospital?',
        a: 'Dr. Leela Padmini is the ophthalmologist providing eye consultations at Jay Vishnu Hospital in Sai Nagar, Anantapur.'
      },
      {
        q: 'How can I enquire about cataract surgery?',
        a: 'Initial consultations and evaluations for cataract surgery are conducted by our ophthalmologist. Contact the hospital desk for consultation details.'
      }
    ]
  },

  'diagnostic-services': {
    slug: 'diagnostic-services',
    category: 'Additional Service & Facility',
    categoryLabel: 'HOSPITAL FACILITIES',
    title: 'Diagnostic Services',
    shortDescription: 'Supporting healthcare diagnostic services listed as part of Jay Vishnu Hospital’s clinical capabilities to aid patient evaluations and doctor consultations.',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900',
    aboutIntroLabel: 'SERVICE OVERVIEW',
    aboutTitle: 'Reliable Diagnostic Services for Clinical Care',
    aboutDescription: 'Jay Vishnu Hospital lists diagnostic services to support outpatient consultations and medical care. Patients can contact the hospital reception to understand current diagnostic facilities, procedures, and scheduling.',
    aboutImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900',
    overviewCard: {
      badge: 'SERVICE OVERVIEW',
      title: 'Diagnostic Support Overview',
      description: 'Diagnostic services aid doctors in evaluating medical conditions and guiding treatment decisions accurately.',
      highlight: 'Contact our hospital desk to confirm available diagnostic tests and doctor requisition procedures.'
    },
    coversCard: {
      badge: 'WHAT THIS SERVICE COVERS',
      title: 'Diagnostic Support Scope',
      items: [
        'Diagnostic testing to support clinical consultations',
        'Coordination with attending neurology and ophthalmology doctors',
        'Patient instructions on test preparation and timings',
        'Organized diagnostic reports for medical evaluation',
        'Reception assistance for test enquiries and appointments'
      ]
    },
    guidance: {
      badge: 'PATIENT GUIDANCE',
      heading: 'When to Contact Our Hospital for Diagnostics',
      points: [
        'Requested by your consulting doctor to undergo diagnostic evaluation',
        'Enquiring about specific diagnostic tests currently available',
        'Understanding test preparation guidelines prior to arrival',
        'Confirming reporting timelines and result collection'
      ]
    },
    faqs: [
      {
        q: 'What diagnostic services are listed by the hospital?',
        a: 'Jay Vishnu Hospital lists diagnostic services as part of its healthcare support capabilities. Please contact the hospital desk directly for specific test availability.'
      },
      {
        q: 'How can I enquire about available tests?',
        a: 'You can call our reception at +91 97032 15567 or visit the hospital in Sai Nagar, Anantapur.'
      },
      {
        q: 'How can I request an appointment for diagnostic testing?',
        a: 'Contact the hospital with your doctor requisition or consultation details, and our reception team will guide you on scheduling.'
      }
    ]
  },

  'cataract-surgery': {
    slug: 'cataract-surgery',
    category: 'Additional Service & Facility',
    categoryLabel: 'HOSPITAL FACILITIES',
    title: 'Cataract Surgery',
    shortDescription: 'Cataract surgical care and clinical evaluation listed among the eye-care offerings at Jay Vishnu Hospital in Sai Nagar, Anantapur.',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900',
    aboutIntroLabel: 'SERVICE OVERVIEW',
    aboutTitle: 'Dedicated Cataract Surgery Consultation',
    aboutDescription: 'Cataract surgery is listed among the surgical and eye-care services at Jay Vishnu Hospital. Patients experiencing clouding of vision can arrange a consultation with our ophthalmologist for evaluation and surgical information.',
    aboutImage: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=900',
    overviewCard: {
      badge: 'SERVICE OVERVIEW',
      title: 'Cataract Care Overview',
      description: 'Cataract consultations evaluate lens clouding, visual acuity, and patient readiness for surgical correction.',
      highlight: 'Consultations are conducted by our ophthalmologist to plan appropriate care.'
    },
    coversCard: {
      badge: 'WHAT THIS SERVICE COVERS',
      title: 'Cataract Care Scope',
      items: [
        'Clinical eye evaluation to detect and stage cataract development',
        'Detailed discussion on vision changes and lifestyle impacts',
        'Consultation regarding surgical procedure and requirements',
        'Guidance on pre-operative precautions and preparation',
        'Post-operative review consultations and follow-up care'
      ]
    },
    guidance: {
      badge: 'PATIENT GUIDANCE',
      heading: 'When to Contact Our Hospital for Cataract Care',
      points: [
        'Experiencing cloudy, blurred, or faded vision affecting daily tasks',
        'Requiring doctor evaluation for lens clouding or glares',
        'Seeking information about cataract surgery procedures',
        'Arranging pre-operative assessment and consultation'
      ]
    },
    faqs: [
      {
        q: 'What is cataract surgery?',
        a: 'Cataract surgery is a common surgical procedure to remove a clouded natural lens of the eye and restore clearer vision.'
      },
      {
        q: 'How can I enquire about cataract surgery?',
        a: 'You can contact Jay Vishnu Hospital at +91 97032 15567 to book an ophthalmology evaluation.'
      },
      {
        q: 'How can I arrange a consultation?',
        a: 'Submit an appointment enquiry online or call our desk to schedule an examination with our ophthalmologist.'
      }
    ]
  },

  'general-ot-facilities': {
    slug: 'general-ot-facilities',
    category: 'Additional Service & Facility',
    categoryLabel: 'HOSPITAL FACILITIES',
    title: 'General Operation Theatre Facilities',
    shortDescription: 'General operation theatre facilities maintained under strict safety and clinical standards at Jay Vishnu Hospital in Sai Nagar, Anantapur.',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900',
    aboutIntroLabel: 'SERVICE OVERVIEW',
    aboutTitle: 'Sterile General Operation Theatre Facilities',
    aboutDescription: 'Jay Vishnu Hospital lists general operation theatre facilities as part of its hospital infrastructure to support surgical care. Patients and attending physicians can contact hospital reception for facility details.',
    aboutImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=900',
    overviewCard: {
      badge: 'FACILITY OVERVIEW',
      title: 'Operation Theatre Overview',
      description: 'The general operation theatre provides a sterile, controlled environment designed to support clinical procedures and patient recovery.',
      highlight: 'Facility access and procedural scheduling are coordinated through hospital management.'
    },
    coversCard: {
      badge: 'WHAT THIS FACILITY COVERS',
      title: 'OT Facility Infrastructure Scope',
      items: [
        'Sterile surgical environment following hospital hygiene standards',
        'Facility support for general and minor surgical procedures',
        'Coordination with attending medical specialists',
        'Clean pre-procedure and recovery area supervision',
        'Hospital desk support for surgical scheduling and enquiries'
      ]
    },
    guidance: {
      badge: 'PATIENT GUIDANCE',
      heading: 'When to Contact Our Hospital Regarding OT Facilities',
      points: [
        'Referred for surgical evaluation or minor surgery scheduling',
        'Enquiring about operation theatre availability and protocols',
        'Clarifying admission, pre-procedure, or facility guidelines',
        'Connecting with hospital reception for procedural planning'
      ]
    },
    faqs: [
      {
        q: 'What are general operation theatre facilities?',
        a: 'General operation theatre facilities are dedicated, sterile medical suites equipped to perform surgical procedures under medical supervision.'
      },
      {
        q: 'How can I enquire about available procedures?',
        a: 'Please contact Jay Vishnu Hospital at +91 97032 15567 to speak with our reception staff regarding procedural facilities.'
      },
      {
        q: 'How can I contact the hospital?',
        a: 'You can call +91 97032 15567 or visit 3rd Cross Road, Ashok Nagar, Sai Nagar, Anantapur – 515001.'
      }
    ]
  }
};

