import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/sections/Footer'
import { HomePage } from '@/pages/HomePage'
import { PromptsPage } from '@/pages/PromptsPage'

// Helper to reset scroll on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/prompts" element={<PromptsPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
