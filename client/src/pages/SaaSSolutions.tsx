import { useTranslation } from 'react-i18next';
import { Cloud, Check, ArrowRight, Zap, Shield, BarChart3, Users, Cpu, Lock, Rocket, TrendingUp, Globe, ChevronRight } from 'lucide-react';
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
      description: 'Acesso de qualquer lugar, a qualquer hora, em qualquer dispositivo',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Desempenho',
      description: 'Infraestrutura otimizada para velocidade e fiabilidade máximas',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Encriptação de nível empresarial e conformidade com padrões internacionais',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Dashboards em tempo real com insights acionáveis',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Ferramentas integradas para trabalho em equipa eficiente',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Cpu,
      title: 'Escalabilidade',
      description: 'Cresce com o seu negócio sem limitações de infraestrutura',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '89',
      currency: '€',
      description: 'Perfeito para pequenas equipas',
      features: ['Até 5 utilizadores', '10 GB de armazenamento', 'Suporte por email', 'Atualizações mensais'],
      icon: '🚀'
    },
    {
      name: 'Professional',
      price: '269',
      currency: '€',
      description: 'Para empresas em crescimento',
      features: ['Até 50 utilizadores', '500 GB de armazenamento', 'Suporte prioritário', 'Acesso à API', 'Integrações personalizadas'],
      highlighted: true,
      icon: '⭐'
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      currency: '',
      description: 'Solução completa para grandes organizações',
      features: ['Utilizadores ilimitados', 'Armazenamento ilimitado', 'Suporte 24/7 dedicado', 'SLA garantido', 'Implementação personalizada'],
      icon: '👑'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />

      {/* Hero Section com Imagem */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030970552/Gw6uUZWcNmjX2i4eQyxQ43/saas-hero-platform-4uetFGQvMV8aEytKNP29cU.webp"
            alt="SaaS Platform"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className={`text-center mb-12 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full">
              <span className="text-cyan-400 text-sm font-semibold">PLATAFORMA SAAS COMPLETA</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Soluções SaaS de Ponta
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Plataforma cloud escalável, segura e intuitiva para transformar a sua operação num modelo moderno e eficiente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                Começar Teste Gratuito <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Ver Demonstração
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-slate-400 text-sm mt-2">Empresas Ativas</div>
              </div>
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400">99,9%</div>
                <div className="text-slate-400 text-sm mt-2">Disponibilidade</div>
              </div>
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-slate-400 text-sm mt-2">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section com Imagem */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos Poderosos</h2>
            <p className="text-slate-400 text-lg">Tudo o que precisa para gerir o seu negócio com eficiência</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-xl w-fit mb-4 text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section com Imagem */}
      <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030970552/Gw6uUZWcNmjX2i4eQyxQ43/saas-integration-ecosystem-g2F5skxJJcppZiqVTQDQ2X.webp"
            alt="Integration Ecosystem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ecossistema de Integrações
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Conecte todas as suas ferramentas favoritas. Nossa plataforma SaaS integra-se perfeitamente com centenas de aplicações, criando um ecossistema produtivo e eficiente.
              </p>
              <ul className="space-y-4">
                {[
                  'Integrações com APIs abertas',
                  'Webhooks para automação avançada',
                  'Sincronização em tempo real',
                  'Suporte para integrações personalizadas',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl blur-2xl opacity-20"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030970552/Gw6uUZWcNmjX2i4eQyxQ43/saas-integration-ecosystem-g2F5skxJJcppZiqVTQDQ2X.webp"
                    alt="Integration"
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section com Imagem */}
      <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030970552/Gw6uUZWcNmjX2i4eQyxQ43/saas-team-collaboration-6prjP5NfV56cswrccGtwt4.webp"
            alt="Team Collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030970552/Gw6uUZWcNmjX2i4eQyxQ43/saas-team-collaboration-6prjP5NfV56cswrccGtwt4.webp"
                    alt="Collaboration"
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Colaboração em Tempo Real
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Sua equipa inteira pode trabalhar simultaneamente na mesma plataforma. Compartilhe documentos, comunique em tempo real e acompanhe o progresso de todos os projetos.
              </p>
              <ul className="space-y-4">
                {[
                  'Chat integrado com notificações',
                  'Edição colaborativa de documentos',
                  'Histórico completo de atividades',
                  'Permissões granulares por utilizador',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section com Imagem */}
      <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-35">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030970552/Gw6uUZWcNmjX2i4eQyxQ43/saas-security-infrastructure-StxQ2QTKDMHJ67f4B5pmPq.webp"
            alt="Security"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Segurança Enterprise</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Proteção de dados em nível corporativo com conformidade total com regulamentações internacionais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Lock className="w-8 h-8" />,
                title: 'Encriptação End-to-End',
                description: 'Todos os dados são encriptados em trânsito e em repouso',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Conformidade Regulatória',
                description: 'ISO 27001, SOC 2, GDPR e outras certificações',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Backups Globais',
                description: 'Redundância geográfica com múltiplos centros de dados',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${item.color} p-3 rounded-xl w-fit mb-4 text-white`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Planos de Preços</h2>
            <p className="text-slate-400 text-lg">Escolha o plano perfeito para o seu negócio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.highlighted
                    ? 'md:scale-105 border-2 border-cyan-500'
                    : 'border border-slate-700/50'
                } bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-green-500 text-white text-center py-2 text-sm font-semibold">
                    MAIS POPULAR
                  </div>
                )}

                <div className={`p-8 ${plan.highlighted ? 'pt-16' : ''}`}>
                  <div className="text-4xl mb-2">{plan.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.currency && <span className="text-2xl ml-2">{plan.currency}</span>}
                    {plan.price !== 'Personalizado' && <span className="text-slate-400">/mês</span>}
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                        : 'border border-slate-600 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400'
                    }`}
                  >
                    Começar Agora
                  </button>

                  <ul className="space-y-4">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Casos de Uso</h2>
            <p className="text-slate-400 text-lg">Aplicações práticas para diferentes áreas do seu negócio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-r from-cyan-600/20 via-green-600/20 to-cyan-600/20 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Comece com um teste gratuito de 30 dias. Sem cartão de crédito necessário. Acesso completo a todos os recursos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2">
              Começar Teste Gratuito <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default SaaSSolutions;
