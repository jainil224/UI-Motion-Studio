import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/sections/Footer'
import { HomePage } from '@/pages/HomePage'
import { PromptsPage } from '@/pages/PromptsPage'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prompts" element={<PromptsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
