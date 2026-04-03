import { useState } from 'react'
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
import VideoCTA from './components/VideoCTA'



export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  const handleOpenModal = (url) => {
    setModalUrl(url)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="page-wrapper">
      <Navbar onOpenModal={handleOpenModal} />
      <main className="main">
        <HeroHeader onOpenModal={handleOpenModal} />
        <IntegrationsSection />
        <FeaturesSection onOpenModal={handleOpenModal} />
        <InterfaceSection />
        <PartnersSection />
        <VideoCTA onOpenModal={handleOpenModal} />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <FormModal isOpen={modalOpen} onClose={handleCloseModal} url={modalUrl} />
    </div>
  )
}
