import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Persona {
  id: string;
  title: string;
  description: string;
  benefits: string[];
}

const personas: Persona[] = [
  {
    id: 'executives',
    title: 'Data Executives',
    description: 'Obtenha visibilidade em tempo real sobre métricas estratégicas de dados e tome decisões confiantes baseadas em dados. Com nossos dashboards abrangentes, insights preditivos e alinhamento entre departamentos, você sempre saberá onde seus dados estão — e para onde estão indo.',
    benefits: ['Visibilidade em tempo real', 'Dashboards executivos', 'Insights preditivos'],
  },
  {
    id: 'data-scientists',
    title: 'Data Scientists',
    description: 'Acesse ferramentas avançadas de análise e machine learning para extrair insights profundos de seus dados. Colabore facilmente com equipes e transforme descobertas em ações impactantes para o negócio.',
    benefits: ['Ferramentas ML avançadas', 'Análise exploratória', 'Colaboração integrada'],
  },
  {
    id: 'data-engineers',
    title: 'Data Engineers',
    description: 'Construa e mantenha pipelines de dados escaláveis e robustos. Gerencie infraestrutura complexa com facilidade, monitore performance em tempo real e garanta qualidade dos dados em toda a organização.',
    benefits: ['Pipelines escaláveis', 'Monitoramento em tempo real', 'Qualidade de dados'],
  },
  {
    id: 'analysts',
    title: 'Business Analysts',
    description: 'Transforme dados em insights acionáveis que impulsionam decisões de negócio. Crie relatórios visuais, explore tendências e comunique descobertas com clareza para stakeholders em toda a empresa.',
    benefits: ['Relatórios visuais', 'Exploração de dados', 'Comunicação clara'],
  },
];

export default function StrategicLeadersSection() {
  const [activePersona, setActivePersona] = useState('executives');
  const currentPersona = personas.find(p => p.id === activePersona)!;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Construído para cada líder estratégico
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Independentemente do seu papel, oferecemos soluções personalizadas que impulsionam resultados
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Personas */}
          <div className="space-y-4">
            {personas.map(persona => (
              <button
                key={persona.id}
                onClick={() => setActivePersona(persona.id)}
                className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                  activePersona === persona.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50 bg-background'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-semibold ${
                    activePersona === persona.id ? 'text-primary' : 'text-foreground'
                  }`}>
                    {persona.title}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activePersona === persona.id ? 'rotate-180 text-primary' : 'text-muted-foreground'
                    }`}
                  />
                </div>
                {activePersona === persona.id && (
                  <p className="text-sm text-muted-foreground mt-3">
                    {persona.description}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Right - Content & Visual */}
          <div className="space-y-8">
            {/* Active Persona Content */}
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {currentPersona.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentPersona.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                {currentPersona.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Mockup */}
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-lg border border-primary/20 overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl animate-pulse" />
              </div>

              {/* Mock dashboard content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="h-3 bg-primary/40 rounded w-3/4 animate-pulse" />
                  <div className="h-3 bg-primary/30 rounded w-1/2 animate-pulse" />
                  <div className="mt-6 space-y-2">
                    <div className="h-2 bg-primary/40 rounded w-full animate-pulse" />
                    <div className="h-2 bg-primary/40 rounded w-5/6 animate-pulse" />
                    <div className="h-2 bg-primary/40 rounded w-4/5 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -ml-20 -mb-20" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
