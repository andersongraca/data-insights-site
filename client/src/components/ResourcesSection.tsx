import { useTranslation } from 'react-i18next';
import { BookOpen, Video, FileText, Code, Zap, Users } from 'lucide-react';

const ResourcesSection = () => {
  const { t } = useTranslation();

  const resources = [
    {
      id: 1,
      title: 'Documentação Completa',
      description: 'Guias detalhados e documentação técnica de todas as nossas soluções',
      icon: <FileText className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Tutoriais em Vídeo',
      description: 'Aprenda passo a passo com nossos tutoriais em vídeo de alta qualidade',
      icon: <Video className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      title: 'API Reference',
      description: 'Referência completa de APIs para integração com suas aplicações',
      icon: <Code className="h-8 w-8" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      title: 'Blog & Artigos',
      description: 'Insights, dicas e melhores práticas sobre dados e análise',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Webinars & Eventos',
      description: 'Eventos exclusivos com especialistas',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      title: 'Comunidade',
      description: 'Conecte-se com outros usuários e compartilhe experiências',
      icon: <Users className="h-8 w-8" />,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recursos & Aprendizado
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para dominar nossas soluções e maximizar o valor do seu investimento
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Icon Background */}
              <div className={`bg-gradient-to-br ${resource.color} p-6 text-white`}>
                {resource.icon}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <button className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center gap-2">
                  Saiba Mais →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para começar?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Acesse todos os recursos e comece sua jornada com nossas soluções hoje mesmo
          </p>
          <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Explorar Recursos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
