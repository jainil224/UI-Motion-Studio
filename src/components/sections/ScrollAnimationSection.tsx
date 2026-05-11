/**
 * ScrollAnimationSection
 * ─────────────────────────────────────────────────────────
 * Exact port of the WonJyou Scroll-Animation by @Animmaster
 * https://github.com/Animmaster/Scroll-Animation-WonJyou
 *
 * Animation sequence (1:1 with original):
 *  1. `.animate-text` paragraphs reveal bright text top→bottom via clip-path
 *  2. `.services` section: 3 SVG rows slide in from alternate sides (scrub)
 *  3. Pin: rows 1 & 3 slide out vertically, then all 3 scale to near-zero
 *
 * Site colours: primary #7C3AED  accent #3B82F6  bg #000000
 * ─────────────────────────────────────────────────────────
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
//  SVG text rows  (inline — no external assets)
//  The original used "whatido.svg" full-width.
//  We use bold display text that fills the row.
// ─────────────────────────────────────────────

/** Row 1 — "UI MOTION" — solid white  */
const Row1 = () => (
  <svg
    viewBox="0 0 1200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
    aria-label="UI MOTION"
  >
    <text
      x="50%"
      y="98"
      textAnchor="middle"
      fontFamily="'General Sans', 'Manrope', sans-serif"
      fontWeight="900"
      fontSize="120"
      letterSpacing="-4"
      fill="#ffffff"
    >
      UI MOTION
    </text>
  </svg>
);

/** Row 2 — "STUDIO" — brand gradient (violet → blue) */
const Row2 = () => (
  <svg
    viewBox="0 0 1200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
    aria-label="STUDIO"
  >
    <defs>
      <linearGradient id="wonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#7C3AED" />
        <stop offset="55%"  stopColor="#6366F1" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    <text
      x="50%"
      y="98"
      textAnchor="middle"
      fontFamily="'General Sans', 'Manrope', sans-serif"
      fontWeight="900"
      fontSize="120"
      letterSpacing="-4"
      fill="url(#wonGrad)"
    >
      STUDIO
    </text>
  </svg>
);

/** Row 3 — "TEMPLATES" — vibrant blue-cyan gradient with subtle glow */
const Row3 = () => (
  <svg
    viewBox="0 0 1200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
    aria-label="TEMPLATES"
  >
    <defs>
      <linearGradient id="templatesGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#2DD4BF" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <text
      x="50%"
      y="98"
      textAnchor="middle"
      fontFamily="'General Sans', 'Manrope', sans-serif"
      fontWeight="900"
      fontSize="120"
      letterSpacing="-4"
      fill="url(#templatesGrad)"
      filter="url(#glow)"
      style={{ opacity: 0.9 }}
    >
      TEMPLATES
    </text>
  </svg>
);

// ─────────────────────────────────────────────
//  Main component
// ─────────────────────────────────────────────

