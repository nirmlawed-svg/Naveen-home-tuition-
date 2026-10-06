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

export function WhatsAppButton({
  label = "WhatsApp Us",
  customMessage,
  variant = "primary",
  className = "",
}: {
  label?: string;
  customMessage?: string;
  variant?: "primary" | "outline" | "floating";
  className?: string;
}) {
  let i = f(customMessage);
  return variant === "floating"
    ? (0, O.jsxs)("a", {
        href: i,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Chat with Naveen Home Tuitions on WhatsApp",
        className: `fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#12B76A] hover:bg-[#0e9657] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#12B76A] focus:ring-offset-2 ${className}`,
        children: [
          (0, O.jsx)(E, {
            className: "w-5 h-5 fill-white text-[#12B76A] group-hover:scale-110 transition-transform",
          }),
          (0, O.jsx)("span", {
            className: "text-xs font-semibold tracking-wide hidden sm:inline",
            children: label,
          }),
        ],
      })
    : variant === "outline"
      ? (0, O.jsxs)("a", {
          href: i,
          target: "_blank",
          rel: "noopener noreferrer",
          className: `inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#12B76A] text-[#12B76A] hover:bg-[#ecfdf3] text-sm font-semibold transition-colors active:scale-[0.98] ${className}`,
          children: [
            (0, O.jsx)(E, { className: "w-4 h-4" }),
            (0, O.jsx)("span", { children: label }),
          ],
        })
      : (0, O.jsxs)("a", {
          href: i,
          target: "_blank",
          rel: "noopener noreferrer",
          className: `inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#12B76A] hover:bg-[#0e9657] text-white text-sm font-semibold shadow-xs hover:shadow transition-colors active:scale-[0.98] ${className}`,
          children: [
            (0, O.jsx)(E, { className: "w-4 h-4 fill-white text-[#12B76A]" }),
            (0, O.jsx)("span", { children: label }),
          ],
        });
}
