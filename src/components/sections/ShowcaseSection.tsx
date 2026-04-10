import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { GalleryCard } from '../ui/GalleryCard';
import { ArrowRight, Rocket, X, Copy } from 'lucide-react';

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
  * Vertical gradient (black \u2192 transparent)
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

export const ShowcaseSection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
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
            <span className="relative inline-block mt-4 pb-2">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                Design
              </span>{" "}
              <span className="relative z-10 text-primary">
                Superpowers
                <motion.span 
                  className="absolute inset-0 blur-3xl bg-primary/30 -z-10 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
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
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video md:aspect-[16/10] bg-[#121212] rounded-[32px] border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="absolute top-0 inset-x-0 z-20 p-6 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {selectedTemplate.title}
                  </h3>
                  <p className="text-sm text-white/50 font-medium uppercase tracking-wider">
                    {selectedTemplate.category}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  {selectedTemplate.prompt && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(selectedTemplate.prompt);
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold uppercase tracking-wider hover:bg-white/20 transition-all active:scale-95"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Prompt
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Body (Content) */}
              <div className="w-full h-full">
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

