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

export function BottomCTA({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  return (0, O.jsxs)(`section`, {
    className: `py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden`,
    children: [
      (0, O.jsx)(`div`, {
        className: `absolute inset-0 bg-[radial-gradient(#155EEF_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none`,
      }),
      (0, O.jsxs)(`div`, {
        className: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center`,
        children: [
          (0, O.jsx)(`span`, {
            className: `inline-block text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3 bg-blue-900/50 border border-blue-700/50 px-3 py-1 rounded-full`,
            children: `Get Started Today`,
          }),
          (0, O.jsx)(`h2`, {
            className: `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4`,
            children: `Looking for a Tutor?`,
          }),
          (0, O.jsx)(`p`, {
            className: `text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal`,
            children: `Tell us what you need, and we'll help you find suitable tutoring options.`,
          }),
          (0, O.jsxs)(`div`, {
            className: `flex flex-col sm:flex-row items-center justify-center gap-4`,
            children: [
              (0, O.jsxs)(`button`, {
                onClick: () => e(`/parents`),
                className: `w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white font-semibold text-base shadow-md transition-all active:scale-[0.98] cursor-pointer`,
                children: [
                  (0, O.jsx)(`span`, { children: `Submit Your Requirement` }),
                  (0, O.jsx)(S, { className: `w-5 h-5` }),
                ],
              }),
              (0, O.jsx)(ft, {
                label: `WhatsApp Us`,
                customMessage: `Hello Naveen Home Tuitions, I am looking for a tutor in Hyderabad. Please help me with the options.`,
                className: `w-full sm:w-auto px-8 py-4 text-base`,
              }),
            ],
          }),
          (0, O.jsxs)(`div`, {
            className: `mt-8 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6`,
            children: [
              (0, O.jsxs)(`a`, {
                href: p(),
                className: `flex items-center gap-2 hover:text-white transition-colors`,
                children: [
                  (0, O.jsx)(Me, { className: `w-4 h-4 text-blue-400` }),
                  (0, O.jsxs)(`span`, {
                    children: [`Direct Call: `, d.phoneDisplay],
                  }),
                ],
              }),
              (0, O.jsx)(`span`, { children: `·` }),
              (0, O.jsx)(`span`, { children: `Response within working hours` }),
              (0, O.jsx)(`span`, { children: `·` }),
              (0, O.jsx)(`span`, {
                children: `No advance registration fee for parent requirement submission`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export const pt = BottomCTA;
