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

export function Subjects({ onNavigate: e }: { onNavigate: (route: string) => void }) {
  let t = [oe, ve, C, ce, ye];
  return (0, O.jsx)(`section`, {
    className: `py-16 sm:py-24 bg-[#F8FAFC]`,
    children: (0, O.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
      children: [
        (0, O.jsxs)(`div`, {
          className: `flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16`,
          children: [
            (0, O.jsxs)(`div`, {
              className: `max-w-2xl`,
              children: [
                (0, O.jsx)(`span`, {
                  className: `text-xs font-semibold uppercase tracking-wider text-[#155EEF]`,
                  children: `Academic Spectrum`,
                }),
                (0, O.jsx)(`h2`, {
                  className: `text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-2`,
                  children: `Tuition for Every Learning Stage`,
                }),
                (0, O.jsx)(`p`, {
                  className: `text-base text-[#667085] mt-3`,
                  children: `Personalized one-on-one attention adapted to each student's current academic level and target milestones.`,
                }),
              ],
            }),
            (0, O.jsxs)(`button`, {
              onClick: () => e(`/parents`),
              className: `mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#155EEF] hover:text-[#104ec6] transition-colors cursor-pointer`,
              children: [
                (0, O.jsx)(`span`, {
                  children: `Request Tutor for Your Class`,
                }),
                (0, O.jsx)(S, { className: `w-4 h-4` }),
              ],
            }),
          ],
        }),
        (0, O.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5`,
          children: d.learningStages.map((n, r) => {
            let i = t[r % t.length];
            return (0, O.jsxs)(
              `div`,
              {
                className: `bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between`,
                children: [
                  (0, O.jsxs)(`div`, {
                    children: [
                      (0, O.jsx)(`div`, {
                        className: `w-11 h-11 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center mb-4`,
                        children: (0, O.jsx)(i, { className: `w-5 h-5` }),
                      }),
                      (0, O.jsx)(`h3`, {
                        className: `text-lg font-bold text-[#101828]`,
                        children: n.title,
                      }),
                      (0, O.jsx)(`div`, {
                        className: `text-xs font-medium text-[#155EEF] mb-3`,
                        children: n.subtitle,
                      }),
                      (0, O.jsx)(`p`, {
                        className: `text-xs text-[#667085] leading-relaxed`,
                        children: n.details,
                      }),
                    ],
                  }),
                  (0, O.jsx)(`div`, {
                    className: `pt-5 mt-4 border-t border-slate-100`,
                    children: (0, O.jsxs)(`button`, {
                      onClick: () => e(`/parents`),
                      className: `text-xs font-semibold text-[#155EEF] hover:underline flex items-center gap-1 cursor-pointer`,
                      children: [
                        (0, O.jsx)(`span`, { children: `Inquire Now` }),
                        (0, O.jsx)(`span`, { children: `→` }),
                      ],
                    }),
                  }),
                ],
              },
              n.title,
            );
          }),
        }),
      ],
    }),
  });
};
export const at = Subjects;
