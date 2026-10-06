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

export function FloatingWhatsApp() {
  let e = f(
      `Hello Naveen Home Tuitions, I would like to inquire about home/online tuitions in Hyderabad.`,
    ),
    t = p();
  return (0, O.jsxs)(`div`, {
    className: `fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto`,
    role: `region`,
    "aria-label": `Quick Contact Actions`,
    children: [
      (0, O.jsxs)(`a`, {
        href: t,
        "aria-label": `Call Naveen Home Tuitions at +91 95052 03418`,
        className: `flex items-center gap-2 bg-[#155EEF] hover:bg-[#104ec6] text-white p-3 sm:py-2.5 sm:px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-150 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:ring-offset-2`,
        children: [
          (0, O.jsx)(Ne, {
            className: `w-5 h-5 text-white shrink-0 group-hover:scale-110 transition-transform`,
          }),
          (0, O.jsx)(`span`, {
            className: `text-xs font-semibold tracking-wide hidden sm:inline whitespace-nowrap`,
            children: `Call Now`,
          }),
        ],
      }),
      (0, O.jsxs)(`a`, {
        href: e,
        target: `_blank`,
        rel: `noopener noreferrer`,
        "aria-label": `Chat with Naveen Home Tuitions on WhatsApp at +91 95052 03418`,
        className: `flex items-center gap-2 bg-[#12B76A] hover:bg-[#0e9657] text-white p-3 sm:py-2.5 sm:px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-150 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#12B76A] focus:ring-offset-2`,
        children: [
          (0, O.jsx)(E, {
            className: `w-5 h-5 fill-white text-[#12B76A] shrink-0 group-hover:scale-110 transition-transform`,
          }),
          (0, O.jsx)(`span`, {
            className: `text-xs font-semibold tracking-wide hidden sm:inline whitespace-nowrap`,
            children: `WhatsApp Us`,
          }),
        ],
      }),
    ],
  });
};
export const Ze = FloatingWhatsApp;
