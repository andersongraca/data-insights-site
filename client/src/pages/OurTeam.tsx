import { useTranslation } from 'react-i18next';
import { Award, GraduationCap, Briefcase, ArrowLeft, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import ScrollToTop from '../components/ScrollToTop';

interface OurTeamProps {
  onBack?: () => void;
}

const OurTeam = ({ onBack }: OurTeamProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  useEffect(() => {
    setIsVisible(true);
    setVisibleCards([false, false]);
    
    // Stagger animation for cards
    const timers = [
      setTimeout(() => setVisibleCards(prev => [true, prev[1]]), 100),
      setTimeout(() => setVisibleCards(prev => [prev[0], true]), 300)
    ];
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const teamMembers = [
    {
      name: 'M.Sc. Anderson Graça',
      role: 'Fundador & CEO',
      credentials: 'M.Sc. em Computação Inteligente, MBA em Data Science & Analytics',
      bio: 'Especialista em Data Science e Analytics com MBA em Data Science, liderando soluções de BI e ITIL',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030970552/Gw6uUZWcNmjX2i4eQyxQ43/Gemini_Generated_Image__ffe8f30e.png',
      achievements: [
        'M.Sc. in Intelligent Computing',
        'MBA in Data Science & Analytics',
        'ITIL Certified',
        '15+ anos em Data Science'
      ],
      color: 'from-cyan-500 to-cyan-600',
      skills: ['Data Science', 'Business Intelligence', 'Strategic Leadership'],
      linkedin: 'https://www.linkedin.com/in/anderson-graça'
    },
    {
      name: 'M.Sc. Márcio Alves',
      role: 'Diretor Técnico & Desenvolvedor Sênior',
      credentials: 'M.Sc. em Ciências da Computação, MBA em Engenharia de Software',
      bio: 'Desenvolvedor frontend em ReactJS, backend em NodeJS e PostgreSQL, especialista em desenvolvimento ágil',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030970552/Gw6uUZWcNmjX2i4eQyxQ43/marcio-alves_a366934b.png',
      achievements: [
        'M.Sc. in Computer Science',
        'MBA in Software Engineering',
        'ReactJS & Frontend Specialist',
        'NodeJS & Backend Expert'
      ],
      color: 'from-orange-500 to-orange-600',
      skills: ['ReactJS', 'NodeJS', 'PostgreSQL'],
      linkedin: 'https://www.linkedin.com/in/marcio-alves-b0012098'
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-bg">
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
              Nosso Time
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Conheça os especialistas que estão transformando dados em insights estratégicos e construindo soluções inovadoras para empresas em todo o mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Glass-morphism card with corporate colors */}
                <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 shadow-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:bg-white/15">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="p-8 md:p-10 h-full flex flex-col">
                    {/* Photo */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300`}></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="relative rounded-2xl shadow-2xl w-64 h-64 object-cover border-2 border-white/30 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-6 flex-1">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                          {member.name}
                        </h2>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4`}>
                          {member.role}
                        </p>
                        <div className="flex items-center gap-2 text-cyan-300 font-medium">
                          <GraduationCap className="h-5 w-5" />
                          <span className="text-sm">{member.credentials}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed text-base">
                        {member.bio}
                      </p>

                      {/* Skills */}
                      <div className="space-y-3">
                        <h3 className="font-bold text-white text-sm uppercase tracking-wider">Especialidades</h3>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent border border-white/20`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3 pt-6 border-t border-white/10">
                        <h3 className="font-bold text-white text-sm uppercase tracking-wider">Qualificações</h3>
                        {member.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${member.color} flex-shrink-0 mt-2`}></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* LinkedIn Link */}
                      <div className="pt-6 border-t border-white/10">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${member.color} bg-clip-text text-transparent border border-white/20 hover:border-white/40 transition-all duration-300 group/link`}
                        >
                          <Linkedin className="h-5 w-5 text-white/70 group-hover/link:text-white transition-colors" />
                          <span className="font-medium">Ver Perfil LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
              Expertise em que Pode Confiar
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Combinamos experiência técnica profunda com visão estratégica para entregar soluções que transformam negócios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Expertise Comprovada',
                description: 'Mais de 15 anos transformando dados em decisões estratégicas',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: '💡',
                title: 'Inovação Contínua',
                description: 'Sempre à frente das tendências em IA, Data Science e desenvolvimento ágil',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: '📈',
                title: 'Resultados Mensuráveis',
                description: 'ROI comprovado em 90 dias para nossos clientes com métricas claras',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/15"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Anos de Experiência', value: '15+', icon: '📊', color: 'from-cyan-500 to-cyan-600' },
              { label: 'Clientes Transformados', value: '500+', icon: '🏢', color: 'from-green-500 to-green-600' },
              { label: 'Taxa de Sucesso', value: '98%', icon: '✨', color: 'from-orange-500 to-orange-600' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 text-center hover:bg-white/15"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-cyan-500/20 via-green-500/20 to-orange-500/20 backdrop-blur-xl rounded-3xl border border-white/20 p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para Transformar seus Dados?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato com nosso time e descubra como podemos ajudar seu negócio a crescer com insights baseados em dados.
              </p>
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                Solicitar Proposta
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
      <ScrollToTop />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default OurTeam;
