export interface Address {
  line1: string;
  area: string;
  city: string;
  state: string;
  postalCodePlaceholder: string;
}

export interface ServiceArea {
  name: string;
  description: string;
  popularSubjects: string[];
}

export interface SubjectItem {
  name: string;
  category: string;
  description: string;
}

export interface BoardItem {
  name: string;
  fullName: string;
}

export interface LearningStage {
  title: string;
  subtitle: string;
  details: string;
}

export const siteConfig = {
  brandName: 'Naveen Home Tuitions',
  tagline: 'Connecting Parents and Students with Suitable Home & Online Tutors in Hyderabad',
  description: 'Naveen Home Tuitions connects parents and students with verified, dedicated home and online tutors for Classes 1–12 and BTech across Hyderabad, Telangana.',
  city: 'Hyderabad',
  state: 'Telangana',
  country: 'India',
  phoneNumber: '+91 95052 03418',
  phoneDisplay: '+91 95052 03418',
  whatsappNumber: '919505203418',
  whatsappDisplay: '+91 95052 03418',
  email: 'contact@naveenhometuitions.com',
  googleBusinessProfileUrl: 'https://maps.google.com/?cid=naveen-home-tuitions-hyderabad',
  address: {
    line1: 'Near Pillar No. 120, Ring Road',
    area: 'Attapur',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCodePlaceholder: '500048',
  },
  serviceAreas: [
    {
      name: 'Attapur',
      description: 'Home & online tutors available for CBSE, SSC & ICSE curricula.',
      popularSubjects: ['Maths', 'Physics', 'Chemistry'],
    },
    {
      name: 'Mehdipatnam',
      description: 'Experienced tutors covering secondary classes, junior college & engineering.',
      popularSubjects: ['Mathematics', 'Science', 'English'],
    },
    {
      name: 'Tolichowki',
      description: 'Reliable tuition support for primary, secondary and senior secondary students.',
      popularSubjects: ['Physics', 'Maths', 'Biology'],
    },
    {
      name: 'Langer House',
      description: 'Dedicated home tutors for school academics and board exam preparations.',
      popularSubjects: ['Science', 'Social Studies', 'Maths'],
    },
    {
      name: 'Rajendranagar',
      description: 'Qualified tutors for all major boards and university engineering courses.',
      popularSubjects: ['Computer Science', 'BTech Maths', 'Chemistry'],
    },
    {
      name: 'Upperpally',
      description: 'Individual home tutoring tailored to student learning pace.',
      popularSubjects: ['CBSE Maths', 'Science', 'English'],
    },
    {
      name: 'Karwan',
      description: 'Personalized tuition for primary and high school students.',
      popularSubjects: ['Mathematics', 'Physical Science', 'Languages'],
    },
    {
      name: 'Suncity',
      description: 'Experienced educators for CBSE, ICSE and international syllabus.',
      popularSubjects: ['Physics', 'Chemistry', 'BTech Subjects'],
    },
    {
      name: 'Nearby Hyderabad areas',
      description: 'Tuition inquiries supported across Gachibowli, Manikonda, Masab Tank, and surrounding areas.',
      popularSubjects: ['All Academic Subjects', 'Online Tuition'],
    },
  ],
  subjects: [
    {
      name: 'Mathematics',
      category: 'Core',
      description: 'Foundational arithmetic, algebra, geometry, calculus, and engineering maths.',
    },
    {
      name: 'Science',
      category: 'Core',
      description: 'Integrated general science for middle and secondary school standards.',
    },
    {
      name: 'Physics',
      category: 'Sciences',
      description: 'Mechanics, thermodynamics, electrodynamics, and conceptual physics for Class 9–12.',
    },
    {
      name: 'Chemistry',
      category: 'Sciences',
      description: 'Physical, organic, and inorganic chemistry for board exams and competitive foundations.',
    },
    {
      name: 'Biology',
      category: 'Sciences',
      description: 'Botany, zoology, human anatomy, and board syllabus preparation.',
    },
    {
      name: 'English',
      category: 'Languages',
      description: 'Grammar, literature, comprehension, writing skills, and communicative competence.',
    },
    {
      name: 'Computer Science',
      category: 'Technical',
      description: 'Python, Java, C++, data structures, and computer applications.',
    },
    {
      name: 'Other subjects on request',
      category: 'Core',
      description: 'Social studies, Telugu, Hindi, Accountancy, Economics, and BTech branches.',
    },
  ],
  boards: [
    { name: 'SSC', fullName: 'Telangana State Board of Secondary Education' },
    { name: 'CBSE', fullName: 'Central Board of Secondary Education' },
    { name: 'ICSE', fullName: 'Indian Certificate of Secondary Education' },
    {
      name: 'IGCSE',
      fullName: 'Cambridge International General Certificate of Secondary Education',
    },
    {
      name: 'Other boards',
      fullName: 'IB, NIOS, and State Intermediate Board on request',
    },
  ],
  learningStages: [
    {
      title: 'Classes 1–5',
      subtitle: 'Primary Foundation',
      details: 'Building solid literacy, basic numeracy, foundational science concepts, and consistent study habits.',
    },
    {
      title: 'Classes 6–8',
      subtitle: 'Middle School Growth',
      details: 'Conceptual clarity in Mathematics, Integrated Sciences, Social Studies, and language fundamentals.',
    },
    {
      title: 'Classes 9–10',
      subtitle: 'Secondary & Board Prep',
      details: 'Focused guidance for SSC, CBSE, and ICSE board exams, practical problem-solving, and regular test series.',
    },
    {
      title: 'Classes 11–12',
      subtitle: 'Senior Secondary / Intermediate',
      details: 'Deep subject specialization in MPC (Maths, Physics, Chemistry) and BiPC, plus board examination syllabus mastery.',
    },
    {
      title: 'BTech',
      subtitle: 'Engineering Mathematics & Core Subjects',
      details: 'M1, M2, M3, Engineering Physics, C/Java Programming, Electrical Circuits, and core branch engineering modules.',
    },
  ],
};