export const ScrollAnimationSection: React.FC = () => {
  /* ── refs ── */
  const servicesRef = useRef<HTMLDivElement>(null);
  const row0Ref     = useRef<HTMLDivElement>(null);
  const row1Ref     = useRef<HTMLDivElement>(null);
  const row2Ref     = useRef<HTMLDivElement>(null);
  const textRef1    = useRef<HTMLHeadingElement>(null);
  const textRef2    = useRef<HTMLHeadingElement>(null);

  /* ── GSAP wiring ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const services = servicesRef.current;
      const rows = [row0Ref.current, row1Ref.current, row2Ref.current];
      if (!services || rows.some(r => !r)) return;

      /* ── 1. clip-path text reveal (exact WonJyou logic) ── */
      [textRef1.current, textRef2.current].forEach(el => {
        if (!el) return;
        el.setAttribute('data-text', el.textContent?.trim() ?? '');

        ScrollTrigger.create({
          trigger: el,
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: 1,
          onUpdate: self => {
            const clip = Math.max(0, 100 - self.progress * 100);
            el.style.setProperty('--clip-value', `${clip}%`);
          },
        });
      });

      /* ── 2. slide rows in from sides as .services approaches viewport ── */
      ScrollTrigger.create({
        trigger: services,
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
        onUpdate: self => {
          const p = self.progress;
          // row0 & row2 slide in from right  (start +100%, arrive at 0%)
          gsap.set(rows[0], { x: `${100 - p * 100}%` });
          // row1 slides in from left (start -100%, arrive at 0%)
          gsap.set(rows[1], { x: `${-100 + p * 100}%` });
          gsap.set(rows[2], { x: `${100 - p * 100}%` });
        },
      });

      /* ── 3. pin section + vertical exit + scale-down (exact WonJyou logic) ── */
      ScrollTrigger.create({
        trigger: services,
        start: 'top top',
        end: `+=${window.innerHeight * 2}`,
        pin: true,
        scrub: 1,
        pinSpacing: false,
        onUpdate: self => {
          if (self.progress <= 0.5) {
            // first half: row0 slides down, row2 slides up — row1 stays centred
            const yP = self.progress / 0.5;
            gsap.set(rows[0], { y: `${yP * 100}%` });
            gsap.set(rows[2], { y: `${yP * -100}%` });
          } else {
            // clamp row0/row2 offscreen
            gsap.set(rows[0], { y: '100%' });
            gsap.set(rows[2], { y: '-100%' });

            // second half: all 3 rows scale down together
            const scaleP  = (self.progress - 0.5) / 0.5;
            // On mobile, don't scale down as much (0.5) to keep it readable
            const minScale = window.innerWidth <= 768 ? 0.5 : (window.innerWidth <= 1024 ? 0.3 : 0.1);
            const scale    = 1 - scaleP * (1 - minScale);
            rows.forEach(r => gsap.set(r, { scale }));
          }
        },
      });
    });

    return () => ctx.revert();
  }, []);

  /* ── shared class for animate-text paragraphs ── */
  const animateTextClass = [
    'animate-text-el',          // referenced in CSS below
    'relative',
    'w-[85%] md:w-[60%]',       // Wider on mobile for better line breaks
    'mx-auto',
    'text-center',
    'font-black',
    'text-[clamp(1.4rem,6vw,3.5rem)]', // More aggressive scaling for mobile
    'leading-[1.1]',            // Tighter leading for impact
    'tracking-[-0.04em]',       // Tighter tracking
  ].join(' ');

  return (
    <>
      {/* ════════════════════════════════════════════
          INTRO — animate-text paragraph
          "about" section equivalent
      ════════════════════════════════════════════ */}
      <section
        className="
          relative w-full min-h-svh bg-black
          flex items-center justify-center
          px-8 py-24
          border-t border-white/[0.06]
          overflow-hidden
        "
      >
        {/* subtle glow — site brand violet */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[700px] h-[350px] rounded-full
                          bg-[#7C3AED]/10 blur-[140px]" />
        </div>

        <h2
          ref={textRef1}
          /* CSS custom property drives the clip reveal */
          style={{ '--clip-value': '100%' } as React.CSSProperties}
          className={`${animateTextClass} won-animate-text`}
        >
          A studio built for motion — where every scroll, hover and transition
          is crafted with clarity and intention.
        </h2>
      </section>

      {/* ════════════════════════════════════════════
          SERVICES — pinned sliding rows
      ════════════════════════════════════════════ */}
      <div
        ref={servicesRef}
        className="
          won-services
          relative w-full h-svh bg-black
          flex flex-col justify-center items-center
          overflow-hidden
        "
      >
        {/* Row 0 — slides from right → exits downward */}
        <div
          ref={row0Ref}
          style={{ transform: 'translateX(100%)' }}
          className="won-services-header relative w-full px-4 md:px-8 will-change-transform"
        >
          <div className="w-full" style={{ height: 'clamp(60px, 15vw, 140px)' }}>
            <Row1 />
          </div>
        </div>

        {/* Row 1 — slides from left → stays (z-index 2, centre) */}
        <div
          ref={row1Ref}
          style={{ transform: 'translateX(-100%)', zIndex: 2 }}
          className="won-services-header relative w-full px-4 md:px-8 will-change-transform my-[1vw]"
        >
          <div className="w-full" style={{ height: 'clamp(60px, 15vw, 140px)' }}>
            <Row2 />
          </div>
        </div>

        {/* Row 2 — slides from right → exits upward */}
        <div
          ref={row2Ref}
          style={{ transform: 'translateX(100%)' }}
          className="won-services-header relative w-full px-4 md:px-8 will-change-transform"
        >
          <div className="w-full" style={{ height: 'clamp(60px, 15vw, 140px)' }}>
            <Row3 />
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          OUTRO — second animate-text paragraph
          ("services-copy" equivalent)
      ════════════════════════════════════════════ */}
      <section
        className="
          relative w-full min-h-svh bg-black
          flex items-center justify-center
          px-8 py-24
          overflow-hidden
        "
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[600px] h-[250px] rounded-full
                          bg-[#3B82F6]/8 blur-[120px]" />
        </div>

        <h2
          ref={textRef2}
          style={{ '--clip-value': '100%' } as React.CSSProperties}
          className={`${animateTextClass} won-animate-text`}
        >
          Copy-paste templates engineered for AI-powered workflows — from prompt
          to production in minutes, without the repetitive CSS struggle.
        </h2>
      </section>

      {/* ════════════════════════════════════════════
          Scoped styles — mirrors original style.css
          exactly, adapted for dark/black background
          and site brand colours
      ════════════════════════════════════════════ */}
      <style>{`
        /* ── animate-text: dim base + bright ::before reveal ── */
        .won-animate-text {
          color: rgba(255, 255, 255, 0.18);   /* original #4f4f4f equivalent on black */
          --clip-value: 100%;
        }
        .won-animate-text::before {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          /* brand gradient instead of plain white for extra polish */
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #c4b5fd 40%,
            #ffffff 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          clip-path: inset(0 0 var(--clip-value) 0);
          will-change: clip-path;
          /* pointer-events must be none so the element below is still hoverable */
          pointer-events: none;
        }

        /* ── services header: background matches site bg (#000) ── */
        .won-services-header {
          background-color: #000000;   /* original was #1a1a1a — we use pure black */
          will-change: transform;
        }
      `}</style>
    </>
  );
};

export default ScrollAnimationSection;
