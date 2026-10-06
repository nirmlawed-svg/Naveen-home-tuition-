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

export function AboutPage({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  return (0, O.jsxs)(`div`, {
    className: `bg-white min-h-screen`,
    children: [
      (0, O.jsx)(`section`, {
        className: `bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 py-12 md:py-20`,
        children: (0, O.jsxs)(`div`, {
          className: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`,
          children: [
            (0, O.jsxs)(`div`, {
              className: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#155EEF] text-xs font-semibold mb-4`,
              children: [
                (0, O.jsx)(Re, { className: `w-3.5 h-3.5` }),
                (0, O.jsx)(`span`, { children: `Established in 2024` }),
              ],
            }),
            (0, O.jsx)(`h1`, {
              className: `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight leading-tight`,
              children: `About Naveen Home Tuitions`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-lg sm:text-xl text-[#344054] mt-5 leading-relaxed max-w-3xl mx-auto font-normal`,
              children: `Naveen Home Tuitions, established in 2024, connects parents and students with qualified and trusted tutors across Hyderabad, India, and around the world.`,
            }),
          ],
        }),
      }),
      (0, O.jsx)(`section`, {
        className: `py-14 sm:py-20 bg-white`,
        children: (0, O.jsx)(`div`, {
          className: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`,
          children: (0, O.jsxs)(`div`, {
            className: `bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 sm:p-10 md:p-12 shadow-xs`,
            children: [
              (0, O.jsxs)(`div`, {
                className: `space-y-6 text-base sm:text-lg text-[#475467] leading-relaxed`,
                children: [
                  (0, O.jsx)(`p`, {
                    children: `We provide personalized home and online tuition for students from Classes 1–12 and B.Tech, covering major curricula including CBSE, ICSE, IB, IGCSE, and State Boards. We also provide academic support and foundation coaching for IIT-JEE and NEET preparation.`,
                  }),
                  (0, O.jsx)(`p`, {
                    children: `Whether you're a parent in Hyderabad looking for a home tutor or an international parent looking for a reliable online tutor, we help you find the right tutor based on your child's class, subjects, curriculum, learning needs, location, and preferred schedule.`,
                  }),
                  (0, O.jsx)(`p`, {
                    children: `From school academics to subject-specific support, our goal is to make quality tutoring accessible, convenient, and personalized for every student while helping them build stronger concepts, confidence, and results.`,
                  }),
                ],
              }),
              (0, O.jsxs)(`div`, {
                className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-200`,
                children: [
                  (0, O.jsxs)(`div`, {
                    className: `bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs`,
                    children: [
                      (0, O.jsx)(`div`, {
                        className: `w-9 h-9 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center mb-3`,
                        children: (0, O.jsx)(Ee, { className: `w-5 h-5` }),
                      }),
                      (0, O.jsx)(`div`, {
                        className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
                        children: `Classes`,
                      }),
                      (0, O.jsx)(`div`, {
                        className: `text-sm font-bold text-[#101828] mt-0.5`,
                        children: `Classes 1–12 & B.Tech`,
                      }),
                    ],
                  }),
                  (0, O.jsxs)(`div`, {
                    className: `bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs`,
                    children: [
                      (0, O.jsx)(`div`, {
                        className: `w-9 h-9 rounded-lg bg-emerald-50 text-[#12B76A] flex items-center justify-center mb-3`,
                        children: (0, O.jsx)(se, { className: `w-5 h-5` }),
                      }),
                      (0, O.jsx)(`div`, {
                        className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
                        children: `Curricula`,
                      }),
                      (0, O.jsx)(`div`, {
                        className: `text-sm font-bold text-[#101828] mt-0.5`,
                        children: `CBSE, ICSE, IB, IGCSE & State`,
                      }),
                    ],
                  }),
                  (0, O.jsxs)(`div`, {
                    className: `bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs`,
                    children: [
                      (0, O.jsx)(`div`, {
                        className: `w-9 h-9 rounded-lg bg-amber-50 text-[#F79009] flex items-center justify-center mb-3`,
                        children: (0, O.jsx)(C, { className: `w-5 h-5` }),
                      }),
                      (0, O.jsx)(`div`, {
                        className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
                        children: `Competitive Exams`,
                      }),
                      (0, O.jsx)(`div`, {
                        className: `text-sm font-bold text-[#101828] mt-0.5`,
                        children: `IIT-JEE & NEET Foundation`,
                      }),
                    ],
                  }),
                  (0, O.jsxs)(`div`, {
                    className: `bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs`,
                    children: [
                      (0, O.jsx)(`div`, {
                        className: `w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3`,
                        children: (0, O.jsx)(xe, { className: `w-5 h-5` }),
                      }),
                      (0, O.jsx)(`div`, {
                        className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
                        children: `Tuition Modes`,
                      }),
                      (0, O.jsx)(`div`, {
                        className: `text-sm font-bold text-[#101828] mt-0.5`,
                        children: `Home & Online Worldwide`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      (0, O.jsx)(`section`, {
        className: `py-16 sm:py-24 bg-[#F8FAFC] border-y border-slate-100`,
        children: (0, O.jsxs)(`div`, {
          className: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`,
          children: [
            (0, O.jsxs)(`div`, {
              className: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[#12B76A] text-xs font-semibold mb-4`,
              children: [
                (0, O.jsx)(Be, { className: `w-3.5 h-3.5` }),
                (0, O.jsx)(`span`, { children: `Our Purpose` }),
              ],
            }),
            (0, O.jsx)(`h2`, {
              className: `text-xs sm:text-sm font-bold uppercase tracking-widest text-[#155EEF] mb-3`,
              children: `Our Mission`,
            }),
            (0, O.jsx)(`h3`, {
              className: `text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101828] tracking-tight leading-tight max-w-2xl mx-auto`,
              children: `Connecting every student with the right tutor, anywhere in the world.`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-base sm:text-lg text-[#667085] mt-5 leading-relaxed max-w-2xl mx-auto font-normal`,
              children: `We aim to connect every student with the right tutor for their individual learning journey and make personalized, quality tutoring accessible wherever they are.`,
            }),
            (0, O.jsxs)(`div`, {
              className: `mt-8 pt-8 border-t border-slate-200/80 max-w-md mx-auto`,
              children: [
                (0, O.jsx)(`div`, {
                  className: `text-base font-bold text-[#101828]`,
                  children: `Naveen Home Tuitions`,
                }),
                (0, O.jsx)(`div`, {
                  className: `text-sm font-medium text-[#12B76A] mt-1`,
                  children: `Connecting Parents with the Right Tutors.`,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, O.jsx)(`section`, {
        className: `py-16 sm:py-20 bg-white`,
        children: (0, O.jsxs)(`div`, {
          className: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`,
          children: [
            (0, O.jsx)(`h2`, {
              className: `text-2xl sm:text-3xl font-bold text-[#101828] mb-3`,
              children: `Ready to Find the Right Tutor for Your Child?`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-sm sm:text-base text-[#667085] mb-8 max-w-xl mx-auto`,
              children: `Tell us your class, subject, curriculum, and preferred schedule. We help connect you with suitable home and online tutoring options.`,
            }),
            (0, O.jsxs)(`div`, {
              className: `flex flex-col sm:flex-row items-center justify-center gap-3.5`,
              children: [
                (0, O.jsxs)(`button`, {
                  onClick: () => e(`/parents`),
                  className: `w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#155EEF] hover:bg-[#104ec6] rounded-xl shadow-xs transition-all duration-150 cursor-pointer text-center active:scale-[0.98] flex items-center justify-center gap-2`,
                  children: [
                    (0, O.jsx)(`span`, { children: `Find a Tutor` }),
                    (0, O.jsx)(S, { className: `w-4 h-4` }),
                  ],
                }),
                (0, O.jsx)(`button`, {
                  onClick: () => e(`/contact`),
                  className: `w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-[#155EEF] bg-white border border-[#155EEF] hover:bg-blue-50 rounded-xl transition-all duration-150 cursor-pointer text-center active:scale-[0.98]`,
                  children: `Contact Us`,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
export const ht = AboutPage;
