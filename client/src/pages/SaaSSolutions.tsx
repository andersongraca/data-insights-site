import { useTranslation } from 'react-i18next';
import { Cloud, Check, ArrowRight, Zap, Shield, BarChart3, Users, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';

interface SaaSSolutionsProps {
  onBack?: () => void;
}

const SaaSSolutions = ({ onBack }: SaaSSolutionsProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Cloud,
      title: 'Baseado na Cloud',
      description: 'Acesso de qualquer lugar, a qualquer hora, em qualquer dispositivo'
    },
    {
      icon: Zap,
      title: 'Desempenho',
      description: 'Infraestrutura otimizada para velocidade e fiabilidade máximas'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Encriptação de nível empresarial e conformidade com padrões internacionais'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Dashboards em tempo real com insights acionáveis'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Ferramentas integradas para trabalho em equipa eficiente'
    },
    {
      icon: Cpu,
      title: 'Escalabilidade',
      description: 'Cresce com o seu negócio sem limitações de infraestrutura'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '89',
      currency: '€',
      description: 'Perfeito para pequenas equipas',
      features: ['Até 5 utilizadores', '10 GB de armazenamento', 'Suporte por email', 'Atualizações mensais']
    },
    {
      name: 'Professional',
      price: '269',
      currency: '€',
      description: 'Para empresas em crescimento',
      features: ['Até 50 utilizadores', '500 GB de armazenamento', 'Suporte prioritário', 'Acesso à API', 'Integrações personalizadas'],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      currency: '',
      description: 'Solução completa para grandes organizações',
      features: ['Utilizadores ilimitados', 'Armazenamento ilimitado', 'Suporte 24/7 dedicado', 'SLA garantido', 'Implementação personalizada']
    }
  ];

  const useCases = [
    {
      title: 'Gestão de Projetos',
      description: 'Organize, acompanhe e colabore em projetos com eficiência',
      icon: '📊'
    },
    {
      title: 'CRM Integrado',
      description: 'Gerencie relacionamentos com clientes de forma centralizada',
      icon: '👥'
    },
    {
      title: 'Automação de Processos',
      description: 'Reduza tarefas manuais e aumente a produtividade',
      icon: '⚙️'
    },
    {
      title: 'Relatórios Avançados',
      description: 'Gere insights profundos com análises personalizadas',
      icon: '📈'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <Cloud className="h-4 w-4 text-green-400" />
                <span>Solução SaaS Completa</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Soluções SaaS de Ponta
              </h1>

              <p className="text-xl text-gray-200 max-w-lg">
                Plataforma cloud escalável, segura e intuitiva para transformar a sua operação num modelo moderno e eficiente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105">
                  Começar Teste Gratuito
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-4 backdrop-blur-sm rounded-lg font-medium transition-colors border">
                  Ver Demonstração
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-gray-300 text-sm">Empresas Ativas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99,9%</div>
                  <div className="text-gray-300 text-sm">Disponibilidade</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-gray-300 text-sm">Suporte</div>
                </div>
              </div>
            </div>

            {/* Right - Dashboard Visual */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Performance em Tempo Real</h3>
                    <p className="text-gray-300 text-sm">Última atualização: agora</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-400/50 transition-all">
                    <p className="text-gray-300 text-xs font-medium mb-2">Taxa de Conversão</p>
                    <div className="text-2xl font-bold text-white">94,2%</div>
                    <div className="text-green-400 text-xs mt-1">↑ 12,5%</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/50 transition-all">
                    <p className="text-gray-300 text-xs font-medium mb-2">Tempo Médio</p>
                    <div className="text-2xl font-bold text-white">4,2m</div>
                    <div className="text-blue-400 text-xs mt-1">↓ 8,2%</div>
                  </div>
                </div>

                {/* Chart Visualization */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-gray-300 text-xs font-medium mb-3">Tendência de Dados</p>
                  <div className="flex items-end justify-between gap-2 h-24">
                    {[40, 55, 45, 70, 60, 85, 75, 90].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-green-400 to-blue-400 rounded-t opacity-80 hover:opacity-100 transition-opacity"
                        style={{
                          height: `${height}%`,
                          animation: `slideUp 0.6s ease-out ${i * 0.1}s both`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-green-400 text-lg font-bold">✓</div>
                    <p className="text-gray-300 text-xs">Online</p>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 text-lg font-bold">⚡</div>
                    <p className="text-gray-300 text-xs">Rápido</p>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 text-lg font-bold">🔒</div>
                    <p className="text-gray-300 text-xs">Seguro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recursos Poderosos
            </h2>
            <p className="text-xl text-gray-600">
              Tudo o que precisa para gerir o seu negócio com eficiência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                    <Icon className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Casos de Uso
            </h2>
            <p className="text-xl text-gray-600">
              Aplicações práticas para diferentes áreas do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-gray-200 hover:border-green-300 transition-all hover:shadow-lg"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-700">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Planos de Preço
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano perfeito para a sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-green-600 to-green-700 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`mb-6 ${plan.highlighted ? 'text-green-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <span className="text-4xl font-bold">{plan.currency}{plan.price}</span>
                    {plan.price !== 'Custom' && <span className={plan.highlighted ? 'text-green-100' : 'text-gray-600'}>/mês</span>}
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-all mb-8 ${
                      plan.highlighted
                        ? 'bg-white text-green-600 hover:bg-gray-100'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {plan.price === 'Personalizado' ? 'Solicitar Demonstração' : 'Começar Agora'}
                  </button>

                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-green-400 mt-1" />
                        <span className={plan.highlighted ? 'text-green-50' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar o Seu Negócio?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Comece com 14 dias de teste gratuito. Sem cartão de crédito necessário.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-4 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105">
            Começar Teste Gratuito
            <ArrowRight className="ml-2 h-5 w-5 inline" />
          </button>
        </div>
      </section>

      <Footer />
      <FloatingChat />

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
        @keyframes slideUp {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SaaSSolutions;
