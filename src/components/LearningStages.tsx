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
} from "./icons";
import { WhatsAppButton as ft } from "./WhatsAppButton";

export function LearningStages({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  return (0, O.jsx)(`section`, {
    className: `py-14 sm:py-20 bg-[#F8FAFC]`,
    children: (0, O.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
      children: [
        (0, O.jsxs)(`div`, {
          className: `text-center max-w-2xl mx-auto mb-10 sm:mb-14`,
          children: [
            (0, O.jsx)(`span`, {
              className: `text-xs font-semibold uppercase tracking-wider text-[#155EEF]`,
              children: `Two Dedicated Portals`,
            }),
            (0, O.jsx)(`h2`, {
              className: `text-2xl sm:text-3xl font-bold text-[#101828] mt-1.5`,
              children: `How Can Naveen Home Tuitions Help You?`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-sm sm:text-base text-[#667085] mt-2`,
              children: `Whether you are a parent seeking qualified academic guidance or an educator looking for teaching opportunities in Hyderabad.`,
            }),
          ],
        }),
        (0, O.jsxs)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10`,
          children: [
            (0, O.jsxs)(`div`, {
              className: `bg-white rounded-2xl p-8 sm:p-10 border-2 border-blue-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden group`,
              children: [
                (0, O.jsx)(`div`, {
                  className: `absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full pointer-events-none -mr-6 -mt-6`,
                }),
                (0, O.jsxs)(`div`, {
                  children: [
                    (0, O.jsx)(`div`, {
                      className: `w-14 h-14 rounded-xl bg-blue-50 text-[#155EEF] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`,
                      children: (0, O.jsx)(Ge, { className: `w-7 h-7` }),
                    }),
                    (0, O.jsx)(`span`, {
                      className: `text-xs font-semibold text-[#155EEF] uppercase tracking-wide`,
                      children: `For Parents & Students`,
                    }),
                    (0, O.jsx)(`h3`, {
                      className: `text-2xl font-bold text-[#101828] mt-1 mb-3`,
                      children: `Need a Tutor?`,
                    }),
                    (0, O.jsx)(`p`, {
                      className: `text-sm sm:text-base text-[#667085] leading-relaxed mb-6`,
                      children: `Tell us your class, subject, location, schedule and budget.`,
                    }),
                    (0, O.jsxs)(`ul`, {
                      className: `space-y-2.5 text-xs sm:text-sm text-slate-700 mb-8`,
                      children: [
                        (0, O.jsxs)(`li`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, O.jsx)(`span`, {
                              className: `w-4 h-4 rounded-full bg-blue-100 text-[#155EEF] flex items-center justify-center shrink-0`,
                              children: (0, O.jsx)(ue, {
                                className: `w-2.5 h-2.5 stroke-[3]`,
                              }),
                            }),
                            (0, O.jsx)(`span`, {
                              children: `Classes 1–12 (CBSE, SSC, ICSE) and BTech`,
                            }),
                          ],
                        }),
                        (0, O.jsxs)(`li`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, O.jsx)(`span`, {
                              className: `w-4 h-4 rounded-full bg-blue-100 text-[#155EEF] flex items-center justify-center shrink-0`,
                              children: (0, O.jsx)(ue, {
                                className: `w-2.5 h-2.5 stroke-[3]`,
                              }),
                            }),
                            (0, O.jsx)(`span`, {
                              children: `Verified tutors for in-home or online sessions`,
                            }),
                          ],
                        }),
                        (0, O.jsxs)(`li`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, O.jsx)(`span`, {
                              className: `w-4 h-4 rounded-full bg-blue-100 text-[#155EEF] flex items-center justify-center shrink-0`,
                              children: (0, O.jsx)(ue, {
                                className: `w-2.5 h-2.5 stroke-[3]`,
                              }),
                            }),
                            (0, O.jsx)(`span`, {
                              children: `Flexible timings matched to student schedule`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, O.jsxs)(`button`, {
                  onClick: () => e(`/parents`),
                  className: `w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white font-semibold text-sm transition-colors cursor-pointer shadow-xs active:scale-[0.98]`,
                  children: [
                    (0, O.jsx)(`span`, { children: `Find a Tutor` }),
                    (0, O.jsx)(S, { className: `w-4 h-4` }),
                  ],
                }),
              ],
            }),
            (0, O.jsxs)(`div`, {
              className: `bg-white rounded-2xl p-8 sm:p-10 border-2 border-emerald-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden group`,
              children: [
                (0, O.jsx)(`div`, {
                  className: `absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-bl-full pointer-events-none -mr-6 -mt-6`,
                }),
                (0, O.jsxs)(`div`, {
                  children: [
                    (0, O.jsx)(`div`, {
                      className: `w-14 h-14 rounded-xl bg-emerald-50 text-[#12B76A] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`,
                      children: (0, O.jsx)(Ee, { className: `w-7 h-7` }),
                    }),
                    (0, O.jsx)(`span`, {
                      className: `text-xs font-semibold text-[#12B76A] uppercase tracking-wide`,
                      children: `For Teachers & Educators`,
                    }),
                    (0, O.jsx)(`h3`, {
                      className: `text-2xl font-bold text-[#101828] mt-1 mb-3`,
                      children: `Want Students?`,
                    }),
                    (0, O.jsx)(`p`, {
                      className: `text-sm sm:text-base text-[#667085] leading-relaxed mb-6`,
                      children: `Join the Naveen Home Tuitions tutor network and receive relevant tuition opportunities.`,
                    }),
                    (0, O.jsxs)(`ul`, {
                      className: `space-y-2.5 text-xs sm:text-sm text-slate-700 mb-8`,
                      children: [
                        (0, O.jsxs)(`li`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, O.jsx)(`span`, {
                              className: `w-4 h-4 rounded-full bg-emerald-100 text-[#12B76A] flex items-center justify-center shrink-0`,
                              children: (0, O.jsx)(ue, {
                                className: `w-2.5 h-2.5 stroke-[3]`,
                              }),
                            }),
                            (0, O.jsx)(`span`, {
                              children: `Choose your preferred teaching areas in Hyderabad`,
                            }),
                          ],
                        }),
                        (0, O.jsxs)(`li`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, O.jsx)(`span`, {
                              className: `w-4 h-4 rounded-full bg-emerald-100 text-[#12B76A] flex items-center justify-center shrink-0`,
                              children: (0, O.jsx)(ue, {
                                className: `w-2.5 h-2.5 stroke-[3]`,
                              }),
                            }),
                            (0, O.jsx)(`span`, {
                              children: `Teach preferred classes, boards, and subjects`,
                            }),
                          ],
                        }),
                        (0, O.jsxs)(`li`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, O.jsx)(`span`, {
                              className: `w-4 h-4 rounded-full bg-emerald-100 text-[#12B76A] flex items-center justify-center shrink-0`,
                              children: (0, O.jsx)(ue, {
                                className: `w-2.5 h-2.5 stroke-[3]`,
                              }),
                            }),
                            (0, O.jsx)(`span`, {
                              children: `Home tuition or online teaching options`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, O.jsxs)(`button`, {
                  onClick: () => e(`/tutors`),
                  className: `w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#12B76A] hover:bg-[#0e9657] text-white font-semibold text-sm transition-colors cursor-pointer shadow-xs active:scale-[0.98]`,
                  children: [
                    (0, O.jsx)(`span`, { children: `Register as Tutor` }),
                    (0, O.jsx)(S, { className: `w-4 h-4` }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
export const nt = LearningStages;
