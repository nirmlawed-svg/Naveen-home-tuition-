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

export function Navbar({ currentRoute: e, onNavigate: t }: { currentRoute: string; onNavigate: (route: string) => void }) {
  let [n, r] = (0, l.useState)(!1),
    i = [
      { label: `Home`, route: `/` },
      { label: `About Us`, route: `/about` },
      { label: `For Parents`, route: `/parents` },
      { label: `For Tutors`, route: `/tutors` },
      { label: `How It Works`, route: `/how-it-works` },
      { label: `Contact`, route: `/contact` },
    ],
    a = (e) => {
      (t(e), r(!1), window.scrollTo({ top: 0, behavior: `smooth` }));
    };
  return (0, O.jsxs)(`header`, {
    className: `sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors`,
    children: [
      (0, O.jsx)(`div`, {
        className: `bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block`,
        children: (0, O.jsxs)(`div`, {
          className: `max-w-7xl mx-auto flex items-center justify-between`,
          children: [
            (0, O.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, O.jsx)(`span`, {
                  className: `inline-block w-2 h-2 rounded-full bg-[#12B76A]`,
                }),
                (0, O.jsx)(`span`, {
                  children: `Serving Hyderabad: Attapur · Mehdipatnam · Tolichowki · Langer House · Rajendranagar & nearby`,
                }),
              ],
            }),
            (0, O.jsxs)(`div`, {
              className: `flex items-center gap-4 text-xs font-medium`,
              children: [
                (0, O.jsxs)(`a`, {
                  href: p(),
                  className: `flex items-center gap-1.5 text-white hover:text-blue-300 transition-colors`,
                  "aria-label": `Call Naveen Home Tuitions`,
                  children: [
                    (0, O.jsx)(Ne, { className: `w-3.5 h-3.5 text-[#155EEF]` }),
                    (0, O.jsx)(`span`, { children: d.phoneDisplay }),
                  ],
                }),
                (0, O.jsx)(`span`, {
                  className: `text-slate-600`,
                  children: `|`,
                }),
                (0, O.jsxs)(`a`, {
                  href: f(),
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  className: `flex items-center gap-1.5 text-white hover:text-green-300 transition-colors`,
                  "aria-label": `Chat on WhatsApp`,
                  children: [
                    (0, O.jsx)(E, { className: `w-3.5 h-3.5 text-[#12B76A]` }),
                    (0, O.jsx)(`span`, { children: `WhatsApp Inquiries` }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, O.jsx)(`div`, {
        className: `max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8`,
        children: (0, O.jsxs)(`div`, {
          className: `flex items-center justify-between h-20 sm:h-20 lg:h-18`,
          children: [
            (0, O.jsxs)(`button`, {
              onClick: () => a(`/`),
              className: `flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group cursor-pointer shrink-0`,
              "aria-label": `Naveen Home Tuitions Home`,
              children: [
                (0, O.jsx)(`img`, {
                  src: `/assets/logo-icon.svg`,
                  alt: `Naveen Home Tuitions Logo`,
                  className: `w-11 h-11 sm:w-12 sm:h-12 object-contain shrink-0 group-hover:scale-105 transition-transform`,
                }),
                (0, O.jsxs)(`div`, {
                  className: `min-w-0`,
                  children: [
                    (0, O.jsx)(`span`, {
                      className: `text-lg sm:text-xl font-bold tracking-tight text-[#101828] group-hover:text-[#155EEF] transition-colors block leading-tight`,
                      children: `Naveen Home Tuitions`,
                    }),
                    (0, O.jsx)(`span`, {
                      className: `text-xs sm:text-[13px] font-medium text-[#667085] mt-0.5 block leading-none`,
                      children: `Hyderabad · Home & Online Tutors`,
                    }),
                  ],
                }),
              ],
            }),
            (0, O.jsx)(`nav`, {
              className: `hidden lg:flex items-center gap-7`,
              children: i.map((t) => {
                let n = e === t.route;
                return (0, O.jsxs)(
                  `button`,
                  {
                    onClick: () => a(t.route),
                    className: `text-sm font-medium transition-colors cursor-pointer relative py-1 ${n ? `text-[#155EEF] font-semibold` : `text-[#667085] hover:text-[#101828]`}`,
                    children: [
                      t.label,
                      n &&
                        (0, O.jsx)(`span`, {
                          className: `absolute bottom-0 left-0 right-0 h-0.5 bg-[#155EEF] rounded-full`,
                        }),
                    ],
                  },
                  t.route,
                );
              }),
            }),
            (0, O.jsxs)(`div`, {
              className: `hidden sm:flex items-center gap-3`,
              children: [
                (0, O.jsx)(`button`, {
                  onClick: () => a(`/parents`),
                  className: `px-4 py-2.5 text-xs font-semibold text-white bg-[#155EEF] hover:bg-[#104ec6] rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98]`,
                  children: `Find a Tutor`,
                }),
                (0, O.jsx)(`button`, {
                  onClick: () => a(`/tutors`),
                  className: `px-4 py-2.5 text-xs font-semibold text-[#12B76A] border border-[#12B76A] hover:bg-[#ecfdf3] rounded-lg transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98]`,
                  children: `Register as Tutor`,
                }),
              ],
            }),
            (0, O.jsxs)(`div`, {
              className: `flex items-center justify-end gap-1.5 sm:gap-2 lg:hidden shrink-0 ml-auto`,
              children: [
                (0, O.jsx)(`button`, {
                  onClick: () => a(`/parents`),
                  className: `ml-auto px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#155EEF] hover:bg-[#104ec6] rounded-lg shadow-xs sm:hidden whitespace-nowrap active:scale-[0.98] transition-colors`,
                  children: `Find Tutor`,
                }),
                (0, O.jsx)(`button`, {
                  onClick: () => r(!n),
                  className: `p-2 sm:p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 -mr-1`,
                  "aria-expanded": n,
                  "aria-label": `Toggle Navigation Menu`,
                  children: n
                    ? (0, O.jsx)(Ke, { className: `w-6 h-6 sm:w-7 sm:h-7` })
                    : (0, O.jsx)(Ae, { className: `w-6 h-6 sm:w-7 sm:h-7` }),
                }),
              ],
            }),
          ],
        }),
      }),
      n &&
        (0, O.jsxs)(`div`, {
          className: `lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200`,
          children: [
            (0, O.jsx)(`div`, {
              className: `flex flex-col space-y-1`,
              children: i.map((t) => {
                let n = e === t.route;
                return (0, O.jsxs)(
                  `button`,
                  {
                    onClick: () => a(t.route),
                    className: `flex items-center justify-between px-4 py-3 rounded-xl text-base sm:text-lg font-medium text-left transition-colors ${n ? `bg-blue-50 text-[#155EEF] font-semibold` : `text-[#101828] hover:bg-slate-50`}`,
                    children: [
                      (0, O.jsx)(`span`, { children: t.label }),
                      n &&
                        (0, O.jsx)(`span`, {
                          className: `w-2 h-2 rounded-full bg-[#155EEF]`,
                        }),
                    ],
                  },
                  t.route,
                );
              }),
            }),
            (0, O.jsxs)(`div`, {
              className: `pt-4 mt-3 border-t border-slate-100 grid grid-cols-2 gap-2.5`,
              children: [
                (0, O.jsx)(`button`, {
                  onClick: () => a(`/parents`),
                  className: `w-full py-3 px-3.5 text-center text-sm font-semibold text-white bg-[#155EEF] hover:bg-[#104ec6] rounded-xl shadow-xs active:scale-[0.98] transition-all`,
                  children: `Find a Tutor`,
                }),
                (0, O.jsx)(`button`, {
                  onClick: () => a(`/tutors`),
                  className: `w-full py-3 px-3.5 text-center text-sm font-semibold text-[#12B76A] border border-[#12B76A] hover:bg-[#ecfdf3] rounded-xl active:scale-[0.98] transition-all`,
                  children: `Register as Tutor`,
                }),
              ],
            }),
            (0, O.jsxs)(`div`, {
              className: `mt-4 pt-3 border-t border-slate-100 flex items-center justify-around text-xs sm:text-sm text-slate-700`,
              children: [
                (0, O.jsxs)(`a`, {
                  href: p(),
                  className: `flex items-center gap-2 text-slate-800 font-semibold py-1.5 px-3 rounded-lg hover:bg-slate-100 transition-colors`,
                  children: [
                    (0, O.jsx)(Ne, { className: `w-4 h-4 text-[#155EEF]` }),
                    (0, O.jsx)(`span`, { children: `Call Us` }),
                  ],
                }),
                (0, O.jsx)(`span`, {
                  className: `text-slate-300`,
                  children: `·`,
                }),
                (0, O.jsxs)(`a`, {
                  href: f(),
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  className: `flex items-center gap-2 text-[#12B76A] font-semibold py-1.5 px-3 rounded-lg hover:bg-emerald-50 transition-colors`,
                  children: [
                    (0, O.jsx)(E, { className: `w-4 h-4 text-[#12B76A]` }),
                    (0, O.jsx)(`span`, { children: `WhatsApp` }),
                  ],
                }),
              ],
            }),
          ],
        }),
    ],
  });
};
export const Ye = Navbar;
