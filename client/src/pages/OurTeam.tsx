import { useTranslation } from 'react-i18next';
import { Award, GraduationCap, Briefcase, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import founderPhoto from '../assets/Captusdrar.JPG';

interface OurTeamProps {
  onBack?: () => void;
}

const OurTeam = ({ onBack }: OurTeamProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: t('about.founder.name'),
      role: 'Fundador & CEO',
      credentials: t('about.founder.credentials'),
      bio: t('about.founder.bio'),
      image: founderPhoto,
      achievements: [
        'Master\'s in Intelligent Computing',
        'MBA in Data Science & Analytics',
        '15+ anos em Data Science'
      ],
      color: 'from-green-400 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar</span>
          </button>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nosso Time</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Conheça os especialistas que estão transformando dados em insights estratégicos para empresas em todo o mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-12">
                  {/* Photo */}
                  <div className="flex justify-center order-2 md:order-1">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity`}></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative rounded-2xl shadow-2xl w-80 h-80 object-cover border-4 border-white group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-6 order-1 md:order-2">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h2>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4`}>
                        {member.role}
                      </p>
                      <div className="flex items-center gap-2 text-green-600 font-medium">
                        <GraduationCap className="h-5 w-5" />
                        <span>{member.credentials}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      {member.bio}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3 pt-6 border-t-2 border-gray-100">
                      <h3 className="font-bold text-gray-900">Qualificações & Experiência</h3>
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${member.color} flex-shrink-0 mt-2`}></div>
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Credentials Cards */}
                    <div className="grid grid-cols-1 gap-4 pt-6">
                      <div className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                        <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900">Master's in Intelligent Computing</div>
                          <div className="text-sm text-gray-600">Advanced expertise in AI and machine learning</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                        <Briefcase className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900">MBA in Data Science & Analytics</div>
                          <div className="text-sm text-gray-600">Business acumen combined with technical excellence</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { label: 'Anos de Experiência', value: '15+', icon: '📊' },
              { label: 'Clientes Transformados', value: '500+', icon: '🏢' },
              { label: 'Taxa de Sucesso', value: '98%', icon: '✨' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center border border-gray-100 hover:border-green-200"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default OurTeam;
