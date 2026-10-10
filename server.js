// server.ts
import express from "express";
import fs2 from "fs";
import path2 from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

// src/server/db.ts
import fs from "fs";
import path from "path";
import crypto from "crypto";
var AUTHORIZED_ADMIN_EMAILS = [
  "naveenjogi225@gmail.com",
  "og631557@gmail.com"
];
var DATA_DIR = path.resolve(process.cwd(), "data");
var ENQUIRIES_FILE = path.join(DATA_DIR, "enquiries.json");
var SESSIONS_FILE = path.join(DATA_DIR, "sessions.json");
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
function formatIST(date = /* @__PURE__ */ new Date()) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(date) + " IST";
}
var enquiriesCache = null;
function loadEnquiries() {
  if (enquiriesCache !== null) return enquiriesCache;
  if (!fs.existsSync(ENQUIRIES_FILE)) {
    const initialSeed = [
      {
        id: "PAR-20261009-8421",
        category: "parent",
        status: "New",
        createdAt: new Date(Date.now() - 36e5 * 4).toISOString(),
        createdAtIST: formatIST(new Date(Date.now() - 36e5 * 4)),
        updatedAt: new Date(Date.now() - 36e5 * 4).toISOString(),
        updatedAtIST: formatIST(new Date(Date.now() - 36e5 * 4)),
        notes: "Parent requested home tutor for Class 10 CBSE Maths & Science near Pillar 120.",
        data: {
          parentName: "Ramesh Varma",
          mobileNumber: "9848022334",
          whatsappNumber: "9848022334",
          studentName: "Aditya Varma",
          studentClass: "Class 10",
          board: "CBSE",
          subjectRequired: "Mathematics, Science (Physics/Chem/Bio)",
          tuitionMode: "Home",
          preferredLocation: "Attapur, Hyderabad",
          additionalRequirements: "Evening slot 6:00 PM to 7:30 PM, focus on upcoming board exams."
        }
      },
      {
        id: "TUT-20261008-5912",
        category: "tutor",
        status: "Contacted",
        createdAt: new Date(Date.now() - 864e5 * 2).toISOString(),
        createdAtIST: formatIST(new Date(Date.now() - 864e5 * 2)),
        updatedAt: new Date(Date.now() - 864e5 * 1).toISOString(),
        updatedAtIST: formatIST(new Date(Date.now() - 864e5 * 1)),
        notes: "Contacted tutor. Available for Attapur and Mehdipatnam home tuitions.",
        data: {
          fullName: "K. Sai Krishna",
          mobileNumber: "9505298712",
          whatsappNumber: "9505298712",
          email: "saikrishna.tutor@gmail.com",
          highestQualification: "M.Sc. Mathematics, B.Ed",
          teachingExperience: "3 to 5 Years",
          subjects: "Mathematics, Physics",
          classesYouTeach: "Class 9, Class 10, Class 11, Class 12",
          boards: "CBSE, SSC, ICSE",
          languagesKnown: "English, Telugu, Hindi",
          areasYouCanTravelTo: "Attapur, Mehdipatnam, Tolichowki, Upperpally",
          teachingMode: "Both",
          expectedFee: "\u20B9600 / hour",
          availability: "Weekdays after 5 PM, Weekends full day",
          additionalInformation: "Have helped students score 95+ in Class 10 CBSE boards."
        }
      },
      {
        id: "CNT-20261007-3104",
        category: "contact",
        status: "In Progress",
        createdAt: new Date(Date.now() - 864e5 * 3).toISOString(),
        createdAtIST: formatIST(new Date(Date.now() - 864e5 * 3)),
        updatedAt: new Date(Date.now() - 864e5 * 2).toISOString(),
        updatedAtIST: formatIST(new Date(Date.now() - 864e5 * 2)),
        notes: "Enquiry regarding BTech 2nd year Engineering Mathematics tuition.",
        data: {
          name: "Mohammed Farhan",
          phone: "9700123456",
          email: "farhan.m@gmail.com",
          message: "Looking for a qualified tutor for BTech M2 (Linear Algebra & Calculus) in Tolichowki area."
        }
      }
    ];
    saveEnquiries(initialSeed);
    enquiriesCache = initialSeed;
    return initialSeed;
  }
  try {
    const raw = fs.readFileSync(ENQUIRIES_FILE, "utf8");
    enquiriesCache = JSON.parse(raw);
    return enquiriesCache || [];
  } catch (err) {
    console.error("Error loading enquiries:", err);
    enquiriesCache = [];
    return [];
  }
}
function saveEnquiries(enquiries) {
  enquiriesCache = enquiries;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const tempPath = `${ENQUIRIES_FILE}.tmp.${Date.now()}`;
    fs.writeFileSync(tempPath, JSON.stringify(enquiries, null, 2), "utf8");
    fs.renameSync(tempPath, ENQUIRIES_FILE);
  } catch (err) {
    console.warn("Warning: Could not write enquiries to filesystem, keeping in memory cache:", err);
  }
}
var sessionsCache = null;
function loadSessions() {
  if (sessionsCache !== null) return sessionsCache;
  if (!fs.existsSync(SESSIONS_FILE)) {
    sessionsCache = {};
    return {};
  }
  try {
    const raw = fs.readFileSync(SESSIONS_FILE, "utf8");
    sessionsCache = JSON.parse(raw);
    return sessionsCache || {};
  } catch (err) {
    sessionsCache = {};
    return {};
  }
}
function saveSessions(sessions) {
  sessionsCache = sessions;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const tempPath = `${SESSIONS_FILE}.tmp.${Date.now()}`;
    fs.writeFileSync(tempPath, JSON.stringify(sessions, null, 2), "utf8");
    fs.renameSync(tempPath, SESSIONS_FILE);
  } catch (err) {
    console.warn("Warning: Could not write sessions to filesystem, keeping in memory cache:", err);
  }
}
var pendingOtps = /* @__PURE__ */ new Map();
function generateEnquiryId(category) {
  const prefix = category === "parent" ? "PAR" : category === "tutor" ? "TUT" : "CNT";
  const now = /* @__PURE__ */ new Date();
  const dateStr = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(now).replace(/-/g, "");
  const rand = Math.floor(1e3 + Math.random() * 9e3);
  return `${prefix}-${dateStr}-${rand}`;
}
function createEnquiry(category, data) {
  const list = loadEnquiries();
  const now = /* @__PURE__ */ new Date();
  const id = generateEnquiryId(category);
  const enquiry = {
    id,
    category,
    status: "New",
    createdAt: now.toISOString(),
    createdAtIST: formatIST(now),
    updatedAt: now.toISOString(),
    updatedAtIST: formatIST(now),
    notes: "",
    data
  };
  list.unshift(enquiry);
  saveEnquiries(list);
  return enquiry;
}
function getAllEnquiries() {
  return loadEnquiries();
}
function updateEnquiry(id, updates) {
  const list = loadEnquiries();
  const idx = list.findIndex((e) => e.id === id);
  if (idx === -1) return null;
  const now = /* @__PURE__ */ new Date();
  const item = list[idx];
  if (updates.status) item.status = updates.status;
  if (updates.notes !== void 0) item.notes = updates.notes;
  item.updatedAt = now.toISOString();
  item.updatedAtIST = formatIST(now);
  saveEnquiries(list);
  return item;
}
function deleteEnquiry(id) {
  const list = loadEnquiries();
  const idx = list.findIndex((e) => e.id === id);
  if (idx === -1) return false;
  list.splice(idx, 1);
  saveEnquiries(list);
  return true;
}
function loginWithEmailOnly(email) {
  const normalized = email.toLowerCase().trim();
  if (!AUTHORIZED_ADMIN_EMAILS.includes(normalized)) {
    return {
      success: false,
      error: "Access Denied. This email is not authorized to access the Admin Portal."
    };
  }
  const token = crypto.randomBytes(32).toString("hex");
  const now = /* @__PURE__ */ new Date();
  const expiresAt = new Date(Date.now() + 7 * 24 * 3600 * 1e3).toISOString();
  const session = {
    token,
    email: normalized,
    createdAt: now.toISOString(),
    expiresAt
  };
  const sessions = loadSessions();
  sessions[token] = session;
  saveSessions(sessions);
  return {
    success: true,
    token,
    email: normalized
  };
}
function requestPasswordlessVerification(email) {
  const normalized = email.toLowerCase().trim();
  if (!AUTHORIZED_ADMIN_EMAILS.includes(normalized)) {
    return {
      success: false,
      error: "Access Denied. This email is not authorized to access the Admin Portal."
    };
  }
  const challengeId = crypto.randomUUID();
  const code = Math.floor(1e5 + Math.random() * 9e5).toString();
  const expiresAt = Date.now() + 15 * 60 * 1e3;
  pendingOtps.set(challengeId, {
    challengeId,
    email: normalized,
    code,
    expiresAt
  });
  return {
    success: true,
    challengeId,
    code
    // Returned for instant on-screen verification / email bridge
  };
}
function verifyPasswordlessCode(challengeId, code) {
  const pending = pendingOtps.get(challengeId);
  if (!pending) {
    return { success: false, error: "Verification session expired. Please request a new code." };
  }
  if (Date.now() > pending.expiresAt) {
    pendingOtps.delete(challengeId);
    return { success: false, error: "Verification code expired. Please request a new code." };
  }
  if (pending.code.trim() !== code.trim()) {
    return { success: false, error: "Invalid verification code. Please check and try again." };
  }
  pendingOtps.delete(challengeId);
  const token = crypto.randomBytes(32).toString("hex");
  const now = /* @__PURE__ */ new Date();
  const expiresAt = new Date(Date.now() + 7 * 24 * 3600 * 1e3).toISOString();
  const session = {
    token,
    email: pending.email,
    createdAt: now.toISOString(),
    expiresAt
  };
  const sessions = loadSessions();
  sessions[token] = session;
  saveSessions(sessions);
  return {
    success: true,
    token,
    email: pending.email
  };
}
function validateSessionToken(token) {
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
function revokeSession(token) {
  const sessions = loadSessions();
  if (sessions[token]) {
    delete sessions[token];
    saveSessions(sessions);
  }
}

// server.ts
var __filename = fileURLToPath(import.meta.url);
var __dirname = path2.dirname(__filename);
async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3e3;
  app.disable("x-powered-by");
  app.use(express.json());
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });
  app.post("/api/enquiries", (req, res) => {
    try {
      const { category, data } = req.body;
      if (!category || !["parent", "tutor", "contact"].includes(category)) {
        return res.status(400).json({ error: "Invalid or missing enquiry category." });
      }
      if (!data || typeof data !== "object") {
        return res.status(400).json({ error: "Missing enquiry data payload." });
      }
      if (category === "parent") {
        if (!data.parentName || !data.mobileNumber || !data.studentClass || !data.board || !data.subjectRequired) {
          return res.status(400).json({ error: "Please fill in all required parent enquiry fields." });
        }
      } else if (category === "tutor") {
        if (!data.fullName || !data.mobileNumber || !data.highestQualification || !data.subjects || !data.classesYouTeach) {
          return res.status(400).json({ error: "Please fill in all required tutor registration fields." });
        }
      } else if (category === "contact") {
        if (!data.name || !data.phone || !data.message) {
          return res.status(400).json({ error: "Please provide name, phone number, and message." });
        }
      }
      const enquiry = createEnquiry(category, data);
      return res.status(201).json({
        success: true,
        id: enquiry.id,
        createdAtIST: enquiry.createdAtIST,
        message: "Thank you! Your information has been submitted successfully."
      });
    } catch (err) {
      console.error("Error submitting enquiry:", err);
      return res.status(500).json({ error: "Failed to save enquiry. Please try again." });
    }
  });
  app.post("/api/admin/auth/login", (req, res) => {
    try {
      const { email } = req.body;
      if (!email || typeof email !== "string") {
        return res.status(400).json({ error: "Please enter a valid email address." });
      }
      const result = loginWithEmailOnly(email);
      if (!result.success) {
        return res.status(403).json({ error: result.error });
      }
      return res.json({
        success: true,
        token: result.token,
        email: result.email,
        message: "Welcome to the Admin Portal."
      });
    } catch (err) {
      console.error("Error in email login:", err);
      return res.status(500).json({ error: "Internal server error during login." });
    }
  });
  app.post("/api/admin/auth/request-otp", (req, res) => {
    try {
      const { email } = req.body;
      if (!email || typeof email !== "string") {
        return res.status(400).json({ error: "Please enter a valid email address." });
      }
      const result = requestPasswordlessVerification(email);
      if (!result.success) {
        return res.status(403).json({ error: result.error });
      }
      return res.json({
        success: true,
        challengeId: result.challengeId,
        code: result.code,
        // Embedded for instant passwordless verification
        message: "Verification code generated for authorized administrator."
      });
    } catch (err) {
      console.error("Error requesting OTP:", err);
      return res.status(500).json({ error: "Internal server error during verification request." });
    }
  });
  app.post("/api/admin/auth/verify-otp", (req, res) => {
    try {
      const { challengeId, code } = req.body;
      if (!challengeId || !code) {
        return res.status(400).json({ error: "Missing challenge ID or verification code." });
      }
      const result = verifyPasswordlessCode(challengeId, code);
      if (!result.success) {
        return res.status(401).json({ error: result.error });
      }
      return res.json({
        success: true,
        token: result.token,
        email: result.email,
        message: "Verification successful. Welcome to the Admin Portal."
      });
    } catch (err) {
      console.error("Error verifying OTP:", err);
      return res.status(500).json({ error: "Verification failed." });
    }
  });
  const requireAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Authentication required. Please log in." });
    }
    const token = authHeader.substring(7).trim();
    const session = validateSessionToken(token);
    if (!session) {
      return res.status(401).json({ error: "Invalid or expired session. Please log in again." });
    }
    req.adminSession = session;
    next();
  };
  app.get("/api/admin/auth/me", requireAdmin, (req, res) => {
    const session = req.adminSession;
    return res.json({
      authenticated: true,
      email: session.email
    });
  });
  app.post("/api/admin/auth/logout", (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7).trim();
      revokeSession(token);
    }
    return res.json({ success: true, message: "Logged out successfully." });
  });
  app.get("/api/admin/enquiries", requireAdmin, (_req, res) => {
    try {
      const enquiries = getAllEnquiries();
      const stats = {
        total: enquiries.length,
        parent: enquiries.filter((e) => e.category === "parent").length,
        tutor: enquiries.filter((e) => e.category === "tutor").length,
        contact: enquiries.filter((e) => e.category === "contact").length,
        newCount: enquiries.filter((e) => e.status === "New").length,
        contactedCount: enquiries.filter((e) => e.status === "Contacted").length,
        inProgressCount: enquiries.filter((e) => e.status === "In Progress").length,
        completedCount: enquiries.filter((e) => e.status === "Completed").length,
        closedCount: enquiries.filter((e) => e.status === "Closed").length
      };
      return res.json({
        success: true,
        enquiries,
        stats
      });
    } catch (err) {
      console.error("Error fetching enquiries:", err);
      return res.status(500).json({ error: "Failed to retrieve enquiries." });
    }
  });
  app.patch("/api/admin/enquiries/:id", requireAdmin, (req, res) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;
      const validStatuses = ["New", "Contacted", "In Progress", "Completed", "Closed"];
      if (status && !validStatuses.includes(status)) {
        return res.status(400).json({ error: "Invalid status value." });
      }
      const updated = updateEnquiry(id, { status, notes });
      if (!updated) {
        return res.status(404).json({ error: "Enquiry not found." });
      }
      return res.json({
        success: true,
        enquiry: updated,
        message: "Enquiry updated successfully."
      });
    } catch (err) {
      console.error("Error updating enquiry:", err);
      return res.status(500).json({ error: "Failed to update enquiry." });
    }
  });
  app.delete("/api/admin/enquiries/:id", requireAdmin, (req, res) => {
    try {
      const { id } = req.params;
      const success = deleteEnquiry(id);
      if (!success) {
        return res.status(404).json({ error: "Enquiry not found." });
      }
      return res.json({ success: true, message: "Enquiry deleted successfully." });
    } catch (err) {
      console.error("Error deleting enquiry:", err);
      return res.status(500).json({ error: "Failed to delete enquiry." });
    }
  });
  const isDev = process.env.NODE_ENV === "development";
  const distIndex = path2.resolve(__dirname, "dist", "index.html");
  const hasDist = fs2.existsSync(distIndex);
  if (isDev || !hasDist) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path2.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get(["/admin", "/admin/*", "/about", "/parents", "/tutors", "/how-it-works", "/contact"], (_req, res) => {
      res.sendFile(distIndex);
    });
    app.get("*", (_req, res) => {
      res.sendFile(distIndex);
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Naveen Home Tuitions server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
