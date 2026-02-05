import './App.css';
import './i18n';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StrategicLeadersSection from './components/StrategicLeadersSection';


import SolutionsSection from './components/SolutionsSection';
import ResourcesSection from './components/ResourcesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import SaaSSolutions from './pages/SaaSSolutions';
import PlatformOverviewSection from './components/PlatformOverviewSection';
import OurTeam from './pages/OurTeam';
import NewsletterSection from './components/NewsletterSection';


function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'saas' | 'team'>('home');

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

  return (
    <div className="min-h-screen">
      <Navbar onNavigateToSaaS={() => setCurrentPage('saas')} onNavigateToTeam={() => setCurrentPage('team')} />
      <HeroSection />
      <StrategicLeadersSection />
      <SolutionsSection onNavigateToSaaS={() => setCurrentPage('saas')} />
      <PlatformOverviewSection />
      <ResourcesSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
      <FloatingChat />
    </div>
  );
}

export default App;
