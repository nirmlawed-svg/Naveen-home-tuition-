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

export function Boards({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  let t = {
    Mathematics: le,
    Science: re,
    Physics: qe,
    Chemistry: Te,
    Biology: be,
    English: ae,
    "Computer Science": _e,
    "Other subjects on request": me,
  };
  return (0, O.jsx)(`section`, {
    className: `py-16 sm:py-24 bg-white border-b border-slate-100`,
    children: (0, O.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
      children: [
        (0, O.jsxs)(`div`, {
          className: `text-center max-w-3xl mx-auto mb-12 sm:mb-16`,
          children: [
            (0, O.jsx)(`span`, {
              className: `text-xs font-semibold uppercase tracking-wider text-[#155EEF]`,
              children: `Curriculum Depth`,
            }),
            (0, O.jsx)(`h2`, {
              className: `text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-2`,
              children: `Subjects We Cover`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-base text-[#667085] mt-3`,
              children: `Experienced home tutors available across STEM disciplines, languages, and technical engineering subjects.`,
            }),
          ],
        }),
        (0, O.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5`,
          children: d.subjects.map((n) => {
            let r = t[n.name] || ae,
              i = n.name === `Other subjects on request`;
            return (0, O.jsxs)(
              `div`,
              {
                onClick: () => e(`/parents`),
                className: `p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${i ? `border-dashed border-blue-300 bg-blue-50/50 hover:bg-blue-50` : `border-slate-200 bg-white hover:border-blue-200 hover:shadow-xs`}`,
                children: [
                  (0, O.jsxs)(`div`, {
                    children: [
                      (0, O.jsx)(`div`, {
                        className: `w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${i ? `bg-blue-100 text-[#155EEF]` : `bg-slate-100 text-slate-700`}`,
                        children: (0, O.jsx)(r, { className: `w-5 h-5` }),
                      }),
                      (0, O.jsx)(`h3`, {
                        className: `text-base font-bold text-[#101828] mb-1`,
                        children: n.name,
                      }),
                      (0, O.jsx)(`p`, {
                        className: `text-xs text-[#667085] leading-relaxed`,
                        children: n.description,
                      }),
                    ],
                  }),
                  (0, O.jsxs)(`div`, {
                    className: `mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#155EEF] flex items-center justify-between`,
                    children: [
                      (0, O.jsx)(`span`, { children: `Inquire for Tutor` }),
                      (0, O.jsx)(`span`, { children: `→` }),
                    ],
                  }),
                ],
              },
              n.name,
            );
          }),
        }),
      ],
    }),
  });
};
export const ot = Boards;
