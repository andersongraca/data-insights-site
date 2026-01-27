import { useState } from 'react';
import { ChevronRight, BarChart3, Zap, Database, TrendingUp, Lock, Brain, X } from 'lucide-react';

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface SolutionsDropdownModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SolutionsDropdownModal = ({ isOpen, onClose }: SolutionsDropdownModalProps) => {
  const [activeTab, setActiveTab] = useState<'usecases' | 'roles'>('usecases');

  const useCases: Solution[] = [
    {
      id: 'saas-analytics',
      title: 'SaaS Analytics Platform',
      description: 'Monitore e analise dados em tempo real com dashboards intuitivos',
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'data-science',
      title: 'Data Science Services',
      description: 'Transforme dados brutos em insights acionáveis com IA',
      icon: <Brain className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering Solutions',
      description: 'Construa pipelines robustos e escaláveis para seus dados',
      icon: <Database className="h-6 w-6" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'business-intelligence',
      title: 'Business Intelligence',
      description: 'Tome decisões estratégicas baseadas em dados comprovados',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'data-governance',
      title: 'Data Governance',
      description: 'Garanta qualidade, segurança e conformidade dos seus dados',
      icon: <Lock className="h-6 w-6" />,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      description: 'Antecipe tendências e prepare-se para o futuro',
      icon: <Zap className="h-6 w-6" />,
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const roles: Solution[] = [
    {
      id: 'executives',
      title: 'C-Level Executives',
      description: 'Visão executiva em tempo real do desempenho do negócio',
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'data-analysts',
      title: 'Data Analysts',
      description: 'Ferramentas poderosas para análise profunda e exploração de dados',
      icon: <Brain className="h-6 w-6" />,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: 'operations-managers',
      title: 'Operations Managers',
      description: 'Otimize processos com insights baseados em dados',
      icon: <Zap className="h-6 w-6" />,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'it-teams',
      title: 'IT & Data Teams',
      description: 'Infraestrutura escalável e segura para gerenciamento de dados',
      icon: <Database className="h-6 w-6" />,
      color: 'from-slate-500 to-slate-600'
    },
    {
      id: 'marketing-leaders',
      title: 'Marketing Leaders',
      description: 'Entenda comportamento de clientes e otimize campanhas',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'from-fuchsia-500 to-fuchsia-600'
    },
    {
      id: 'finance-directors',
      title: 'Finance Directors',
      description: 'Forecasting preciso e análise financeira avançada',
      icon: <Lock className="h-6 w-6" />,
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const solutions = activeTab === 'usecases' ? useCases : roles;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 md:hidden overflow-y-auto">
        <div className="bg-white rounded-t-3xl mt-auto min-h-[90vh] shadow-2xl">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-3xl">
            <h2 className="text-2xl font-bold text-gray-900">Soluções</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 px-4 pt-4">
            <button
              onClick={() => setActiveTab('usecases')}
              className={`flex-1 px-4 py-3 font-semibold text-center transition-all ${
                activeTab === 'usecases'
                  ? 'bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-b-2 border-green-600'
                  : 'text-gray-600'
              }`}
            >
              USE CASES
            </button>
            <button
              onClick={() => setActiveTab('roles')}
              className={`flex-1 px-4 py-3 font-semibold text-center transition-all ${
                activeTab === 'roles'
                  ? 'bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-b-2 border-green-600'
                  : 'text-gray-600'
              }`}
            >
              ROLE
            </button>
          </div>

          {/* Solutions Grid */}
          <div className="p-4 space-y-4 pb-8">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 hover:border-green-300 transition-all cursor-pointer hover:shadow-lg"
              >
                {/* Icon Background */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${solution.color} opacity-5 rounded-full -mr-6 -mt-6 group-hover:opacity-10 transition-opacity`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${solution.color} text-white mb-3 group-hover:scale-110 transition-transform`}>
                    {solution.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-green-600 font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Saiba Mais</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsDropdownModal;
