import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import ExpandedSolutionsMenu from '../components/ExpandedSolutionsMenu';

interface ExpandedSolutionsProps {
  onBack?: () => void;
}

const ExpandedSolutions = ({ onBack }: ExpandedSolutionsProps) => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  const solutionDetails: Record<string, { title: string; description: string; features: string[] }> = {
    'saas-analytics': {
      title: 'SaaS Analytics Platform',
      description: 'Monitore e analise dados em tempo real com dashboards intuitivos',
      features: [
        'Dashboards em tempo real',
        'Análise de dados avançada',
        'Relatórios automatizados',
        'Integração com múltiplas fontes',
        'Alertas personalizados',
        'Exportação de dados'
      ]
    },
    'data-science': {
      title: 'Data Science Services',
      description: 'Transforme dados brutos em insights acionáveis com IA',
      features: [
        'Modelagem preditiva',
        'Machine Learning avançado',
        'Análise de padrões',
        'Recomendações automáticas',
        'Clustering e segmentação',
        'Validação de modelos'
      ]
    },
    'data-engineering': {
      title: 'Data Engineering Solutions',
      description: 'Construa pipelines robustos e escaláveis para seus dados',
      features: [
        'ETL/ELT pipelines',
        'Data warehousing',
        'Processamento em lote',
        'Streaming de dados',
        'Qualidade de dados',
        'Governança de dados'
      ]
    },
    'business-intelligence': {
      title: 'Business Intelligence',
      description: 'Tome decisões estratégicas baseadas em dados comprovados',
      features: [
        'Visualizações interativas',
        'KPI tracking',
        'Benchmarking',
        'Análise comparativa',
        'Forecasting',
        'Storytelling com dados'
      ]
    },
    'data-governance': {
      title: 'Data Governance',
      description: 'Garanta qualidade, segurança e conformidade dos seus dados',
      features: [
        'Políticas de dados',
        'Segurança de dados',
        'Conformidade LGPD/GDPR',
        'Auditoria de dados',
        'Metadados',
        'Linhagem de dados'
      ]
    },
    'predictive-analytics': {
      title: 'Predictive Analytics',
      description: 'Antecipe tendências e prepare-se para o futuro',
      features: [
        'Previsão de demanda',
        'Análise de risco',
        'Detecção de anomalias',
        'Simulação de cenários',
        'Otimização de recursos',
        'Planejamento estratégico'
      ]
    },
    'executives': {
      title: 'C-Level Executives',
      description: 'Visão executiva em tempo real do desempenho do negócio',
      features: [
        'Dashboard executivo',
        'Relatórios de performance',
        'Análise de ROI',
        'Benchmarking competitivo',
        'Previsão de cenários',
        'Tomada de decisão estratégica'
      ]
    },
    'data-analysts': {
      title: 'Data Analysts',
      description: 'Ferramentas poderosas para análise profunda e exploração de dados',
      features: [
        'Ferramentas de análise avançada',
        'SQL e Python integrados',
        'Visualizações customizadas',
        'Exploração interativa',
        'Documentação automática',
        'Colaboração em equipe'
      ]
    },
    'operations-managers': {
      title: 'Operations Managers',
      description: 'Otimize processos com insights baseados em dados',
      features: [
        'Monitoramento de processos',
        'Identificação de gargalos',
        'Otimização de recursos',
        'Alertas de anomalias',
        'Análise de eficiência',
        'Planejamento operacional'
      ]
    },
    'it-teams': {
      title: 'IT & Data Teams',
      description: 'Infraestrutura escalável e segura para gerenciamento de dados',
      features: [
        'Infraestrutura cloud',
        'Automação de pipelines',
        'Monitoramento de performance',
        'Backup e recuperação',
        'Segurança em camadas',
        'Escalabilidade automática'
      ]
    },
    'marketing-leaders': {
      title: 'Marketing Leaders',
      description: 'Entenda comportamento de clientes e otimize campanhas',
      features: [
        'Análise de comportamento',
        'Segmentação de clientes',
        'Atribuição de conversão',
        'Otimização de campanhas',
        'Análise de churn',
        'Recomendações personalizadas'
      ]
    },
    'finance-directors': {
      title: 'Finance Directors',
      description: 'Forecasting preciso e análise financeira avançada',
      features: [
        'Previsão de fluxo de caixa',
        'Análise de lucratividade',
        'Orçamento e planejamento',
        'Análise de variância',
        'Relatórios financeiros',
        'Conformidade fiscal'
      ]
    }
  };

  const details = selectedSolution ? solutionDetails[selectedSolution] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossas Soluções
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore todas as soluções disponíveis para transformar seus dados em resultados
            </p>
          </div>

          {/* Solutions Menu */}
          <ExpandedSolutionsMenu onSelectSolution={setSelectedSolution} />

          {/* Selected Solution Details */}
          {details && (
            <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-green-600 animate-fadeIn">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {details.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {details.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Principais Recursos</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {details.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-100 hover:border-green-300 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-600 text-white">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
                  Solicitar Demo
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-medium px-8 py-3 rounded-lg transition-colors">
                  Saiba Mais
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpandedSolutions;
