import './App.css';
import './i18n';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import SolutionsSection from './components/SolutionsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
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
