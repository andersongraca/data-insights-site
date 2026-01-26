import { useState, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, Award, Briefcase, GraduationCap } from 'lucide-react';
import logo from '../assets/logo-Photoroom.png';
import founderPhoto from '../assets/Captusdrar.JPG';

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
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
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

        {/* Main Contact Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Logo and Company Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              {/* Logo Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <img src={logo} alt="Data Insights Logo" className="h-24 w-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Insights</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Transformando dados em insights estratégicos para o crescimento do seu negócio.
                </p>
                
                {/* Company Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-lg border border-green-100">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-gray-600">Clientes Ativos</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-lg border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Informações de Contato</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-600">Email</div>
                      <div className="font-medium text-gray-900">contact@datainsights.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form + Founder Card */}
          <div className="flex flex-col gap-8">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-10 shadow-xl">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
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
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder={t('contact.form.message')}
                  />
                </div>

                {status === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    {t('contact.form.success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    {t('contact.form.error')}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>

            {/* Founder Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-100 hover:border-green-300 transition-colors">
              <div className="p-6">
                <div className="flex gap-4 mb-4">
                  <img
                    src={founderPhoto}
                    alt="Founder"
                    className="w-20 h-20 rounded-full object-cover border-2 border-green-400"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {t('about.founder.name')}
                    </h4>
                    <div className="flex items-center gap-1 text-green-600 font-medium text-sm">
                      <GraduationCap className="h-4 w-4" />
                      <span>{t('about.founder.credentials')}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {t('about.founder.bio')}
                </p>

                {/* Credentials */}
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-xs">
                    <Award className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Master's in Intelligent Computing</div>
                      <div className="text-gray-600">AI and Machine Learning</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <Briefcase className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">MBA in Data Science & Analytics</div>
                      <div className="text-gray-600">Business & Technical Excellence</div>
                    </div>
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

export default ContactSection;
