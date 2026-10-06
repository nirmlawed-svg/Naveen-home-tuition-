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

export function FAQ() {
  let e = [
    {
      name: `Naresh Smilee`,
      rating: 5,
      reviewText: `Good teaching is an easy way to understand`,
      initials: `N`,
      avatarBg: `bg-[#4285F4]`,
    },
    {
      name: `Suresh Mudhiraj`,
      rating: 5,
      reviewText: `I'm getting better improvement after joining this tuition..`,
      initials: `S`,
      avatarBg: `bg-[#34A853]`,
    },
    {
      name: `balakrishna bk`,
      rating: 5,
      reviewText: `The way of explanation from my sirr is really amazing`,
      initials: `B`,
      avatarBg: `bg-[#EA4335]`,
    },
  ];
  return (0, O.jsx)(`section`, {
    className: `py-16 sm:py-24 bg-white border-b border-slate-100`,
    children: (0, O.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
      children: [
        (0, O.jsxs)(`div`, {
          className: `text-center max-w-3xl mx-auto mb-12 sm:mb-16`,
          children: [
            (0, O.jsxs)(`div`, {
              className: `inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 mb-3 shadow-2xs`,
              children: [
                (0, O.jsxs)(`svg`, {
                  className: `w-4 h-4 shrink-0`,
                  viewBox: `0 0 24 24`,
                  "aria-hidden": `true`,
                  children: [
                    (0, O.jsx)(`path`, {
                      fill: `#4285F4`,
                      d: `M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,
                    }),
                    (0, O.jsx)(`path`, {
                      fill: `#34A853`,
                      d: `M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,
                    }),
                    (0, O.jsx)(`path`, {
                      fill: `#FBBC05`,
                      d: `M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z`,
                    }),
                    (0, O.jsx)(`path`, {
                      fill: `#EA4335`,
                      d: `M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z`,
                    }),
                  ],
                }),
                (0, O.jsx)(`span`, { children: `Google Reviews` }),
              ],
            }),
            (0, O.jsx)(`h2`, {
              className: `text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight`,
              children: `Google Reviews`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-sm sm:text-base text-[#667085] mt-3`,
              children: `Verified ratings and customer reviews from students and parents on Google.`,
            }),
            (0, O.jsxs)(`div`, {
              className: `mt-4 flex items-center justify-center gap-2`,
              children: [
                (0, O.jsx)(`div`, {
                  className: `flex items-center text-amber-400`,
                  children: [...[, , , , ,]].map((e, t) =>
                    (0, O.jsx)(
                      ze,
                      { className: `w-4 h-4 fill-amber-400 text-amber-400` },
                      t,
                    ),
                  ),
                }),
                (0, O.jsx)(`span`, {
                  className: `text-xs font-bold text-[#101828]`,
                  children: `5.0`,
                }),
                (0, O.jsx)(`span`, {
                  className: `text-xs text-[#667085]`,
                  children: `· Verified on Google`,
                }),
              ],
            }),
          ],
        }),
        (0, O.jsx)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-3 gap-6`,
          children: e.map((e) =>
            (0, O.jsxs)(
              `div`,
              {
                className: `bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between`,
                children: [
                  (0, O.jsxs)(`div`, {
                    children: [
                      (0, O.jsxs)(`div`, {
                        className: `flex items-center justify-between mb-4`,
                        children: [
                          (0, O.jsxs)(`div`, {
                            className: `flex items-center gap-3`,
                            children: [
                              (0, O.jsx)(`div`, {
                                className: `w-10 h-10 rounded-full ${e.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-2xs shrink-0`,
                                children: e.initials,
                              }),
                              (0, O.jsxs)(`div`, {
                                children: [
                                  (0, O.jsx)(`h3`, {
                                    className: `text-sm font-bold text-[#101828] leading-tight`,
                                    children: e.name,
                                  }),
                                  (0, O.jsxs)(`div`, {
                                    className: `flex items-center gap-1 text-[11px] text-[#667085] mt-0.5`,
                                    children: [
                                      (0, O.jsx)(fe, {
                                        className: `w-3 h-3 text-[#12B76A]`,
                                      }),
                                      (0, O.jsx)(`span`, {
                                        children: `Google User`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, O.jsx)(`div`, {
                            className: `w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0`,
                            children: (0, O.jsxs)(`svg`, {
                              className: `w-3.5 h-3.5`,
                              viewBox: `0 0 24 24`,
                              "aria-hidden": `true`,
                              children: [
                                (0, O.jsx)(`path`, {
                                  fill: `#4285F4`,
                                  d: `M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,
                                }),
                                (0, O.jsx)(`path`, {
                                  fill: `#34A853`,
                                  d: `M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,
                                }),
                                (0, O.jsx)(`path`, {
                                  fill: `#FBBC05`,
                                  d: `M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z`,
                                }),
                                (0, O.jsx)(`path`, {
                                  fill: `#EA4335`,
                                  d: `M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z`,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, O.jsx)(`div`, {
                        className: `flex items-center gap-0.5 mb-3 text-amber-400`,
                        children: [...Array(e.rating)].map((e, t) =>
                          (0, O.jsx)(
                            ze,
                            {
                              className: `w-4 h-4 fill-amber-400 text-amber-400`,
                            },
                            t,
                          ),
                        ),
                      }),
                      (0, O.jsxs)(`p`, {
                        className: `text-sm text-[#344054] leading-relaxed font-normal`,
                        children: [`“`, e.reviewText, `”`],
                      }),
                    ],
                  }),
                  (0, O.jsxs)(`div`, {
                    className: `pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#667085]`,
                    children: [
                      (0, O.jsx)(`span`, { children: `Posted on Google` }),
                      (0, O.jsx)(`span`, {
                        className: `text-emerald-600 font-medium`,
                        children: `Verified Review`,
                      }),
                    ],
                  }),
                ],
              },
              e.name,
            ),
          ),
        }),
        (0, O.jsx)(`div`, {
          className: `mt-10 text-center`,
          children: (0, O.jsxs)(`a`, {
            href: d.googleBusinessProfileUrl || `#`,
            target: `_blank`,
            rel: `noopener noreferrer`,
            className: `inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-colors shadow-2xs cursor-pointer`,
            children: [
              (0, O.jsxs)(`svg`, {
                className: `w-4 h-4 shrink-0`,
                viewBox: `0 0 24 24`,
                "aria-hidden": `true`,
                children: [
                  (0, O.jsx)(`path`, {
                    fill: `#4285F4`,
                    d: `M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,
                  }),
                  (0, O.jsx)(`path`, {
                    fill: `#34A853`,
                    d: `M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,
                  }),
                  (0, O.jsx)(`path`, {
                    fill: `#FBBC05`,
                    d: `M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z`,
                  }),
                  (0, O.jsx)(`path`, {
                    fill: `#EA4335`,
                    d: `M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z`,
                  }),
                ],
              }),
              (0, O.jsx)(`span`, { children: `View all reviews on Google` }),
              (0, O.jsx)(Se, { className: `w-3.5 h-3.5 text-slate-400` }),
            ],
          }),
        }),
      ],
    }),
  });
}
export const dt = FAQ;
