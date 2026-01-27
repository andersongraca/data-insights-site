import './App.css';
import './i18n';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';


import SolutionsSection from './components/SolutionsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import SaaSSolutions from './pages/SaaSSolutions';
import PlatformOverviewSection from './components/PlatformOverviewSection';
import OurTeam from './pages/OurTeam';
import ExpandedSolutions from './pages/ExpandedSolutions';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'saas' | 'team' | 'solutions'>('home');

  if (currentPage === 'saas') {
    return (
      <div className="min-h-screen">
        <SaaSSolutions onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'team') {
    return (
      <div className="min-h-screen">
        <OurTeam onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'solutions') {
    return (
      <div className="min-h-screen">
        <ExpandedSolutions onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar onNavigateToSaaS={() => setCurrentPage('saas')} onNavigateToTeam={() => setCurrentPage('team')} onNavigateToSolutions={() => setCurrentPage('solutions')} />
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <PlatformOverviewSection />
      <ContactSection />
      <Footer />
      <FloatingChat />
    </div>
  );
}

export default App;
