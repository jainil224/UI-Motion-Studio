import { Navbar } from '@/components/ui/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { ShowcaseSection } from '@/components/sections/ShowcaseSection'
import { PromptLibrarySection } from '@/components/sections/PromptLibrarySection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { IntegrationSection } from '@/components/sections/IntegrationSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { Footer } from '@/components/sections/Footer'

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
      </main>
      <Footer />
    </div>
  )
}

export default App
