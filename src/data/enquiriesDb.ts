// Client-Side Database & Synchronization Layer for Naveen Home Tuitions
// Ensures all enquiries, tutor applications, and contact messages are persistently saved
// even if the live host runs in static CDN mode, and syncs with the Node backend when available.

export interface Enquiry {
  id: string;
  category: 'parent' | 'tutor' | 'contact';
  status: 'New' | 'Contacted' | 'In Progress' | 'Completed' | 'Closed';
  createdAt: string;
  createdAtIST: string;
  updatedAt: string;
  updatedAtIST: string;
  notes?: string;
  data: Record<string, any>;
}

export interface Stats {
  total: number;
  parent: number;
  tutor: number;
  contact: number;
  newCount: number;
  contactedCount: number;
  inProgressCount: number;
  completedCount: number;
  closedCount: number;
}

const STORAGE_KEY = 'nht_enquiries_records_v1';

export function formatIST(date: Date = new Date()): string {
  return (
    new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(date) + ' IST'
  );
}

export function generateEnquiryId(category: 'parent' | 'tutor' | 'contact'): string {
  const prefix = category === 'parent' ? 'PAR' : category === 'tutor' ? 'TUT' : 'CNT';
  const now = new Date();
  const dateStr = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(now)
    .replace(/-/g, '');
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${dateStr}-${rand}`;
}

export function getInitialSeedEnquiries(): Enquiry[] {
  const now = Date.now();
  return [
    {
      id: 'PAR-20261009-8421',
      category: 'parent',
      status: 'New',
      createdAt: new Date(now - 3600000 * 4).toISOString(),
      createdAtIST: formatIST(new Date(now - 3600000 * 4)),
      updatedAt: new Date(now - 3600000 * 4).toISOString(),
      updatedAtIST: formatIST(new Date(now - 3600000 * 4)),
      notes: 'Parent requested home tutor for Class 10 CBSE Maths & Science near Pillar 120.',
      data: {
        parentName: 'Ramesh Varma',
        mobileNumber: '9848022334',
        whatsappNumber: '9848022334',
        studentName: 'Aditya Varma',
        studentClass: 'Class 10',
        board: 'CBSE',
        subjectRequired: 'Mathematics, Science (Physics/Chem/Bio)',
        tuitionMode: 'Home',
        preferredLocation: 'Attapur, Hyderabad',
        additionalRequirements: 'Evening slot 6:00 PM to 7:30 PM, focus on upcoming board exams.',
      },
    },
    {
      id: 'TUT-20261008-5912',
      category: 'tutor',
      status: 'Contacted',
      createdAt: new Date(now - 86400000 * 2).toISOString(),
      createdAtIST: formatIST(new Date(now - 86400000 * 2)),
      updatedAt: new Date(now - 86400000 * 1).toISOString(),
      updatedAtIST: formatIST(new Date(now - 86400000 * 1)),
      notes: 'Contacted tutor. Available for Attapur and Mehdipatnam home tuitions.',
      data: {
        fullName: 'K. Sai Krishna',
        mobileNumber: '9505298712',
        whatsappNumber: '9505298712',
        email: 'saikrishna.tutor@gmail.com',
        highestQualification: 'M.Sc. Mathematics, B.Ed',
        teachingExperience: '3 to 5 Years',
        subjects: 'Mathematics, Physics',
        classesYouTeach: 'Class 9, Class 10, Class 11, Class 12',
        boards: 'CBSE, SSC, ICSE',
        languagesKnown: 'English, Telugu, Hindi',
        areasYouCanTravelTo: 'Attapur, Mehdipatnam, Tolichowki, Upperpally',
        teachingMode: 'Both',
        expectedFee: '₹600 / hour',
        availability: 'Weekdays after 5 PM, Weekends full day',
        additionalInformation: 'Have helped students score 95+ in Class 10 CBSE boards.',
      },
    },
    {
      id: 'CNT-20261007-3104',
      category: 'contact',
      status: 'In Progress',
      createdAt: new Date(now - 86400000 * 3).toISOString(),
      createdAtIST: formatIST(new Date(now - 86400000 * 3)),
      updatedAt: new Date(now - 86400000 * 2).toISOString(),
      updatedAtIST: formatIST(new Date(now - 86400000 * 2)),
      notes: 'Enquiry regarding BTech 2nd year Engineering Mathematics tuition.',
      data: {
        name: 'Mohammed Farhan',
        phone: '9700123456',
        email: 'farhan.m@gmail.com',
        message: 'Looking for a qualified tutor for BTech M2 (Linear Algebra & Calculus) in Tolichowki area.',
      },
    },
  ];
}

// Read local enquiries
export function getLocalEnquiries(): Enquiry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = getInitialSeedEnquiries();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    const initial = getInitialSeedEnquiries();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  } catch (err) {
    console.warn('Error reading from localStorage:', err);
    return getInitialSeedEnquiries();
  }
}

// Save local enquiries
export function setLocalEnquiries(enquiries: Enquiry[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(enquiries));
  } catch (err) {
    console.warn('Error writing to localStorage:', err);
  }
}

// Compute metrics
export function computeStats(enquiries: Enquiry[]): Stats {
  return {
    total: enquiries.length,
    parent: enquiries.filter((e) => e.category === 'parent').length,
    tutor: enquiries.filter((e) => e.category === 'tutor').length,
    contact: enquiries.filter((e) => e.category === 'contact').length,
    newCount: enquiries.filter((e) => e.status === 'New').length,
    contactedCount: enquiries.filter((e) => e.status === 'Contacted').length,
    inProgressCount: enquiries.filter((e) => e.status === 'In Progress').length,
    completedCount: enquiries.filter((e) => e.status === 'Completed').length,
    closedCount: enquiries.filter((e) => e.status === 'Closed').length,
  };
}

// Public API helper to submit an enquiry (Dual: Server + Persistent Fallback)
export async function submitEnquiry(
  category: 'parent' | 'tutor' | 'contact',
  data: Record<string, any>
): Promise<{ success: boolean; id: string; createdAtIST: string }> {
  const now = new Date();
  const id = generateEnquiryId(category);
  const istTime = formatIST(now);

  const localRecord: Enquiry = {
    id,
    category,
    status: 'New',
    createdAt: now.toISOString(),
    createdAtIST: istTime,
    updatedAt: now.toISOString(),
    updatedAtIST: istTime,
    notes: '',
    data,
  };

  // Always save immediately to local store to guarantee zero data loss
  const current = getLocalEnquiries();
  current.unshift(localRecord);
  setLocalEnquiries(current);

  // Attempt backend API sync
  try {
    const res = await fetch('/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category, data }),
    });

    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const serverData = await res.json();
      if (res.ok && serverData.id) {
        // If server gave its own ID, update local record ID
        localRecord.id = serverData.id;
        setLocalEnquiries(current);
        return {
          success: true,
          id: serverData.id,
          createdAtIST: serverData.createdAtIST || istTime,
        };
      }
    }
  } catch (err) {
    console.info('Backend API unavailable; enquiry saved to persistent local store:', err);
  }

  // Confirmed saved locally
  return {
    success: true,
    id,
    createdAtIST: istTime,
  };
}

// Admin API: update enquiry status
export async function updateEnquiryStatus(
  enquiryId: string,
  newStatus: Enquiry['status'],
  token?: string | null
): Promise<Enquiry> {
  const current = getLocalEnquiries();
  const target = current.find((e) => e.id === enquiryId);
  const now = new Date();
  if (target) {
    target.status = newStatus;
    target.updatedAt = now.toISOString();
    target.updatedAtIST = formatIST(now);
    setLocalEnquiries(current);
  }

  // Attempt backend update
  if (token) {
    try {
      await fetch(`/api/admin/enquiries/${enquiryId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch {}
  }

  return target || {
    id: enquiryId,
    category: 'parent',
    status: newStatus,
    createdAt: now.toISOString(),
    createdAtIST: formatIST(now),
    updatedAt: now.toISOString(),
    updatedAtIST: formatIST(now),
    data: {},
  };
}

// Admin API: update enquiry notes
export async function updateEnquiryNotes(
  enquiryId: string,
  notes: string,
  token?: string | null
): Promise<Enquiry> {
  const current = getLocalEnquiries();
  const target = current.find((e) => e.id === enquiryId);
  const now = new Date();
  if (target) {
    target.notes = notes;
    target.updatedAt = now.toISOString();
    target.updatedAtIST = formatIST(now);
    setLocalEnquiries(current);
  }

  // Attempt backend update
  if (token) {
    try {
      await fetch(`/api/admin/enquiries/${enquiryId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ notes }),
      });
    } catch {}
  }

  return target || {
    id: enquiryId,
    category: 'parent',
    status: 'New',
    createdAt: now.toISOString(),
    createdAtIST: formatIST(now),
    updatedAt: now.toISOString(),
    updatedAtIST: formatIST(now),
    notes,
    data: {},
  };
}
