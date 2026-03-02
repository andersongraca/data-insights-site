import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Activity, Target, Users, DollarSign, ArrowUpRight, ArrowDownRight, Zap, Database, Lock, Brain, ChevronRight } from 'lucide-react';

const BusinessIntelligenceDashboard = () => {
  // Dados de exemplo para gráficos
  const revenueData = [
    { month: 'Jan', revenue: 45000, target: 50000 },
    { month: 'Fev', revenue: 52000, target: 50000 },
    { month: 'Mar', revenue: 48000, target: 50000 },
    { month: 'Abr', revenue: 61000, target: 55000 },
    { month: 'Mai', revenue: 55000, target: 55000 },
    { month: 'Jun', revenue: 67000, target: 60000 },
  ];

  const performanceData = [
    { name: 'Vendas', value: 35, fill: '#06b6d4' },
    { name: 'Marketing', value: 25, fill: '#10b981' },
    { name: 'Operações', value: 20, fill: '#f59e0b' },
    { name: 'Outros', value: 20, fill: '#6366f1' },
  ];

  const customerData = [
    { period: 'Semana 1', customers: 120, churn: 5 },
    { period: 'Semana 2', customers: 145, churn: 3 },
    { period: 'Semana 3', customers: 168, churn: 4 },
    { period: 'Semana 4', customers: 195, churn: 2 },
  ];

  const conversionData = [
    { stage: 'Visitantes', value: 10000 },
    { stage: 'Leads', value: 3500 },
    { stage: 'Oportunidades', value: 1200 },
    { stage: 'Clientes', value: 450 },
  ];

  const metrics = [
    {
      label: 'Receita Total',
      value: '€328.5K',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-500/20 to-cyan-600/20',
    },
    {
      label: 'Clientes Ativos',
      value: '1,245',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-500/20 to-green-600/20',
    },
    {
      label: 'Taxa de Conversão',
      value: '4.5%',
      change: '+2.1%',
      trend: 'up',
      icon: Target,
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-500/20 to-orange-600/20',
    },
    {
      label: 'Saúde do Sistema',
      value: '99.8%',
      change: '-0.1%',
      trend: 'down',
      icon: Activity,
      color: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-500/20 to-emerald-600/20',
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Análise em Tempo Real',
      description: 'Dados atualizados instantaneamente para decisões rápidas e informadas',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Integração de Dados',
      description: 'Conecte múltiplas fontes de dados para análise holística',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Previsões com IA',
      description: 'Antecipe tendências com modelos de machine learning avançados',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Segurança Enterprise',
      description: 'Proteção de dados em nível corporativo com conformidade regulatória',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Hero Section com Imagem */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030970552/Gw6uUZWcNmjX2i4eQyxQ43/bi-hero-dashboard-KiqHt8Hfqig2JCE8WH4UDa.webp"
            alt="Business Intelligence Dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-6">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full">
              <span className="text-cyan-400 text-sm font-semibold">INTELIGÊNCIA DE NEGÓCIOS AVANÇADA</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Transforme Dados em Decisões Estratégicas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Dashboards inteligentes com análise em tempo real que transformam dados complexos em insights acionáveis para impulsionar o crescimento do seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                Começar Demonstração <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Métricas em Tempo Real</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              const isPositive = metric.trend === 'up';
              return (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`bg-gradient-to-br ${metric.color} p-3 rounded-xl shadow-lg shadow-cyan-500/20`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                        {metric.change}
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold">{metric.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visualizações Avançadas</h2>
            <p className="text-slate-400 text-lg">Análise profunda com gráficos interativos e insights em tempo real</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Revenue Chart */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-6">Receita vs Meta</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #475569',
                        borderRadius: '8px',
                        color: '#e2e8f0',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#06b6d4"
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#10b981"
                      strokeDasharray="5 5"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Performance Distribution */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-6">Distribuição de Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={performanceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name} ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #475569',
                        borderRadius: '8px',
                        color: '#e2e8f0',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer Growth */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-6">Crescimento de Clientes</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={customerData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="period" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #475569',
                        borderRadius: '8px',
                        color: '#e2e8f0',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="customers"
                      stroke="#06b6d4"
                      strokeWidth={2}
                      dot={{ fill: '#06b6d4', r: 5 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="churn"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={{ fill: '#ef4444', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Conversion Funnel */}
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-6">Funil de Conversão</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={conversionData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis type="number" stroke="#94a3b8" />
                    <YAxis dataKey="stage" type="category" stroke="#94a3b8" width={100} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #475569',
                        borderRadius: '8px',
                        color: '#e2e8f0',
                      }}
                    />
                    <Bar dataKey="value" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section com Imagem */}
      <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030970552/Gw6uUZWcNmjX2i4eQyxQ43/bi-data-visualization-9wVJvjfm5EaqKne7Hxk329.webp"
            alt="Data Visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recursos Avançados</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Tecnologias de ponta para transformar dados em inteligência competitiva</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-xl w-fit mb-4 text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section com Imagem */}
      <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030970552/Gw6uUZWcNmjX2i4eQyxQ43/bi-team-analytics-dL3DjRKMs4qiKrPA6Fbugq.webp"
            alt="Team Analytics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Colaboração em Tempo Real
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Sua equipa inteira pode acessar os mesmos dashboards, compartilhar insights e tomar decisões juntas. Com permissões granulares e histórico de auditoria completo, mantenha o controle total sobre quem acessa o quê.
              </p>
              <ul className="space-y-4">
                {[
                  'Dashboards compartilhados em tempo real',
                  'Controle de acesso baseado em papéis',
                  'Histórico completo de alterações',
                  'Alertas personalizados para toda a equipa',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl blur-2xl opacity-20"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030970552/Gw6uUZWcNmjX2i4eQyxQ43/bi-metrics-abstract-F2QhesRJ4FaqFa5jU2MVML.webp"
                    alt="Metrics Dashboard"
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-r from-cyan-600/20 via-green-600/20 to-cyan-600/20 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Pronto para Transformar Seus Dados?
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Comece com uma demonstração gratuita de 30 dias. Sem cartão de crédito necessário. Acesso completo a todos os recursos premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2">
              Solicitar Demonstração <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligenceDashboard;
