import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, CheckCircle } from 'lucide-react';
import logo from '../assets/logo-Photoroom.png';

interface FormData {
  name: string;
  email: string;
  message: string;
}

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'' | 'success' | 'error'>('');
  const [captchaToken, setCaptchaToken] = useState<string>('');
  const [captchaLoaded, setCaptchaLoaded] = useState(false);

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setCaptchaLoaded(true);
      // Render reCAPTCHA
      if (window.grecaptcha) {
        window.grecaptcha.render('recaptcha-container', {
          sitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // This is a test key - replace with your actual key
          theme: 'light',
          callback: onCaptchaChange
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const onCaptchaChange = (token: string) => {
    setCaptchaToken(token);
  };

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

    if (!captchaToken) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    // Simulate form submission
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setCaptchaToken('');
    
    // Reset reCAPTCHA
    if (window.grecaptcha) {
      window.grecaptcha.reset();
    }
    
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Main Contact Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left Side - Logo and Contact Info */}
          <div className="space-y-6">
            {/* Logo - Smaller and positioned to the left */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                <img 
                  src={logo} 
                  alt="Data Insights Logo" 
                  className="h-40 w-auto mx-auto drop-shadow-lg hover:drop-shadow-xl transition-all duration-300" 
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Informações de Contato</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 rounded-full p-2 mt-0.5 flex-shrink-0">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-600">Email</p>
                    <p className="text-sm font-semibold text-gray-900">contact@datainsights.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <p className="text-2xl font-bold text-green-600">24/7</p>
                <p className="text-xs text-gray-600 mt-1">Suporte Disponível</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <p className="text-2xl font-bold text-blue-600">+50</p>
                <p className="text-xs text-gray-600 mt-1">Clientes Ativos</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form (spans 2 columns) */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm resize-none"
                    placeholder={t('contact.form.message')}
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center p-4 bg-white/50 rounded-lg border border-gray-200">
                  <div id="recaptcha-container"></div>
                </div>

                {status === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg animate-in fade-in flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    {t('contact.form.success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg animate-in fade-in">
                    {t('contact.form.error')} {!captchaToken && 'Por favor, complete o reCAPTCHA.'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!captchaLoaded}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 text-white text-lg py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100"
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
