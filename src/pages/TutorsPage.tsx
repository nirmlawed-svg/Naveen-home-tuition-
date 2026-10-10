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

export function TutorsPage({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [t, n] = useState<Record<string, string>>({
    fullName: ``,
    mobileNumber: ``,
    whatsappNumber: ``,
    email: ``,
    highestQualification: ``,
    teachingExperience: `1 to 3 Years`,
    subjects: ``,
    classesYouTeach: ``,
    boards: ``,
    languagesKnown: `English, Telugu, Hindi`,
    areasYouCanTravelTo: ``,
    teachingMode: `Both`,
    expectedFee: `₹500 – ₹800 / hour or monthly package`,
    availability: `Evenings (after 5 PM)`,
    additionalInformation: ``,
  });
  const [r, i] = useState<Record<string, string>>({});
  const [a, o] = useState<string | null>(null);
  const s = [
      {
        title: `Get relevant tuition opportunities`,
        desc: `Receive alerts for tuition inquiries that match your subjects and teaching areas.`,
        icon: ce,
      },
      {
        title: `Choose preferred subjects and classes`,
        desc: `Focus on the standards and subjects you are most confident teaching.`,
        icon: se,
      },
      {
        title: `Choose preferred teaching areas`,
        desc: `Select the Hyderabad neighborhoods you can comfortably travel to.`,
        icon: ke,
      },
      {
        title: `Home and online teaching opportunities`,
        desc: `Take up in-person home tutoring or remote online one-on-one sessions.`,
        icon: w,
      },
      {
        title: `Flexible teaching options`,
        desc: `Agree on convenient time slots and schedules with student families.`,
        icon: ge,
      },
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
  const u = () => {
    const errs: Record<string, string> = {};
    if (!t.fullName.trim()) errs.fullName = `Full Name is required`;
    const mobileCheck = gt(t.mobileNumber);
    if (!mobileCheck.isValid) {
      errs.mobileNumber = mobileCheck.error || `Valid mobile number required`;
    }
    if (t.whatsappNumber.trim() && !gt(t.whatsappNumber).isValid) {
      errs.whatsappNumber = `Please enter a valid 10-digit WhatsApp number`;
    }
    if (!t.highestQualification.trim()) {
      errs.highestQualification = `Highest qualification is required`;
    }
    if (!t.subjects.trim()) {
      errs.subjects = `Please list subjects you can teach`;
    }
    if (!t.classesYouTeach.trim()) {
      errs.classesYouTeach = `Please specify classes you teach`;
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
              className: `text-xs font-semibold uppercase tracking-wider text-[#12B76A] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full`,
              children: `For Tutors & Educators`,
            }),
            (0, O.jsx)(`h1`, {
              className: `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight mt-3 mb-4`,
              children: `Become a Tutor with Naveen Home Tuitions`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto font-normal`,
              children: `Join our tutor network and receive relevant tuition opportunities based on your subjects, classes, preferred areas and availability.`,
            }),
          ],
        }),
      }),
      (0, O.jsx)(`section`, {
        className: `py-10 bg-white border-b border-slate-100`,
        children: (0, O.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
          children: [
            (0, O.jsxs)(`div`, {
              className: `text-center max-w-2xl mx-auto mb-8`,
              children: [
                (0, O.jsx)(`h2`, {
                  className: `text-xl sm:text-2xl font-bold text-[#101828]`,
                  children: `Tutor Network Benefits`,
                }),
                (0, O.jsx)(`p`, {
                  className: `text-xs sm:text-sm text-[#667085] mt-1.5`,
                  children: `Connect with students needing one-on-one attention across Hyderabad.`,
                }),
              ],
            }),
            (0, O.jsx)(`div`, {
              className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4`,
              children: s.map((e) => {
                let t = e.icon;
                return (0, O.jsx)(
                  `div`,
                  {
                    className: `p-5 rounded-xl border border-slate-200/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between`,
                    children: (0, O.jsxs)(`div`, {
                      children: [
                        (0, O.jsx)(`div`, {
                          className: `w-10 h-10 rounded-lg bg-emerald-50 text-[#12B76A] flex items-center justify-center mb-3`,
                          children: (0, O.jsx)(t, { className: `w-5 h-5` }),
                        }),
                        (0, O.jsx)(`h3`, {
                          className: `text-sm font-bold text-[#101828] mb-1.5`,
                          children: e.title,
                        }),
                        (0, O.jsx)(`p`, {
                          className: `text-xs text-[#667085] leading-relaxed`,
                          children: e.desc,
                        }),
                      ],
                    }),
                  },
                  e.title,
                );
              }),
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
                    `Your tutor application has been saved in our database with Reference ID: `,
                    (0, O.jsx)(`span`, {
                      className: `font-mono font-bold text-[#12B76A]`,
                      children: a,
                    }),
                    `. Our team will review your qualifications and contact you when matching inquiries arise.`,
                  ],
                }),
                (0, O.jsxs)(`div`, {
                  className: `p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6 text-left`,
                  children: [
                    (0, O.jsx)(`div`, {
                      className: `text-xs font-bold text-emerald-900 mb-1`,
                      children: `Profile Status: Registered & Under Review`,
                    }),
                    (0, O.jsx)(`p`, {
                      className: `text-xs text-emerald-800 leading-relaxed`,
                      children: `Your tutor profile is stored in our database. We connect qualified educators with parent inquiries matching your teaching subjects, travel locations, and time slots in Hyderabad.`,
                    }),
                  ],
                }),
                (0, O.jsxs)(`div`, {
                  className: `p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 mb-6 text-left`,
                  children: [
                    (0, O.jsx)(`div`, {
                      className: `font-semibold text-slate-800 mb-1`,
                      children: `Please Note:`,
                    }),
                    (0, O.jsx)(`div`, {
                      children: `Tutor opportunities depend on parent requirements and locality matching. We do not make guaranteed placement promises.`,
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
                            fullName: ``,
                            mobileNumber: ``,
                            whatsappNumber: ``,
                            email: ``,
                            highestQualification: ``,
                            teachingExperience: `1 to 3 Years`,
                            subjects: ``,
                            classesYouTeach: ``,
                            boards: ``,
                            languagesKnown: `English, Telugu, Hindi`,
                            areasYouCanTravelTo: ``,
                            teachingMode: `Both`,
                            expectedFee: `₹500 – ₹800 / hour or monthly package`,
                            availability: `Evenings (after 5 PM)`,
                            additionalInformation: ``,
                          }),
                          i({}));
                      },
                      className: `w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer`,
                      children: `Submit Another Profile`,
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
                          children: `Tutor Registration Form`,
                        }),
                        (0, O.jsxs)(`p`, {
                          className: `text-xs sm:text-sm text-[#667085] mt-1`,
                          children: [
                            `Fields marked with (`,
                            (0, O.jsx)(`span`, {
                              className: `text-red-500 font-bold`,
                              children: `*`,
                            }),
                            `) are required. Submitting will open WhatsApp to send your application to our team.`,
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
                        if (!u()) {
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
                          const res = await fetch('/api/enquiries', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ category: 'tutor', data: t }),
                          });
                          const resData = await res.json();
                          if (!res.ok) {
                            throw new Error(resData.error || 'Failed to submit tutor application.');
                          }
                          o(resData.id || 'SUBMITTED');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } catch (err: any) {
                          i((prev) => ({
                            ...prev,
                            form: err.message || 'Failed to save application. Please check your connection and retry.',
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
                              className: `text-xs font-bold uppercase tracking-wider text-[#12B76A] mb-3`,
                              children: `1. Contact Information`,
                            }),
                            (0, O.jsxs)(`div`, {
                              className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                              children: [
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsxs)(`label`, {
                                      htmlFor: `fullName`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: [
                                        `Full Name `,
                                        (0, O.jsx)(`span`, {
                                          className: `text-red-500`,
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `fullName`,
                                      value: t.fullName,
                                      onChange: (e) =>
                                        c(`fullName`, e.target.value),
                                      placeholder: `e.g. K. Naveen Kumar`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${r.fullName ? `border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#12B76A]`}`,
                                      required: !0,
                                    }),
                                    r.fullName &&
                                      (0, O.jsx)(`p`, {
                                        className: `text-xs text-red-600 mt-1`,
                                        children: r.fullName,
                                      }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsxs)(`label`, {
                                      htmlFor: `tutorMobile`,
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
                                          id: `tutorMobile`,
                                          value: t.mobileNumber,
                                          onChange: (e) =>
                                            c(`mobileNumber`, e.target.value),
                                          placeholder: `95052 03418`,
                                          maxLength: 14,
                                          className: `w-full pl-12 pr-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${r.mobileNumber ? `border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#12B76A]`}`,
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
                                      htmlFor: `tutorWhatsapp`,
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
                                          id: `tutorWhatsapp`,
                                          value: t.whatsappNumber,
                                          onChange: (e) =>
                                            c(`whatsappNumber`, e.target.value),
                                          placeholder: `Leave blank if same as mobile`,
                                          maxLength: 14,
                                          className: `w-full pl-12 pr-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      htmlFor: `email`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Email`,
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `email`,
                                      id: `email`,
                                      value: t.email,
                                      onChange: (e) =>
                                        c(`email`, e.target.value),
                                      placeholder: `tutor@example.com`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors`,
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
                              className: `text-xs font-bold uppercase tracking-wider text-[#12B76A] mb-3`,
                              children: `2. Qualifications & Experience`,
                            }),
                            (0, O.jsxs)(`div`, {
                              className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                              children: [
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsxs)(`label`, {
                                      htmlFor: `highestQualification`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: [
                                        `Highest Qualification `,
                                        (0, O.jsx)(`span`, {
                                          className: `text-red-500`,
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `highestQualification`,
                                      value: t.highestQualification,
                                      onChange: (e) =>
                                        c(
                                          `highestQualification`,
                                          e.target.value,
                                        ),
                                      placeholder: `e.g. BTech, MSc, MTech, BEd`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${r.highestQualification ? `border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#12B76A]`}`,
                                      required: !0,
                                    }),
                                    r.highestQualification &&
                                      (0, O.jsx)(`p`, {
                                        className: `text-xs text-red-600 mt-1`,
                                        children: r.highestQualification,
                                      }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      htmlFor: `teachingExperience`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Teaching Experience`,
                                    }),
                                    (0, O.jsxs)(`select`, {
                                      id: `teachingExperience`,
                                      value: t.teachingExperience,
                                      onChange: (e) =>
                                        c(`teachingExperience`, e.target.value),
                                      className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none bg-white transition-colors`,
                                      children: [
                                        (0, O.jsx)(`option`, {
                                          value: `Fresher`,
                                          children: `Fresher (Passionate to teach)`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `1 to 3 Years`,
                                          children: `1 to 3 Years`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `3 to 5 Years`,
                                          children: `3 to 5 Years`,
                                        }),
                                        (0, O.jsx)(`option`, {
                                          value: `5+ Years`,
                                          children: `5+ Years`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsxs)(`label`, {
                                      htmlFor: `subjects`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: [
                                        `Subjects `,
                                        (0, O.jsx)(`span`, {
                                          className: `text-red-500`,
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `subjects`,
                                      value: t.subjects,
                                      onChange: (e) =>
                                        c(`subjects`, e.target.value),
                                      placeholder: `e.g. Mathematics, Physics, Chemistry`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${r.subjects ? `border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#12B76A]`}`,
                                      required: !0,
                                    }),
                                    r.subjects &&
                                      (0, O.jsx)(`p`, {
                                        className: `text-xs text-red-600 mt-1`,
                                        children: r.subjects,
                                      }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsxs)(`label`, {
                                      htmlFor: `classesYouTeach`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: [
                                        `Classes You Teach `,
                                        (0, O.jsx)(`span`, {
                                          className: `text-red-500`,
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `classesYouTeach`,
                                      value: t.classesYouTeach,
                                      onChange: (e) =>
                                        c(`classesYouTeach`, e.target.value),
                                      placeholder: `e.g. Classes 6–10, 11–12, BTech`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${r.classesYouTeach ? `border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#12B76A]`}`,
                                      required: !0,
                                    }),
                                    r.classesYouTeach &&
                                      (0, O.jsx)(`p`, {
                                        className: `text-xs text-red-600 mt-1`,
                                        children: r.classesYouTeach,
                                      }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      htmlFor: `boards`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Boards`,
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `boards`,
                                      value: t.boards,
                                      onChange: (e) =>
                                        c(`boards`, e.target.value),
                                      placeholder: `e.g. CBSE, SSC, ICSE`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors`,
                                    }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      htmlFor: `languagesKnown`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Languages Known`,
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `languagesKnown`,
                                      value: t.languagesKnown,
                                      onChange: (e) =>
                                        c(`languagesKnown`, e.target.value),
                                      placeholder: `e.g. English, Telugu, Hindi`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors`,
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
                              className: `text-xs font-bold uppercase tracking-wider text-[#12B76A] mb-3`,
                              children: `3. Teaching Areas, Mode & Fees`,
                            }),
                            (0, O.jsxs)(`div`, {
                              className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                              children: [
                                (0, O.jsxs)(`div`, {
                                  className: `sm:col-span-2`,
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      htmlFor: `areasYouCanTravelTo`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Areas You Can Travel To`,
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `areasYouCanTravelTo`,
                                      value: t.areasYouCanTravelTo,
                                      onChange: (e) =>
                                        c(
                                          `areasYouCanTravelTo`,
                                          e.target.value,
                                        ),
                                      placeholder: `e.g. Attapur, Mehdipatnam, Tolichowki, Langer House`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors`,
                                    }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Home / Online / Both`,
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
                                                c(`teachingMode`, e),
                                              className: `py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${t.teachingMode === e ? `bg-emerald-50 border-[#12B76A] text-[#12B76A]` : `border-slate-200 text-slate-700 hover:bg-slate-50`}`,
                                              children: e,
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
                                      htmlFor: `expectedFee`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Expected Fee`,
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `expectedFee`,
                                      value: t.expectedFee,
                                      onChange: (e) =>
                                        c(`expectedFee`, e.target.value),
                                      placeholder: `e.g. ₹6,000/month or ₹500/hour`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors`,
                                    }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      htmlFor: `availability`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Availability`,
                                    }),
                                    (0, O.jsx)(`input`, {
                                      type: `text`,
                                      id: `availability`,
                                      value: t.availability,
                                      onChange: (e) =>
                                        c(`availability`, e.target.value),
                                      placeholder: `e.g. Evenings after 5 PM`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors`,
                                    }),
                                  ],
                                }),
                                (0, O.jsxs)(`div`, {
                                  children: [
                                    (0, O.jsx)(`label`, {
                                      htmlFor: `additionalInformation`,
                                      className: `block text-xs font-medium text-slate-700 mb-1.5`,
                                      children: `Additional Information`,
                                    }),
                                    (0, O.jsx)(`textarea`, {
                                      id: `additionalInformation`,
                                      rows: 2,
                                      value: t.additionalInformation,
                                      onChange: (e) =>
                                        c(
                                          `additionalInformation`,
                                          e.target.value,
                                        ),
                                      placeholder: `Any additional information about your background or methodology...`,
                                      className: `w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:border-[#12B76A] text-xs focus:outline-none transition-colors resize-none`,
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
                              children: `Your profile will be saved securely in our tutor coordinator database.`,
                            }),
                            (0, O.jsxs)(`button`, {
                              type: `submit`,
                              disabled: submitting,
                              className: `w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#12B76A] hover:bg-[#0e9657] text-white text-sm font-semibold transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed`,
                              children: [
                                submitting
                                  ? (0, O.jsx)(`span`, { children: `Saving Application...` })
                                  : (0, O.jsx)(`span`, {
                                      children: `Register as Tutor`,
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
                          src: et.onlineTuitionStudent,
                          alt: `Dedicated high school student attending online home tuition session in Hyderabad`,
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
                              children: `Flexible In-Person & Online Tuition`,
                            }),
                            (0, O.jsx)(`p`, {
                              className: `text-[11px] text-[#667085] leading-relaxed`,
                              children: `Connect with students looking for structured weekly learning in your preferred Hyderabad clusters.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, O.jsxs)(`div`, {
                      className: `bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80`,
                      children: [
                        (0, O.jsx)(`h4`, {
                          className: `text-sm font-bold text-[#101828] mb-3`,
                          children: `Tutor Expectations & Ethics`,
                        }),
                        (0, O.jsxs)(`ul`, {
                          className: `space-y-2.5 text-xs text-slate-600`,
                          children: [
                            (0, O.jsxs)(`li`, {
                              className: `flex items-start gap-2`,
                              children: [
                                (0, O.jsx)(`span`, {
                                  className: `w-1.5 h-1.5 rounded-full bg-[#12B76A] mt-1.5 shrink-0`,
                                }),
                                (0, O.jsx)(`span`, {
                                  children: `Punctuality and consistent weekly schedule.`,
                                }),
                              ],
                            }),
                            (0, O.jsxs)(`li`, {
                              className: `flex items-start gap-2`,
                              children: [
                                (0, O.jsx)(`span`, {
                                  className: `w-1.5 h-1.5 rounded-full bg-[#12B76A] mt-1.5 shrink-0`,
                                }),
                                (0, O.jsx)(`span`, {
                                  children: `Regular assessment and feedback to parents on progress.`,
                                }),
                              ],
                            }),
                            (0, O.jsxs)(`li`, {
                              className: `flex items-start gap-2`,
                              children: [
                                (0, O.jsx)(`span`, {
                                  className: `w-1.5 h-1.5 rounded-full bg-[#12B76A] mt-1.5 shrink-0`,
                                }),
                                (0, O.jsx)(`span`, {
                                  children: `Focus on conceptual understanding rather than rote memorization.`,
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
export const vt = TutorsPage;