export const images = {
  heroTutor: '/assets/hero_tutor_hyderabad_1791023394824-C1DWDPSI.jpg',
  tutorTeachingMath: '/assets/tutor_teaching_math_1791023409339-Z3DKKlcc.jpg',
  onlineTuitionStudent: '/assets/student_online_tuition_1791023420121-9hv73jQE.jpg',
};

export function validateIndianMobile(e: string) {
  const t = e.replace(/[\s\-()+]/g, '');
  let n = t;
  if (t.startsWith('91') && t.length === 12) {
    n = t.slice(2);
  } else if (t.startsWith('0') && t.length === 11) {
    n = t.slice(1);
  }
  if (n.length === 0) {
    return { isValid: false, cleaned: '', error: 'Mobile number is required' };
  }
  if (/^[6-9]\d{9}$/.test(n)) {
    return { isValid: true, cleaned: n };
  }
  return {
    isValid: false,
    cleaned: n,
    error: 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)',
  };
}

export const gt = validateIndianMobile;

export function getWhatsAppUrl(customMessage?: string): string {
  const text = customMessage
    ? encodeURIComponent(customMessage)
    : encodeURIComponent('Hello Naveen Home Tuitions, I am looking for information regarding home/online tuition in Hyderabad.');
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function getCallUrl(): string {
  return `tel:${siteConfig.phoneNumber.replace(/\s+/g, '')}`;
}

export function generateParentInquiryWhatsAppUrl(formData: Record<string, string>): string {
  const lines = [
    'Hello Naveen Home Tuitions,',
    '',
    'I would like to find a tutor.',
    '',
    `Parent Name: ${formData.parentName || 'Not specified'}`,
    `Mobile Number: ${formData.mobileNumber || 'Not specified'}`,
    `WhatsApp Number: ${formData.whatsappNumber || formData.mobileNumber || 'Same as Mobile'}`,
    `Student Name: ${formData.studentName || 'Not specified'}`,
    `Student Class: ${formData.studentClass || 'Not specified'}`,
    `Board: ${formData.board || 'Not specified'}`,
    `Subject Required: ${formData.subjectRequired || 'Not specified'}`,
    `Tuition Mode: ${formData.tuitionMode || 'Home'}`,
    `Preferred Location: ${formData.preferredLocation || 'Hyderabad'}`,
    `Additional Requirements: ${formData.additionalRequirements || 'None'}`,
    '',
    'Please contact me regarding suitable tuition options.',
  ];
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function generateTutorApplicationWhatsAppUrl(formData: Record<string, string>): string {
  const lines = [
    'Hello Naveen Home Tuitions,',
    '',
    'I would like to register as a tutor.',
    '',
    `Full Name: ${formData.fullName || 'Not specified'}`,
    `Mobile Number: ${formData.mobileNumber || 'Not specified'}`,
    `WhatsApp Number: ${formData.whatsappNumber || formData.mobileNumber || 'Same as Mobile'}`,
    `Email: ${formData.email || 'Not provided'}`,
    `Highest Qualification: ${formData.highestQualification || 'Not specified'}`,
    `Teaching Experience: ${formData.teachingExperience || 'Not specified'}`,
    `Subjects: ${formData.subjects || 'Not specified'}`,
    `Classes: ${formData.classesYouTeach || 'Not specified'}`,
    `Boards: ${formData.boards || 'All boards'}`,
    `Languages Known: ${formData.languagesKnown || 'English, Telugu, Hindi'}`,
    `Areas: ${formData.areasYouCanTravelTo || 'Hyderabad'}`,
    `Teaching Mode: ${formData.teachingMode || 'Home'}`,
    `Expected Fee: ${formData.expectedFee || 'Negotiable'}`,
    `Availability: ${formData.availability || 'Flexible'}`,
    `Additional Information: ${formData.additionalInformation || 'None'}`,
    '',
    'Please contact me regarding tutor opportunities.',
  ];
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function generateGeneralContactWhatsAppUrl(formData: Record<string, string>): string {
  const lines = [
    'Hello Naveen Home Tuitions,',
    '',
    `Name: ${formData.name || 'Not specified'}`,
    `Phone: ${formData.phone || 'Not specified'}`,
    `Email: ${formData.email || 'Not provided'}`,
    `Message: ${formData.message || 'Enquiry regarding tuition services.'}`,
    '',
    'Please contact me regarding my enquiry.',
  ];
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export const routeMetadata: Record<
  string,
  { title: string; description: string; canonical: string; h1: string }
> = {
  '/': {
    title: 'Home Tutors in Hyderabad | Naveen Home Tuitions',
    description:
      'Find verified home and online tutors in Hyderabad for Classes 1–12, IIT-JEE, NEET & BTech. Personalized tutoring across Attapur, Mehdipatnam, and Tolichowki.',
    canonical: 'https://naveen-home-tuitions.ai.studio/',
    h1: 'Naveen Home Tuitions',
  },
  '/about': {
    title: 'About Our Hyderabad Tutor Network | Naveen Home Tuitions',
    description:
      'Learn about Naveen Home Tuitions, Hyderabad’s trusted tutoring service connecting students with qualified home and online tutors for all subjects since 2024.',
    canonical: 'https://naveen-home-tuitions.ai.studio/about',
    h1: 'About Naveen Home Tuitions',
  },
  '/parents': {
    title: 'Find Home & Online Tutors in Hyderabad | For Parents',
    description:
      'Request verified home and online tutors in Hyderabad. One-on-one personalized tutoring for CBSE, ICSE, SSC, IGCSE & BTech with tailored academic support.',
    canonical: 'https://naveen-home-tuitions.ai.studio/parents',
    h1: 'Find a Qualified Home or Online Tutor in Hyderabad',
  },
  '/tutors': {
    title: 'Become a Home Tutor in Hyderabad | Apply to Tutor Network',
    description:
      'Join Hyderabad’s premier home tutoring network. Connect with students matching your subject expertise, preferred locations, and schedule. Apply now.',
    canonical: 'https://naveen-home-tuitions.ai.studio/tutors',
    h1: 'Become a Home & Online Tutor in Hyderabad',
  },
  '/how-it-works': {
    title: 'How Home Tuition Works in Hyderabad | Naveen Home Tuitions',
    description:
      'Learn how our simple 4-step tutoring process connects Hyderabad students with verified home and online tutors: submit, match, take a demo, and start.',
    canonical: 'https://naveen-home-tuitions.ai.studio/how-it-works',
    h1: 'How Home Tuition Works in Hyderabad',
  },
  '/contact': {
    title: 'Contact Naveen Home Tuitions | Hyderabad Tutor Inquiries',
    description:
      'Get in touch with Naveen Home Tuitions in Hyderabad. Call +91 95052 03418 or message us on WhatsApp for fast, reliable home and online tutor assistance.',
    canonical: 'https://naveen-home-tuitions.ai.studio/contact',
    h1: 'Contact Naveen Home Tuitions Hyderabad',
  },
};
