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
  generateGeneralContactWhatsAppUrl as g
} from "../data/siteData";
import {
  S, re, C, ie, ae, oe, se, ce, le, ue, de, fe, pe, me, he, ge,
  _e, ve, ye, be, xe, Se, Ce, we, Te, Ee, w, T, De, Oe, ke, Ae,
  E, D, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We,
  Ge, Ke, qe
} from "../components/icons";
import { WhatsAppButton as ft } from "../components/WhatsAppButton";

export function HowItWorksPage({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  let t = [
      {
        step: `01`,
        title: `Submit Requirement`,
        description: `Tell us your class, subject, location, schedule and budget through our simple requirement form or direct WhatsApp message.`,
        icon: Ce,
        details: `Specify home or online preference, target board (CBSE, SSC, ICSE, BTech), and specific areas of student focus.`,
      },
      {
        step: `02`,
        title: `Tutor Matching`,
        description: `We identify suitable tutors based on your requirements, academic level, and travel proximity.`,
        icon: Ie,
        details: `We evaluate tutor credentials, teaching track record, and verified availability in your Hyderabad locality.`,
      },
      {
        step: `03`,
        title: `Connect & Discuss`,
        description: `Connect with the tutor and discuss your requirements, student syllabus, and schedule.`,
        icon: Ge,
        details: `Discuss learning pace, specific textbooks, frequency of weekly sessions, and convenient morning/evening slots.`,
      },
      {
        step: `04`,
        title: `Start Learning`,
        description: `Choose a suitable arrangement and begin classes at your home or through interactive online sessions.`,
        icon: Re,
        details: `Start regular structured sessions with personalized attention and ongoing academic progress reviews.`,
      },
    ],
    n = [
      {
        step: `01`,
        title: `Register`,
        description: `Submit your tutor profile and preferences including qualifications, subjects, and Hyderabad travel areas.`,
        icon: Ue,
        details: `Highlight your academic degree, boards you handle, and whether you prefer home visits, online classes, or both.`,
      },
      {
        step: `02`,
        title: `Profile Review`,
        description: `Our team reviews the submitted information to verify subject proficiency and location preferences.`,
        icon: he,
        details: `We catalog your profile in our active educator network for relevant parent matching.`,
      },
      {
        step: `03`,
        title: `Get Opportunities`,
        description: `Receive relevant tuition opportunities when available that match your subjects and commute radius.`,
        icon: ie,
        details: `Tuition inquiries are shared based on parent requests. We do not make false guarantees of immediate placement.`,
      },
      {
        step: `04`,
        title: `Start Teaching`,
        description: `Discuss the opportunity and begin teaching when mutually agreed upon with the student family.`,
        icon: C,
        details: `Deliver dedicated one-on-one education, cultivate student confidence, and build an esteemed teaching reputation.`,
      },
    ];
  return (0, O.jsxs)(`div`, {
    className: `bg-white min-h-screen`,
    children: [
      (0, O.jsx)(`section`, {
        className: `bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-100 py-12 md:py-16`,
        children: (0, O.jsxs)(`div`, {
          className: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`,
          children: [
            (0, O.jsx)(`span`, {
              className: `text-xs font-semibold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full`,
              children: `Transparent Process`,
            }),
            (0, O.jsx)(`h1`, {
              className: `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight mt-3 mb-4`,
              children: `How Home Tuition Works in Hyderabad`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto font-normal`,
              children: `Whether you are a parent seeking a verified teacher for your child or an educator looking to teach students, explore our simple, four-step connection workflows below.`,
            }),
          ],
        }),
      }),
      (0, O.jsx)(`section`, {
        className: `py-14 sm:py-20 border-b border-slate-100`,
        children: (0, O.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
          children: [
            (0, O.jsxs)(`div`, {
              className: `flex flex-col md:flex-row md:items-end justify-between mb-12`,
              children: [
                (0, O.jsxs)(`div`, {
                  children: [
                    (0, O.jsx)(`div`, {
                      className: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#155EEF] text-xs font-bold mb-2`,
                      children: (0, O.jsx)(`span`, { children: `Journey 1` }),
                    }),
                    (0, O.jsx)(`h2`, {
                      className: `text-2xl sm:text-3xl font-bold text-[#101828]`,
                      children: `For Parents & Students`,
                    }),
                    (0, O.jsx)(`p`, {
                      className: `text-sm sm:text-base text-[#667085] mt-1.5`,
                      children: `From requirement submission to commencing the first tuition session.`,
                    }),
                  ],
                }),
                (0, O.jsxs)(`button`, {
                  onClick: () => e(`/parents`),
                  className: `mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs active:scale-[0.98]`,
                  children: [
                    (0, O.jsx)(`span`, { children: `Submit Requirement` }),
                    (0, O.jsx)(S, { className: `w-4 h-4` }),
                  ],
                }),
              ],
            }),
            (0, O.jsx)(`div`, {
              className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`,
              children: t.map((e) => {
                let t = e.icon;
                return (0, O.jsxs)(
                  `div`,
                  {
                    className: `bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between`,
                    children: [
                      (0, O.jsxs)(`div`, {
                        children: [
                          (0, O.jsxs)(`div`, {
                            className: `flex items-center justify-between mb-4`,
                            children: [
                              (0, O.jsx)(`span`, {
                                className: `text-2xl font-extrabold text-[#155EEF] font-mono`,
                                children: e.step,
                              }),
                              (0, O.jsx)(`div`, {
                                className: `w-10 h-10 rounded-xl bg-blue-50 text-[#155EEF] flex items-center justify-center`,
                                children: (0, O.jsx)(t, {
                                  className: `w-5 h-5`,
                                }),
                              }),
                            ],
                          }),
                          (0, O.jsx)(`h3`, {
                            className: `text-base font-bold text-[#101828] mb-2`,
                            children: e.title,
                          }),
                          (0, O.jsx)(`p`, {
                            className: `text-xs sm:text-sm text-[#667085] leading-relaxed mb-4`,
                            children: e.description,
                          }),
                        ],
                      }),
                      (0, O.jsx)(`div`, {
                        className: `pt-3 border-t border-slate-100 text-[11px] text-slate-500 italic`,
                        children: e.details,
                      }),
                    ],
                  },
                  e.step,
                );
              }),
            }),
          ],
        }),
      }),
      (0, O.jsx)(`section`, {
        className: `py-14 sm:py-20 bg-[#F8FAFC]`,
        children: (0, O.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
          children: [
            (0, O.jsxs)(`div`, {
              className: `flex flex-col md:flex-row md:items-end justify-between mb-12`,
              children: [
                (0, O.jsxs)(`div`, {
                  children: [
                    (0, O.jsx)(`div`, {
                      className: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#12B76A] text-xs font-bold mb-2`,
                      children: (0, O.jsx)(`span`, { children: `Journey 2` }),
                    }),
                    (0, O.jsx)(`h2`, {
                      className: `text-2xl sm:text-3xl font-bold text-[#101828]`,
                      children: `For Tutors & Educators`,
                    }),
                    (0, O.jsx)(`p`, {
                      className: `text-sm sm:text-base text-[#667085] mt-1.5`,
                      children: `How independent teachers join our network and connect with nearby students.`,
                    }),
                  ],
                }),
                (0, O.jsxs)(`button`, {
                  onClick: () => e(`/tutors`),
                  className: `mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#12B76A] hover:bg-[#0e9657] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs active:scale-[0.98]`,
                  children: [
                    (0, O.jsx)(`span`, { children: `Register as Tutor` }),
                    (0, O.jsx)(S, { className: `w-4 h-4` }),
                  ],
                }),
              ],
            }),
            (0, O.jsx)(`div`, {
              className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`,
              children: n.map((e) => {
                let t = e.icon;
                return (0, O.jsxs)(
                  `div`,
                  {
                    className: `bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between`,
                    children: [
                      (0, O.jsxs)(`div`, {
                        children: [
                          (0, O.jsxs)(`div`, {
                            className: `flex items-center justify-between mb-4`,
                            children: [
                              (0, O.jsx)(`span`, {
                                className: `text-2xl font-extrabold text-[#12B76A] font-mono`,
                                children: e.step,
                              }),
                              (0, O.jsx)(`div`, {
                                className: `w-10 h-10 rounded-xl bg-emerald-50 text-[#12B76A] flex items-center justify-center`,
                                children: (0, O.jsx)(t, {
                                  className: `w-5 h-5`,
                                }),
                              }),
                            ],
                          }),
                          (0, O.jsx)(`h3`, {
                            className: `text-base font-bold text-[#101828] mb-2`,
                            children: e.title,
                          }),
                          (0, O.jsx)(`p`, {
                            className: `text-xs sm:text-sm text-[#667085] leading-relaxed mb-4`,
                            children: e.description,
                          }),
                        ],
                      }),
                      (0, O.jsx)(`div`, {
                        className: `pt-3 border-t border-slate-100 text-[11px] text-slate-500 italic`,
                        children: e.details,
                      }),
                    ],
                  },
                  e.step,
                );
              }),
            }),
            (0, O.jsxs)(`div`, {
              className: `mt-10 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 max-w-3xl mx-auto text-center`,
              children: [
                (0, O.jsx)(`strong`, { children: `Transparency Notice:` }),
                ` Naveen Home Tuitions operates as a matching and referral coordination service. We do not promise guaranteed tuition opportunities or automatic placements; referrals depend strictly upon student requests, syllabus alignment, and parent decisions.`,
              ],
            }),
          ],
        }),
      }),
      (0, O.jsx)(`section`, {
        className: `py-14 bg-white border-t border-slate-100`,
        children: (0, O.jsxs)(`div`, {
          className: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`,
          children: [
            (0, O.jsx)(`h2`, {
              className: `text-2xl font-bold text-[#101828] mb-3`,
              children: `Ready to Begin?`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-sm text-[#667085] mb-8 max-w-md mx-auto`,
              children: `Choose your path to get started with Naveen Home Tuitions today.`,
            }),
            (0, O.jsxs)(`div`, {
              className: `flex flex-col sm:flex-row items-center justify-center gap-4`,
              children: [
                (0, O.jsx)(`button`, {
                  onClick: () => e(`/parents`),
                  className: `w-full sm:w-auto px-6 py-3 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white text-sm font-semibold transition-colors cursor-pointer`,
                  children: `Find a Tutor (Parents)`,
                }),
                (0, O.jsx)(`button`, {
                  onClick: () => e(`/tutors`),
                  className: `w-full sm:w-auto px-6 py-3 rounded-xl bg-[#12B76A] hover:bg-[#0e9657] text-white text-sm font-semibold transition-colors cursor-pointer`,
                  children: `Register as Tutor (Teachers)`,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
export const yt = HowItWorksPage;
