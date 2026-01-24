import { useTranslation } from 'react-i18next';

import { ArrowRight, TrendingUp } from 'lucide-react';
import logo from '../assets/logo-Photoroom.png';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { t } = useTranslation();
  const [chartData, setChartData] = useState([
    { height: '0%', value: 45, label: 'Jan' },
    { height: '0%', value: 60, label: 'Feb' },
    { height: '0%', value: 55, label: 'Mar' },
    { height: '0%', value: 75, label: 'Apr' },
    { height: '0%', value: 70, label: 'May' },
    { height: '0%', value: 85, label: 'Jun' },
    { height: '0%', value: 95, label: 'Jul' }
  ]);

  useEffect(() => {
    // Animate chart bars on component mount
    const timer = setTimeout(() => {
      setChartData(prevData =>
        prevData.map(item => ({ ...item, height: `${item.value}%` }))
      );
    }, 500); // Delay animation slightly after component mounts
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="gradient-bg section-padding pt-32 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span>AI-Powered Data Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 group rounded-lg font-medium transition-colors"
              >
                {t('hero.cta1')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform inline" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 backdrop-blur-sm rounded-lg font-medium transition-colors border"
              >
                {t('hero.cta2')}
              </button>
            </div>
          </div>

          {/* Right Content - Advanced Dashboard Mockup */}
          <div className="relative hidden md:block">
            <div className="relative w-full animate-fade-in">
              {/* Main Dashboard Card */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                {/* Dashboard Header with Logo */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
                    <div>
                      <h3 className="text-gray-900 font-bold text-lg">Data Insights</h3>
                      <p className="text-gray-500 text-sm">Analytics Dashboard</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 transform hover:scale-105 transition-transform">
                    <div className="text-blue-600 text-xs font-semibold mb-1">Revenue</div>
                    <div className="text-2xl font-bold text-gray-900">$2.4M</div>
                    <div className="text-green-600 text-xs font-medium mt-1">↑ 12.5%</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 transform hover:scale-105 transition-transform">
                    <div className="text-green-600 text-xs font-semibold mb-1">Growth</div>
                    <div className="text-2xl font-bold text-gray-900">+34%</div>
                    <div className="text-green-600 text-xs font-medium mt-1">↑ 8.2%</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 transform hover:scale-105 transition-transform">
                    <div className="text-purple-600 text-xs font-semibold mb-1">Users</div>
                    <div className="text-2xl font-bold text-gray-900">12.8K</div>
                    <div className="text-green-600 text-xs font-medium mt-1">↑ 23%</div>
                  </div>
                </div>

                {/* Animated Chart */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700 font-semibold text-sm">Performance Overview</span>
                    <div className="flex gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Target</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Actual</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Advanced Animated Bar Chart */}
                  <div className="flex items-end justify-between gap-2 h-40">
                    {chartData.map((bar, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full relative" style={{ height: '100%' }}>
                          {/* Background bar */}
                          <div className="absolute bottom-0 w-full bg-blue-200 rounded-t-lg opacity-30" style={{ height: '100%' }}></div>
                          {/* Animated foreground bar */}
                          <div 
                            className="absolute bottom-0 w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg shadow-lg transition-all duration-1000 ease-out hover:from-green-600 hover:to-green-500 cursor-pointer"
                            style={{ 
                              height: bar.height,
                              transitionDelay: `${index * 0.1}s` // Staggered animation
                            }}
                          >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30 rounded-t-lg"></div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-600 font-medium">{bar.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Conversion</div>
                      <div className="text-lg font-bold text-gray-900">94.2%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Avg. Time</div>
                      <div className="text-lg font-bold text-gray-900">4.2m</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Success Rate</div>
                    <div className="text-sm font-bold text-gray-900">98.7%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Processing</div>
                    <div className="text-sm font-bold text-gray-900">Real-time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

