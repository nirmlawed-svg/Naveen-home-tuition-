/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
const O = { jsx: jsx as any, jsxs: jsxs as any };
const l = React;
import {
  siteConfig as d,
  images as et,
  getWhatsAppUrl as f,
  getCallUrl as p,
  generateParentInquiryWhatsAppUrl as m,
  generateTutorApplicationWhatsAppUrl as h,
  generateGeneralContactWhatsAppUrl as g,
  validateIndianMobile as gt
} from "../data/siteData";
import {
  S, re, C, ie, ae, oe, se, ce, le, ue, de, fe, pe, me, he, ge,
  _e, ve, ye, be, xe, Se, Ce, we, Te, Ee, w, T, De, Oe, ke, Ae,
  E, D, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We,
  Ge, Ke, qe
} from "../components/icons";
import { WhatsAppButton as ft } from "../components/WhatsAppButton";
import { submitEnquiry } from "../data/enquiriesDb";

export function ParentsPage({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [t, n] = useState<Record<string, string>>({
    parentName: ``,
    mobileNumber: ``,
    whatsappNumber: ``,
    studentName: ``,
    studentClass: ``,
    board: ``,
    subjectRequired: ``,
    tuitionMode: `Home`,
    preferredLocation: ``,
    additionalRequirements: ``,
  });
  const [r, i] = useState<Record<string, string>>({});
  const [a, o] = useState<string | null>(null);
  const s = [
    `Mathematics`,
    `Science (Physics/Chem/Bio)`,
    `Physics`,
    `Chemistry`,
    `English`,
    `Computer Science`,
    `BTech Engineering Maths`,
    `All Subjects (Primary)`,
  ];
  const c = (field: string, val: string) => {
    n((prev) => ({ ...prev, [field]: val }));
    if (r[field]) {
      i((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };
  const u = (subj: string) => {
    const list = t.subjectRequired
      ? t.subjectRequired.split(`, `).map((item) => item.trim())
      : [];
    if (list.includes(subj)) {
      const nextList = list.filter((item) => item !== subj);
      c(`subjectRequired`, nextList.join(`, `));
    } else {
      const nextList = [...list, subj];
      c(`subjectRequired`, nextList.join(`, `));
    }
  };
  const d = () => {
    const errs: Record<string, string> = {};
    if (!t.parentName.trim()) {
      errs.parentName = `Parent or Guardian name is required`;
    }
    const mobileCheck = gt(t.mobileNumber);
    if (!mobileCheck.isValid) {
      errs.mobileNumber = mobileCheck.error || `Valid mobile number required`;
    }
    if (t.whatsappNumber.trim() && !gt(t.whatsappNumber).isValid) {
      errs.whatsappNumber = `Please enter a valid 10-digit WhatsApp number or leave blank to match mobile`;
    }
    if (!t.studentClass) {
      errs.studentClass = `Please select student class or learning stage`;
    }
    if (!t.board) {
      errs.board = `Please select syllabus board`;
    }
    if (!t.subjectRequired.trim()) {
      errs.subjectRequired = `Please specify required subject(s)`;
    }
    i(errs);
    return Object.keys(errs).length === 0;
  };
  return (0, O.jsxs)(`div`, {
    className: `bg-white min-h-screen`,
    children: [
      (0, O.jsx)(`section`, {
        className: `bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-100 py-10 md:py-16`,
        children: (0, O.jsxs)(`div`, {
          className: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`,
          children: [
            (0, O.jsx)(`span`, {
              className: `text-xs font-semibold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full`,
              children: `For Parents & Students`,
            }),
            (0, O.jsx)(`h1`, {
              className: `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight mt-3 mb-4`,
              children: `Find a Home or Online Tutor`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto font-normal`,
              children: `Submit your tuition requirements including class, subject, location, schedule and budget.`,
            }),
            (0, O.jsxs)(`div`, {
              className: `mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-600`,
              children: [
                (0, O.jsxs)(`span`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, O.jsx)(fe, { className: `w-4 h-4 text-[#12B76A]` }),
                    `Verified Hyderabad Tutors`,
                  ],
                }),
                (0, O.jsx)(`span`, { children: `·` }),
                (0, O.jsxs)(`span`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, O.jsx)(fe, { className: `w-4 h-4 text-[#12B76A]` }),
                    `Direct WhatsApp Connection`,
                  ],
                }),
                (0, O.jsx)(`span`, { children: `·` }),
                (0, O.jsxs)(`span`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, O.jsx)(fe, { className: `w-4 h-4 text-[#12B76A]` }),
                    `Classes 1–12 & BTech`,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, O.jsx)(`section`, {
        className: `py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
        children: a
          ? (0, O.jsxs)(`div`, {
              className: `max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border-2 border-emerald-300 shadow-md text-center`,
              children: [
                (0, O.jsx)(`div`, {
                  className: `w-16 h-16 rounded-full bg-emerald-100 text-[#12B76A] flex items-center justify-center mx-auto mb-5`,
                  children: (0, O.jsx)(fe, {
                    className: `w-8 h-8 stroke-[2.5]`,
                  }),
                }),
                (0, O.jsx)(`h2`, {
                  className: `text-2xl sm:text-3xl font-bold text-[#101828] mb-2`,
                  children: `Thank you! Your information has been submitted successfully.`,
                }),
                (0, O.jsxs)(`p`, {
                  className: `text-sm sm:text-base text-[#667085] mb-6`,
                  children: [
                    `Your requirement has been saved in our secure database with Reference ID: `,
                    (0, O.jsx)(`span`, {
                      className: `font-mono font-bold text-[#155EEF]`,
                      children: a,
                    }),
                    `. Our academic coordinator will review your request and contact you directly.`,
                  ],
                }),
                (0, O.jsxs)(`div`, {
                  className: `p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6 text-left`,
                  children: [
                    (0, O.jsx)(`div`, {
                      className: `text-xs font-bold text-emerald-900 mb-1`,
                      children: `Enquiry Status: Saved & Active`,
                    }),
                    (0, O.jsx)(`p`, {
                      className: `text-xs text-emerald-800 leading-relaxed`,
                      children: `Your tuition requirement is stored in our coordinator portal. We match qualified home and online tutors based on your child's class, board, subjects, and locality in Hyderabad.`,
                    }),
                  ],
                }),
                (0, O.jsxs)(`div`, {
                  className: `bg-slate-50 rounded-xl p-4 mb-6 text-left border border-slate-200`,
                  children: [
                    (0, O.jsx)(`div`, {
                      className: `text-xs font-semibold text-slate-700 mb-2`,
                      children: `Submitted Requirement Details:`,
                    }),
                    (0, O.jsxs)(`div`, {
                      className: `text-xs text-slate-600 space-y-1`,
                      children: [
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`strong`, { children: `Parent Name:` }),
                            ` `,
                            t.parentName,
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`strong`, {
                              children: `Mobile Number:`,
                            }),
                            ` `,
                            t.mobileNumber,
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`strong`, {
                              children: `WhatsApp Number:`,
                            }),
                            ` `,
                            t.whatsappNumber || t.mobileNumber,
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`strong`, { children: `Student Name:` }),
                            ` `,
                            t.studentName || `Not specified`,
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`strong`, {
                              children: `Student Class:`,
                            }),
                            ` `,
                            t.studentClass,
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`strong`, { children: `Board:` }),
                            ` `,
                            t.board,
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`strong`, {
                              children: `Subject Required:`,
                            }),
                            ` `,
                            t.subjectRequired,
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`strong`, { children: `Tuition Mode:` }),
                            ` `,
                            t.tuitionMode,
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`strong`, {
                              children: `Preferred Location:`,
                            }),
                            ` `,
                            t.preferredLocation || `Hyderabad`,
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`strong`, {
                              children: `Additional Requirements:`,
                            }),
                            ` `,
                            t.additionalRequirements || `None`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, O.jsxs)(`div`, {
                  className: `flex flex-col sm:flex-row items-center justify-center gap-3`,
                  children: [
                    (0, O.jsx)(`button`, {
                      onClick: () => {
                        (o(null),
                          n({
                            parentName: ``,
                            mobileNumber: ``,
                            whatsappNumber: ``,
                            studentName: ``,
                            studentClass: ``,
                            board: ``,
                            subjectRequired: ``,
                            tuitionMode: `Home`,
                            preferredLocation: ``,
                            additionalRequirements: ``,
                          }),
                          i({}));
                      },
                      className: `w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer`,
                      children: `Submit Another Requirement`,
                    }),
                    (0, O.jsx)(`button`, {
                      onClick: () => e(`/`),
                      className: `w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer`,
                      children: `Return to Home`,
                    }),
                  ],
                }),
              ],
            })
          : (0, O.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-12 gap-10 items-start`,
              children: [
                (0, O.jsxs)(`div`, {
                  className: `lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-8 md:p-10`,
                  children: [
                    (0, O.jsxs)(`div`, {
                      className: `mb-6 border-b border-slate-100 pb-4`,
                      children: [
                        (0, O.jsx)(`h2`, {
                          className: `text-xl sm:text-2xl font-bold text-[#101828]`,
                          children: `Parent Tuition Requirement Form`,
                        }),
                        (0, O.jsxs)(`p`, {
                          className: `text-xs sm:text-sm text-[#667085] mt-1`,
                          children: [
                            `Fields marked with (`,
                            (0, O.jsx)(`span`, {
                              className: `text-red-500 font-bold`,
                              children: `*`,
                            }),
                            `) are required. Your requirement will be saved securely for our academic coordinator.`,
                          ],
                        }),
                      ],
                    }),
                    r.form &&
                      (0, O.jsxs)(`div`, {
                        className: `mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2`,
                        children: [
                          (0, O.jsx)(de, {
                            className: `w-4 h-4 shrink-0 text-red-600`,
                          }),
                          (0, O.jsx)(`span`, { children: r.form }),
                        ],
                      }),
                    (0, O.jsxs)(`form`, {
                      onSubmit: async (e) => {
                        e.preventDefault();
                        if (!d()) {
                          document
                            .querySelector(`.border-red-500`)
                            ?.scrollIntoView({
                              behavior: `smooth`,
                              block: `center`,
                            });
                          return;
                        }
                        setSubmitting(true);
                        try {
                          const res = await submitEnquiry('parent', t);
                          o(res.id || 'SUBMITTED');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } catch (err: any) {
                          i((prev) => ({
                            ...prev,
                            form: err.message || 'Failed to save requirement. Please check your connection and retry.',
                          }));
                        } finally {
                          setSubmitting(false);
                        }
                      },
                      className: `space-y-6`,
                      noValidate: !0,
                      children: [
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`h3`, {
                              className: `text-xs font-bold uppercase tracking-wider text-[#155EEF] mb-3`,
                              children: `1. Parent & Contact Details`,
                            }),
                            (0, O.jsxs)(`div`, {
                              className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                              children: [
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsxs)(`label`, {
                                      htmlFor: `parentName`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: [
                                        `Parent Name `,
                                        (0, O.jsx)(`span`, {
                                          className: `text-red-500`,
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `parentName`,
                                      value: t.parentName,
                                      onChange: (e) =>
                                        c(`parentName`, e.target.value),
                                      placeholder: `e.g. Ramesh Reddy`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${r.parentName ? `border-red-500 focus:border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#155EEF]`}`,
                                      required: !0,
                                    }),
                                    r.parentName &&
                                      (0, O.jsx)(`p`, {
                                        className: `text-xs text-red-600 mt-1`,
                                        children: r.parentName,
                                      }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsxs)(`label`, {
                                      htmlFor: `mobileNumber`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: [
                                        `Mobile Number `,
                                        (0, O.jsx)(`span`, {
                                          className: `text-red-500`,
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                    (0, O.jsxs)(`div`, {
                                      className: `relative`,
                                      children: [
                                        (0, O.jsx)(`span`, {
                                          className: `absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500`,
                                          children: `+91`,
                                        }),
                                        (0, O.jsx)(`input`, {
                                          type: `tel`,
                                          id: `mobileNumber`,
                                          value: t.mobileNumber,
                                          onChange: (e) =>
                                            c(`mobileNumber`, e.target.value),
                                          placeholder: `95052 03418`,
                                          maxLength: 14,
                                          className: `w-full pl-12 pr-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${r.mobileNumber ? `border-red-500 focus:border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#155EEF]`}`,
                                          required: !0,
                                        }),
                                      ],
                                    }),
                                    r.mobileNumber &&
                                      (0, O.jsx)(`p`, {
                                        className: `text-xs text-red-600 mt-1`,
                                        children: r.mobileNumber,
                                      }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      htmlFor: `whatsappNumber`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `WhatsApp Number`,
                                    }),
                                    (0, O.jsxs)(`div`, {
                                      className: `relative`,
                                      children: [
                                        (0, O.jsx)(`span`, {
                                          className: `absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500`,
                                          children: `+91`,
                                        }),
                                        (0, O.jsx)(`input`, {
                                          type: `tel`,
                                          id: `whatsappNumber`,
                                          value: t.whatsappNumber,
                                          onChange: (e) =>
                                            c(`whatsappNumber`, e.target.value),
                                          placeholder: `Leave blank if same as mobile`,
                                          maxLength: 14,
                                          className: `w-full pl-12 pr-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${r.whatsappNumber ? `border-red-500 focus:border-red-500` : `border-slate-300 focus:border-[#155EEF]`}`,
                                        }),
                                      ],
                                    }),
                                    r.whatsappNumber &&
                                      (0, O.jsx)(`p`, {
                                        className: `text-xs text-red-600 mt-1`,
                                        children: r.whatsappNumber,
                                      }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      htmlFor: `studentName`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Student Name`,
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `studentName`,
                                      value: t.studentName,
                                      onChange: (e) =>
                                        c(`studentName`, e.target.value),
                                      placeholder: `e.g. Rahul`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#155EEF] text-sm focus:outline-none transition-colors`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          className: `pt-4 border-t border-slate-100`,
                          children: [
                            (0, O.jsx)(`h3`, {
                              className: `text-xs font-bold uppercase tracking-wider text-[#155EEF] mb-3`,
                              children: `2. Class, Board & Subject Required`,
                            }),
                            (0, O.jsxs)(`div`, {
                              className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                              children: [
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsxs)(`label`, {
                                      htmlFor: `studentClass`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: [
                                        `Student Class `,
                                        (0, O.jsx)(`span`, {
                                          className: `text-red-500`,
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                    (0, O.jsxs)(`select`, {
                                      id: `studentClass`,
                                      value: t.studentClass,
                                      onChange: (e) =>
                                        c(`studentClass`, e.target.value),
                                      className: `w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none bg-white transition-colors ${r.studentClass ? `border-red-500 focus:border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#155EEF]`}`,
                                      required: !0,
                                      children: [
                                        (0, O.jsx)(`option`, {
                                          value: ``,
                                          children: `-- Select Class --`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `Class 1–5`,
                                          children: `Class 1 to 5 (Primary)`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `Class 6–8`,
                                          children: `Class 6 to 8 (Middle School)`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `Class 9–10`,
                                          children: `Class 9 to 10 (Secondary / Board)`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `Class 11–12`,
                                          children: `Class 11 to 12 (Intermediate / +2)`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `BTech`,
                                          children: `BTech (Engineering)`,
                                        }),
                                      ],
                                    }),
                                    r.studentClass &&
                                      (0, O.jsx)(`p`, {
                                        className: `text-xs text-red-600 mt-1`,
                                        children: r.studentClass,
                                      }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsxs)(`label`, {
                                      htmlFor: `board`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: [
                                        `Board `,
                                        (0, O.jsx)(`span`, {
                                          className: `text-red-500`,
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                    (0, O.jsxs)(`select`, {
                                      id: `board`,
                                      value: t.board,
                                      onChange: (e) =>
                                        c(`board`, e.target.value),
                                      className: `w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none bg-white transition-colors ${r.board ? `border-red-500 focus:border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#155EEF]`}`,
                                      required: !0,
                                      children: [
                                        (0, O.jsx)(`option`, {
                                          value: ``,
                                          children: `-- Select Board --`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `SSC`,
                                          children: `SSC (Telangana State Board)`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `CBSE`,
                                          children: `CBSE`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `ICSE`,
                                          children: `ICSE / ISC`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `IGCSE`,
                                          children: `IGCSE / Cambridge`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `Other`,
                                          children: `Other Board on request`,
                                        }),
                                      ],
                                    }),
                                    r.board &&
                                      (0, O.jsx)(`p`, {
                                        className: `text-xs text-red-600 mt-1`,
                                        children: r.board,
                                      }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  className: `sm:col-span-2`,
                                  children: [
                                    (0, O.jsxs)(`label`, {
                                      htmlFor: `subjectRequired`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: [
                                        `Subject Required `,
                                        (0, O.jsx)(`span`, {
                                          className: `text-red-500`,
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `subjectRequired`,
                                      value: t.subjectRequired,
                                      onChange: (e) =>
                                        c(`subjectRequired`, e.target.value),
                                      placeholder: `e.g. Mathematics, Science, Physics`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${r.subjectRequired ? `border-red-500 focus:border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#155EEF]`}`,
                                      required: !0,
                                    }),
                                    r.subjectRequired &&
                                      (0, O.jsx)(`p`, {
                                        className: `text-xs text-red-600 mt-1`,
                                        children: r.subjectRequired,
                                      }),
                                    (0, O.jsxs)(`div`, {
                                      className: `mt-2 flex flex-wrap items-center gap-1.5`,
                                      children: [
                                        (0, O.jsx)(`span`, {
                                          className: `text-[11px] text-slate-500 font-medium`,
                                          children: `Quick select:`,
                                        }),
                                        s.map((e) => {
                                          let n = t.subjectRequired.includes(e);
                                          return (0, O.jsxs)(
                                            `button`,
                                            {
                                              type: `button`,
                                              onClick: () => u(e),
                                              className: `text-[11px] px-2 py-0.5 rounded-md border transition-colors cursor-pointer ${n ? `bg-[#155EEF] text-white border-[#155EEF]` : `bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300`}`,
                                              children: [`+ `, e],
                                            },
                                            e,
                                          );
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          className: `pt-4 border-t border-slate-100`,
                          children: [
                            (0, O.jsx)(`h3`, {
                              className: `text-xs font-bold uppercase tracking-wider text-[#155EEF] mb-3`,
                              children: `3. Mode, Location & Requirements`,
                            }),
                            (0, O.jsxs)(`div`, {
                              className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                              children: [
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Home / Online Tuition`,
                                    }),
                                    (0, O.jsx)(`div`, {
                                      className: `grid grid-cols-3 gap-2`,
                                      children: [`Home`, `Online`, `Both`].map(
                                        (e) =>
                                          (0, O.jsx)(
                                            `button`,
                                            {
                                              type: `button`,
                                              onClick: () =>
                                                c(`tuitionMode`, e),
                                              className: `py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${t.tuitionMode === e ? `bg-blue-50 border-[#155EEF] text-[#155EEF]` : `border-slate-200 text-slate-700 hover:bg-slate-50`}`,
                                              children:
                                                e === `Home`
                                                  ? `Home`
                                                  : e === `Online`
                                                    ? `Online`
                                                    : `Both`,
                                            },
                                            e,
                                          ),
                                      ),
                                    }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      htmlFor: `preferredLocation`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Preferred Location`,
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `preferredLocation`,
                                      value: t.preferredLocation,
                                      onChange: (e) =>
                                        c(`preferredLocation`, e.target.value),
                                      placeholder: `e.g. Attapur, Mehdipatnam, Tolichowki`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#155EEF] text-sm focus:outline-none transition-colors`,
                                    }),
                                    (0, O.jsxs)(`div`, {
                                      className: `mt-1.5 flex flex-wrap gap-1 text-[11px] text-slate-500`,
                                      children: [
                                        (0, O.jsx)(`span`, {
                                          children: `Areas:`,
                                        }),
                                        [
                                          `Attapur`,
                                          `Mehdipatnam`,
                                          `Tolichowki`,
                                          `Langer House`,
                                          `Rajendranagar`,
                                        ].map((e) =>
                                          (0, O.jsx)(
                                            `button`,
                                            {
                                              type: `button`,
                                              onClick: () =>
                                                c(`preferredLocation`, e),
                                              className: `underline hover:text-[#155EEF] cursor-pointer`,
                                              children: e,
                                            },
                                            e,
                                          ),
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  className: `sm:col-span-2`,
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      htmlFor: `additionalRequirements`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Additional Requirements`,
                                    }),
                                    (0, O.jsx)(`textarea`, {
                                      id: `additionalRequirements`,
                                      rows: 3,
                                      value: t.additionalRequirements,
                                      onChange: (e) =>
                                        c(
                                          `additionalRequirements`,
                                          e.target.value,
                                        ),
                                      placeholder: `e.g. Focus on fundamentals, female tutor preferred if available, student learning pace...`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#155EEF] text-xs focus:outline-none transition-colors resize-none`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          className: `pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4`,
                          children: [
                            (0, O.jsx)(`p`, {
                              className: `text-xs text-slate-500`,
                              children: `Your requirement is saved securely to our database for our academic coordinator.`,
                            }),
                            (0, O.jsxs)(`button`, {
                              type: `submit`,
                              disabled: submitting,
                              className: `w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white text-sm font-semibold transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60`,
                              children: [
                                (0, O.jsx)(fe, {
                                  className: `w-4 h-4 text-white`,
                                }),
                                (0, O.jsx)(`span`, {
                                  children: submitting ? `Saving Requirement...` : `Submit Tuition Requirement`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, O.jsxs)(`div`, {
                  className: `lg:col-span-4 space-y-6`,
                  children: [
                    (0, O.jsxs)(`div`, {
                      className: `rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs`,
                      children: [
                        (0, O.jsx)(`img`, {
                          src: et.tutorTeachingMath,
                          alt: `Experienced home tutor teaching mathematics and science to a student in Hyderabad`,
                          className: `w-full h-48 object-cover`,
                          loading: `lazy`,
                          decoding: `async`,
                          referrerPolicy: `no-referrer`,
                          onError: (e: any) => {
                            e.target.style.display = `none`;
                          },
                        }),
                        (0, O.jsxs)(`div`, {
                          className: `p-4 bg-white border-t border-slate-100`,
                          children: [
                            (0, O.jsx)(`div`, {
                              className: `text-xs font-semibold text-[#101828] mb-1`,
                              children: `Direct Tutor-Parent Matching`,
                            }),
                            (0, O.jsx)(`p`, {
                              className: `text-[11px] text-[#667085] leading-relaxed`,
                              children: `We match tutors whose location, board experience, and requirements match your criteria.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, O.jsxs)(`div`, {
                      className: `bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80`,
                      children: [
                        (0, O.jsxs)(`h4`, {
                          className: `text-sm font-bold text-[#101828] mb-3 flex items-center gap-2`,
                          children: [
                            (0, O.jsx)(ge, {
                              className: `w-4 h-4 text-[#155EEF]`,
                            }),
                            (0, O.jsx)(`span`, { children: `How It Works` }),
                          ],
                        }),
                        (0, O.jsxs)(`ol`, {
                          className: `space-y-3 text-xs text-slate-600`,
                          children: [
                            (0, O.jsxs)(`li`, {
                              className: `flex items-start gap-2`,
                              children: [
                                (0, O.jsx)(`span`, {
                                  className: `w-4 h-4 rounded-full bg-blue-100 text-[#155EEF] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5`,
                                  children: `1`,
                                }),
                                (0, O.jsx)(`span`, {
                                  children: `Fill and submit your tuition requirement.`,
                                }),
                              ],
                            }),
                            (0, O.jsxs)(`li`, {
                              className: `flex items-start gap-2`,
                              children: [
                                (0, O.jsx)(`span`, {
                                  className: `w-4 h-4 rounded-full bg-blue-100 text-[#155EEF] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5`,
                                  children: `2`,
                                }),
                                (0, O.jsx)(`span`, {
                                  children: `Your request opens directly in WhatsApp with our coordinator.`,
                                }),
                              ],
                            }),
                            (0, O.jsxs)(`li`, {
                              className: `flex items-start gap-2`,
                              children: [
                                (0, O.jsx)(`span`, {
                                  className: `w-4 h-4 rounded-full bg-blue-100 text-[#155EEF] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5`,
                                  children: `3`,
                                }),
                                (0, O.jsx)(`span`, {
                                  children: `We connect you with matching tutors in your locality.`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
      }),
    ],
  });
};
export const _t = ParentsPage;
