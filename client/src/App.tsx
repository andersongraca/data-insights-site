import './App.css';
import './i18n';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import SolutionsSection from './components/SolutionsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import SaaSSolutions from './pages/SaaSSolutions';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'saas'>('home');

  if (currentPage === 'saas') {
    return (
      <div className="min-h-screen">
        <SaaSSolutions onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar onNavigateToSaaS={() => setCurrentPage('saas')} />
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <AboutSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
      <FloatingChat />
    </div>
  );
}

export default App;
