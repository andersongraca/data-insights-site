import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import logo from '../assets/logo-Photoroom.png';
import SolutionsDropdown from './SolutionsDropdown';


interface NavbarProps {
  onNavigateToSaaS?: () => void;
  onNavigateToTeam?: () => void;
  onNavigateToSolutions?: () => void;
  onNavigateToConsulting?: () => void;
}

const Navbar = ({ onNavigateToSaaS, onNavigateToTeam, onNavigateToSolutions, onNavigateToConsulting }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);


  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const solutions = [
    { id: 'saas', label: t('solutions.saas') },
    { id: 'dataScience', label: t('solutions.dataScience') },
    { id: 'dataEngineering', label: t('solutions.dataEngineering') }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="Data Insights Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 ml-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Recursos
            </button>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-green-600 font-medium transition-colors flex items-center gap-1"
              >
                Serviços
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                <button
                  onClick={() => onNavigateToConsulting?.()}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  Consultoria Informática
                </button>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <SolutionsDropdown onNavigateToTeam={onNavigateToTeam} />

            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              {t('nav.contact')}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Globe className="h-4 w-4" />
              {i18n.language === 'en' ? 'PT' : 'EN'}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
            >
              {t('hero.cta1')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Globe className="h-4 w-4" />
              {i18n.language === 'en' ? 'PT' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-green-600 font-medium text-left px-2 py-2"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => {
                  scrollToSection('resources');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-green-600 font-medium text-left px-2 py-2"
              >
                Recursos
              </button>

              {/* Mobile Services Dropdown */}
              <div className="px-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-700 hover:text-green-600 font-medium text-left px-2 py-2 flex items-center gap-1 w-full"
                >
                  Serviços
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="bg-gray-50 rounded-lg mt-2 py-2">
                    <button
                      onClick={() => {
                        onNavigateToConsulting?.();
                        setIsOpen(false);
                        setIsServicesOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-600 transition-colors"
                    >
                      Consultoria Informática
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Solutions Dropdown */}
              <div className="px-2">
                <div onClick={() => setIsOpen(false)}>
                  <SolutionsDropdown onNavigateToTeam={onNavigateToTeam} />
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-green-600 font-medium text-left px-2 py-2"
              >
                {t('nav.contact')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition-colors w-full"
              >
                {t('hero.cta1')}
              </button>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;

