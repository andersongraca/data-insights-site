import { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, Calendar, User, ArrowRight, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import ScrollToTop from '../components/ScrollToTop';

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  image: string;
  slug: string;
  tags: string[];
}

interface BlogProps {
  onBack?: () => void;
  onSelectArticle?: (article: BlogArticle) => void;
}

const Blog = ({ onBack, onSelectArticle }: BlogProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  useEffect(() => {
    setIsVisible(true);
    setVisibleCards(new Array(articles.length).fill(false));
    
    // Stagger animation for cards
    articles.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 100);
    });
  }, []);

  const articles: BlogArticle[] = [
    {
      id: '1',
      title: 'Transformação Digital: O Caminho para a Competitividade no Século XXI',
      excerpt: 'Descubra como a transformação digital está revolucionando os negócios e por que sua empresa não pode ficar para trás nesta jornada essencial.',
      content: `A transformação digital não é apenas sobre tecnologia — é sobre reimaginar como sua organização opera, interage com clientes e cria valor. Neste artigo, exploramos os pilares fundamentais da transformação digital e como implementá-los com sucesso.

## O que é Transformação Digital?

A transformação digital é o processo de integração de tecnologias digitais em todas as áreas de um negócio, alterando fundamentalmente como você opera e entrega valor aos clientes. Vai além da simples digitalização de processos — é uma mudança cultural e operacional profunda.

## Os Pilares da Transformação Digital

### 1. Dados como Ativo Estratégico
Os dados são o novo ouro. Organizações que conseguem coletar, analisar e agir sobre dados em tempo real ganham vantagem competitiva significativa.

### 2. Automação Inteligente
A automação de processos reduz custos operacionais, minimiza erros e libera equipes para trabalhos de maior valor agregado.

### 3. Experiência do Cliente
A transformação digital deve colocar o cliente no centro, oferecendo experiências personalizadas e omnichanais.

### 4. Cultura de Inovação
A transformação exige uma mudança cultural que valorize a experimentação, o aprendizado contínuo e a adaptabilidade.

## Benefícios Mensuráveis

- **Redução de Custos**: Até 40% em operações através de automação
- **Aumento de Receita**: 25-35% através de novas oportunidades de negócio
- **Melhoria na Satisfação**: 50%+ em NPS através de melhor experiência
- **Velocidade de Mercado**: 3x mais rápido em lançar novos produtos

## Conclusão

A transformação digital é uma jornada contínua, não um destino. As organizações que abraçam essa mudança e a adaptam ao seu contexto específico estarão bem posicionadas para prosperar nos próximos anos.`,
      author: 'Anderson Graça',
      date: '2026-04-01',
      category: 'Transformação Digital',
      readTime: 8,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      slug: 'transformacao-digital-competitividade',
      tags: ['Transformação Digital', 'Estratégia', 'Inovação']
    },
    {
      id: '2',
      title: 'Business Intelligence: Como Dados Transformam Decisões Estratégicas',
      excerpt: 'Saiba como implementar uma estratégia de BI eficaz para transformar dados brutos em insights acionáveis que impulsionam o crescimento.',
      content: `Business Intelligence (BI) é muito mais do que criar dashboards bonitos — é sobre transformar dados em conhecimento que impulsiona decisões melhores e resultados mensuráveis.

## O Poder do Business Intelligence

Em um mundo onde dados são gerados a cada segundo, as organizações que conseguem extrair insights relevantes ganham vantagem competitiva decisiva. BI é o processo de transformar dados brutos em informações úteis e conhecimento acionável.

## Componentes Essenciais de uma Estratégia de BI

### 1. Coleta e Integração de Dados
Consolidar dados de múltiplas fontes (CRM, ERP, redes sociais, sensores IoT) em um repositório centralizado.

### 2. Limpeza e Preparação
Garantir que os dados sejam precisos, consistentes e prontos para análise — geralmente 80% do trabalho em BI.

### 3. Análise e Modelagem
Aplicar técnicas estatísticas e machine learning para descobrir padrões e correlações ocultas.

### 4. Visualização e Comunicação
Apresentar insights de forma clara e intuitiva através de dashboards interativos e relatórios visuais.

## Casos de Sucesso

**Varejo**: Análise de padrões de compra permitiu aumento de 35% em vendas cruzadas
**Manufatura**: Previsão de demanda reduziu excesso de inventário em 45%
**Saúde**: Análise de dados de pacientes melhorou diagnósticos em 28%

## Métricas de Sucesso em BI

- ROI: Retorno do investimento em 12-18 meses
- Tempo de Decisão: Redução de 60% no tempo para tomar decisões
- Precisão: Melhoria de 40%+ na precisão de previsões
- Adoção: 80%+ de usuários ativos na plataforma

## Próximos Passos

Comece pequeno com um projeto piloto, aprenda com os resultados e escale gradualmente. BI é uma jornada contínua de melhoria.`,
      author: 'Márcio Alves',
      date: '2026-03-28',
      category: 'Business Intelligence',
      readTime: 10,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      slug: 'business-intelligence-decisoes-estrategicas',
      tags: ['BI', 'Analytics', 'Dados']
    },
    {
      id: '3',
      title: 'Machine Learning em Negócios: Aplicações Práticas e ROI Real',
      excerpt: 'Explore como machine learning está transformando indústrias e como sua empresa pode começar a implementar soluções de ML com ROI comprovado.',
      content: `Machine Learning (ML) deixou de ser ficção científica para se tornar uma realidade operacional em empresas de todos os tamanhos. Descubra como implementar ML de forma prática e rentável.

## O Cenário Atual do Machine Learning

ML está revolucionando como as empresas operam. De recomendações personalizadas a previsão de manutenção, as aplicações são praticamente ilimitadas.

## Aplicações Práticas de ML por Setor

### Varejo
- **Recomendação de Produtos**: Aumenta ticket médio em 20-30%
- **Previsão de Demanda**: Reduz excesso de estoque em 40%
- **Detecção de Fraude**: Identifica 95%+ de transações fraudulentas

### Manufatura
- **Manutenção Preditiva**: Reduz tempo de inatividade em 50%
- **Controle de Qualidade**: Detecta defeitos com 99%+ de precisão
- **Otimização de Produção**: Aumenta eficiência em 25%

### Serviços Financeiros
- **Scoring de Crédito**: Melhora precisão em 35%
- **Detecção de Fraude**: Identifica padrões anômalos em tempo real
- **Previsão de Churn**: Retém 40%+ mais clientes

## Implementação Prática

### Fase 1: Definição do Problema
Identificar o problema de negócio específico que ML pode resolver.

### Fase 2: Coleta de Dados
Reunir dados históricos relevantes e de qualidade suficiente.

### Fase 3: Preparação e Modelagem
Limpar dados, selecionar features e treinar modelos.

### Fase 4: Validação e Deployment
Testar em ambiente controlado antes de colocar em produção.

### Fase 5: Monitoramento Contínuo
Acompanhar performance e reajustar modelos conforme necessário.

## ROI de Projetos de ML

- **Payback Period**: 6-12 meses em média
- **Retorno Anual**: 200-400% após implementação
- **Redução de Custos**: 30-50% em processos automatizados
- **Aumento de Receita**: 15-25% através de novas oportunidades

## Conclusão

ML não é mais opcional — é essencial para competitividade. Comece com um projeto piloto bem definido e escale a partir dos resultados.`,
      author: 'Anderson Graça',
      date: '2026-03-25',
      category: 'Machine Learning',
      readTime: 12,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      slug: 'machine-learning-negocios-roi',
      tags: ['Machine Learning', 'IA', 'Automação']
    },
    {
      id: '4',
      title: 'Data Governance: Estruturando Dados como Ativo Corporativo',
      excerpt: 'Entenda por que Data Governance é crítico e como implementar uma estratégia que garanta qualidade, segurança e conformidade dos dados.',
      content: `Data Governance é o framework que garante que os dados sejam gerenciados como um ativo corporativo valioso, com qualidade, segurança e conformidade.

## Por que Data Governance Importa

Sem governance adequada, dados podem se tornar um passivo em vez de um ativo. Problemas incluem:
- Dados duplicados ou inconsistentes
- Falta de conformidade regulatória
- Segurança e privacidade comprometidas
- Falta de confiança nos dados

## Pilares de uma Estratégia de Data Governance

### 1. Qualidade de Dados
Garantir que dados sejam precisos, completos, consistentes e atualizados.

### 2. Segurança e Privacidade
Proteger dados contra acessos não autorizados e conformidade com GDPR, LGPD, etc.

### 3. Conformidade e Regulação
Atender requisitos legais e regulatórios específicos do setor.

### 4. Gestão de Metadados
Documentar o que cada dado significa, sua origem e como é usado.

### 5. Gestão de Acesso
Controlar quem pode acessar, modificar e deletar dados.

## Benefícios Mensuráveis

- **Redução de Riscos**: 70%+ menos incidentes de segurança
- **Conformidade**: 100% aderência a regulações
- **Eficiência**: 40% menos tempo em busca de dados
- **Confiança**: 90%+ de confiança nos dados para decisões

## Implementação Passo a Passo

### Fase 1: Avaliação
Mapear dados existentes e identificar gaps.

### Fase 2: Estratégia
Definir políticas, processos e responsabilidades.

### Fase 3: Implementação
Implementar ferramentas e processos de governance.

### Fase 4: Monitoramento
Acompanhar conformidade e qualidade continuamente.

## Conclusão

Data Governance é um investimento essencial que protege sua organização e maximiza o valor dos dados.`,
      author: 'Márcio Alves',
      date: '2026-03-20',
      category: 'Data Governance',
      readTime: 9,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
      slug: 'data-governance-ativo-corporativo',
      tags: ['Data Governance', 'Segurança', 'Conformidade']
    },
    {
      id: '5',
      title: 'Cloud Data Warehousing: Escalabilidade e Performance para Análise',
      excerpt: 'Descubra como data warehouses em cloud estão revolucionando a forma como as empresas armazenam e analisam dados em escala.',
      content: `Cloud Data Warehousing oferece escalabilidade, performance e flexibilidade que data warehouses tradicionais não conseguem igualar.

## Evolução do Data Warehousing

De sistemas on-premise caros e inflexíveis para soluções cloud que escalam conforme necessário — essa é a revolução do data warehousing moderno.

## Vantagens do Cloud Data Warehousing

### Escalabilidade Elástica
Escale computação e armazenamento independentemente conforme demanda.

### Performance Superior
Processamento paralelo massivo permite queries em terabytes de dados em segundos.

### Custo Efetivo
Pague apenas pelo que usa — sem investimento em infraestrutura.

### Disponibilidade e Confiabilidade
Uptime de 99.9%+ com redundância geográfica automática.

### Integração Simplificada
Conecte facilmente com ferramentas de BI, ML e analytics.

## Principais Plataformas

### Snowflake
- Separação de compute e storage
- Performance consistente
- Ideal para analytics em escala

### BigQuery (Google Cloud)
- Análise de dados em escala petabyte
- Integração com ecossistema Google
- Preços competitivos

### Redshift (AWS)
- Warehouse tradicional otimizado
- Integração com ecossistema AWS
- Bom para workloads conhecidas

## Casos de Sucesso

**E-commerce**: Análise de 10TB+ de dados diários em segundos
**Fintech**: Processamento de transações em tempo real com ML
**SaaS**: Analytics multi-tenant escalável

## Implementação

### Fase 1: Avaliação
Avaliar volume, velocidade e variedade de dados.

### Fase 2: Seleção
Escolher plataforma baseada em requisitos específicos.

### Fase 3: Migração
Migrar dados existentes com mínima interrupção.

### Fase 4: Otimização
Otimizar queries e estrutura de dados para performance.

## ROI de Cloud Data Warehousing

- **Redução de Custos**: 50-70% vs on-premise
- **Tempo para Insight**: 10x mais rápido
- **Time to Market**: 5x mais rápido para novos analytics
- **Escalabilidade**: Suporta crescimento 100x sem redesign

## Conclusão

Cloud Data Warehousing é o futuro da análise de dados. Empresas que adotam agora ganham vantagem competitiva significativa.`,
      author: 'Anderson Graça',
      date: '2026-03-15',
      category: 'Cloud & Infraestrutura',
      readTime: 11,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
      slug: 'cloud-data-warehousing-escalabilidade',
      tags: ['Cloud', 'Data Warehouse', 'Infraestrutura']
    },
    {
      id: '6',
      title: 'Tendências de BI em 2026: O Que Esperar do Futuro da Análise de Dados',
      excerpt: 'Conheça as tendências que estão moldando o futuro do Business Intelligence e como sua empresa pode se preparar para o que vem por aí.',
      content: `O mundo do BI está em constante evolução. Aqui estão as tendências que vão dominar em 2026 e além.

## Tendência 1: BI Democratizado

Ferramentas de BI estão se tornando mais acessíveis para usuários não-técnicos. Self-service analytics permite que qualquer pessoa explore dados e crie insights.

**Impacto**: Redução de 60% no tempo para gerar relatórios

## Tendência 2: BI Aumentado com IA

IA e machine learning estão sendo integrados em plataformas de BI para:
- Detecção automática de anomalias
- Recomendações de análise
- Previsões automáticas
- Processamento de linguagem natural

**Impacto**: 3x mais insights descobertos automaticamente

## Tendência 3: Real-Time Analytics

Analytics em tempo real deixou de ser luxo para se tornar necessidade. Decisões precisam ser tomadas em segundos, não horas.

**Impacto**: Redução de 80% no tempo de resposta a eventos

## Tendência 4: Data Mesh

Arquitetura descentralizada de dados onde cada domínio gerencia seus próprios dados como produto.

**Impacto**: Escalabilidade 10x com menos complexidade

## Tendência 5: Privacy-First Analytics

Com regulações como GDPR e LGPD, privacy by design é essencial.

**Impacto**: 100% conformidade regulatória

## Tendência 6: Embedded Analytics

Analytics integrado diretamente em aplicações de negócio.

**Impacto**: Decisões baseadas em dados no ponto de ação

## Preparando sua Organização

### 1. Investir em Educação
Treinar equipes em novas ferramentas e metodologias.

### 2. Modernizar Infraestrutura
Migrar para cloud e arquiteturas modernas.

### 3. Adotar IA/ML
Começar com casos de uso piloto.

### 4. Focar em Dados
Investir em qualidade e governance de dados.

### 5. Cultura de Dados
Criar cultura onde dados informam todas as decisões.

## Conclusão

O futuro do BI é emocionante e cheio de oportunidades. Organizações que abraçam essas tendências estarão bem posicionadas para sucesso.`,
      author: 'Márcio Alves',
      date: '2026-03-10',
      category: 'Tendências',
      readTime: 10,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop',
      slug: 'tendencias-bi-2026',
      tags: ['Tendências', 'IA', 'Futuro']
    }
  ];

  const categories = ['Todos', 'Transformação Digital', 'Business Intelligence', 'Machine Learning', 'Data Governance', 'Cloud & Infraestrutura', 'Tendências'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-bg">
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
              Blog & Recursos
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Artigos, insights e tendências sobre transformação digital, Business Intelligence e dados que impulsionam negócios.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Procurar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredArticles.map((article, index) => (
                <div
                  key={article.id}
                  className={`group relative transition-all duration-700 ${
                    index < visibleCards.length && visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Glass-morphism card */}
                  <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 shadow-2xl overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                    
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-sm font-semibold text-white">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-300 mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Metadata */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(article.date).toLocaleDateString('pt-PT', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              <span>{article.author}</span>
                            </div>
                          </div>
                          <div className="text-xs font-semibold text-cyan-400">
                            {article.readTime} min
                          </div>
                        </div>

                        <button 
                          onClick={() => onSelectArticle?.(article)}
                          className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                          Ler Artigo
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-300 mb-4">Nenhum artigo encontrado</p>
              <p className="text-gray-400">Tente ajustar seus filtros de busca</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Quer Aprender Mais?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Inscreva-se em nossa newsletter para receber os últimos artigos, insights e tendências sobre transformação digital e dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Seu email"
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap">
                Inscrever
              </button>
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

export default Blog;
