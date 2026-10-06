import React from 'react';
import { ArrowRight, Sparkles, GraduationCap, Award } from 'lucide-react';

interface HeroProps {
  onNavigate: (route: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const boards = ['CBSE', 'ICSE', 'IB', 'IGCSE', 'State Boards'];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#fcfaf7] to-white pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 border-b border-slate-100">
      {/* Subtle luxury ambient backdrop glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-b from-blue-100/40 via-amber-100/30 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle royal & gold accent pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span className="text-xs font-semibold tracking-wide text-amber-900 uppercase">
            Hyderabad&apos;s Trusted Tutoring Network
          </span>
        </div>

        {/* Main Heading with premium typography hierarchy */}
        <h1 className="tracking-tight text-center leading-[1.12]">
          <span className="block text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0A369D]">
            Naveen
          </span>
          <span className="inline-block text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0A369D] mt-1 mr-2 sm:mr-3">
            Home
          </span>
          <span className="inline-block text-3xl sm:text-5xl lg:text-6xl font-serif italic font-bold text-[#0A369D] mt-1">
            Tuitions
          </span>
        </h1>

        {/* Description with selective, elegant gold accents */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          Connect with{' '}
          <span className="font-semibold text-amber-800 bg-amber-50/80 px-1.5 py-0.5 rounded border border-amber-200/60">
            experienced tutors
          </span>{' '}
          for personalized{' '}
          <span className="font-semibold text-amber-800 bg-amber-50/80 px-1.5 py-0.5 rounded border border-amber-200/60">
            home &amp; online tuition
          </span>{' '}
          for Classes 1–12, all subjects, and major boards, including{' '}
          <span className="font-semibold text-amber-800 bg-amber-50/80 px-1.5 py-0.5 rounded border border-amber-200/60">
            IIT-JEE &amp; NEET
          </span>
          .
        </p>

        {/* Boards Area: Clean, small, elegant tags */}
        <div className="mt-8 mb-9 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-xl">
            {boards.map((board) => (
              <span
                key={board}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-700 bg-white/90 border border-slate-200 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-amber-400 hover:text-amber-900 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {board}
              </span>
            ))}
          </div>
        </div>

        {/* Two Main Buttons: One Blue, One Gold */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
          <button
            onClick={() => onNavigate('/parents')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#155EEF] hover:bg-[#104ec6] rounded-xl shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer active:scale-[0.98]"
          >
            <GraduationCap className="w-4 h-4 text-white" />
            <span>Join as a Student</span>
            <ArrowRight className="w-4 h-4 text-white/80" />
          </button>

          <button
            onClick={() => onNavigate('/tutors')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-400 hover:via-amber-500 hover:to-yellow-500 border border-amber-300/90 rounded-xl shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer active:scale-[0.98]"
          >
            <Award className="w-4 h-4 text-amber-900" />
            <span>Join as a Tutor</span>
            <ArrowRight className="w-4 h-4 text-amber-900/80" />
          </button>
        </div>
      </div>
    </section>
  );
}

export const tt = Hero;
