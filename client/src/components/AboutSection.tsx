import { useTranslation } from 'react-i18next';
import { Award, GraduationCap, Briefcase } from 'lucide-react';
import founderPhoto from '../assets/Captusdrar.JPG';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Company Description */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            {t('about.description')}
          </p>
        </div>

        {/* Founder Section */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
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
            <div className="space-y-6">
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
                <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-4">
                  <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Master's in Intelligent Computing</div>
                    <div className="text-sm text-gray-600">Advanced expertise in AI and machine learning</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-4">
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
    </section>
  );
};

export default AboutSection;

