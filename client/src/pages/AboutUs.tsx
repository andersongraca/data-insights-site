import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, Target, Lightbulb, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import ScrollToTop from '../components/ScrollToTop';

interface AboutUsProps {
  onBack?: () => void;
}

const AboutUs = ({ onBack }: AboutUsProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated background elements - using corporate colors */}
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
              Sobre Nós
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Somos uma empresa especializada em transformar dados em insights estratégicos que impulsionam o crescimento dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: 'Nossa Missão',
                description: 'Capacitar empresas com soluções de dados inovadoras que transformam decisões estratégicas e impulsionam crescimento sustentável.',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: 'Nossa Visão',
                description: 'Ser a empresa líder em soluções de Data Science e Analytics, reconhecida pela excelência, inovação e impacto transformador.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Nossos Valores',
                description: 'Excelência, Inovação, Integridade, Colaboração e Impacto. Estes valores guiam cada decisão e ação que tomamos.',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/15"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
              Por que Escolher a Data Insights?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Combinamos expertise técnica profunda com visão estratégica para entregar resultados mensuráveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expertise Comprovada',
                description: 'Mais de 15 anos de experiência em transformar dados em decisões estratégicas que geram ROI',
                icon: '🎯'
              },
              {
                title: 'Equipe Especializada',
                description: 'Profissionais com mestrado e MBA, certificados e constantemente atualizados em novas tecnologias',
                icon: '👥'
              },
              {
                title: 'Soluções Personalizadas',
                description: 'Cada solução é desenvolvida especificamente para os desafios únicos do seu negócio',
                icon: '⚙️'
              },
              {
                title: 'Resultados Mensuráveis',
                description: 'Métricas claras, ROI comprovado em 90 dias e acompanhamento contínuo do desempenho',
                icon: '📈'
              },
              {
                title: 'Suporte 24/7',
                description: 'Equipe dedicada disponível para suportar suas operações a qualquer momento',
                icon: '🔧'
              },
              {
                title: 'Inovação Contínua',
                description: 'Sempre à frente das tendências em IA, Machine Learning e tecnologias emergentes',
                icon: '💡'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/15"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-orange-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Anos de Experiência' },
              { number: '500+', label: 'Clientes Atendidos' },
              { number: '98%', label: 'Taxa de Sucesso' },
              { number: '24/7', label: 'Suporte Disponível' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/15 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-orange-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-orange-500/10"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para Transformar seus Dados?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato conosco hoje e descubra como podemos ajudar seu negócio a crescer com insights baseados em dados.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Solicitar Proposta
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
      <ScrollToTop />
    </div>
  );
};

export default AboutUs;
