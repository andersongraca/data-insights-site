import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        solutions: "Solutions",
        contact: "Contact"
      },
      solutions: {
        title: "Solutions",
        saas: "SaaS Solutions",
        dataScience: "Data Science & Analytics",
        dataEngineering: "Data Engineering"
      },
      hero: {
        title: "Transform Your Data into Strategic Insights",
        subtitle: "We deliver cutting-edge SaaS solutions, Data Science & Analytics, and Data Engineering services to accelerate your business growth.",
        cta1: "Get Started",
        cta2: "Learn More"
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive solutions for your data-driven journey",
        saas: {
          title: "SaaS Solutions",
          description: "Scalable, cloud-based software solutions designed to streamline your operations and enhance productivity. Our SaaS offerings are built with modern technologies to ensure reliability, security, and seamless integration with your existing systems."
        },
        dataScience: {
          title: "Data Science & Analytics",
          description: "Unlock the power of your data with advanced analytics, predictive modeling, and machine learning. We help you make data-driven decisions that drive growth, optimize processes, and uncover hidden opportunities in your business."
        },
        dataEngineering: {
          title: "Data Engineering",
          description: "Build robust data pipelines, architectures, and ETL processes to ensure your data is clean, accessible, and ready for analysis. Our data engineering services provide the foundation for effective analytics and business intelligence."
        }
      },
      about: {
        title: "About Us",
        subtitle: "Expertise you can trust",
        description: "We are a team of passionate data professionals dedicated to helping businesses harness the power of their data. With deep expertise in intelligent computing, data science, and analytics, we deliver solutions that make a real impact.",
        founder: {
          name: "Founder & Lead Data Scientist",
          credentials: "Master's in Intelligent Computing | MBA in Data Science & Analytics",
          bio: "With a strong academic foundation and hands-on experience in data science and analytics, our founder leads the team in delivering innovative, results-driven solutions for clients across various industries."
        }
      },
      benefits: {
        title: "Why Choose Us",
        expertise: {
          title: "Deep Expertise",
          description: "Advanced degrees and real-world experience in data science and analytics"
        },
        innovation: {
          title: "Innovative Solutions",
          description: "Cutting-edge technologies and methodologies tailored to your needs"
        },
        results: {
          title: "Proven Results",
          description: "Track record of delivering measurable business impact"
        },
        support: {
          title: "Dedicated Support",
          description: "Ongoing partnership to ensure your success"
        }
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Let's discuss how we can help your business thrive",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          submit: "Send Message",
          success: "Thank you! We'll get back to you soon.",
          error: "Please fill in all fields."
        }
      },
      footer: {
        tagline: "Transforming data into actionable insights",
        quickLinks: "Quick Links",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        copyright: "© 2025 Data Insights. All rights reserved."
      },
      chat: {
        title: "Chat with us",
        placeholder: "Type your message...",
        send: "Send"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: "Início",
        about: "Quem Somos",
        solutions: "Soluções",
        contact: "Contacto"
      },
      solutions: {
        title: "Soluções",
        saas: "Soluções SaaS",
        dataScience: "Data Science & Analytics",
        dataEngineering: "Engenharia de Dados"
      },
      hero: {
        title: "Transforme os Seus Dados em Insights Estratégicos",
        subtitle: "Oferecemos soluções SaaS de ponta, Data Science & Analytics e serviços de Engenharia de Dados para acelerar o crescimento do seu negócio.",
        cta1: "Começar",
        cta2: "Saber Mais"
      },
      services: {
        title: "Os Nossos Serviços",
        subtitle: "Soluções abrangentes para a sua jornada orientada por dados",
        saas: {
          title: "Soluções SaaS",
          description: "Soluções de software escaláveis baseadas na cloud, concebidas para otimizar as suas operações e aumentar a produtividade. As nossas ofertas SaaS são construídas com tecnologias modernas para garantir fiabilidade, segurança e integração perfeita com os seus sistemas existentes."
        },
        dataScience: {
          title: "Data Science & Analytics",
          description: "Desbloqueie o poder dos seus dados com análises avançadas, modelação preditiva e machine learning. Ajudamos-lhe a tomar decisões baseadas em dados que impulsionam o crescimento, otimizam processos e descobrem oportunidades ocultas no seu negócio."
        },
        dataEngineering: {
          title: "Engenharia de Dados",
          description: "Construa pipelines de dados robustos, arquiteturas e processos ETL para garantir que os seus dados estejam limpos, acessíveis e prontos para análise. Os nossos serviços de engenharia de dados fornecem a base para análises eficazes e business intelligence."
        }
      },
      about: {
        title: "Quem Somos",
        subtitle: "Especialização em que pode confiar",
        description: "Somos uma equipa de profissionais de dados apaixonados, dedicados a ajudar empresas a aproveitar o poder dos seus dados. Com profunda experiência em computação inteligente, data science e analytics, entregamos soluções que fazem a diferença.",
        founder: {
          name: "Fundador & Lead Data Scientist",
          credentials: "Mestre em Computação Inteligente | MBA em Data Science & Analytics",
          bio: "Com uma sólida formação académica e experiência prática em data science e analytics, o nosso fundador lidera a equipa na entrega de soluções inovadoras e orientadas para resultados para clientes em várias indústrias."
        }
      },
      benefits: {
        title: "Porquê Escolher-nos",
        expertise: {
          title: "Especialização Profunda",
          description: "Formação avançada e experiência prática em data science e analytics"
        },
        innovation: {
          title: "Soluções Inovadoras",
          description: "Tecnologias e metodologias de ponta adaptadas às suas necessidades"
        },
        results: {
          title: "Resultados Comprovados",
          description: "Histórico de entrega de impacto mensurável nos negócios"
        },
        support: {
          title: "Suporte Dedicado",
          description: "Parceria contínua para garantir o seu sucesso"
        }
      },
      contact: {
        title: "Entre em Contacto",
        subtitle: "Vamos discutir como podemos ajudar o seu negócio a prosperar",
        form: {
          name: "Nome",
          email: "Email",
          message: "Mensagem",
          submit: "Enviar Mensagem",
          success: "Obrigado! Entraremos em contacto em breve.",
          error: "Por favor, preencha todos os campos."
        }
      },
      footer: {
        tagline: "Transformando dados em insights acionáveis",
        quickLinks: "Links Rápidos",
        privacy: "Política de Privacidade",
        terms: "Termos e Condições",
        copyright: "© 2025 Data Insights. Todos os direitos reservados."
      },
      chat: {
        title: "Converse connosco",
        placeholder: "Digite a sua mensagem...",
        send: "Enviar"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

