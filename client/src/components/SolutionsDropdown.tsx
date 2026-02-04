import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, BarChart3, Brain, Zap, Shield, TrendingUp, Users } from 'lucide-react';

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'use-case' | 'role' | 'team';
}

const solutions: Solution[] = [
  // USE CASES
  {
    id: 'saas',
    title: 'SaaS Analytics Platform',
    description: 'Plataforma completa de análise de dados em tempo real',
    icon: <BarChart3 className="w-6 h-6" />,
    category: 'use-case',
  },
  {
    id: 'data-science',
    title: 'Data Science Services',
    description: 'Serviços especializados de ciência de dados e ML',
    icon: <Brain className="w-6 h-6" />,
    category: 'use-case',
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering Solutions',
    description: 'Soluções robustas de engenharia de dados',
    icon: <Zap className="w-6 h-6" />,
    category: 'use-case',
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    description: 'Inteligência de negócios e dashboards avançados',
    icon: <TrendingUp className="w-6 h-6" />,
    category: 'use-case',
  },
  {
    id: 'governance',
    title: 'Data Governance',
    description: 'Governança e qualidade de dados',
    icon: <Shield className="w-6 h-6" />,
    category: 'use-case',
  },
  {
    id: 'predictive',
    title: 'Predictive Analytics',
    description: 'Análise preditiva com inteligência artificial',
    icon: <Brain className="w-6 h-6" />,
    category: 'use-case',
  },
  // TEAM
  {
    id: 'our-team',
    title: 'Nosso Time',
    description: 'Conheça os especialistas que transformam dados em resultados',
    icon: <Users className="w-6 h-6" />,
    category: 'team',
  },
  // ROLES
  {
    id: 'executives',
    title: 'Para C-Level Executives',
    description: 'Soluções estratégicas para líderes executivos',
    icon: <Users className="w-6 h-6" />,
    category: 'role',
  },
  {
    id: 'analysts',
    title: 'Para Data Analysts',
    description: 'Ferramentas poderosas para análise de dados',
    icon: <BarChart3 className="w-6 h-6" />,
    category: 'role',
  },
  {
    id: 'operations',
    title: 'Para Operations Managers',
    description: 'Otimização de operações e processos',
    icon: <Zap className="w-6 h-6" />,
    category: 'role',
  },
  {
    id: 'it-teams',
    title: 'Para IT & Data Teams',
    description: 'Infraestrutura e ferramentas técnicas',
    icon: <Shield className="w-6 h-6" />,
    category: 'role',
  },
  {
    id: 'marketing',
    title: 'Para Marketing Leaders',
    description: 'Insights para estratégia de marketing',
    icon: <TrendingUp className="w-6 h-6" />,
    category: 'role',
  },
  {
    id: 'finance',
    title: 'Para Finance Directors',
    description: 'Análise financeira e relatórios',
    icon: <BarChart3 className="w-6 h-6" />,
    category: 'role',
  },
];

export default function SolutionsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'use-case' | 'role' | 'team'>('use-case');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredSolutions = solutions.filter(sol => sol.category === activeTab);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary transition-colors"
      >
        Soluções
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-screen max-w-5xl bg-background border border-border rounded-lg shadow-lg z-50 p-6 -translate-x-1/4">
          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-border pb-4">
            <button
              onClick={() => setActiveTab('use-case')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'use-case'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              USE CASES
            </button>
            <button
              onClick={() => setActiveTab('role')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'role'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              BY ROLE
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'team'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              NOSSO TIME
            </button>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSolutions.map(solution => (
              <div
                key={solution.id}
                className="p-4 rounded-lg border border-border hover:border-primary hover:bg-muted transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {solution.icon}
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
