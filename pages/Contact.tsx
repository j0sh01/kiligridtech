import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useApp } from '../AppContext';
import { translations } from '../translations';

const Contact: React.FC = () => {
  const { lang } = useApp();
  const t = translations[lang];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'ERP Solutions',
    brief: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Basic email validation
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Replace this with your Formspree form ID
  const FORMSPREE_ID = 'xovwgnra';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!isValidEmail(formData.email)) {
      setErrorMessage(t.contact.errors.invalidEmail || 'Please enter a valid email');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'ERP Solutions', brief: '' });
      } else {
        setStatus('error');
        if (data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setErrorMessage('An unknown error occurred');
        }
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-snow dark:bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left info section */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl lg:text-7xl font-black text-ocean dark:text-white mb-6">
                {t.contact.title.split('Future.')[0]}
                <span className="text-glacier">{lang === 'en' ? 'Future.' : 'Baadaye.'}</span>
              </h1>
              <p className="text-xl text-gray-500 dark:text-blue-100/60 leading-relaxed">{t.contact.subtitle}</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-ocean dark:bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ocean dark:text-white">{lang === 'en' ? 'Communication' : 'Mawasiliano'}</h4>
                  <p className="text-gray-500 dark:text-blue-100/50">+255 744 862 577</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-ocean dark:bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ocean dark:text-white">{lang === 'en' ? 'Email Inquiry' : 'Barua Pepe'}</h4>
                  <p className="text-gray-500 dark:text-blue-100/50">info@kiligridtech.com</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-ocean dark:bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ocean dark:text-white">{lang === 'en' ? 'Location' : 'Mahali'}</h4>
                  <p className="text-gray-500 dark:text-blue-100/50">Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form section */}
          <div className="bg-white dark:bg-white/5 p-10 rounded-[40px] shadow-2xl border border-blue-100 dark:border-white/5 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-ocean dark:text-white mb-8 flex items-center gap-3">
              <MessageSquare className="text-glacier" /> {t.contact.formTitle}
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-blue-100/30">{t.contact.labels.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.name}
                  required
                  className="w-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 ring-glacier outline-none text-ocean dark:text-white"
                />
              </div>

              {/* Email & Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-blue-100/30">{t.contact.labels.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.email}
                    required
                    className="w-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 ring-glacier outline-none text-ocean dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-blue-100/30">{t.contact.labels.service}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 ring-glacier outline-none text-ocean dark:text-white appearance-none cursor-pointer"
                  >
                    <option>ERP Solutions</option>
                    <option>Security Systems</option>
                    <option>Network Infrastructure</option>
                    <option>AI & Data Analytics</option>
                  </select>
                </div>
              </div>

              {/* Brief */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-blue-100/30">{t.contact.labels.brief}</label>
                <textarea
                  name="brief"
                  value={formData.brief}
                  onChange={handleChange}
                  rows={4}
                  placeholder={t.contact.placeholders.brief}
                  className="w-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 ring-glacier outline-none text-ocean dark:text-white"
                />
              </div>

              {/* Error / Success */}
              {status === 'error' && (
                <p className="text-red-500 font-semibold">{errorMessage}</p>
              )}
              {status === 'success' && (
                <p className="text-green-500 font-semibold">{t.contact.successMessage || 'Message sent successfully!'}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-ocean dark:bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3"
              >
                {status === 'sending' ? 'Sending...' : t.contact.button} <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
