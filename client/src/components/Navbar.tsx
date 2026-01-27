import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import logo from '../assets/logo-Photoroom.png';

interface NavbarProps {
  onNavigateToSaaS?: () => void;
  onNavigateToTeam?: () => void;
  onNavigateToSolutions?: () => void;
}

const Navbar = ({ onNavigateToSaaS, onNavigateToTeam, onNavigateToSolutions }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setIsSolutionsOpen(false);
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
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => {
                if (onNavigateToTeam) {
                  onNavigateToTeam();
                } else {
                  scrollToSection('about');
                }
              }}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Nosso Time
            </button>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                onClick={() => {
                  if (onNavigateToSolutions) {
                    onNavigateToSolutions();
                  }
                }}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors flex items-center gap-1"
              >
                {t('nav.solutions')}
                <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className={`absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                  isSolutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {solutions.map((solution) => (
                  <button
                    key={solution.id}
                    onClick={() => {
                      if (solution.id === 'saas' && onNavigateToSaaS) {
                        onNavigateToSaaS();
                      } else {
                        scrollToSection('services');
                      }
                      setIsSolutionsOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    {solution.label}
                  </button>
                ))}
              </div>
            </div>

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
                  if (onNavigateToTeam) {
                    onNavigateToTeam();
                    setIsOpen(false);
                  } else {
                    scrollToSection('about');
                  }
                }}
                className="text-gray-700 hover:text-green-600 font-medium text-left px-2 py-2"
              >
                Nosso Time
              </button>

              {/* Mobile Solutions Dropdown */}
              <div className="px-2">
                <button
                  onClick={() => {
                    if (onNavigateToSolutions) {
                      onNavigateToSolutions();
                      setIsOpen(false);
                    } else {
                      setIsSolutionsOpen(!isSolutionsOpen);
                    }
                  }}
                  className="w-full text-gray-700 hover:text-green-600 font-medium text-left py-2 flex items-center justify-between"
                >
                  {t('nav.solutions')}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isSolutionsOpen && (
                  <div className="pl-4 space-y-2 mt-2 border-l-2 border-green-600">
                    {solutions.map((solution) => (
                      <button
                        key={solution.id}
                        onClick={() => {
                          if (solution.id === 'saas' && onNavigateToSaaS) {
                            onNavigateToSaaS();
                          } else {
                            scrollToSection('services');
                          }
                          setIsOpen(false);
                          setIsSolutionsOpen(false);
                        }}
                        className="w-full text-gray-600 hover:text-green-600 font-medium text-left py-2"
                      >
                        {solution.label}
                      </button>
                    ))}
                  </div>
                )}
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

