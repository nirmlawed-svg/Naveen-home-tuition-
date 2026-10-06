import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export function LogoIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="280 200 464 380"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left Head */}
      <circle cx="366" cy="285" r="72" fill="#07204E" />

      {/* Right Head */}
      <circle cx="658" cy="285" r="72" fill="#0062E2" />

      {/* Left Figure */}
      <path
        fill="#07204E"
        d="M 320 370 C 320 338 340 328 368 332 L 512 414 L 512 470 L 382 404 L 382 480 C 424 482 476 508 504 554 C 476 538 384 534 320 528 Z"
      />

      {/* Right Figure */}
      <path
        fill="#0062E2"
        d="M 704 370 C 704 338 684 328 656 332 L 512 414 L 512 470 L 642 404 L 642 480 C 600 482 548 508 520 554 C 548 538 640 534 704 528 Z"
      />
    </svg>
  );
}

export function Logo({ className = '', size = 44, showText = false }: LogoProps) {
  if (!showText) {
    return <LogoIcon className={`w-[${size}px] h-[${size}px] shrink-0 ${className}`} />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 drop-shadow-xs" />
      <div className="min-w-0">
        <span className="text-lg sm:text-xl font-bold tracking-tight text-[#07204E] block leading-tight">
          Naveen Home tuitions
        </span>
        <span className="text-xs sm:text-[13px] font-medium text-[#667085] mt-0.5 block leading-none">
          Hyderabad · Home &amp; Online Tutors
        </span>
      </div>
    </div>
  );
}

export default Logo;
