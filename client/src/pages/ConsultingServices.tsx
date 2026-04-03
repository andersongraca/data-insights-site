import { ArrowLeft, CheckCircle, Zap, Users, TrendingUp, Shield, Lightbulb, Cog } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import ScrollToTop from '../components/ScrollToTop';

interface ConsultingServicesProps {
  onBack?: () => void;
}

const ConsultingServices = ({ onBack }: ConsultingServicesProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Auditoria de Sistemas',
      description: 'Análise completa da infraestrutura IT e processos para identificar oportunidades de melhoria e otimização.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Estratégia Digital',
      description: 'Planeamento de transformação digital alinhado com objetivos empresariais e visão estratégica.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: 'Implementação de Soluções',
      description: 'Desenvolvimento e implantação de sistemas customizados adaptados às necessidades específicas do seu negócio.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Otimização de Processos',
      description: 'Melhoria de eficiência operacional através de tecnologia e automação inteligente.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Suporte e Manutenção',
      description: 'Acompanhamento contínuo e evolução de sistemas para garantir máxima performance.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Formação e Capacitação',
      description: 'Treino de equipas para maximizar utilização de sistemas e potenciar conhecimento técnico.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const methodology = [
    {
      number: '1',
      title: 'Diagnóstico',
      description: 'Análise profunda da situação atual, identificação de desafios e oportunidades',
      icon: <Shield className="h-6 w-6" />
    },
    {
      number: '2',
      title: 'Estratégia',
      description: 'Desenvolvimento de plano estratégico customizado com roadmap claro e objetivos mensuráveis',
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      number: '3',
      title: 'Implementação',
      description: 'Execução com precisão, suporte contínuo e otimização baseada em resultados',
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-bg">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar</span>
          </button>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
              Consultoria Informática
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Somos muito mais que uma empresa desenvolvedora de software. Somos parceiros estratégicos de transformação digital que combinam expertise técnica com visão empresarial para impulsionar a inovação e o crescimento sustentável das organizações.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
              Os Nossos Serviços
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Soluções completas de consultoria informática adaptadas às necessidades específicas do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/15 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to bottom right, rgb(34, 197, 94), rgb(249, 115, 22))` }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
              A Nossa Metodologia
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Processo estruturado que garante resultados mensuráveis e alinhamento com objetivos estratégicos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((step, idx) => (
              <div
                key={idx}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/15 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="text-cyan-400">{step.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                {idx < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-green-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
                Por que Escolher-nos?
              </h2>
              <div className="space-y-6">
                {[
                  'Abordagem consultiva focada em resultados empresariais',
                  'Experiência em múltiplos setores (Indústria, Têxtil, Distribuição, Logística, Retalho, Serviços)',
                  'Equipa multidisciplinar com expertise em Data, BI, Cloud e Engenharia',
                  'Metodologia ágil e adaptável às necessidades específicas',
                  'Suporte contínuo e evolução de soluções',
                  'Parceria estratégica de longo prazo'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2">
                      +50
                    </div>
                    <p className="text-gray-300">Clientes Satisfeitos</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent mb-2">
                      15+
                    </div>
                    <p className="text-gray-300">Anos de Experiência</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      100%
                    </div>
                    <p className="text-gray-300">Dedicação ao Sucesso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para Transformar o Seu Negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Contacte-nos hoje para uma consultoria estratégica sem compromisso
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
            Solicitar Consultoria →
          </button>
        </div>
      </section>

      <Footer onNavigateToTeam={() => {}} onNavigateToAbout={() => {}} />
      <FloatingChat />
      <ScrollToTop />
    </div>
  );
};

export default ConsultingServices;
