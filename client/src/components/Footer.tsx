import { useTranslation } from 'react-i18next';
import { Award, GraduationCap, Briefcase } from 'lucide-react';
import logo from '../assets/logo-Photoroom.png';
import founderPhoto from '../assets/Captusdrar.JPG';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Our Team Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Founder Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-12">
                {/* Photo */}
                <div className="flex justify-center order-2 md:order-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl blur-xl opacity-30"></div>
                    <img
                      src={founderPhoto}
                      alt="Founder"
                      className="relative rounded-2xl shadow-2xl w-80 h-80 object-cover border-4 border-white"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-6 order-1 md:order-2">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {t('about.founder.name')}
                    </h3>
                    <div className="flex items-center gap-2 text-green-600 font-medium mb-4">
                      <GraduationCap className="h-5 w-5" />
                      <span>{t('about.founder.credentials')}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t('about.founder.bio')}
                  </p>

                  {/* Credentials Highlights */}
                  <div className="grid grid-cols-1 gap-4 pt-4">
                    <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-green-100">
                      <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Master's in Intelligent Computing</div>
                        <div className="text-sm text-gray-600">Advanced expertise in AI and machine learning</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-blue-100">
                      <Briefcase className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">MBA in Data Science & Analytics</div>
                        <div className="text-sm text-gray-600">Business acumen combined with technical excellence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Tagline */}
            <div>
              <img src={logo} alt="Data Insights Logo" className="h-16 w-auto mb-4" />
              <p className="text-gray-400">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {t('nav.home')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Nosso Time
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {t('nav.services')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {t('nav.contact')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('nav.contact')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@datainsights.com</li>
              </ul>
            </div>
          </div>

          {/* Copyright and Legal Links */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400">{t('footer.copyright')}</p>
              <div className="flex items-center gap-6 text-gray-400 text-sm">
                <a href="#privacy" className="hover:text-green-400 transition-colors">Política de Privacidade</a>
                <span className="text-gray-600">|</span>
                <a href="#terms" className="hover:text-green-400 transition-colors">Termos & Condições</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
