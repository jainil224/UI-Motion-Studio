import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { GalleryCard } from '../ui/GalleryCard';
import { ArrowRight, Rocket, X, Copy, Lock, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GradientText } from '../ui/GradientText';

const templates = [
  {
    title: 'Synapse Hero',
    category: 'SaaS / Tech',
    video: '/videos/ui motion .mp4',
    prompt: `AI Prompt: High-Fidelity "Synapse" Hero Section with Immersive Video

Objective:
Create a production-grade, dark-themed Hero Section for a brand called "Synapse" using React, Tailwind CSS, and Framer Motion (motion/react).

1. Global Theme & Typography:
- Background: Solid black (#000000)
- Font: "Inter" (Sans-serif)
- Selection Color: White with 20% opacity

2. Navbar Component:
- Position: Fixed top, full width, z-index: 50
- Style: backdrop-blur-md, bg-black/10, border-b border-white/5

- Logo:
  - Text: "Synapse"
  - Style: font-medium, tracking-tight, text-white

- Links:
  - Features: Active with gradient border (Blue → Purple → Pink) + black inner fill
  - Insights, About, Contact: text-white/60, hover:text-white
  - Case Studies: text-white/40, line-through

- CTA Button:
  - Text: "Get Started for Free"
  - Style: pill-shaped, bg-gradient-to-r from-white to-gray-300, text-black

3. Background Video (Crucial):
- Video URL:
  https://res.cloudinary.com/dsn0ks2hl/video/upload/v1775705105/jp_odqxjd.mp4

- Implementation:
  - Create VideoPlayer component
  - Properties: autoPlay, muted, loop, playsInline

- Positioning:
  - absolute inset-0
  - flex items-center justify-center

- Container:
  - Height: 80vh

- Visual Polish:
  - Apply radial gradient mask:
    bg-radial-[circle_at_center] from-transparent via-black/20 to-black

4. Hero Content Layout:
- Container:
  - Centered, relative, z-index: 10, text-center

- Badges:
  - 3 glass-effect badges:
    • Integrated with AI (Cpu icon)
    • Integrated with Cloud (Zap icon)
    • Integrated with Security (Shield icon)
  - Style:
    bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2

- Headline:
  - Text:
    "Where Innovation
     Meets Execution"
  - Style:
    text-6xl md:text-8xl font-medium tracking-tight leading-[0.95]

- Subtext:
  - 2-line description
  - Style:
    text-white/60 max-w-2xl mx-auto

- Buttons:
  - Primary:
    "Get Started for Free"
    bg-black border border-white/20 text-white px-6 py-3 rounded-full

  - Secondary:
    "Let's Get Connected"
    bg-white/5 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-full

5. Logo Marquee (Footer):
- Content:
  - Row of grayscale logos (Aether, Nova, Vertex)
- Style:
  - opacity-40 hover:opacity-100 transition
  - flex gap-24 justify-center items-center

6. Animations (Framer Motion):
- Use staggerChildren container
- Apply Fade-In-Up animation to:
  - Badges
  - Headline
  - Subtext
  - Buttons

- Animation Settings:
  - duration: 0.8
  - ease: [0.21, 0.47, 0.32, 0.98]`,
    isPremium: true,
  },
  {
    title: 'Human',
    category: 'Digital Art / Hero',
    video: '/videos/Human.mp4',
    prompt: `"Lumina" Hero Section
Objective: Recreate a high-end, immersive hero section using React, Tailwind CSS, and Framer Motion.
1. Visual Reference & Assets
Video Background Link: https://res.cloudinary.com/dsn0ks2hl/video/upload/v1/Glowing_abstract_human_202604101909_hknn8x.mp4
Primary Fonts:
Splash (Cursive/Script) - Used for the main artistic headline.
Inter (Sans-serif) - Used for UI elements and body text.
Color Palette:
Background: #050505 (Deep Black)
Accent 1: #f97316 (Orange-500)
Accent 2: #60a5fa (Blue-400)
Glass Effect: rgba(0, 0, 0, 0.2) with backdrop-blur-lg
2. Technical Requirements
Framework: React 18+
Styling: Tailwind CSS 4.0
Animations: Framer Motion (motion/react)
Icons: Lucide-React
3. Exact Code Implementation

\`\`\`tsx
import { motion } from "motion/react";
import { Play, ArrowRight, Github, Twitter, Menu, X } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video
          autoPlay loop muted playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] object-cover opacity-60 scale-110"
        >
          <source src="https://res.cloudinary.com/dsn0ks2hl/video/upload/v1/Glowing_abstract_human_202604101909_hknn8x.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Glassmorphism Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="flex items-center justify-between px-6 py-5 mx-auto max-w-7xl">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full" />
            </div>
            LUMINA
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#" className="hover:text-white transition-colors">Experience</a>
            <a href="#" className="hover:text-white transition-colors">Technology</a>
            <a href="#" className="hover:text-white transition-colors">Art</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
          </div>
          <button className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-24 pb-32 mx-auto max-w-7xl text-center min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-bold text-orange-500 mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          Future of Digital Art
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.8] mb-10 max-w-5xl"
        >
          <span className="font-['Splash'] text-white lowercase block mb-2">The Essence</span>
          <span className="font-['Splash'] text-white lowercase block mb-6">Of</span>
          <span className="font-['Splash'] text-orange-500 lowercase">Human</span>{" "}
          <span className="font-['Splash'] text-blue-400 lowercase">Light</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-white/70 max-w-3xl mb-16 leading-relaxed"
        >
          Experience the intersection of biological beauty and digital abstraction.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all">
            Explore Collection
          </button>
          <button className="px-10 py-5 bg-white/5 border border-white/20 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-3">
            <Play size={20} fill="currentColor" /> Watch Trailer
          </button>
        </div>
      </main>
    </div>
  );
}
\`\`\`

4. Critical CSS (index.css)

\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Splash&display=swap');
@theme {
  --font-splash: "Splash", cursive;
}
\`\`\`
Instructions for the AI:
"Use the provided React code and CSS to build a hero section. Ensure the video background is set to absolute with a lower z-index than the content. The Splash font must be applied to the h1 spans. The navigation must use backdrop-filter: blur(12px) for the glassy effect. Ensure all animations use the initial and animate props from Framer Motion for a smooth entrance."`,
  },
  {
    title: 'Liquid Glass Agency',
    category: 'AI Design / Agency',
    video: '/videos/Liquid Glass Agency.mp4',
    prompt: `Build a dark, premium, single-page landing page for an AI-powered web design agency using React + Vite + Tailwind CSS + shadcn/ui + Framer Motion (motion/react). The page has a luxury editorial aesthetic -- black backgrounds, white text, liquid glass (glassmorphism) effects, and cinematic video backgrounds.

FONTS
Import from Google Fonts:

https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&display=swap
* Headings: Instrument Serif (italic) -- used via Tailwind class font-heading
* Body: Barlow (weights 300, 400, 500, 600) -- used via Tailwind class font-body
Tailwind config extends fontFamily:

heading: ["'Instrument Serif'", "serif"]
body: ["'Barlow'", "sans-serif"]

COLOR THEME (CSS custom properties, HSL format)

:root {
  --background: 213 45% 67%;
  --foreground: 0 0% 100%;
  --card: 213 45% 62%;
  --card-foreground: 0 0% 100%;
  --primary: 0 0% 100%;
  --primary-foreground: 213 45% 67%;
  --secondary: 213 45% 72%;
  --secondary-foreground: 0 0% 100%;
  --muted: 213 35% 60%;
  --muted-foreground: 0 0% 100% / 0.7;
  --accent: 213 45% 72%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84.2% 60.2%;
  --border: 0 0% 100% / 0.2;
  --input: 0 0% 100% / 0.2;
  --ring: 0 0% 100% / 0.3;
  --radius: 9999px;
  --glass-bg: rgba(255, 255, 255, 0.12);
  --glass-border: rgba(255, 255, 255, 0.25);
  --glass-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  --glass-blur: 16px;
}

LIQUID GLASS CSS (the core visual effect)
Two utility classes defined in index.css under @layer components:
.liquid-glass (subtle):

.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.45) 0%,
    rgba(255, 255, 255, 0.15) 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.15) 80%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
.liquid-glass-strong (more prominent, used on CTA buttons):

.liquid-glass-strong {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border: none;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05),
    inset 0 1px 1px rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
}
.liquid-glass-strong::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.2) 80%,
    rgba(255, 255, 255, 0.5) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
The ::before pseudo-element creates a gradient border effect using the mask-composite trick (thin glowing border that fades in the middle).

ASSETS & MEDIA URLS
Hero background video (MP4, CloudFront):

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4
Poster image: /images/hero_bg.jpeg (local file in public/images/)
StartSection video (HLS via Mux):

https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8
Stats section video (HLS via Mux, displayed desaturated):

https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8
CTA/Footer section video (HLS via Mux):

https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8
Feature GIFs (imported from src/assets/):
* feature-1.gif -- used in FeaturesChess row 1 (right side)
* feature-2.gif -- used in FeaturesChess row 2 (left side)
Logo icon: src/assets/logo-icon.png (12x12 Tailwind = h-12 w-12)

SECTION-BY-SECTION BREAKDOWN
1. NAVBAR (fixed, floating)
* Fixed position: fixed top-4 left-0 right-0 z-50, horizontal padding px-8 lg:px-16, vertical py-3
* Left: Logo image (h-12 w-12)
* Center (desktop only, hidden md:flex): Navigation links inside a liquid-glass rounded-full px-1.5 py-1 pill container
    * Links: "Home", "Services", "Work", "Process", "Pricing"
    * Each link: px-3 py-2 text-sm font-medium text-foreground/90 font-body
    * Last item: white solid button "Get Started" with ArrowUpRight icon, bg-white text-black rounded-full px-3.5 py-1.5 text-sm
2. HERO SECTION
* Container: relative overflow-visible, fixed height 1000px
* Background video: <video> tag with autoPlay, loop, muted, playsInline. Positioned absolute left-0 w-full h-auto object-contain z-0 with top: 20%. Source is the CloudFront MP4 URL. Poster is /images/hero_bg.jpeg.
* Dark overlay: absolute inset-0 bg-black/5 z-0
* Bottom gradient fade: absolute bottom-0, height 300px, linear-gradient(to bottom, transparent, black)
* Content (z-10, centered, paddingTop: 150px):
    * Badge pill: liquid-glass rounded-full px-1 py-1 with inner white "New" badge (bg-white text-black rounded-full px-3 py-1 text-xs font-semibold) and text "Introducing AI-powered web design."
    * Heading (BlurText component): "The Website Your Brand Deserves" -- text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] max-w-2xl tracking-[-4px], animated word-by-word from bottom with blur, delay 100ms
    * Subtext (motion.p): "Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined." -- blur-in animation, delay 0.8s, text-sm md:text-base text-white font-body font-light leading-tight
    * CTA buttons (motion.div, delay 1.1s):
        * "Get Started" -- liquid-glass-strong rounded-full px-5 py-2.5 with ArrowUpRight icon
        * "Watch the Film" -- text-only with Play icon (filled)
    * Partners bar at bottom (mt-auto pb-8 pt-16): "Trusted by the teams behind" liquid-glass pill, then 5 partner names rendered in text-2xl md:text-3xl font-heading italic text-white with gap-12 md:gap-16: Stripe, Vercel, Linear, Notion, Figma
3. BlurText COMPONENT (custom animated text)
* Splits text by words or letters
* Uses IntersectionObserver to trigger on scroll
* Each word/letter is a <motion.span> that animates from {filter: 'blur(10px)', opacity: 0, y: 50} (when direction=bottom) through {filter: 'blur(5px)', opacity: 0.5, y: -5} to {filter: 'blur(0px)', opacity: 1, y: 0}
* Staggered by index with configurable delay (default 200ms per element)
* Step duration 0.35s per keyframe step
4. START SECTION ("How It Works")
* Full-width section with HLS video background using hls.js library
* Video: autoPlay, loop, muted, playsInline, absolute inset-0 w-full h-full object-cover
* Top and bottom gradient fades (200px each, black to transparent)
* Content centered (z-10, minHeight 500px):
    * Badge: "How It Works" in liquid-glass rounded-full px-3.5 py-1
    * Heading: "You dream it. We ship it." -- text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9]
    * Subtext: "Share your vision. Our AI handles the rest--wireframes, design, code, launch. All in days, not quarters." -- text-white/60 font-body font-light text-sm md:text-base
    * CTA: "Get Started" liquid-glass-strong rounded-full px-6 py-3
5. FEATURES CHESS (alternating rows)
* Section header: "Capabilities" badge + "Pro features. Zero complexity." heading
* Row 1 (flex, content left / image right):
    * Title: "Designed to convert. Built to perform."
    * Body: "Every pixel is intentional. Our AI studies what works across thousands of top sites--then builds yours to outperform them all."
    * Button: "Learn more" liquid-glass-strong
    * Gif: https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif download and place inside liquid-glass rounded-2xl overflow-hidden
* Row 2 (flex-row-reverse, content right / image left):
    * Title: "It gets smarter. Automatically."
    * Body: "Your site evolves on its own. AI monitors every click, scroll, and conversion--then optimizes in real time. No manual updates. Ever."
    * Button: "See how it works" liquid-glass-strong
    * gif: https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif download and place inside liquid-glass rounded-2xl overflow-hidden
6. FEATURES GRID ("Why Us")
* Section header: "Why Us" badge + "The difference is everything." heading
* 4-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6), each card is liquid-glass rounded-2xl p-6:
    1. Icon: Zap -- "Days, Not Months" -- "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy."
    2. Icon: Palette -- "Obsessively Crafted" -- "Every detail considered. Every element refined. Design so precise, it feels inevitable."
    3. Icon: BarChart3 -- "Built to Convert" -- "Layouts informed by data. Decisions backed by performance. Results you can measure."
    4. Icon: Shield -- "Secure by Default" -- "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included."
    * Each icon sits in a liquid-glass-strong rounded-full w-10 h-10 circle
7. STATS SECTION
* HLS video background (Mux URL), displayed with filter: saturate(0) (desaturated/B&W)
* Top and bottom gradient fades (200px each)
* Content: liquid-glass rounded-3xl p-12 md:p-16 card with 4-column grid:
    * "200+" / "Sites launched"
    * "98%" / "Client satisfaction"
    * "3.2x" / "More conversions"
    * "5 days" / "Average delivery"
    * Values: text-4xl md:text-5xl lg:text-6xl font-heading italic
    * Labels: text-white/60 font-body font-light text-sm
8. TESTIMONIALS
* Section header: "What They Say" badge + "Don't take our word for it." heading
* 3-column grid (md:grid-cols-3 gap-6), each card is liquid-glass rounded-2xl p-8:
    1. "A complete rebuild in five days. The result outperformed everything we'd spent months building before." -- Sarah Chen, CEO, Luminary
    2. "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data." -- Marcus Webb, Head of Growth, Arcline
    3. "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it." -- Elena Voss, Brand Director, Helix
    * Quote: text-white/80 font-body font-light text-sm italic
    * Name: text-white font-body font-medium text-sm
    * Role: text-white/50 font-body font-light text-xs
9. CTA + FOOTER
* HLS video background (Mux URL)
* Top and bottom gradient fades (200px each)
* Content (z-10, centered):
    * Heading: "Your next website starts here." -- text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85]
    * Subtext: "Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities."
    * Two buttons:
        * "Book a Call" -- liquid-glass-strong rounded-full px-6 py-3
        * "View Pricing" -- bg-white text-black rounded-full px-6 py-3
    * Footer bar (mt-32 pt-8 border-t border-white/10):
        * Left: "(c) 2026 Studio. All rights reserved." text-white/40 text-xs
        * Right: "Privacy", "Terms", "Contact" links text-white/40 text-xs`,
    isPremium: true,
  },
  {
    title: 'Innovation',
    category: 'Agency / Vision',
    video: '/videos/Innovation.mp4',
    prompt: `RECREATION PROMPT

Build a single-page landing site using React + TypeScript + Vite + Tailwind CSS + framer-motion + lucide-react. The entire page has a bg-black background. The font loaded via Google Fonts is Instrument Serif (italic and regular). Import it in index.css:


@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
LIQUID GLASS CSS (in index.css, inside @layer components)
Create a reusable .liquid-glass class used on every glass element:


.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.45) 0%,
    rgba(255, 255, 255, 0.15) 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.15) 80%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
SECTION 1 -- HERO (full-viewport, in Index.tsx)
Full-screen (min-h-screen) container with overflow-hidden relative flex flex-col.

Background video: absolute, covers the entire viewport (absolute inset-0 w-full h-full object-cover object-bottom). URL:


https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4
Attributes: muted, autoPlay, playsInline, preload="auto". Starts at opacity: 0.

Video fade logic (vanilla JS via refs, no CSS transitions):

On canplay: play the video, then animate opacity from 0 to 1 over 500ms using requestAnimationFrame.
On timeupdate: when remaining time <= 0.55s, animate opacity from current to 0 over 500ms.
On ended: set opacity to 0, wait 100ms, reset currentTime to 0, play again, fade back to 1 over 500ms.
This creates a seamless loop with smooth crossfade to black between plays.
Navbar (relative z-20, px-6 py-6):

A liquid-glass rounded-full pill, max-w-5xl mx-auto, px-6 py-3, flex between left/right.
Left: Globe icon (24px, white) + "Asme" text (white, font-semibold, text-lg). Hidden on mobile: nav links "Features", "Pricing", "About" (text-white/80 hover:text-white text-sm font-medium, gap-8 ml-8).
Right: "Sign Up" text button (white, text-sm, font-medium) + "Login" button (liquid-glass rounded-full px-6 py-2, white text-sm font-medium).
Hero content (relative z-10, flex-1 flex flex-col items-center justify-center, px-6 py-12 text-center, -translate-y-[20%]):

Heading: text-7xl md:text-8xl lg:text-9xl, white, tracking-tight whitespace-nowrap, font-family 'Instrument Serif', serif. Text: Know it then <em className="italic">all</em>.
Email input: max-w-xl w-full. A liquid-glass rounded-full pill with pl-6 pr-2 py-2 flex items-center gap-3. Inside: transparent <input> with placeholder "Enter your email" (text-white placeholder:text-white/40). A white circular submit button (bg-white rounded-full p-3 text-black) containing ArrowRight icon (20px).
Subtitle: text-white text-sm leading-relaxed px-4. Text: "Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates."
Manifesto button: liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors.
Social icons footer (relative z-10, flex justify-center gap-4 pb-12):

Three liquid-glass rounded-full p-4 buttons for Instagram, Twitter, Globe icons (20px). text-white/80 hover:text-white hover:bg-white/5 transition-all.
SECTION 2 -- ABOUT SECTION (separate component AboutSection.tsx)
Uses framer-motion useInView (ref, { once: true, margin: "-100px" }).
bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden.
Subtle radial gradient overlay: bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)].
Label: "About Us" -- text-white/40 text-sm tracking-widest uppercase. Animates: opacity: 0, y: 20 -> opacity: 1, y: 0, duration 0.6.
Heading: text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight. Animates: opacity: 0, y: 40 -> opacity: 1, y: 0, duration 0.8, delay 0.1. Text structure:
Pioneering then ideas (Instrument Serif italic, text-white/60) for
Line break (hidden on mobile)
minds that then create, build, and inspire. (all Instrument Serif italic, text-white/60)
SECTION 3 -- FEATURED VIDEO (separate component FeaturedVideoSection.tsx)
bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden. Max-w-6xl.
A rounded-3xl overflow-hidden aspect-video container that animates opacity: 0, y: 60 -> opacity: 1, y: 0, duration 0.9.
Video: w-full h-full object-cover, muted, autoPlay, loop, playsInline, preload="auto". URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4
Gradient overlay on video: bg-gradient-to-t from-black/60 via-transparent to-transparent.
Bottom overlay content (absolute bottom-0 left-0 right-0 p-6 md:p-10):
Flex row on desktop, column on mobile.
Left: a liquid-glass rounded-2xl p-6 md:p-8 max-w-md card. Label "Our Approach" (text-white/50 text-xs tracking-widest uppercase mb-3). Body text (text-white text-sm md:text-base leading-relaxed): "We believe in the power of curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to innovation."
Right: "Explore more" button (liquid-glass rounded-full px-8 py-3, white text-sm font-medium) with whileHover={{ scale: 1.05 }} and whileTap={{ scale: 0.95 }}.
SECTION 4 -- PHILOSOPHY / INNOVATION x VISION (separate component PhilosophySection.tsx)
bg-black py-28 md:py-40 px-6 overflow-hidden. Max-w-6xl.
Heading: text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24. Animates opacity: 0, y: 40 -> opacity: 1, y: 0, duration 0.8. Text: Innovation then x in Instrument Serif italic text-white/40, then Vision.
Two-column grid (grid-cols-1 md:grid-cols-2 gap-8 md:gap-12):
Left: Video in rounded-3xl overflow-hidden aspect-[4/3]. Animates from opacity: 0, x: -40. URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4
muted, autoPlay, loop, playsInline, preload="auto".
Right: Animates from opacity: 0, x: 40. Two text blocks separated by a w-full h-px bg-white/10 divider.
Block 1: Label "Choose your space" (text-white/40 text-xs tracking-widest uppercase mb-4). Body (text-white/70 text-base md:text-lg leading-relaxed): "Every meaningful breakthrough begins at the intersection of disciplined strategy and remarkable creative vision. We operate at that crossroads, turning bold thinking into tangible outcomes that move people and reshape industries."
Block 2: Label "Shape the future". Body: "We believe that the best work emerges when curiosity meets conviction. Our process is designed to uncover hidden opportunities and translate them into experiences that resonate long after the first impression."
SECTION 5 -- SERVICES / WHAT WE DO (separate component ServicesSection.tsx)
bg-black py-28 md:py-40 px-6 overflow-hidden. Max-w-6xl.
Subtle radial gradient: bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)].
Header row: flex between "What we do" (text-3xl md:text-5xl text-white tracking-tight) and "Our services" label (text-white/40 text-sm, hidden on mobile). Animates opacity: 0, y: 30 -> visible, duration 0.7.
Two-card grid (grid-cols-1 md:grid-cols-2 gap-6 md:gap-8):
Each card: liquid-glass rounded-3xl overflow-hidden with group class. Animates opacity: 0, y: 50 -> visible, duration 0.8, staggered by 0.15s.
Card video area: aspect-video, object-cover, transition-transform duration-700 group-hover:scale-105. Gradient overlay: bg-gradient-to-t from-black/40 to-transparent.
Card body (p-6 md:p-8): tag label (uppercase, tracking-widest, text-white/40 text-xs), ArrowUpRight icon in a liquid-glass rounded-full p-2 circle, title (text-white text-xl md:text-2xl mb-3 tracking-tight), description (text-white/50 text-sm leading-relaxed).
Card 1: Video URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4
Tag: "Strategy". Title: "Research & Insight". Description: "We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change."
Card 2: Video URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4
Tag: "Craft". Title: "Design & Execution". Description: "From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary."`,
    isPremium: true,
  },
  {
    title: 'Mindloop Landing',
    category: 'Newsletter / Platform',
    video: '/videos/Mindloop Landing.mp4',
    prompt: `Build a dark monochrome landing page called Mindloop — a newsletter/content platform. Use React + Vite + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion. Fonts: Inter (sans) and Instrument Serif (serif, used for italic accent words). The entire theme is pure black (#000) background with white foreground — no colors or gradients beyond monochrome. Install hls.js and framer-motion.

Design System (index.css)
All CSS variables in HSL (no hsl() wrapper in the variable, just the values):

--background: 0 0% 0%
--foreground: 0 0% 100%
--card: 0 0% 5%
--card-foreground: 0 0% 100%
--primary: 0 0% 100%
--primary-foreground: 0 0% 0%
--secondary: 0 0% 12%
--secondary-foreground: 0 0% 85%
--muted: 0 0% 15%
--muted-foreground: 0 0% 65%
--accent: 170 15% 45%
--accent-foreground: 0 0% 100%
--border: 0 0% 20%
--input: 0 0% 18%
--ring: 0 0% 40%
--hero-subtitle: 210 17% 95%
Liquid Glass Effect (global CSS class .liquid-glass)

.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
Animation Pattern
All sections use a reusable fadeUp helper with staggered delays:

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

Page Structure (top to bottom)
1. Navbar (fixed, transparent)
Left: Logo (concentric circles icon — outer w-7 h-7 with border-2 border-foreground/60, inner w-3 h-3 with border border-foreground/60) + "Mindloop" bold text.
Center-left: Nav links ["Home", "How It Works", "Philosophy", "Use Cases"] separated by • dots. Links are text-muted-foreground hover:text-foreground.
Right: 3 social icons (Instagram, Linkedin, Twitter from lucide-react) in liquid-glass circular buttons (w-10 h-10 rounded-full).
No background — fully transparent, fixed top-0 z-50, padding px-8 md:px-28 py-4.

2. Hero Section (full viewport height)
Background: autoplaying looping muted MP4 video covering the entire section.
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4
Bottom gradient: h-64 bg-gradient-to-t from-background to-transparent for smooth fade to black.
Content (centered, z-10, pt-28 md:pt-32):
Avatar row: 3 overlapping circular avatars (-space-x-2, w-8 h-8 rounded-full border-2 border-background) + "7,000+ people already subscribed" in text-muted-foreground text-sm.
Heading: text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] — "Get Inspired with Us" where "Inspired" is font-serif italic font-normal.
Subtitle: text-lg in hsl(var(--hero-subtitle)) color — "Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction."
Email form: liquid-glass rounded-full p-2 max-w-lg container with email input and a white bg-foreground text-background rounded-full px-8 py-3 "SUBSCRIBE" button with whileHover scale 1.03 and whileTap scale 0.98.

3. "Search has changed" Section
Top padding pt-52 md:pt-64, bottom padding pb-6 md:pb-9.
Heading: text-5xl md:text-7xl lg:text-8xl — "Search has changed. Have you?" with "changed." in serif italic.
Subtitle: text-muted-foreground text-lg max-w-2xl mx-auto mb-24.
3 platform cards (grid md:grid-cols-3 gap-12 md:gap-8 mb-20): Each card has a 200x200 icon image centered, platform name (font-semibold text-base), and description (text-muted-foreground text-sm).
ChatGPT icon: local asset icon-chatgpt.png
Perplexity icon: local asset icon-perplexity.png
Google AI icon: local asset icon-google.png
Bottom tagline: "If you don't answer the questions, someone else will." in text-muted-foreground text-sm text-center.

4. Mission Section
Padding pt-0 pb-32 md:pb-44.
Video: Large 800x800 looping autoplaying muted video centered.
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4
Scroll-driven word-by-word reveal using useScroll and useTransform from framer-motion:
Paragraph 1 (text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px]): "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having." Words "curiosity", "meets", "clarity" are highlighted in --foreground, rest in --hero-subtitle.
Paragraph 2 (text-xl md:text-2xl lg:text-3xl font-medium mt-10): "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved."
Each word transitions opacity from 0.15 to 1 based on scroll progress.

5. Solution Section
Padding py-32 md:py-44, border-t border-border/30.
Label: "SOLUTION" in text-xs tracking-[3px] uppercase text-muted-foreground.
Heading: text-4xl md:text-6xl — "The platform for meaningful content" (serif italic on "meaningful").
Video: Rounded rounded-2xl, aspect-[3/1] object-cover.
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4
4-column feature grid (md:grid-cols-4 gap-8): Curated Feed, Writer Tools, Community, Distribution — each with title (font-semibold text-base) and description (text-muted-foreground text-sm).

6. CTA Section
Padding py-32 md:py-44, border-t border-border/30, overflow-hidden.
Background video (HLS via hls.js): absolute inset-0 object-cover z-0.
HLS URL: https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8
Uses Hls.isSupported() check with fallback to native HLS for Safari.
Overlay: absolute inset-0 bg-background/45 z-[1].
Content (z-10, centered):
Concentric circles logo icon (w-10 h-10 outer, w-5 h-5 inner).
Heading: "Start Your Journey" (serif italic).
Subtitle in text-muted-foreground.
Two buttons: "Subscribe Now" (bg-foreground text-background rounded-lg px-8 py-3.5) and "Start Writing" (liquid-glass rounded-lg).

7. Footer
Simple py-12 px-8 md:px-28 footer.
Left: "© 2026 Mindloop. All rights reserved." in text-muted-foreground text-sm.
Right: Privacy, Terms, Contact links in text-muted-foreground text-sm hover:text-foreground.

Key Dependencies
framer-motion for all animations
hls.js for the CTA background video streaming
@fontsource/inter (400, 500, 600, 700)
@fontsource/instrument-serif (400, 400-italic)
lucide-react for icons
tailwindcss-animate plugin

Assets Needed
3 avatar images (avatar-1.png, avatar-2.png, avatar-3.png)
3 platform icons (icon-chatgpt.png, icon-perplexity.png, icon-google.png)`,
    isPremium: true,
  },
  {
    title: 'Celestia',
    category: 'Cinema / Luxury',
    video: '/videos/Celestia.mp4',
    prompt: `Create a full-screen dark hero section with a cinematic, premium aesthetic. Background Video:
https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4
Implement as: <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0"><source src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4" type="video/mp4" /> </video>`,
    isPremium: true,
  },
  {
    title: 'Monochrome vision',
    category: 'Fintech / SaaS',
    video: '/videos/Screen Recording 2026-04-10 171754.mp4',
    prompt: `UI Motion Studio

AI Prompt: Premium Monochrome "MONO Financial Vision" Hero Section with Cinematic Motion

Objective: Create a high-end, production-grade Hero Section for a fintech/SaaS brand called "MONO Financial Vision" using React, Tailwind CSS, and Framer Motion (motion/react). The design must feel luxurious, minimal, cinematic, and modern with smooth, subtle animations and strong typography hierarchy.

1. Core Aesthetic & Visual Identity:

* Style: Premium Monochrome, Minimalist, High-End Fintech/SaaS
* Color Palette:
  * Pure Black (#000000)
  * Pure White (#FFFFFF)
  * Subtle grays and transparencies (white/10, white/60)
* Mood: Sophisticated, authoritative, cinematic, modern
* Background:
  * Full-screen immersive abstract video
  * Source: https://res.cloudinary.com/dsn0ks2hl/video/upload/v1/Monochrome_abstract_kukf5z.mp4
  * Visual: Slow-moving, fluid, smoke/silk-like grayscale textures
* Overlay Layers:
  * Black overlay (bg-black/40) for readability
  * Vertical gradient (black → transparent)
  * Radial gradient vignette focusing center

2. Typography System (Critical):

* Primary Display Font: Anton (Google Fonts)
  * Heavy, condensed, uppercase
  * Tight letter-spacing
  * Used for: "ELEVATE YOUR"
* Signature Script Font: Condiment (Google Fonts)
  * Elegant, fluid, lowercase script
  * Slight overlap on primary headline
  * Used for: "financial vision"
* Body/UI Font: Inter (Google Fonts)
  * Clean, geometric sans-serif
  * Used for navigation, paragraph text, buttons

3. Layout Structure:

Navigation Bar:
* Fixed at top, transparent initially
* Applies backdrop blur on scroll
* Left: Minimal geometric logo (diamond inside square)
* Center: Navigation links (Home, Product, Pricing, Contact)
* Right: "Sign Up" pill button (white background, black text)

Hero Section (Center-Aligned):
* Badge:
  * Pill-shaped container
  * Text: "NEW FEATURES AVAILABLE"
  * Includes small pulsing dot indicator
  * Subtle glassmorphic background (white/10 + blur)

* Headline (Main Focus):
  * Two-layer typography:
    * Top Layer: "ELEVATE YOUR" (Anton, bold, large)
    * Bottom Overlay: "financial vision" (Condiment, overlapping slightly)
  * Perfect visual balance and alignment

* Description:
  * Centered paragraph
  * Max-width for readability
  * Color: text-white/60
  * High line-height for elegance

* CTA Buttons:
  * Primary Button: "Explore"
    * Solid white background
    * Black text
    * Rounded-full
  * Secondary Button: "Book Demo"
    * Glassmorphic (white/10 background + backdrop blur)
    * White border (low opacity)

* Trusted By Section:
  * Grid of company logos
  * Grayscale (opacity 40%)
  * Positioned below CTA
  * Smooth hover interaction

4. Animation & Interaction Logic:

Entrance Animations (Framer Motion):
* Badge:
  * Initial: Y: 20, opacity: 0
  * Animate: Y: 0, opacity: 1
* Headline:
  * Slight delay
  * Scale + fade-in ("slam" effect but smooth)
* Description:
  * Fade-in with delay after headline
* Buttons:
  * Sequential fade + slight upward motion

Background Motion:
* Video plays automatically, looped, muted
* Very slow and smooth motion (no abrupt changes)

Hover Effects:
* Buttons:
  * Scale: 1.02
  * Soft white glow/shadow
* Navigation Links:
  * Center-out underline animation
* Logos:
  * TranslateY: -5px
  * Scale: 1.1
  * Remove grayscale (full color reveal)

5. Technical Requirements:
* Use React functional components
* Styling with Tailwind CSS
* Animations with Framer Motion (motion/react)
* Fully responsive design
* Optimize video performance (lazy loading, object-cover)
* Maintain accessibility (contrast, semantic HTML)

Final Output Expectation:
* Clean, modular React component structure
* Pixel-perfect layout
* Smooth, premium-level animations
* Minimal but powerful UI with strong brand identity`,
    isPremium: true,
  },
  {
    title: 'Space Voyage',
    category: 'Landing Page',
    image: '/templates/space-voyage.png',
    isPremium: true,
  },
  {
    title: 'Liquid Glass Ag...',
    category: 'Landing Page',
    image: '/templates/liquid-glass.png',
    isPremium: false,
  },
  {
    type: 'cta',
  },
  {
    title: 'Orbis NFT',
    category: 'Landing Page',
    image: '/templates/orbis-nft.png',
    isPremium: false,
  },
  {
    title: 'Velorah',
    category: 'Agency',
    image: '/templates/velorah.png',
    isPremium: false,
  },
  {
    title: 'Urban Jungle',
    category: 'Landing Page',
    image: '/templates/urban-jungle.png',
    isPremium: true,
  },
];

