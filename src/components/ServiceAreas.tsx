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

export function ServiceAreas() {
  return (0, O.jsx)(`section`, {
    className: `py-16 sm:py-24 bg-white border-b border-slate-100`,
    children: (0, O.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
      children: [
        (0, O.jsxs)(`div`, {
          className: `max-w-3xl mx-auto text-center mb-12 sm:mb-16`,
          children: [
            (0, O.jsxs)(`span`, {
              className: `inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3`,
              children: [
                (0, O.jsx)(Re, { className: `w-3.5 h-3.5` }),
                (0, O.jsx)(`span`, { children: `About Us` }),
              ],
            }),
            (0, O.jsx)(`h2`, {
              className: `text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight`,
              children: `About Naveen Home Tuitions`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-base sm:text-lg text-[#667085] mt-4 leading-relaxed font-normal`,
              children: `Naveen Home Tuitions is dedicated to providing quality home and online tutoring across Hyderabad. We focus on clear explanations, easy-to-understand teaching, individual attention, and helping students improve their academic performance with confidence.`,
            }),
          ],
        }),
        (0, O.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`,
          children: [
            {
              title: `Clear Explanations`,
              description: `Breaking down complex syllabus topics into simple, step-by-step logic so students grasp foundational concepts with complete clarity.`,
              icon: De,
              color: `text-[#155EEF]`,
              bg: `bg-blue-50`,
            },
            {
              title: `Easy-to-Understand Teaching`,
              description: `Engaging, approachable teaching methods designed to make learning intuitive, relatable, and enjoyable for students at every level.`,
              icon: pe,
              color: `text-[#12B76A]`,
              bg: `bg-emerald-50`,
            },
            {
              title: `Individual Attention`,
              description: `Focused one-on-one guidance where students can ask questions freely without hesitation, receiving patient and personalized support.`,
              icon: He,
              color: `text-[#155EEF]`,
              bg: `bg-blue-50`,
            },
            {
              title: `Academic Performance Improvement`,
              description: `Steady reinforcement of fundamentals and regular practice aimed at building lasting subject confidence and improving school performance.`,
              icon: Ve,
              color: `text-[#F79009]`,
              bg: `bg-amber-50`,
            },
          ].map((e) => {
            let t = e.icon;
            return (0, O.jsx)(
              `div`,
              {
                className: `p-6 sm:p-7 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200 flex flex-col justify-between`,
                children: (0, O.jsxs)(`div`, {
                  children: [
                    (0, O.jsx)(`div`, {
                      className: `w-12 h-12 rounded-xl ${e.bg} ${e.color} flex items-center justify-center mb-5`,
                      children: (0, O.jsx)(t, { className: `w-6 h-6` }),
                    }),
                    (0, O.jsx)(`h3`, {
                      className: `text-lg font-bold text-[#101828] mb-2.5`,
                      children: e.title,
                    }),
                    (0, O.jsx)(`p`, {
                      className: `text-xs sm:text-sm text-[#667085] leading-relaxed`,
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
export const it = ServiceAreas;
