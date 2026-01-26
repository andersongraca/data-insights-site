import { useTranslation } from 'react-i18next';
import { TrendingUp, Zap, Shield, BarChart3, Users, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const ModernShowcaseSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const capabilities = [
    {
      icon: TrendingUp,
      title: 'Crescimento Acelerado',
      description: 'Aumente sua receita com insights baseados em dados',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Zap,
      title: 'Performance Máxima',
      description: 'Otimize operações com automação inteligente',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Proteção de dados com padrões internacionais',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Análise Profunda',
      description: 'Dashboards em tempo real com IA',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Users,
      title: 'Colaboração Eficiente',
      description: 'Trabalho em equipe sem limites',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Cpu,
      title: 'Escalabilidade',
      description: 'Cresce com seu negócio automaticamente',
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  const benefits = [
    'Redução de 60% em tempo de análise',
    'ROI comprovado em 90 dias',
    'Suporte 24/7 especializado',
    'Integração com 500+ ferramentas',
    'Compliance com LGPD e GDPR',
    'Backup automático e redundância'
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-4 border border-white/20">
            <Zap className="h-4 w-4 text-green-400" />
            <span>Transformação Digital Completa</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Capacidades que Impulsionam Negócios
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Plataforma integrada com tecnologias avançadas para transformar dados em decisões estratégicas
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 group-hover:border-white/40 transition-all duration-300 h-full">
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Saiba mais</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Benefits List */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Benefícios Comprovados
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-green-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-lg text-gray-200 group-hover:text-white transition-colors">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Stats */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="space-y-6">
              {/* Stat Card 1 */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl rounded-2xl p-8 border border-green-500/30 hover:border-green-400/60 transition-colors">
                <div className="text-5xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-gray-300">Taxa de Satisfação dos Clientes</div>
                <div className="mt-4 w-full bg-green-900/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-colors">
                <div className="text-5xl font-bold text-blue-400 mb-2">3.2x</div>
                <div className="text-gray-300">Aumento Médio de Produtividade</div>
                <div className="mt-4 w-full bg-blue-900/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-colors">
                <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Empresas Transformadas</div>
                <div className="mt-4 w-full bg-purple-900/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '400ms' }}>
          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-10 py-4 rounded-xl font-bold transition-all hover:shadow-2xl hover:shadow-green-500/50 group inline-flex items-center gap-3">
            Começar Transformação
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
      `}</style>
    </section>
  );
};

export default ModernShowcaseSection;
