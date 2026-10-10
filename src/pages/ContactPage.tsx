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

export function ContactPage({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [t, n] = useState<Record<string, string>>({ name: ``, phone: ``, email: ``, message: `` });
  const [r, i] = useState<Record<string, string>>({});
  const [a, o] = useState<string | null>(null);
  const s = (field: string, val: string) => {
    n((prev) => ({ ...prev, [field]: val }));
    if (r[field]) {
      i((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };
  const c = () => {
    const errs: Record<string, string> = {};
    if (!t.name.trim()) errs.name = `Please provide your name`;
    const num = gt(t.phone);
    if (!num.isValid) errs.phone = num.error || `Valid mobile number required`;
    if (!t.message.trim()) errs.message = `Please enter your message`;
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
              children: `Direct Communication`,
            }),
            (0, O.jsx)(`h1`, {
              className: `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight mt-3 mb-4`,
              children: `Get in Touch`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto font-normal`,
              children: `Have questions about finding a tutor in Hyderabad or joining our teaching network? Contact the Naveen Home Tuitions team directly.`,
            }),
          ],
        }),
      }),
      (0, O.jsx)(`section`, {
        className: `py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
        children: (0, O.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-12 gap-10 items-start`,
          children: [
            (0, O.jsxs)(`div`, {
              className: `lg:col-span-5 space-y-6`,
              children: [
                (0, O.jsxs)(`div`, {
                  children: [
                    (0, O.jsx)(`h2`, {
                      className: `text-xl font-bold text-[#101828] mb-1`,
                      children: d.brandName,
                    }),
                    (0, O.jsx)(`p`, {
                      className: `text-xs sm:text-sm text-[#667085] leading-relaxed mb-6`,
                      children: `Connecting parents and students with suitable home and online tutors across Hyderabad.`,
                    }),
                  ],
                }),
                (0, O.jsxs)(`div`, {
                  className: `grid grid-cols-1 sm:grid-cols-2 gap-3.5`,
                  children: [
                    (0, O.jsxs)(`a`, {
                      href: p(),
                      className: `p-5 rounded-xl border border-blue-200 bg-blue-50/40 hover:bg-blue-50 transition-colors group flex flex-col justify-between`,
                      children: [
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`div`, {
                              className: `w-10 h-10 rounded-lg bg-[#155EEF] text-white flex items-center justify-center mb-3`,
                              children: (0, O.jsx)(Ne, {
                                className: `w-5 h-5`,
                              }),
                            }),
                            (0, O.jsx)(`div`, {
                              className: `text-xs font-medium text-slate-500 uppercase tracking-wide`,
                              children: `Phone`,
                            }),
                            (0, O.jsx)(`div`, {
                              className: `text-sm font-bold text-[#101828] mt-0.5 group-hover:text-[#155EEF]`,
                              children: d.phoneDisplay,
                            }),
                          ],
                        }),
                        (0, O.jsx)(`span`, {
                          className: `text-xs font-semibold text-[#155EEF] mt-4 flex items-center gap-1`,
                          children: `Call Now →`,
                        }),
                      ],
                    }),
                    (0, O.jsxs)(`a`, {
                      href: f(),
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      className: `p-5 rounded-xl border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50 transition-colors group flex flex-col justify-between`,
                      children: [
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`div`, {
                              className: `w-10 h-10 rounded-lg bg-[#12B76A] text-white flex items-center justify-center mb-3`,
                              children: (0, O.jsx)(E, {
                                className: `w-5 h-5 fill-white text-[#12B76A]`,
                              }),
                            }),
                            (0, O.jsx)(`div`, {
                              className: `text-xs font-medium text-slate-500 uppercase tracking-wide`,
                              children: `WhatsApp`,
                            }),
                            (0, O.jsx)(`div`, {
                              className: `text-sm font-bold text-[#101828] mt-0.5 group-hover:text-[#12B76A]`,
                              children: d.whatsappDisplay,
                            }),
                          ],
                        }),
                        (0, O.jsx)(`span`, {
                          className: `text-xs font-semibold text-[#12B76A] mt-4 flex items-center gap-1`,
                          children: `WhatsApp Us →`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, O.jsxs)(`div`, {
                  className: `p-5 rounded-xl border border-slate-200 bg-white space-y-4 text-xs`,
                  children: [
                    (0, O.jsxs)(`div`, {
                      className: `flex items-start gap-3`,
                      children: [
                        (0, O.jsx)(Oe, {
                          className: `w-4 h-4 text-blue-600 mt-0.5 shrink-0`,
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`div`, {
                              className: `font-semibold text-slate-800`,
                              children: `Email Address`,
                            }),
                            (0, O.jsx)(`a`, {
                              href: `mailto:${d.email}`,
                              className: `text-slate-600 hover:text-blue-600`,
                              children: d.email,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, O.jsxs)(`div`, {
                      className: `flex items-start gap-3 pt-3 border-t border-slate-100`,
                      children: [
                        (0, O.jsx)(ke, {
                          className: `w-4 h-4 text-amber-500 mt-0.5 shrink-0`,
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`div`, {
                              className: `font-semibold text-slate-800`,
                              children: `Hyderabad Service Areas`,
                            }),
                            (0, O.jsx)(`div`, {
                              className: `text-slate-600`,
                              children: `Attapur, Mehdipatnam, Tolichowki, Langer House, Rajendranagar, Upperpally, Karwan, Suncity, and nearby Hyderabad areas.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, O.jsxs)(`div`, {
                      className: `flex items-start gap-3 pt-3 border-t border-slate-100`,
                      children: [
                        (0, O.jsx)(ge, {
                          className: `w-4 h-4 text-emerald-600 mt-0.5 shrink-0`,
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`div`, {
                              className: `font-semibold text-slate-800`,
                              children: `Working Hours`,
                            }),
                            (0, O.jsx)(`div`, {
                              className: `text-slate-600`,
                              children: `Monday to Saturday: 9:00 AM – 8:00 PM IST`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, O.jsxs)(`div`, {
                  className: `p-5 rounded-xl border border-slate-200 bg-white`,
                  children: [
                    (0, O.jsx)(`h3`, {
                      className: `text-xs font-bold uppercase tracking-wider text-slate-700 mb-2`,
                      children: `Active Hyderabad Localities`,
                    }),
                    (0, O.jsx)(`div`, {
                      className: `flex flex-wrap gap-1.5`,
                      children: d.serviceAreas.map((e) =>
                        (0, O.jsx)(
                          `span`,
                          {
                            className: `text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium`,
                            children: e.name,
                          },
                          e.name,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, O.jsxs)(`div`, {
              className: `lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-8 md:p-10`,
              children: [
                (0, O.jsxs)(`div`, {
                  className: `mb-6 border-b border-slate-100 pb-4`,
                  children: [
                    (0, O.jsx)(`h2`, {
                      className: `text-xl sm:text-2xl font-bold text-[#101828]`,
                      children: `Send a Message`,
                    }),
                    (0, O.jsx)(`p`, {
                      className: `text-xs sm:text-sm text-[#667085] mt-1`,
                      children: `Fill out the form below to send your enquiry directly to our team.`,
                    }),
                  ],
                }),
                a
                  ? (0, O.jsxs)(`div`, {
                      className: `py-6 text-center space-y-4`,
                      children: [
                        (0, O.jsx)(`div`, {
                          className: `w-14 h-14 rounded-full bg-emerald-100 text-[#12B76A] flex items-center justify-center mx-auto`,
                          children: (0, O.jsx)(fe, {
                            className: `w-7 h-7 stroke-[2.5]`,
                          }),
                        }),
                        (0, O.jsx)(`h3`, {
                          className: `text-xl font-bold text-[#101828]`,
                          children: `Thank you! Your message has been submitted successfully.`,
                        }),
                        (0, O.jsxs)(`p`, {
                          className: `text-xs sm:text-sm text-[#667085] max-w-md mx-auto leading-relaxed`,
                          children: [
                            `Your inquiry has been stored securely in our database with Reference ID: `,
                            (0, O.jsx)(`span`, {
                              className: `font-mono font-bold text-[#155EEF]`,
                              children: a,
                            }),
                            `. Our academic coordinator will contact you promptly.`,
                          ],
                        }),
                        (0, O.jsx)(`div`, {
                          className: `pt-2 flex justify-center`,
                          children: (0, O.jsx)(`button`, {
                            onClick: () => {
                              (o(null),
                                n({
                                  name: ``,
                                  phone: ``,
                                  email: ``,
                                  message: ``,
                                }),
                                i({}));
                            },
                            className: `px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer`,
                            children: `Send Another Message`,
                          }),
                        }),
                      ],
                    })
                  : (0, O.jsxs)(`form`, {
                      onSubmit: async (e) => {
                        e.preventDefault();
                        if (!c()) return;
                        setSubmitting(true);
                        try {
                          const res = await fetch('/api/enquiries', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ category: 'contact', data: t }),
                          });
                          const resData = await res.json();
                          if (!res.ok) {
                            throw new Error(resData.error || 'Failed to submit contact enquiry.');
                          }
                          o(resData.id || 'SUBMITTED');
                        } catch (err: any) {
                          i((prev) => ({
                            ...prev,
                            form: err.message || 'Failed to send message. Please check your connection and retry.',
                          }));
                        } finally {
                          setSubmitting(false);
                        }
                      },
                      className: `space-y-4`,
                      noValidate: !0,
                      children: [
                        r.form &&
                          (0, O.jsxs)(`div`, {
                            className: `p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2`,
                            children: [
                              (0, O.jsx)(de, {
                                className: `w-4 h-4 shrink-0 text-red-600`,
                              }),
                              (0, O.jsx)(`span`, { children: r.form }),
                            ],
                          }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsxs)(`label`, {
                              htmlFor: `contactName`,
                              className: `block text-xs font-medium text-slate-700 mb-1.5`,
                              children: [
                                `Name `,
                                (0, O.jsx)(`span`, {
                                  className: `text-red-500`,
                                  children: `*`,
                                }),
                              ],
                            }),
                            (0, O.jsx)(`input`, {
                              type: `text`,
                              id: `contactName`,
                              value: t.name,
                              onChange: (e) => s(`name`, e.target.value),
                              placeholder: `Your Name`,
                              className: `w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${r.name ? `border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#155EEF]`}`,
                              required: !0,
                            }),
                            r.name &&
                              (0, O.jsx)(`p`, {
                                className: `text-xs text-red-600 mt-1`,
                                children: r.name,
                              }),
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsxs)(`label`, {
                              htmlFor: `contactPhone`,
                              className: `block text-xs font-medium text-slate-700 mb-1.5`,
                              children: [
                                `Phone `,
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
                                  id: `contactPhone`,
                                  value: t.phone,
                                  onChange: (e) => s(`phone`, e.target.value),
                                  placeholder: `95052 03418`,
                                  maxLength: 14,
                                  className: `w-full pl-12 pr-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${r.phone ? `border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#155EEF]`}`,
                                  required: !0,
                                }),
                              ],
                            }),
                            r.phone &&
                              (0, O.jsx)(`p`, {
                                className: `text-xs text-red-600 mt-1`,
                                children: r.phone,
                              }),
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsx)(`label`, {
                              htmlFor: `contactEmail`,
                              className: `block text-xs font-medium text-slate-700 mb-1.5`,
                              children: `Email`,
                            }),
                            (0, O.jsx)(`input`, {
                              type: `email`,
                              id: `contactEmail`,
                              value: t.email,
                              onChange: (e) => s(`email`, e.target.value),
                              placeholder: `name@example.com`,
                              className: `w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#155EEF] text-sm focus:outline-none transition-colors`,
                            }),
                          ],
                        }),
                        (0, O.jsxs)(`div`, {
                          children: [
                            (0, O.jsxs)(`label`, {
                              htmlFor: `contactMessage`,
                              className: `block text-xs font-medium text-slate-700 mb-1.5`,
                              children: [
                                `Message `,
                                (0, O.jsx)(`span`, {
                                  className: `text-red-500`,
                                  children: `*`,
                                }),
                              ],
                            }),
                            (0, O.jsx)(`textarea`, {
                              id: `contactMessage`,
                              rows: 4,
                              value: t.message,
                              onChange: (e) => s(`message`, e.target.value),
                              placeholder: `Tell us what tuition help you are looking for...`,
                              className: `w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors resize-none ${r.message ? `border-red-500 bg-red-50/20` : `border-slate-300 focus:border-[#155EEF]`}`,
                              required: !0,
                            }),
                            r.message &&
                              (0, O.jsx)(`p`, {
                                className: `text-xs text-red-600 mt-1`,
                                children: r.message,
                              }),
                          ],
                        }),
                        (0, O.jsx)(`div`, {
                          className: `pt-2`,
                          children: (0, O.jsxs)(`button`, {
                            type: `submit`,
                            disabled: submitting,
                            className: `w-full sm:w-auto px-8 py-3 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white text-sm font-semibold transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed`,
                            children: [
                              submitting
                                ? (0, O.jsx)(`span`, { children: `Sending Message...` })
                                : (0, O.jsx)(`span`, { children: `Send Message` }),
                            ],
                          }),
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
export const bt = ContactPage;