export const ShowcaseSection = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [showCopied, setShowCopied] = useState(false);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    },
  };

  return (
    <section id="templates" className="py-32 px-6 relative bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Gallery Header */}
        {!hideHeader && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center mb-24"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-8 bg-white/5 py-2 px-4 rounded-full border border-white/10 backdrop-blur-sm"
            >
              <span className="text-white/40 text-[13px] font-medium tracking-wide uppercase">Powered by</span>
              <div className="flex items-center gap-1.5">
                <Rocket className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-white font-bold tracking-tighter text-sm uppercase italic">Design Rocket</span>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-6xl md:text-[90px] font-black text-white leading-[0.9] mb-10 tracking-tighter uppercase"
            >
              Unlock Your AI <br />
              <span className="relative inline-block mt-4">
                Design{" "}
                <GradientText animate className="drop-shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                  Superpowers
                </GradientText>
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-white/50 max-w-xl text-lg md:text-xl mb-12 leading-relaxed font-medium"
            >
              Build beautiful landing pages in minutes with our ready-to-use prompt library. Just copy, paste, and launch.
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 rounded-full bg-white text-black font-bold text-lg flex items-center gap-3 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
            >
              Go Unlimited
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {templates.map((item, idx) => (
            item.type === 'cta' ? (
              <motion.div
                key="cta-card"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="col-span-1"
              >
                <div className="h-full min-h-[440px] flex flex-col justify-between p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10">
                    <Rocket className="w-10 h-10 text-primary opacity-20 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  </div>
                  
                  <div className="space-y-8 pt-8">
                    <div className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-primary" />
                      <span className="text-white font-bold tracking-tighter text-lg uppercase italic">Design Rocket</span>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-white leading-[1.1] tracking-tight">
                      Master AI-powered Websites design
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <p className="text-white/40 font-medium">
                      Join 10k+ designers
                    </p>
                    <button className="w-full py-5 rounded-2xl bg-white text-black font-bold hover:bg-white/90 hover:shadow-xl transition-all transform active:scale-95">
                      Start Learning for Free
                    </button>
                  </div>
                  
                  {/* Decorative Glow */}
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full -mr-24 -mb-24" />
                </div>
              </motion.div>
            ) : (
              <GalleryCard
                key={idx}
                title={item.title!}
                category={item.category!}
                image={item.image}
                video={item.video}
                prompt={item.prompt}
                isPremium={item.isPremium}
                onClick={() => setSelectedTemplate(item)}
              />
            )
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedTemplate && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTemplate(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[85vh] bg-[#0c0c0c] rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col"
            >
              {/* Modal Header - Pinned Top */}
              <div className="absolute top-0 inset-x-0 z-30 p-5 md:p-8 flex items-center justify-between bg-black/40 backdrop-blur-xl border-b border-white/5">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {selectedTemplate.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/40 font-medium tracking-wide">
                    {selectedTemplate.category}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  {selectedTemplate.prompt && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(selectedTemplate.prompt);
                        setShowCopied(true);
                        setTimeout(() => setShowCopied(false), 2000);
                      }}
                      className={cn(
                        "flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-md border text-xs md:text-sm font-semibold tracking-wide transition-all active:scale-95",
                        showCopied 
                          ? "bg-green-500/20 border-green-500/50 text-green-400" 
                          : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20"
                      )}
                    >
                      <Copy className="w-4 h-4" />
                      {showCopied ? "Copied!" : "Copy Prompt"}
                    </button>
                  )}
                  
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    className="p-2 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <X className="w-5 h-5 md:w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Body (Full-Width Media) */}
              <div className="flex-1 bg-black relative overflow-hidden group">
                {selectedTemplate.video ? (
                  <video
                    src={selectedTemplate.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={selectedTemplate.image}
                    alt={selectedTemplate.title}
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Visual Overlay - Top Left Info (Adjusted for full width) */}
                <div className="absolute top-[100px] left-8 z-20 flex flex-col gap-4">
                  <div className="px-5 py-2 bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-full w-fit">
                    <span className="text-[11px] font-black text-primary uppercase tracking-[0.25em]">Premium Framework</span>
                  </div>
                  
                  <div className="px-5 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full w-fit">
                    <span className="text-[11px] font-bold text-white uppercase tracking-[0.25em]">4K Motion Seed</span>
                  </div>
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                
                {/* Tech Stack Indicator (Floating Bottom Right) */}
                <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-bold">R</div>
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-bold">F</div>
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-bold">T</div>
                  </div>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Active Stack</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

