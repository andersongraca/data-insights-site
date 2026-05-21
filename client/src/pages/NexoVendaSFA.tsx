import { ArrowLeft, TrendingUp, Zap, Lock, Map, QrCode, BarChart3, Wifi, Truck, Package, Factory, ShoppingCart, Users, Briefcase, Check, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface NexoVendaSFAProps {
  onBack: () => void;
}

const NexoVendaSFA = ({ onBack }: NexoVendaSFAProps) => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      id: 1,
      title: 'Catálogo Digital',
      description: 'Acesso móvel a informações detalhadas de produtos, incluindo fotos, descrições, preços e stock em tempo real.',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Operação Offline',
      description: 'Funcionalidade robusta que permite aos vendedores trabalhar sem conexão à internet, sincronizando dados automaticamente.',
      icon: Wifi,
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      title: 'Faturação no Terreno',
      description: 'Emissão de encomendas e faturas diretamente no dispositivo móvel, com conformidade fiscal AT e ATCUD.',
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 4,
      title: 'Integração ERP Bidirecional',
      description: 'Conectividade nativa com Cegid Primavera, PHC GO e Sage para sincronização em tempo real de dados mestres.',
      icon: Lock,
      color: 'from-green-500 to-green-600',
    },
    {
      id: 5,
      title: 'Otimização de Rotas',
      description: 'Planeamento de rotas eficientes, alertas de clientes próximos e geofencing para maximizar produtividade.',
      icon: Map,
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      id: 6,
      title: 'Leitura de Código de Barras',
      description: 'Agilização da adição de produtos e inventário através de leitura integrada de códigos de barras e QR codes.',
      icon: QrCode,
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const segments = [
    {
      id: 1,
      title: 'Distribuição',
      description: 'Otimize rotas de entrega e gerencie logística com dashboards inteligentes',
      icon: Truck,
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/20 to-blue-600/20',
      metric: '52% redução em tempo de entrega',
    },
    {
      id: 2,
      title: 'Logística',
      description: 'Acompanhe carga e otimize armazenagem com análise preditiva',
      icon: Package,
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/20 to-purple-600/20',
      metric: '60% melhoria em eficiência',
    },
    {
      id: 3,
      title: 'Indústria',
      description: 'Otimize manufatura com análise de dados e previsão de demanda',
      icon: Factory,
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-500/20 to-orange-600/20',
      metric: '45% de aumento em produtividade',
    },
    {
      id: 4,
      title: 'Wholesale',
      description: 'Gerencie cadeias de suprimento e otimize inventário com IA',
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-500/20 to-green-600/20',
      metric: '38% redução em desperdício',
    },
    {
      id: 5,
      title: 'Retalho',
      description: 'Aumente vendas com análise de clientes e gestão de estoque',
      icon: Users,
      color: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-500/20 to-pink-600/20',
      metric: '35% aumento em vendas',
    },
    {
      id: 6,
      title: 'Serviços',
      description: 'Melhore alocação de recursos e performance com métricas',
      icon: Briefcase,
      color: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-500/20 to-indigo-600/20',
      metric: '48% melhoria em produtividade',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '49€',
      period: '/mês',
      description: 'Para micro-empresas com até 3 vendedores',
      features: ['Faturação básica', 'Catálogo Digital', 'Operação Offline', '1 utilizador', 'Suporte por email'],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '129€',
      period: '/mês',
      description: 'Para PMEs em crescimento com equipa de vendas',
      features: ['Tudo do Starter +', 'Integração ERP completa', 'Gestão de Rotas', 'Dashboard avançado', 'Até 10 utilizadores'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Sob Consulta',
      period: '',
      description: 'Para grandes distribuidores e operações complexas',
      features: ['Tudo do Professional +', 'Utilizadores ilimitados', 'Customização total', 'API aberta', 'Suporte 24/7'],
      highlighted: false,
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NV</span>
            </div>
            <span className="font-bold text-lg text-gray-900">NexoVenda</span>
          </div>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 w-fit">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-600">SFA Puro para Portugal</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Automação de Força de Vendas para o Terreno
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Integração nativa com ERPs portugueses (Primavera, PHC, Sage), operação offline robusta e inteligência transacional. Tudo que os seus vendedores precisam para fechar negócios no local do cliente.
              </p>

              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Catálogo Digital</strong> com stock em tempo real
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Faturação no Terreno</strong> com conformidade AT
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-3 rounded-lg font-medium transition-colors">
                  Começar Demonstração
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-base px-8 py-3 rounded-lg font-medium transition-colors">
                  Ver Planos
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">NexoVenda Dashboard</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">2.4M</div>
                      <div className="text-xs text-gray-600 mt-1">Vendas Mês</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">+34%</div>
                      <div className="text-xs text-gray-600 mt-1">Crescimento</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600">156</div>
                      <div className="text-xs text-gray-600 mt-1">Encomendas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Funcionalidades Principais</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tudo que precisa para dominar o NexoVenda e maximizar a eficiência operacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-gray-50">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>

                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>

                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Soluções por Segmento</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              NexoVenda é desenhado para os principais segmentos do mercado português
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((segment, index) => {
              const Icon = segment.icon;
              const isVisible = visibleCards.includes(index);

              return (
                <div
                  key={segment.id}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDuration: isVisible ? '600ms' : '0ms',
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                    transitionProperty: isVisible ? 'opacity, transform' : 'none',
                  }}
                >
                  <div className={`h-1 bg-gradient-to-r ${segment.color}`}></div>

                  <div className={`bg-gradient-to-br ${segment.color} p-6 text-white relative overflow-hidden`}>
                    <Icon className="h-10 w-10" />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{segment.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{segment.description}</p>

                    <div className={`bg-gradient-to-br ${segment.bgGradient} rounded-lg p-4 mb-6 border border-gray-200`}>
                      <p className="text-sm font-semibold text-gray-900 text-center">{segment.metric}</p>
                    </div>

                    <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${segment.color} text-white hover:shadow-lg mt-auto`}>
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Preços Transparentes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  plan.highlighted
                    ? 'md:scale-105 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl'
                    : 'bg-white border border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className={`p-8 ${plan.highlighted ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gray-50'}`}>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>{plan.period}</span>
                    )}
                  </div>
                </div>

                <div className={`p-8 ${plan.highlighted ? 'bg-blue-50' : 'bg-white'}`}>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-blue-600' : 'text-green-600'}`} />
                        <span className={plan.highlighted ? 'text-gray-800' : 'text-gray-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-all ${
                      plan.highlighted
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {plan.highlighted ? 'Solicitar Demo' : 'Começar Grátis'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Transformar Suas Vendas?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de empresas portuguesas que já estão a maximizar a sua força de vendas com NexoVenda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300">
              Pedir Proposta
            </button>
            <button className="px-8 py-4 border-2 border-slate-400 text-white rounded-lg font-semibold hover:border-slate-300 hover:bg-white/10 transition-all duration-300">
              Ver Casos de Sucesso
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NexoVendaSFA;
