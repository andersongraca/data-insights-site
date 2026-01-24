import { useTranslation } from 'react-i18next';
import { Lightbulb, Target, TrendingUp, HeadphonesIcon } from 'lucide-react';

const BenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Target,
      title: t('benefits.expertise.title'),
      description: t('benefits.expertise.description'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Lightbulb,
      title: t('benefits.innovation.title'),
      description: t('benefits.innovation.description'),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: TrendingUp,
      title: t('benefits.results.title'),
      description: t('benefits.results.description'),
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: HeadphonesIcon,
      title: t('benefits.support.title'),
      description: t('benefits.support.description'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('benefits.title')}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className={`${benefit.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-10 w-10 ${benefit.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

