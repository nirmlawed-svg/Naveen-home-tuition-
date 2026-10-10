import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
  loginWithEmailOnly,
  requestPasswordlessVerification,
  verifyPasswordlessCode,
  validateSessionToken,
  revokeSession,
} from './src/server/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // 1. Public API: Submit an Enquiry (Parent, Tutor, or Contact)
  app.post('/api/enquiries', (req, res) => {
    try {
      const { category, data } = req.body;
      if (!category || !['parent', 'tutor', 'contact'].includes(category)) {
        return res.status(400).json({ error: 'Invalid or missing enquiry category.' });
      }
      if (!data || typeof data !== 'object') {
        return res.status(400).json({ error: 'Missing enquiry data payload.' });
      }

      // Validate required fields per category
      if (category === 'parent') {
        if (!data.parentName || !data.mobileNumber || !data.studentClass || !data.board || !data.subjectRequired) {
          return res.status(400).json({ error: 'Please fill in all required parent enquiry fields.' });
        }
      } else if (category === 'tutor') {
        if (!data.fullName || !data.mobileNumber || !data.highestQualification || !data.subjects || !data.classesYouTeach) {
          return res.status(400).json({ error: 'Please fill in all required tutor registration fields.' });
        }
      } else if (category === 'contact') {
        if (!data.name || !data.phone || !data.message) {
          return res.status(400).json({ error: 'Please provide name, phone number, and message.' });
        }
      }

      const enquiry = createEnquiry(category, data);

      return res.status(201).json({
        success: true,
        id: enquiry.id,
        createdAtIST: enquiry.createdAtIST,
        message: 'Thank you! Your information has been submitted successfully.',
      });
    } catch (err: any) {
      console.error('Error submitting enquiry:', err);
      return res.status(500).json({ error: 'Failed to save enquiry. Please try again.' });
    }
  });

  // 2. Admin Auth: Email-Only Login (Backend allowlist enforcement)
  app.post('/api/admin/auth/login', (req, res) => {
    try {
      const { email } = req.body;
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Please enter a valid email address.' });
      }

      const result = loginWithEmailOnly(email);
      if (!result.success) {
        return res.status(403).json({ error: result.error });
      }

      return res.json({
        success: true,
        token: result.token,
        email: result.email,
        message: 'Welcome to the Admin Portal.',
      });
    } catch (err: any) {
      console.error('Error in email login:', err);
      return res.status(500).json({ error: 'Internal server error during login.' });
    }
  });

  // 3. Admin Auth: Request passwordless email verification (fallback)
  app.post('/api/admin/auth/request-otp', (req, res) => {
    try {
      const { email } = req.body;
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Please enter a valid email address.' });
      }

      const result = requestPasswordlessVerification(email);
      if (!result.success) {
        return res.status(403).json({ error: result.error });
      }

      return res.json({
        success: true,
        challengeId: result.challengeId,
        code: result.code, // Embedded for instant passwordless verification
        message: 'Verification code generated for authorized administrator.',
      });
    } catch (err: any) {
      console.error('Error requesting OTP:', err);
      return res.status(500).json({ error: 'Internal server error during verification request.' });
    }
  });

  // 3. Admin Auth: Verify code and obtain secure session token
  app.post('/api/admin/auth/verify-otp', (req, res) => {
    try {
      const { challengeId, code } = req.body;
      if (!challengeId || !code) {
        return res.status(400).json({ error: 'Missing challenge ID or verification code.' });
      }

      const result = verifyPasswordlessCode(challengeId, code);
      if (!result.success) {
        return res.status(401).json({ error: result.error });
      }

      return res.json({
        success: true,
        token: result.token,
        email: result.email,
        message: 'Verification successful. Welcome to the Admin Portal.',
      });
    } catch (err: any) {
      console.error('Error verifying OTP:', err);
      return res.status(500).json({ error: 'Verification failed.' });
    }
  });

  // Admin middleware helper
  const requireAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authentication required. Please log in.' });
    }
    const token = authHeader.substring(7).trim();
    const session = validateSessionToken(token);
    if (!session) {
      return res.status(401).json({ error: 'Invalid or expired session. Please log in again.' });
    }
    (req as any).adminSession = session;
    next();
  };

  // 4. Admin Auth: Check current session
  app.get('/api/admin/auth/me', requireAdmin, (req, res) => {
    const session = (req as any).adminSession;
    return res.json({
      authenticated: true,
      email: session.email,
    });
  });

  // 5. Admin Auth: Logout
  app.post('/api/admin/auth/logout', (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7).trim();
      revokeSession(token);
    }
    return res.json({ success: true, message: 'Logged out successfully.' });
  });

  // 6. Admin API: Get all enquiries
  app.get('/api/admin/enquiries', requireAdmin, (_req, res) => {
    try {
      const enquiries = getAllEnquiries();

      // Compute statistics for the dashboard summary cards
      const stats = {
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

      return res.json({
        success: true,
        enquiries,
        stats,
      });
    } catch (err: any) {
      console.error('Error fetching enquiries:', err);
      return res.status(500).json({ error: 'Failed to retrieve enquiries.' });
    }
  });

  // 7. Admin API: Update enquiry status or notes
  app.patch('/api/admin/enquiries/:id', requireAdmin, (req, res) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;

      const validStatuses = ['New', 'Contacted', 'In Progress', 'Completed', 'Closed'];
      if (status && !validStatuses.includes(status)) {
        return res.status(400).json({ error: 'Invalid status value.' });
      }

      const updated = updateEnquiry(id, { status, notes });
      if (!updated) {
        return res.status(404).json({ error: 'Enquiry not found.' });
      }

      return res.json({
        success: true,
        enquiry: updated,
        message: 'Enquiry updated successfully.',
      });
    } catch (err: any) {
      console.error('Error updating enquiry:', err);
      return res.status(500).json({ error: 'Failed to update enquiry.' });
    }
  });

  // 8. Admin API: Delete enquiry
  app.delete('/api/admin/enquiries/:id', requireAdmin, (req, res) => {
    try {
      const { id } = req.params;
      const success = deleteEnquiry(id);
      if (!success) {
        return res.status(404).json({ error: 'Enquiry not found.' });
      }
      return res.json({ success: true, message: 'Enquiry deleted successfully.' });
    } catch (err: any) {
      console.error('Error deleting enquiry:', err);
      return res.status(500).json({ error: 'Failed to delete enquiry.' });
    }
  });

  // Serve Frontend
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Naveen Home Tuitions server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
