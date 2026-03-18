import { useTranslation } from 'react-i18next';
import { Factory, Shirt, Truck, Package, ShoppingCart, Briefcase, TrendingUp, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const ResourcesSection = () => {
  const { t } = useTranslation();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const sectors = [
    {
      id: 1,
      title: 'Indústria',
      description: 'Otimize processos de manufatura com análise de dados em tempo real e previsão de demanda',
      icon: Factory,
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/20 to-blue-600/20',
      benefits: ['Redução de custos', 'Aumento de eficiência', 'Controle de qualidade'],
      stats: '45% de aumento em produtividade'
    },
    {
      id: 2,
      title: 'Têxtil',
      description: 'Gerencie cadeias de suprimento complexas e otimize inventário com inteligência artificial',
      icon: Shirt,
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/20 to-purple-600/20',
      benefits: ['Gestão de inventário', 'Previsão de tendências', 'Redução de desperdício'],
      stats: '38% redução em desperdício'
    },
    {
      id: 3,
      title: 'Distribuição',
      description: 'Otimize rotas de entrega e gerencie logística com dashboards inteligentes',
      icon: Truck,
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-500/20 to-green-600/20',
      benefits: ['Otimização de rotas', 'Rastreamento em tempo real', 'Redução de custos'],
      stats: '52% redução em tempo de entrega'
    },
    {
      id: 4,
      title: 'Logística',
      description: 'Acompanhe movimentação de carga e otimize armazenagem com análise preditiva',
      icon: Package,
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-500/20 to-orange-600/20',
      benefits: ['Rastreamento completo', 'Previsão de demanda', 'Otimização de espaço'],
      stats: '60% melhoria em eficiência'
    },
    {
      id: 5,
      title: 'Comércio a Retalho',
      description: 'Aumente vendas com análise de comportamento de clientes e gestão de estoque inteligente',
      icon: ShoppingCart,
      color: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-500/20 to-pink-600/20',
      benefits: ['Análise de vendas', 'Gestão de estoque', 'Experiência do cliente'],
      stats: '35% aumento em vendas'
    },
    {
      id: 6,
      title: 'Prestação de Serviços',
      description: 'Melhore alocação de recursos e acompanhe performance com métricas em tempo real',
      icon: Briefcase,
      color: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-500/20 to-indigo-600/20',
      benefits: ['Alocação de recursos', 'Análise de performance', 'Satisfação do cliente'],
      stats: '48% melhoria em produtividade'
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1 && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [visibleCards]);

  return (
    <section id="resources" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-gray-900 mb-6 border border-blue-200">
            <BarChart3 className="h-4 w-4 text-blue-600" />
            <span>Soluções por Setor</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Recursos & Aprendizado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tudo que você precisa para dominar nossas soluções e maximizar o valor do seu investimento
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={sector.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDuration: isVisible ? '600ms' : '0ms',
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  transitionProperty: isVisible ? 'opacity, transform' : 'none'
                }}
              >
                {/* Top Color Bar */}
                <div className={`h-1 bg-gradient-to-r ${sector.color}`}></div>

                {/* Icon Background */}
                <div className={`bg-gradient-to-br ${sector.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
                  </div>
                  <div className="relative z-10 flex items-center justify-between">
                    <Icon className="h-10 w-10" />
                    <TrendingUp className="h-6 w-6 opacity-60" />
                  </div>
                </div>

                {/* Content - Flex grow para ocupar espaço disponível */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                    {sector.description}
                  </p>

                  {/* Stats */}
                  <div className={`bg-gradient-to-br ${sector.bgGradient} rounded-lg p-4 mb-6 border border-gray-200`}>
                    <p className="text-sm font-semibold text-gray-900 text-center">
                      {sector.stats}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {sector.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${sector.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Zap className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm font-medium text-justify">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - Sempre no final */}
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${sector.color} text-white hover:shadow-lg hover:shadow-current/50 group inline-flex items-center justify-center gap-2 mt-auto`}>
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Transforme Seu Negócio com Dados
            </h3>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Independentemente do seu setor, temos a solução perfeita para maximizar o valor dos seus dados e impulsionar o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                Pedir Proposta
                <Zap className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-slate-400 text-white rounded-lg font-semibold hover:border-slate-300 hover:bg-white/10 transition-all duration-300">
                Ver Casos de Sucesso
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ResourcesSection;
