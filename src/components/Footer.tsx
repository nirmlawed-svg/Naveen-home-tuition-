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

export function Footer({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  let t = (t) => {
    (e(t), window.scrollTo({ top: 0, behavior: `smooth` }));
  };
  return (0, O.jsx)(`footer`, {
    className: `bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800`,
    children: (0, O.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
      children: [
        (0, O.jsxs)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800`,
          children: [
            (0, O.jsxs)(`div`, {
              className: `lg:col-span-4`,
              children: [
                (0, O.jsxs)(`div`, {
                  className: `flex items-center gap-2.5 mb-4`,
                  children: [
                    (0, O.jsx)(`img`, {
                      src: `/assets/logo-icon.svg`,
                      alt: `Naveen Home Tuitions Logo`,
                      className: `w-9 h-9 p-1 rounded-lg bg-white object-contain shrink-0`,
                    }),
                    (0, O.jsx)(`span`, {
                      className: `text-xl font-bold tracking-tight text-white`,
                      children: `Naveen Home Tuitions`,
                    }),
                  ],
                }),
                (0, O.jsx)(`p`, {
                  className: `text-sm text-slate-400 leading-relaxed mb-6`,
                  children: `Connecting parents and students with suitable home and online tutors across Hyderabad.`,
                }),
                (0, O.jsxs)(`div`, {
                  className: `space-y-2.5 text-xs text-slate-300`,
                  children: [
                    (0, O.jsxs)(`a`, {
                      href: p(),
                      className: `flex items-center gap-2 hover:text-white transition-colors`,
                      children: [
                        (0, O.jsx)(Ne, { className: `w-4 h-4 text-[#155EEF]` }),
                        (0, O.jsx)(`span`, { children: d.phoneDisplay }),
                      ],
                    }),
                    (0, O.jsxs)(`a`, {
                      href: f(),
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      className: `flex items-center gap-2 hover:text-green-400 transition-colors`,
                      children: [
                        (0, O.jsx)(E, { className: `w-4 h-4 text-[#12B76A]` }),
                        (0, O.jsxs)(`span`, {
                          children: [`WhatsApp: `, d.whatsappDisplay],
                        }),
                      ],
                    }),
                    (0, O.jsxs)(`a`, {
                      href: `mailto:${d.email}`,
                      className: `flex items-center gap-2 hover:text-white transition-colors`,
                      children: [
                        (0, O.jsx)(Oe, { className: `w-4 h-4 text-blue-400` }),
                        (0, O.jsx)(`span`, { children: d.email }),
                      ],
                    }),
                    (0, O.jsxs)(`div`, {
                      className: `flex items-center gap-2 text-slate-400`,
                      children: [
                        (0, O.jsx)(ke, { className: `w-4 h-4 text-amber-400` }),
                        (0, O.jsx)(`span`, {
                          children: `Hyderabad, Telangana, India`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, O.jsxs)(`div`, {
              className: `lg:col-span-2`,
              children: [
                (0, O.jsx)(`h2`, {
                  className: `text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4`,
                  children: `Navigation`,
                }),
                (0, O.jsxs)(`ul`, {
                  className: `space-y-2.5 text-sm`,
                  children: [
                    (0, O.jsx)(`li`, {
                      children: (0, O.jsx)(`button`, {
                        onClick: () => t(`/`),
                        className: `text-slate-400 hover:text-white transition-colors cursor-pointer`,
                        children: `Home`,
                      }),
                    }),
                    (0, O.jsx)(`li`, {
                      children: (0, O.jsx)(`button`, {
                        onClick: () => t(`/about`),
                        className: `text-slate-400 hover:text-white transition-colors cursor-pointer`,
                        children: `About Us`,
                      }),
                    }),
                    (0, O.jsx)(`li`, {
                      children: (0, O.jsx)(`button`, {
                        onClick: () => t(`/parents`),
                        className: `text-slate-400 hover:text-white transition-colors cursor-pointer`,
                        children: `For Parents`,
                      }),
                    }),
                    (0, O.jsx)(`li`, {
                      children: (0, O.jsx)(`button`, {
                        onClick: () => t(`/tutors`),
                        className: `text-slate-400 hover:text-white transition-colors cursor-pointer`,
                        children: `For Tutors`,
                      }),
                    }),
                    (0, O.jsx)(`li`, {
                      children: (0, O.jsx)(`button`, {
                        onClick: () => t(`/how-it-works`),
                        className: `text-slate-400 hover:text-white transition-colors cursor-pointer`,
                        children: `How It Works`,
                      }),
                    }),
                    (0, O.jsx)(`li`, {
                      children: (0, O.jsx)(`button`, {
                        onClick: () => t(`/contact`),
                        className: `text-slate-400 hover:text-white transition-colors cursor-pointer`,
                        children: `Contact Us`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, O.jsxs)(`div`, {
              className: `lg:col-span-3`,
              children: [
                (0, O.jsx)(`h2`, {
                  className: `text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4`,
                  children: `Hyderabad Service Areas`,
                }),
                (0, O.jsx)(`ul`, {
                  className: `grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-slate-400`,
                  children: d.serviceAreas.map((e) =>
                    (0, O.jsx)(
                      `li`,
                      {
                        children: (0, O.jsx)(`button`, {
                          onClick: () => t(`/parents`),
                          className: `hover:text-blue-300 transition-colors text-left truncate cursor-pointer`,
                          children: e.name,
                        }),
                      },
                      e.name,
                    ),
                  ),
                }),
                (0, O.jsx)(`p`, {
                  className: `text-[11px] text-slate-500 mt-3 italic`,
                  children: `Home tuition availability is subject to tutor matching in specific localities.`,
                }),
              ],
            }),
            (0, O.jsxs)(`div`, {
              className: `lg:col-span-3`,
              children: [
                (0, O.jsx)(`h2`, {
                  className: `text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4`,
                  children: `Direct Portals`,
                }),
                (0, O.jsxs)(`div`, {
                  className: `space-y-3`,
                  children: [
                    (0, O.jsxs)(`div`, {
                      className: `p-3 rounded-lg bg-slate-800/80 border border-slate-700/60`,
                      children: [
                        (0, O.jsx)(`div`, {
                          className: `text-xs font-medium text-white mb-1`,
                          children: `Need a Home Tutor?`,
                        }),
                        (0, O.jsx)(`p`, {
                          className: `text-[11px] text-slate-400 mb-2`,
                          children: `Share class, subject, and area to connect with suitable tutors.`,
                        }),
                        (0, O.jsx)(`button`, {
                          onClick: () => t(`/parents`),
                          className: `text-xs font-semibold text-[#155EEF] hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer`,
                          children: `Find a Tutor →`,
                        }),
                      ],
                    }),
                    (0, O.jsxs)(`div`, {
                      className: `p-3 rounded-lg bg-slate-800/80 border border-slate-700/60`,
                      children: [
                        (0, O.jsx)(`div`, {
                          className: `text-xs font-medium text-white mb-1`,
                          children: `Looking for Students?`,
                        }),
                        (0, O.jsx)(`p`, {
                          className: `text-[11px] text-slate-400 mb-2`,
                          children: `Register your profile to receive relevant tuition opportunities.`,
                        }),
                        (0, O.jsx)(`button`, {
                          onClick: () => t(`/tutors`),
                          className: `text-xs font-semibold text-[#12B76A] hover:text-green-400 transition-colors flex items-center gap-1 cursor-pointer`,
                          children: `Register as Tutor →`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, O.jsxs)(`div`, {
          className: `pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4`,
          children: [
            (0, O.jsx)(`div`, {
              children: `© 2026 Naveen Home Tuitions. All rights reserved.`,
            }),
            (0, O.jsxs)(`div`, {
              className: `flex items-center gap-4 text-xs`,
              children: [
                (0, O.jsx)(`span`, { children: `Hyderabad, Telangana` }),
                (0, O.jsx)(`span`, { children: `·` }),
                (0, O.jsx)(`span`, {
                  children: `Home & Online Tutoring Service`,
                }),
                (0, O.jsx)(`span`, { children: `·` }),
                (0, O.jsxs)(`a`, {
                  href: d.googleBusinessProfileUrl,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  className: `text-slate-400 hover:text-slate-200 transition-colors inline-flex items-center gap-1`,
                  children: [
                    (0, O.jsx)(`span`, { children: `Google Business Profile` }),
                    (0, O.jsx)(Se, { className: `w-3 h-3` }),
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
export const Xe = Footer;
