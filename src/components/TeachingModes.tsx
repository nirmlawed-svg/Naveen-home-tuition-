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

export function TeachingModes({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  return (0, O.jsx)(`section`, {
    className: `py-14 sm:py-20 bg-[#F8FAFC]`,
    children: (0, O.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
      children: [
        (0, O.jsxs)(`div`, {
          className: `text-center max-w-2xl mx-auto mb-10`,
          children: [
            (0, O.jsx)(`span`, {
              className: `text-xs font-semibold uppercase tracking-wider text-[#155EEF]`,
              children: `Syllabus Alignment`,
            }),
            (0, O.jsx)(`h2`, {
              className: `text-2xl sm:text-3xl font-bold text-[#101828] mt-1.5`,
              children: `Boards We Support`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-sm sm:text-base text-[#667085] mt-2`,
              children: `Our tutors are versed in school syllabi, textbook problems, and evaluation patterns across state, national, and international curricula.`,
            }),
          ],
        }),
        (0, O.jsx)(`div`, {
          className: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4`,
          children: d.boards.map((t) =>
            (0, O.jsxs)(
              `div`,
              {
                onClick: () => e(`/parents`),
                className: `p-5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-200 text-center cursor-pointer group`,
                children: [
                  (0, O.jsx)(`div`, {
                    className: `w-10 h-10 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform`,
                    children: (0, O.jsx)(T, { className: `w-5 h-5` }),
                  }),
                  (0, O.jsx)(`h3`, {
                    className: `text-lg font-bold text-[#101828]`,
                    children: t.name,
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-xs text-[#667085] mt-1 line-clamp-2`,
                    children: t.fullName,
                  }),
                ],
              },
              t.name,
            ),
          ),
        }),
        (0, O.jsx)(`div`, {
          className: `mt-8 text-center text-xs text-[#667085] max-w-xl mx-auto italic`,
          children: `* Note: Naveen Home Tuitions connects private independent tutors and students based on syllabus requirements. We do not claim any official affiliation with CBSE, CISCE, State Boards, or Cambridge International.`,
        }),
      ],
    }),
  });
};
export const st = TeachingModes;
