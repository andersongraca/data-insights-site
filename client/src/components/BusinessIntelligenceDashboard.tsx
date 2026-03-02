import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Activity, Target, Users, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

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
    { name: 'Vendas', value: 35, fill: '#3b82f6' },
    { name: 'Marketing', value: 25, fill: '#8b5cf6' },
    { name: 'Operações', value: 20, fill: '#ec4899' },
    { name: 'Outros', value: 20, fill: '#f59e0b' },
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
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'Clientes Ativos',
      value: '1,245',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
    },
    {
      label: 'Taxa de Conversão',
      value: '4.5%',
      change: '+2.1%',
      trend: 'up',
      icon: Target,
      color: 'from-pink-500 to-pink-600',
    },
    {
      label: 'Saúde do Sistema',
      value: '99.8%',
      change: '-0.1%',
      trend: 'down',
      icon: Activity,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Business Intelligence Avançado
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Dashboards inteligentes com análise em tempo real para transformar dados em decisões estratégicas
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              const isPositive = metric.trend === 'up';
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-br ${metric.color} p-3 rounded-lg`}>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-16 px-4 md:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Análise Detalhada</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Revenue Chart */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 border border-slate-600">
              <h3 className="text-xl font-semibold mb-6">Receita vs Meta</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
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
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="#8b5cf6"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Performance Distribution */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 border border-slate-600">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer Growth */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 border border-slate-600">
              <h3 className="text-xl font-semibold mb-6">Crescimento de Clientes</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={customerData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
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
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', r: 5 }}
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

            {/* Conversion Funnel */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 border border-slate-600">
              <h3 className="text-xl font-semibold mb-6">Funil de Conversão</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={conversionData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
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
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Recursos Avançados</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Dashboards Personalizados',
                description: 'Crie dashboards adaptados às suas necessidades específicas com drag-and-drop intuitivo',
                icon: '📊',
              },
              {
                title: 'Análise em Tempo Real',
                description: 'Dados atualizados instantaneamente para decisões rápidas e informadas',
                icon: '⚡',
              },
              {
                title: 'Relatórios Automáticos',
                description: 'Gere relatórios agendados e compartilhe insights com sua equipa',
                icon: '📈',
              },
              {
                title: 'Alertas Inteligentes',
                description: 'Receba notificações quando métricas críticas atingem limites definidos',
                icon: '🔔',
              },
              {
                title: 'Integração de Dados',
                description: 'Conecte múltiplas fontes de dados para análise holística',
                icon: '🔗',
              },
              {
                title: 'Previsões com IA',
                description: 'Antecipe tendências com modelos de machine learning avançados',
                icon: '🤖',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 border border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar Seus Dados?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Comece com uma demonstração gratuita e veja como Business Intelligence pode impulsionar seu negócio
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
            Solicitar Demonstração
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligenceDashboard;
