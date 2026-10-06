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

export function Process({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  return (0, O.jsx)(`section`, {
    className: `py-16 sm:py-24 bg-white border-b border-slate-100`,
    children: (0, O.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
      children: [
        (0, O.jsxs)(`div`, {
          className: `text-center max-w-2xl mx-auto mb-12 sm:mb-16`,
          children: [
            (0, O.jsx)(`span`, {
              className: `text-xs font-semibold uppercase tracking-wider text-[#155EEF]`,
              children: `Simple 4-Step Process`,
            }),
            (0, O.jsx)(`h2`, {
              className: `text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-2`,
              children: `How It Works`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-base text-[#667085] mt-3`,
              children: `A straightforward, parent-friendly connection model designed to get you the right teacher without friction.`,
            }),
          ],
        }),
        (0, O.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative`,
          children: [
            {
              number: `01`,
              title: `Submit Your Requirement`,
              description: `Tell us the class, subject, location, schedule and budget.`,
              icon: we,
            },
            {
              number: `02`,
              title: `We Find Suitable Tutors`,
              description: `We identify tutors according to the requirement and availability.`,
              icon: Ie,
            },
            {
              number: `03`,
              title: `Connect With the Tutor`,
              description: `Discuss requirements, timing, and teaching arrangements directly.`,
              icon: He,
            },
            {
              number: `04`,
              title: `Start Learning`,
              description: `Choose a suitable arrangement and begin classes at home or online.`,
              icon: Pe,
            },
          ].map((e, t) => {
            let n = e.icon;
            return (0, O.jsxs)(
              `div`,
              {
                className: `relative bg-[#F8FAFC] p-6 rounded-xl border border-slate-200/80 flex flex-col justify-between`,
                children: [
                  (0, O.jsxs)(`div`, {
                    children: [
                      (0, O.jsxs)(`div`, {
                        className: `flex items-center justify-between mb-4`,
                        children: [
                          (0, O.jsx)(`span`, {
                            className: `text-2xl font-extrabold text-[#155EEF] font-mono`,
                            children: e.number,
                          }),
                          (0, O.jsx)(`div`, {
                            className: `w-9 h-9 rounded-lg bg-blue-100 text-[#155EEF] flex items-center justify-center`,
                            children: (0, O.jsx)(n, { className: `w-4 h-4` }),
                          }),
                        ],
                      }),
                      (0, O.jsx)(`h3`, {
                        className: `text-base font-bold text-[#101828] mb-2`,
                        children: e.title,
                      }),
                      (0, O.jsx)(`p`, {
                        className: `text-xs sm:text-sm text-[#667085] leading-relaxed`,
                        children: e.description,
                      }),
                    ],
                  }),
                  t < 3 &&
                    (0, O.jsx)(`div`, {
                      className: `hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10`,
                      children: (0, O.jsx)(`div`, {
                        className: `w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-xs text-slate-400`,
                        children: `→`,
                      }),
                    }),
                ],
              },
              e.number,
            );
          }),
        }),
        (0, O.jsxs)(`div`, {
          className: `mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4`,
          children: [
            (0, O.jsx)(`button`, {
              onClick: () => e(`/parents`),
              className: `px-6 py-3 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white font-semibold text-sm transition-colors cursor-pointer shadow-xs active:scale-[0.98]`,
              children: `Find a Tutor`,
            }),
            (0, O.jsxs)(`button`, {
              onClick: () => e(`/how-it-works`),
              className: `inline-flex items-center gap-1.5 text-sm font-semibold text-[#667085] hover:text-[#101828] transition-colors cursor-pointer`,
              children: [
                (0, O.jsx)(`span`, {
                  children: `Learn more about tutor and parent workflows`,
                }),
                (0, O.jsx)(S, { className: `w-4 h-4` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
export const ct = Process;
