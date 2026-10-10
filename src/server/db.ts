import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

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

export interface AdminSession {
  token: string;
  email: string;
  createdAt: string;
  expiresAt: string;
}

export interface PendingOtp {
  challengeId: string;
  email: string;
  code: string;
  expiresAt: number;
}

// Authorized Admin Emails - Kept securely on backend only
export const AUTHORIZED_ADMIN_EMAILS = [
  'naveenjogi225@gmail.com',
  'og631557@gmail.com',
];

const DATA_DIR = path.resolve(process.cwd(), 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');
const SESSIONS_FILE = path.join(DATA_DIR, 'sessions.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export function formatIST(date: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date) + ' IST';
}

export function getDateKeyIST(date: Date = new Date()): string {
  // Format as YYYY-MM-DD in Indian Standard Time
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

// Read enquiries with memory cache
let enquiriesCache: Enquiry[] | null = null;

function loadEnquiries(): Enquiry[] {
  if (enquiriesCache !== null) return enquiriesCache;
  if (!fs.existsSync(ENQUIRIES_FILE)) {
    // Seed with initial realistic enquiries so the admin dashboard is immediately demonstrable and useful
    const initialSeed: Enquiry[] = [
      {
        id: 'PAR-20261009-8421',
        category: 'parent',
        status: 'New',
        createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
        createdAtIST: formatIST(new Date(Date.now() - 3600000 * 4)),
        updatedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
        updatedAtIST: formatIST(new Date(Date.now() - 3600000 * 4)),
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
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        createdAtIST: formatIST(new Date(Date.now() - 86400000 * 2)),
        updatedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
        updatedAtIST: formatIST(new Date(Date.now() - 86400000 * 1)),
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
        createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
        createdAtIST: formatIST(new Date(Date.now() - 86400000 * 3)),
        updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        updatedAtIST: formatIST(new Date(Date.now() - 86400000 * 2)),
        notes: 'Enquiry regarding BTech 2nd year Engineering Mathematics tuition.',
        data: {
          name: 'Mohammed Farhan',
          phone: '9700123456',
          email: 'farhan.m@gmail.com',
          message: 'Looking for a qualified tutor for BTech M2 (Linear Algebra & Calculus) in Tolichowki area.',
        },
      },
    ];
    saveEnquiries(initialSeed);
    enquiriesCache = initialSeed;
    return initialSeed;
  }

  try {
    const raw = fs.readFileSync(ENQUIRIES_FILE, 'utf8');
    enquiriesCache = JSON.parse(raw);
    return enquiriesCache || [];
  } catch (err) {
    console.error('Error loading enquiries:', err);
    enquiriesCache = [];
    return [];
  }
}

function saveEnquiries(enquiries: Enquiry[]): void {
  enquiriesCache = enquiries;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const tempPath = `${ENQUIRIES_FILE}.tmp.${Date.now()}`;
    fs.writeFileSync(tempPath, JSON.stringify(enquiries, null, 2), 'utf8');
    fs.renameSync(tempPath, ENQUIRIES_FILE);
  } catch (err) {
    console.warn('Warning: Could not write enquiries to filesystem, keeping in memory cache:', err);
  }
}

// Session store
let sessionsCache: Record<string, AdminSession> | null = null;

function loadSessions(): Record<string, AdminSession> {
  if (sessionsCache !== null) return sessionsCache;
  if (!fs.existsSync(SESSIONS_FILE)) {
    sessionsCache = {};
    return {};
  }
  try {
    const raw = fs.readFileSync(SESSIONS_FILE, 'utf8');
    sessionsCache = JSON.parse(raw);
    return sessionsCache || {};
  } catch (err) {
    sessionsCache = {};
    return {};
  }
}

function saveSessions(sessions: Record<string, AdminSession>): void {
  sessionsCache = sessions;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const tempPath = `${SESSIONS_FILE}.tmp.${Date.now()}`;
    fs.writeFileSync(tempPath, JSON.stringify(sessions, null, 2), 'utf8');
    fs.renameSync(tempPath, SESSIONS_FILE);
  } catch (err) {
    console.warn('Warning: Could not write sessions to filesystem, keeping in memory cache:', err);
  }
}

// Pending OTPs map
const pendingOtps: Map<string, PendingOtp> = new Map();

