import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Cloud, BarChart3, Database, X } from 'lucide-react';

interface Solution {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string;
  color: string;
  bgColor: string;
}

const SolutionsSection = () => {
  const { t } = useTranslation();
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  const solutions: Solution[] = [
    {
      id: 'saas',
      icon: Cloud,
      title: t('services.saas.title'),
      description: t('services.saas.description'),
      details: 'Nossas soluções SaaS incluem plataformas de análise em tempo real, dashboards personalizados, integração com múltiplas fontes de dados e suporte técnico 24/7. Escalamos com seu negócio, desde startups até empresas de grande porte.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'dataScience',
      icon: BarChart3,
      title: t('services.dataScience.title'),
      description: t('services.dataScience.description'),
      details: 'Utilizamos técnicas avançadas de machine learning, análise preditiva e modelagem estatística para extrair insights valiosos dos seus dados. Nossos modelos são otimizados para precisão e interpretabilidade.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'dataEngineering',
      icon: Database,
      title: t('services.dataEngineering.title'),
      description: t('services.dataEngineering.description'),
      details: 'Construímos pipelines robustos e escaláveis que garantem qualidade de dados, reduzem latência e facilitam a integração com seus sistemas existentes. Utilizamos tecnologias como Apache Spark, Kafka e cloud data warehouses.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore nossas soluções em detalhes e descubra como podemos ajudar seu negócio
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.id}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover-lift cursor-pointer group transition-all"
              >
                <div className={`${solution.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-8 w-8 ${solution.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                
                <button
                  onClick={() => setSelectedSolution(solution.id)}
                  className={`inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium transition-all ${solution.color} hover:bg-opacity-10 border-2 ${solution.color.replace('text-', 'border-')}`}
                >
                  {t('hero.cta2')}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal - Saiba Mais */}
      {selectedSolution && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-green-600 to-green-700 text-white p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold">
                {solutions.find(s => s.id === selectedSolution)?.title}
              </h3>
              <button
                onClick={() => setSelectedSolution(null)}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Descrição Completa</h4>
                <p className="text-gray-700 leading-relaxed">
                  {solutions.find(s => s.id === selectedSolution)?.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Detalhes da Solução</h4>
                <p className="text-gray-700 leading-relaxed">
                  {solutions.find(s => s.id === selectedSolution)?.details}
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Benefícios Principais</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span>Implementação rápida e eficiente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span>Suporte técnico dedicado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span>Escalabilidade garantida</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span>ROI mensurável</span>
                  </li>
                </ul>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setSelectedSolution(null);
                  }}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Entrar em Contacto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SolutionsSection;
