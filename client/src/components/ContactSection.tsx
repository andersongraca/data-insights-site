import { useState, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send } from 'lucide-react';
import logo from '../assets/logo-Photoroom.png';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'' | 'success' | 'error'>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    // Simulate form submission
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Logo - Large and Dynamic */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            {/* Animated background circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Logo container with hover effect */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-white/20">
              <img 
                src={logo} 
                alt="Data Insights Logo" 
                className="h-64 md:h-80 lg:h-96 w-auto mx-auto drop-shadow-lg hover:drop-shadow-2xl transition-all duration-500" 
              />
            </div>
          </div>
        </div>

        {/* Main Contact Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 rounded-full p-3 mt-1 flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Email</p>
                    <p className="text-lg font-semibold text-gray-900">contact@datainsights.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <p className="text-3xl font-bold text-green-600">24/7</p>
                <p className="text-sm text-gray-600 mt-2">Suporte Disponível</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <p className="text-3xl font-bold text-blue-600">+50</p>
                <p className="text-sm text-gray-600 mt-2">Clientes Ativos</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                    placeholder={t('contact.form.name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                    placeholder={t('contact.form.email')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm resize-none"
                    placeholder={t('contact.form.message')}
                  />
                </div>

                {status === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg animate-in fade-in">
                    {t('contact.form.success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg animate-in fade-in">
                    {t('contact.form.error')}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
