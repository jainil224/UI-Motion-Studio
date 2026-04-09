import { motion, type Variants } from 'framer-motion';
import { GalleryCard } from '../ui/GalleryCard';
import { ArrowRight, Rocket } from 'lucide-react';

const templates = [
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
                image={item.image!}
                isPremium={item.isPremium}
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
};

