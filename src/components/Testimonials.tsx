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

export function Testimonials() {
  return (0, O.jsx)(`section`, {
    className: `py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-100`,
    children: (0, O.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
      children: [
        (0, O.jsxs)(`div`, {
          className: `text-center max-w-3xl mx-auto mb-12 sm:mb-16`,
          children: [
            (0, O.jsx)(`span`, {
              className: `text-xs font-semibold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full`,
              children: `Real Community Experiences`,
            }),
            (0, O.jsx)(`h2`, {
              className: `text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-3`,
              children: `What Parents & Tutors Say`,
            }),
            (0, O.jsx)(`p`, {
              className: `text-sm sm:text-base text-[#667085] mt-2.5`,
              children: `Hear from parents and educators across Hyderabad about their one-on-one learning and teaching experiences.`,
            }),
          ],
        }),
        (0, O.jsx)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`,
          children: [
            {
              id: `testimonial-1`,
              type: `Parent Review`,
              role: `Parent`,
              roleIcon: We,
              initials: `SR`,
              avatarBg: `bg-blue-600 text-white`,
              badgeBg: `bg-blue-50 text-[#155EEF] border border-blue-100`,
              text: `We were looking for a patient Mathematics tutor for our son in Class 10 CBSE. Naveen Home Tuitions promptly connected us with a teacher who lives nearby in Attapur. Within two months, his confidence in Trigonometry and Geometry improved noticeably. Very punctual and dedicated.`,
              author: `Srinivas Rao`,
              subtitle: `Parent of Class 10 CBSE Student`,
              location: `Attapur, Hyderabad`,
            },
            {
              id: `testimonial-2`,
              type: `Tutor Review`,
              role: `Tutor`,
              roleIcon: Ee,
              initials: `PS`,
              avatarBg: `bg-emerald-600 text-white`,
              badgeBg: `bg-emerald-50 text-[#12B76A] border border-emerald-100`,
              text: `Joining this tutor network helped me connect with sincere students right within Mehdipatnam and Tolichowki. The student requirements shared are always specific regarding syllabus and timings, making teaching convenient without hectic daily travel.`,
              author: `Priyanka Sharma`,
              subtitle: `MSc Physics · High School Tutor`,
              location: `Mehdipatnam, Hyderabad`,
            },
            {
              id: `testimonial-3`,
              type: `Parent Review`,
              role: `Parent`,
              roleIcon: We,
              initials: `AK`,
              avatarBg: `bg-blue-600 text-white`,
              badgeBg: `bg-blue-50 text-[#155EEF] border border-blue-100`,
              text: `Finding a tutor who thoroughly understands the ICSE Science and Maths curriculum was difficult until we reached out. The teacher conducts regular chapter-end assessments and keeps us updated on weekly progress. Truly personalized attention at home.`,
              author: `Anitha Kulkarni`,
              subtitle: `Parent of Class 8 ICSE Student`,
              location: `Tolichowki, Hyderabad`,
            },
            {
              id: `testimonial-4`,
              type: `Tutor Review`,
              role: `Tutor`,
              roleIcon: Ee,
              initials: `MK`,
              avatarBg: `bg-emerald-600 text-white`,
              badgeBg: `bg-emerald-50 text-[#12B76A] border border-emerald-100`,
              text: `As an engineering graduate passionate about teaching, Naveen Home Tuitions helped me connect with engineering students needing guidance in Engineering Mathematics (M1 & M2). Coordination over WhatsApp is seamless and respectful.`,
              author: `Mohammed Kareem`,
              subtitle: `BTech · Engineering Maths Tutor`,
              location: `Langer House, Hyderabad`,
            },
          ].map((e) => {
            let t = e.roleIcon;
            return (0, O.jsxs)(
              `div`,
              {
                className: `bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between relative group`,
                children: [
                  (0, O.jsxs)(`div`, {
                    children: [
                      (0, O.jsxs)(`div`, {
                        className: `flex items-center justify-between mb-4`,
                        children: [
                          (0, O.jsxs)(`span`, {
                            className: `text-[11px] font-semibold px-2.5 py-1 rounded-full ${e.badgeBg} flex items-center gap-1.5`,
                            children: [
                              (0, O.jsx)(t, { className: `w-3.5 h-3.5` }),
                              (0, O.jsx)(`span`, { children: e.type }),
                            ],
                          }),
                          (0, O.jsx)(`div`, {
                            className: `w-8 h-8 rounded-full bg-slate-50 text-slate-300 group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors flex items-center justify-center`,
                            children: (0, O.jsx)(Fe, { className: `w-4 h-4` }),
                          }),
                        ],
                      }),
                      (0, O.jsxs)(`p`, {
                        className: `text-xs sm:text-sm text-[#475467] leading-relaxed mb-6 font-normal`,
                        children: [`“`, e.text, `”`],
                      }),
                    ],
                  }),
                  (0, O.jsxs)(`div`, {
                    className: `pt-4 border-t border-slate-100 flex items-center gap-3`,
                    children: [
                      (0, O.jsx)(`div`, {
                        className: `w-10 h-10 rounded-full ${e.avatarBg} flex items-center justify-center font-bold text-xs shrink-0 shadow-xs`,
                        children: e.initials,
                      }),
                      (0, O.jsxs)(`div`, {
                        className: `min-w-0`,
                        children: [
                          (0, O.jsx)(`div`, {
                            className: `text-sm font-bold text-[#101828] truncate`,
                            children: e.author,
                          }),
                          (0, O.jsx)(`div`, {
                            className: `text-[11px] text-[#667085] truncate`,
                            children: e.subtitle,
                          }),
                          (0, O.jsxs)(`div`, {
                            className: `text-[11px] text-slate-500 flex items-center gap-1 mt-0.5`,
                            children: [
                              (0, O.jsx)(ke, {
                                className: `w-3 h-3 text-amber-500 shrink-0`,
                              }),
                              (0, O.jsx)(`span`, {
                                className: `truncate`,
                                children: e.location,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              e.id,
            );
          }),
        }),
        (0, O.jsx)(`div`, {
          className: `mt-10 text-center text-xs text-slate-500 max-w-xl mx-auto`,
          children: `Tutor connections are tailored to student syllabus, convenient time slots, and localized availability across Hyderabad.`,
        }),
      ],
    }),
  });
};
export const ut = Testimonials;
