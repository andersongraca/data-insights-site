import { ArrowLeft, Shield, Lightbulb, Cog, TrendingUp, Zap, Users, CheckCircle, BarChart3, Briefcase, Code, Database, Cloud } from 'lucide-react';
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
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  useEffect(() => {
    setIsVisible(true);
    setVisibleCards(new Array(6).fill(false));
    
    // Stagger animation for cards
    const timers = Array.from({ length: 6 }).map((_, i) =>
      setTimeout(() => setVisibleCards(prev => {
        const newState = [...prev];
        newState[i] = true;
        return newState;
      }), i * 100)
    );
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Auditoria de Sistemas',
      description: 'Análise completa da infraestrutura IT e processos para identificar oportunidades de melhoria e otimização.',
      color: 'from-cyan-500 to-cyan-600',
      example: 'Auditoria de segurança em ambiente cloud com identificação de vulnerabilidades e plano de remediação'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Estratégia Digital',
      description: 'Planeamento de transformação digital alinhado com objetivos empresariais e visão estratégica.',
      color: 'from-green-500 to-green-600',
      example: 'Roadmap de digitalização para PME com priorização de iniciativas e timeline de 18 meses'
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: 'Implementação de Soluções',
      description: 'Desenvolvimento e implantação de sistemas customizados adaptados às necessidades específicas do seu negócio.',
      color: 'from-orange-500 to-orange-600',
      example: 'Sistema ERP customizado com integração a legacy systems e migração de dados sem downtime'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Otimização de Processos',
      description: 'Melhoria de eficiência operacional através de tecnologia e automação inteligente.',
      color: 'from-purple-500 to-purple-600',
      example: 'Automação de processos RPA reduzindo tempo manual em 70% e custos operacionais em 45%'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Suporte e Manutenção',
      description: 'Acompanhamento contínuo e evolução de sistemas para garantir máxima performance.',
      color: 'from-pink-500 to-pink-600',
      example: 'Managed Services 24/7 com SLA de 99.9% uptime e suporte técnico multilíngue'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Formação e Capacitação',
      description: 'Treino de equipas para maximizar utilização de sistemas e potenciar conhecimento técnico.',
      color: 'from-indigo-500 to-indigo-600',
      example: 'Programa de formação em 3 módulos com certificação profissional e suporte pós-treino'
    }
  ];

  const methodology = [
    {
      number: '1',
      title: 'Diagnóstico',
      description: 'Análise profunda da situação atual, identificação de desafios e oportunidades',
      details: 'Entrevistas com stakeholders, análise de processos, avaliação de tecnologia atual e benchmarking competitivo',
      icon: <Shield className="h-6 w-6" />
    },
    {
      number: '2',
      title: 'Estratégia',
      description: 'Desenvolvimento de plano estratégico customizado com roadmap claro e objetivos mensuráveis',
      details: 'Definição de KPIs, priorização de iniciativas, alocação de recursos e timeline realista',
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      number: '3',
      title: 'Implementação',
      description: 'Execução com precisão, suporte contínuo e otimização baseada em resultados',
      details: 'Gestão de projeto ágil, testes rigorosos, formação de equipas e otimização contínua',
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const useCases = [
    {
      industry: 'Manufatura',
      challenge: 'Processos manuais causando atrasos e erros de produção',
      solution: 'Implementação de MES (Manufacturing Execution System) com automação de linha de produção',
      results: ['60% redução em tempo de produção', '35% diminuição de defeitos', '€200K economia anual'],
      icon: <Cog className="h-6 w-6" />
    },
    {
      industry: 'Distribuição',
      challenge: 'Gestão de inventário ineficiente com rutura de stock frequente',
      solution: 'Sistema de previsão de demanda com IA e otimização de rotas de entrega',
      results: ['45% redução em rutura de stock', '38% melhoria na satisfação do cliente', '€150K economia em logística'],
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      industry: 'Serviços Financeiros',
      challenge: 'Conformidade regulatória complexa e risco de compliance',
      solution: 'Plataforma de compliance automatizada com auditoria contínua e relatórios regulatórios',
      results: ['100% conformidade regulatória', '80% redução em tempo de auditoria', 'Zero incidentes de compliance'],
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      industry: 'Retail',
      challenge: 'Experiência do cliente fragmentada entre canais online e offline',
      solution: 'Plataforma omnichannel integrada com CRM centralizado e analytics em tempo real',
      results: ['42% aumento em vendas online', '55% melhoria em retenção de clientes', '€300K receita adicional'],
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      industry: 'Saúde',
      challenge: 'Registos de pacientes dispersos e falta de interoperabilidade',
      solution: 'Sistema de gestão de saúde integrado com segurança HIPAA e acesso móvel',
      results: ['90% redução em tempo de consulta', '70% melhoria em qualidade de dados', 'Conformidade RGPD garantida'],
      icon: <Database className="h-6 w-6" />
    },
    {
      industry: 'Educação',
      challenge: 'Ensino híbrido com plataformas desintegradas e baixa engajamento',
      solution: 'Plataforma LMS com IA para personalização de aprendizagem e gamificação',
      results: ['65% aumento em engajamento estudantil', '48% melhoria em resultados acadêmicos', '€120K redução de custos'],
      icon: <Users className="h-6 w-6" />
    }
  ];

  const benefits = [
    {
      title: 'Eficiência Operacional',
      description: 'Redução de custos através de automação e otimização de processos',
      metrics: 'Até 60% redução em tempo manual',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: 'Escalabilidade',
      description: 'Soluções que crescem com o seu negócio sem necessidade de redesign',
      metrics: 'Suporta crescimento de 10x sem redesign',
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: 'Segurança e Conformidade',
      description: 'Proteção de dados com conformidade total a regulamentações',
      metrics: 'ISO 27001, GDPR, HIPAA certified',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'ROI Comprovado',
      description: 'Retorno do investimento em média em 12-18 meses',
      metrics: 'Média de 250% ROI em 2 anos',
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: 'Inovação Contínua',
      description: 'Acesso a tecnologias emergentes e best practices do mercado',
      metrics: 'Atualização tecnológica 2x/ano',
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: 'Suporte Dedicado',
      description: 'Equipa de especialistas disponível 24/7 para suporte técnico',
      metrics: 'SLA de 99.9% uptime garantido',
      icon: <Users className="h-6 w-6" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
              Os Nossos Serviços
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Soluções completas de consultoria informática adaptadas às necessidades específicas do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:bg-white/15">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-cyan-300 font-medium">
                        <span className="font-bold">Exemplo:</span> {service.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
              A Nossa Metodologia
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Processo estruturado que garante resultados mensuráveis e alinhamento com objetivos estratégicos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/15"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="text-cyan-300">{step.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <p className="text-sm text-gray-400 pt-4 border-t border-white/10">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
              Casos de Uso Práticos
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Exemplos reais de como transformamos negócios em diferentes setores
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/15"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white mb-4">
                    {useCase.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.industry}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Desafio</p>
                      <p className="text-gray-300">{useCase.challenge}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Solução</p>
                      <p className="text-gray-300">{useCase.solution}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm font-semibold text-green-300 uppercase tracking-wide mb-3">Resultados</p>
                      <ul className="space-y-2">
                        {useCase.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
              Benefícios Mensuráveis
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Resultados comprovados que impactam diretamente o crescimento do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/15"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm font-semibold text-orange-300">{benefit.metrics}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-cyan-500/20 via-green-500/20 to-orange-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-orange-500 opacity-0 hover:opacity-5 transition-opacity duration-500"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para Transformar o Seu Negócio?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Contacte-nos hoje para uma consulta gratuita e descubra como podemos ajudar a sua organização a alcançar novos patamares de eficiência e inovação.
              </p>
              
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                Solicitar Consultoria →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projetos Concluídos' },
              { number: '€15M', label: 'Valor Criado para Clientes' },
              { number: '98%', label: 'Taxa de Satisfação' },
              { number: '250%', label: 'ROI Médio em 2 Anos' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingChat />
      <ScrollToTop />
      <Footer onNavigateToTeam={() => {}} onNavigateToAbout={() => {}} />
    </div>
  );
};

export default ConsultingServices;
