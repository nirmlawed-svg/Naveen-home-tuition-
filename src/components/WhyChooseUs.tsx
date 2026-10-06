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

export function WhyChooseUs() {
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
              children: `Dedicated Tutor Connection`,
            }),
            (0, O.jsx)(`h2`, {
              className: `text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-2`,
              children: `Why Choose Naveen Home Tuitions?`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-base text-[#667085] mt-3`,
              children: `We focus on matching student requirements with qualified, verified tutors who understand local syllabi and individualized pacing.`,
            }),
          ],
        }),
        (0, O.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`,
          children: [
            {
              title: `Verified & Experienced Tutors`,
              description: `Connect with tutors based on requirements and tutor profile information.`,
              icon: Le,
              color: `text-[#155EEF]`,
              bg: `bg-blue-50`,
            },
            {
              title: `Home & Online Tuition`,
              description: `Choose between convenient home tuition and online learning.`,
              icon: D,
              color: `text-[#12B76A]`,
              bg: `bg-emerald-50`,
            },
            {
              title: `Personalized Learning`,
              description: `Find tutoring options based on the student's class, subject and learning requirements.`,
              icon: He,
              color: `text-[#155EEF]`,
              bg: `bg-blue-50`,
            },
            {
              title: `Tutors Across Hyderabad`,
              description: `Access tutoring options across multiple Hyderabad areas.`,
              icon: ke,
              color: `text-[#F79009]`,
              bg: `bg-amber-50`,
            },
            {
              title: `Multiple Classes & Subjects`,
              description: `Support for Classes 1–12, BTech and a wide range of subjects and boards.`,
              icon: se,
              color: `text-[#155EEF]`,
              bg: `bg-blue-50`,
            },
            {
              title: `Easy WhatsApp Connection`,
              description: `Submit your requirement and connect with Naveen Home Tuitions directly through WhatsApp.`,
              icon: E,
              color: `text-[#12B76A]`,
              bg: `bg-emerald-50`,
            },
          ].map((e) => {
            let t = e.icon;
            return (0, O.jsx)(
              `div`,
              {
                className: `p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200 flex flex-col justify-between`,
                children: (0, O.jsxs)(`div`, {
                  children: [
                    (0, O.jsx)(`div`, {
                      className: `w-12 h-12 rounded-xl ${e.bg} ${e.color} flex items-center justify-center mb-5`,
                      children: (0, O.jsx)(t, { className: `w-6 h-6` }),
                    }),
                    (0, O.jsx)(`h3`, {
                      className: `text-lg font-bold text-[#101828] mb-2`,
                      children: e.title,
                    }),
                    (0, O.jsx)(`p`, {
                      className: `text-sm text-[#667085] leading-relaxed`,
                      children: e.description,
                    }),
                  ],
                }),
              },
              e.title,
            );
          }),
        }),
      ],
    }),
  });
};
export const rt = WhyChooseUs;
