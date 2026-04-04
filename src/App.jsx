import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactSection from './components/ContactSection'
import CTASection from './components/CTASection'
import FAQSection from './components/FAQSection'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import FormModal from './components/FormModal'
import HeroHeader from './components/HeroHeader'
import IntegrationsSection from './components/IntegrationsSection'
import InterfaceSection from './components/InterfaceSection'
import Navbar from './components/Navbar'
import PartnersSection from './components/PartnersSection'
import ReviewsSection from './components/ReviewsSection'
import TypeformSignup from './components/TypeformSignup'
import VideoCTA from './components/VideoCTA'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import PartnerPage from './pages/PartnerPage'

function SignupModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center "
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div
        className="relative bg-white overflow-hidden shadow-2xl !rounded-2xl"
        style={{ width: '90%', maxWidth: '1200px', height: '80vh' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="h-full overflow-y-auto">
          <TypeformSignup />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  const [signupModalOpen, setSignupModalOpen] = useState(false)

  const handleOpenModal = (url) => {
    setModalUrl(url)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleOpenSignup = () => {
    setSignupModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseSignup = () => {
    setSignupModalOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <Routes>
        <Route
          path="/partner"
          element={
            <PartnerPage />
          }
        />
        <Route
          path="/blog"
          element={
            <BlogPage />
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <BlogPostPage />
          }
        />
        <Route
          path="/"
          element={
            <div className="page-wrapper">
              <Navbar onOpenModal={handleOpenModal} onOpenSignup={handleOpenSignup} />
              <main className="main">
                <HeroHeader onOpenSignup={handleOpenSignup} />
                <IntegrationsSection />
                <FeaturesSection onOpenSignup={handleOpenSignup} />
                <InterfaceSection />
                <PartnersSection />
                <VideoCTA onOpenSignup={handleOpenSignup} />
                <ReviewsSection />
                <FAQSection />
                <ContactSection />
                <CTASection />
              </main>
              <Footer />
              <FormModal isOpen={modalOpen} onClose={handleCloseModal} url={modalUrl} />
              <SignupModal isOpen={signupModalOpen} onClose={handleCloseSignup} />
            </div>
          }
        />
      </Routes>
    </>
  )
}