// Generate unique ID
export function generateEnquiryId(category: 'parent' | 'tutor' | 'contact'): string {
  const prefix = category === 'parent' ? 'PAR' : category === 'tutor' ? 'TUT' : 'CNT';
  const now = new Date();
  const dateStr = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now).replace(/-/g, '');
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${dateStr}-${rand}`;
}

// Public API: create enquiry
export function createEnquiry(
  category: 'parent' | 'tutor' | 'contact',
  data: Record<string, any>
): Enquiry {
  const list = loadEnquiries();
  const now = new Date();
  const id = generateEnquiryId(category);

  const enquiry: Enquiry = {
    id,
    category,
    status: 'New',
    createdAt: now.toISOString(),
    createdAtIST: formatIST(now),
    updatedAt: now.toISOString(),
    updatedAtIST: formatIST(now),
    notes: '',
    data,
  };

  list.unshift(enquiry);
  saveEnquiries(list);
  return enquiry;
}

// Admin API: get all enquiries
export function getAllEnquiries(): Enquiry[] {
  return loadEnquiries();
}

// Admin API: get single enquiry
export function getEnquiryById(id: string): Enquiry | undefined {
  const list = loadEnquiries();
  return list.find((e) => e.id === id);
}

// Admin API: update status and notes
export function updateEnquiry(
  id: string,
  updates: { status?: Enquiry['status']; notes?: string }
): Enquiry | null {
  const list = loadEnquiries();
  const idx = list.findIndex((e) => e.id === id);
  if (idx === -1) return null;

  const now = new Date();
  const item = list[idx];

  if (updates.status) item.status = updates.status;
  if (updates.notes !== undefined) item.notes = updates.notes;
  item.updatedAt = now.toISOString();
  item.updatedAtIST = formatIST(now);

  saveEnquiries(list);
  return item;
}

// Admin API: delete enquiry
export function deleteEnquiry(id: string): boolean {
  const list = loadEnquiries();
  const idx = list.findIndex((e) => e.id === id);
  if (idx === -1) return false;

  list.splice(idx, 1);
  saveEnquiries(list);
  return true;
}

// Auth: Email-only login for authorized administrators
export function loginWithEmailOnly(email: string): {
  success: boolean;
  token?: string;
  email?: string;
  error?: string;
} {
  const normalized = email.toLowerCase().trim();
  if (!AUTHORIZED_ADMIN_EMAILS.includes(normalized)) {
    return {
      success: false,
      error: 'Access Denied. This email is not authorized to access the Admin Portal.',
    };
  }

  // Issue secure session token immediately
  const token = crypto.randomBytes(32).toString('hex');
  const now = new Date();
  const expiresAt = new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString(); // 7 days

  const session: AdminSession = {
    token,
    email: normalized,
    createdAt: now.toISOString(),
    expiresAt,
  };

  const sessions = loadSessions();
  sessions[token] = session;
  saveSessions(sessions);

  return {
    success: true,
    token,
    email: normalized,
  };
}

// Auth: request passwordless verification
export function requestPasswordlessVerification(email: string): {
  success: boolean;
  challengeId?: string;
  code?: string;
  error?: string;
} {
  const normalized = email.toLowerCase().trim();
  if (!AUTHORIZED_ADMIN_EMAILS.includes(normalized)) {
    return {
      success: false,
      error: 'Access Denied. This email is not authorized to access the Admin Portal.',
    };
  }

  const challengeId = crypto.randomUUID();
  // Generate 6-digit numeric verification code
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 15 * 60 * 1000; // 15 mins

  pendingOtps.set(challengeId, {
    challengeId,
    email: normalized,
    code,
    expiresAt,
  });

  return {
    success: true,
    challengeId,
    code, // Returned for instant on-screen verification / email bridge
  };
}

// Auth: verify code and create session
export function verifyPasswordlessCode(
  challengeId: string,
  code: string
): { success: boolean; token?: string; email?: string; error?: string } {
  const pending = pendingOtps.get(challengeId);
  if (!pending) {
    return { success: false, error: 'Verification session expired. Please request a new code.' };
  }

  if (Date.now() > pending.expiresAt) {
    pendingOtps.delete(challengeId);
    return { success: false, error: 'Verification code expired. Please request a new code.' };
  }

  if (pending.code.trim() !== code.trim()) {
    return { success: false, error: 'Invalid verification code. Please check and try again.' };
  }

  // Code is valid! Consume it
  pendingOtps.delete(challengeId);

  // Issue session token
  const token = crypto.randomBytes(32).toString('hex');
  const now = new Date();
  const expiresAt = new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString(); // 7 days

  const session: AdminSession = {
    token,
    email: pending.email,
    createdAt: now.toISOString(),
    expiresAt,
  };

  const sessions = loadSessions();
  sessions[token] = session;
  saveSessions(sessions);

  return {
    success: true,
    token,
    email: pending.email,
  };
}

// Auth: validate session token
export function validateSessionToken(token: string): AdminSession | null {
  if (!token) return null;
  const sessions = loadSessions();
  const session = sessions[token];
  if (!session) return null;

  if (new Date(session.expiresAt).getTime() < Date.now()) {
    delete sessions[token];
    saveSessions(sessions);
    return null;
  }

  if (!AUTHORIZED_ADMIN_EMAILS.includes(session.email.toLowerCase())) {
    delete sessions[token];
    saveSessions(sessions);
    return null;
  }

  return session;
}

// Auth: revoke session
export function revokeSession(token: string): void {
  const sessions = loadSessions();
  if (sessions[token]) {
    delete sessions[token];
    saveSessions(sessions);
  }
}
