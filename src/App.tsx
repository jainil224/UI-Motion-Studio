import { Navbar } from '@/components/ui/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { ShowcaseSection } from '@/components/sections/ShowcaseSection'
import { PromptLibrarySection } from '@/components/sections/PromptLibrarySection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { IntegrationSection } from '@/components/sections/IntegrationSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { Footer } from '@/components/sections/Footer'
import AsciiWave from '@/components/lightswind/ascii-wave'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ShowcaseSection />
        <PromptLibrarySection />
        <FeaturesSection />
        <IntegrationSection />
        <PricingSection />
        
        {/* Decorative Ascii Wave Section */}
        <section className="w-full h-[30vh] md:h-[40vh] relative overflow-hidden border-t border-white/5 opacity-80">
          <AsciiWave speed={1.5} color="#FFFFFF" />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
