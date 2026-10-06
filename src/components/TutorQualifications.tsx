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

export function TutorQualifications({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  return (0, O.jsx)(`section`, {
    className: `py-16 sm:py-24 bg-[#F8FAFC]`,
    children: (0, O.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
      children: [
        (0, O.jsxs)(`div`, {
          className: `text-center max-w-3xl mx-auto mb-12 sm:mb-16`,
          children: [
            (0, O.jsx)(`span`, {
              className: `text-xs font-semibold uppercase tracking-wider text-[#155EEF]`,
              children: `Local Presence`,
            }),
            (0, O.jsx)(`h2`, {
              className: `text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-2`,
              children: `Home Tuition Across Hyderabad`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-base text-[#667085] mt-3`,
              children: `Connecting parents with experienced tutors located near key residential neighborhoods and educational corridors in Hyderabad.`,
            }),
          ],
        }),
        (0, O.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`,
          children: d.serviceAreas.map((t) =>
            (0, O.jsxs)(
              `div`,
              {
                onClick: () => e(`/parents`),
                className: `bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-200 cursor-pointer group`,
                children: [
                  (0, O.jsxs)(`div`, {
                    className: `flex items-start justify-between mb-3`,
                    children: [
                      (0, O.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, O.jsx)(`div`, {
                            className: `w-8 h-8 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center group-hover:scale-105 transition-transform`,
                            children: (0, O.jsx)(ke, { className: `w-4 h-4` }),
                          }),
                          (0, O.jsx)(`h3`, {
                            className: `text-lg font-bold text-[#101828]`,
                            children: t.name,
                          }),
                        ],
                      }),
                      (0, O.jsx)(`span`, {
                        className: `text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded`,
                        children: `Hyderabad`,
                      }),
                    ],
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-xs text-[#667085] leading-relaxed mb-4`,
                    children: t.description,
                  }),
                  (0, O.jsxs)(`div`, {
                    className: `flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100`,
                    children: [
                      (0, O.jsx)(`span`, {
                        className: `text-[11px] font-semibold text-slate-600`,
                        children: `Frequent:`,
                      }),
                      t.popularSubjects.map((e) =>
                        (0, O.jsx)(
                          `span`,
                          {
                            className: `text-[11px] text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded-md`,
                            children: e,
                          },
                          e,
                        ),
                      ),
                    ],
                  }),
                ],
              },
              t.name,
            ),
          ),
        }),
        (0, O.jsxs)(`div`, {
          className: `mt-10 p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-[#667085] flex flex-col sm:flex-row items-center justify-between gap-3`,
          children: [
            (0, O.jsxs)(`div`, {
              className: `flex items-center gap-2 text-slate-700`,
              children: [
                (0, O.jsx)(je, {
                  className: `w-4 h-4 text-[#155EEF] shrink-0`,
                }),
                (0, O.jsx)(`span`, {
                  children: `Tutor travel availability varies by distance, subject specialization, and schedule. Online tuition is also available anywhere across Hyderabad.`,
                }),
              ],
            }),
            (0, O.jsx)(`button`, {
              onClick: () => e(`/parents`),
              className: `text-xs font-semibold text-[#155EEF] hover:underline whitespace-nowrap cursor-pointer`,
              children: `Check Tutor in Your Area →`,
            }),
          ],
        }),
      ],
    }),
  });
};
export const lt = TutorQualifications;
