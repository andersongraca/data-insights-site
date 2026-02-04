import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, Layers, Workflow, BarChart3, Brain, Rocket } from 'lucide-react';

const PlatformOverviewSection = () => {
  const { t } = useTranslation();
  const [activePhase, setActivePhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const phases = [
    {
      number: 1,
      title: 'Planeje',
      description: 'Defina objetivos estratégicos e mapeie iniciativas com inteligência artificial',
      icon: Brain,
      color: 'from-blue-500 to-blue-600',
      details: ['Análise de mercado', 'Benchmarking competitivo', 'Definição de KPIs']
    },
    {
      number: 2,
      title: 'Execute',
      description: 'Implemente com precisão usando automação e monitoramento em tempo real',
      icon: Rocket,
      color: 'from-green-500 to-green-600',
      details: ['Automação inteligente', 'Monitoramento contínuo', 'Otimização em tempo real']
    },
    {
      number: 3,
      title: 'Adapte-se',
      description: 'Ajuste estratégias com base em dados e insights contínuos',
      icon: Workflow,
      color: 'from-purple-500 to-purple-600',
      details: ['Análise preditiva', 'Ajustes automáticos', 'Aprendizado contínuo']
    }
  ];

  const capabilities = [
    {
      icon: Layers,
      title: 'Integração Total',
      description: 'Conecte todas as suas ferramentas em um único fluxo de trabalho'
    },
    {
      icon: BarChart3,
      title: 'Insights em Tempo Real',
      description: 'Visualize dados complexos com dashboards interativos'
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Reduza tarefas manuais com IA e machine learning'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-gray-900 mb-6 border border-blue-200">
            <Zap className="h-4 w-4 text-blue-600" />
            <span>Estratégia Contínua Alimentada por IA</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Visão Geral da Plataforma
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforme sua estratégia de um processo trimestral em um fluxo colaborativo e sempre ativo. Planeje, execute e adapte-se continuamente com inteligência artificial.
          </p>
        </div>

        {/* Three Phases */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isActive = activePhase === index;
            
            return (
              <div
                key={index}
                onClick={() => setActivePhase(index)}
                className={`group relative cursor-pointer transition-all duration-500 ${
                  isActive ? 'md:scale-105' : 'md:hover:scale-102'
                }`}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} rounded-3xl opacity-0 ${isActive ? 'opacity-15' : 'group-hover:opacity-10'} blur-xl transition-opacity duration-500`}></div>

                {/* Card */}
                <div className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 ${
                  isActive 
                    ? `border-transparent shadow-2xl` 
                    : 'border-gray-200 shadow-lg group-hover:shadow-xl group-hover:border-gray-300'
                }`}
                style={{
                  background: isActive 
                    ? `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)` 
                    : 'white'
                }}>
                  {/* Number Badge */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-3xl font-bold text-white">{phase.number}</span>
                  </div>

                  {/* Icon */}
                  <Icon className={`h-12 w-12 mb-6 transition-all duration-300 ${
                    isActive 
                      ? `text-transparent bg-clip-text bg-gradient-to-br ${phase.color}` 
                      : 'text-gray-600 group-hover:text-gray-700'
                  }`} />

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Details - Show when active */}
                  {isActive && (
                    <div className="space-y-3 pt-6 border-t-2 border-gray-100 animate-fadeIn">
                      {phase.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color}`}></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Continuous Flow Diagram */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-3xl p-12 border border-gray-200 relative overflow-hidden">
            {/* Animated Flow Line */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 50 Q 250 25 500 50 T 1000 50"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  style={{
                    animation: 'flowAnimation 4s ease-in-out infinite'
                  }}
                />
              </svg>
            </div>

            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Fluxo Contínuo Alimentado por IA
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { label: 'Coleta de Dados', icon: '📊' },
                  { label: 'Análise Inteligente', icon: '🧠' },
                  { label: 'Ação Automática', icon: '⚡' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="font-semibold text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-600 mt-2">
                      {idx === 0 && 'Integre dados de todas as fontes'}
                      {idx === 1 && 'IA processa e gera insights'}
                      {idx === 2 && 'Implementação automática'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {capability.title}
                </h4>
                <p className="text-gray-600">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-4 rounded-xl font-bold transition-all hover:shadow-2xl hover:shadow-blue-500/50 group inline-flex items-center gap-3">
            Começar Transformação Estratégica
            <Rocket className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes flowAnimation {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default PlatformOverviewSection;
