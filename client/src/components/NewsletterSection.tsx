import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/logo-Photoroom.png';

interface NewsletterFormData {
  email: string;
}

const NewsletterSection = () => {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: ''
  });
  const [status, setStatus] = useState<'' | 'success' | 'error'>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.email) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    // Simulate form submission
    setStatus('success');
    setFormData({ email: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Data Insights Logo" className="h-12 w-auto" />
          </div>

          {/* Center - Newsletter Form */}
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-center">Join our newsletter</h3>
            <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email*"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Mail className="h-4 w-4" />
                Subscribe
              </button>
            </form>
            {status === 'success' && (
              <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">Please enter a valid email</p>
            )}
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
