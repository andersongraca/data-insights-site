import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User, Mail, Phone, Building2, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import ScrollToTop from '../components/ScrollToTop';

interface ScheduleDemoProps {
  onBack?: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees: string;
  industry: string;
  selectedDate: string;
  selectedTime: string;
  message: string;
}

const ScheduleDemo = ({ onBack }: ScheduleDemoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    industry: '',
    selectedDate: '',
    selectedTime: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Available time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  // Industries list
  const industries = [
    'Manufatura',
    'Varejo',
    'Distribuição',
    'Logística',
    'Serviços Financeiros',
    'Saúde',
    'Educação',
    'Tecnologia',
    'Outro'
  ];

  // Get calendar days
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const isDateAvailable = (day: number | null) => {
    if (!day) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && date.getDay() !== 0 && date.getDay() !== 6; // No weekends
  };

  const handleDateSelect = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dateString = date.toISOString().split('T')[0];
    setFormData({ ...formData, selectedDate: dateString, selectedTime: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.company.trim()) newErrors.company = 'Empresa é obrigatória';
    if (!formData.industry) newErrors.industry = 'Setor é obrigatório';
    if (!formData.selectedDate) newErrors.selectedDate = 'Data é obrigatória';
    if (!formData.selectedTime) newErrors.selectedTime = 'Hora é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          employees: '',
          industry: '',
          selectedDate: '',
          selectedTime: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  const calendarDays = generateCalendarDays();
  const monthName = currentMonth.toLocaleDateString('pt-PT', { month: 'long', year: 'numeric' });

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
              Agendar Demonstração
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Conheça como nossas soluções podem transformar seu negócio. Agende uma demonstração personalizada com nossos especialistas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Calendar Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Selecione uma Data</h2>
              
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                <h3 className="text-lg font-semibold text-white capitalize">{monthName}</h3>
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-6">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map(day => (
                  <div key={day} className="text-center text-gray-400 text-sm font-semibold py-2">
                    {day}
                  </div>
                ))}
                
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => day && isDateAvailable(day) && handleDateSelect(day)}
                    disabled={!isDateAvailable(day)}
                    className={`p-2 rounded-lg text-sm font-medium transition-all ${
                      !day
                        ? 'bg-transparent'
                        : isDateAvailable(day)
                        ? formData.selectedDate === new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().split('T')[0]
                          ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg'
                          : 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-white/5 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {errors.selectedDate && (
                <p className="text-red-400 text-sm mb-4">{errors.selectedDate}</p>
              )}

              {/* Time Slots */}
              {formData.selectedDate && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Selecione uma Hora</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => setFormData({ ...formData, selectedTime: time })}
                        className={`p-3 rounded-lg font-medium transition-all ${
                          formData.selectedTime === time
                            ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {errors.selectedTime && (
                    <p className="text-red-400 text-sm mt-2">{errors.selectedTime}</p>
                  )}
                </div>
              )}

              {/* Selected Date/Time Display */}
              {formData.selectedDate && formData.selectedTime && (
                <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <div className="flex items-center gap-3 text-green-300">
                    <Check className="h-5 w-5" />
                    <span>
                      {new Date(formData.selectedDate).toLocaleDateString('pt-PT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} às {formData.selectedTime}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Form Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Seus Dados</h2>

              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Agendamento Confirmado!</h3>
                  <p className="text-gray-300 mb-4">
                    Recebemos seu pedido de demonstração. Entraremos em contacto em breve para confirmar.
                  </p>
                  <p className="text-sm text-gray-400">
                    Verifique seu email para mais detalhes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="inline h-4 w-4 mr-2" />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="João Silva"
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-colors ${
                        errors.name ? 'border-red-500/50' : 'border-white/20'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="joao@empresa.com"
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-colors ${
                        errors.email ? 'border-red-500/50' : 'border-white/20'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Phone className="inline h-4 w-4 mr-2" />
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+351 91 234 5678"
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-colors ${
                        errors.phone ? 'border-red-500/50' : 'border-white/20'
                      }`}
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Building2 className="inline h-4 w-4 mr-2" />
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Sua Empresa"
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-colors ${
                        errors.company ? 'border-red-500/50' : 'border-white/20'
                      }`}
                    />
                    {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Setor *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-colors ${
                        errors.industry ? 'border-red-500/50' : 'border-white/20'
                      }`}
                    >
                      <option value="">Selecione um setor</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry} className="bg-gray-900">
                          {industry}
                        </option>
                      ))}
                    </select>
                    {errors.industry && <p className="text-red-400 text-sm mt-1">{errors.industry}</p>}
                  </div>

                  {/* Employees */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tamanho da Empresa
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 transition-colors"
                    >
                      <option value="">Selecione</option>
                      <option value="1-10" className="bg-gray-900">1-10 colaboradores</option>
                      <option value="11-50" className="bg-gray-900">11-50 colaboradores</option>
                      <option value="51-200" className="bg-gray-900">51-200 colaboradores</option>
                      <option value="200+" className="bg-gray-900">200+ colaboradores</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mensagem (Opcional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre seus desafios..."
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Confirmar Agendamento
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">O que esperar na demonstração</h2>
            <p className="text-xl text-gray-300">Uma sessão personalizada de 30 minutos com nossos especialistas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Análise Personalizada',
                description: 'Avaliação dos seus desafios específicos e oportunidades de otimização'
              },
              {
                icon: '🎯',
                title: 'Demo Interativa',
                description: 'Visualize em tempo real como nossas soluções podem transformar seus dados'
              },
              {
                icon: '💡',
                title: 'Proposta Customizada',
                description: 'Receba uma proposta personalizada baseada nas suas necessidades'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 hover:border-white/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
      <ScrollToTop />
    </div>
  );
};

export default ScheduleDemo;
