
import React from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo light />
            <p className="text-blue-100/40 text-sm leading-relaxed">
              Engineering clarity through technology. We provide secure, scalable, and integrated systems for elite enterprises worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-glacier hover:text-ocean transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-glacier hover:text-ocean transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-glacier hover:text-ocean transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-glacier">Services</h4>
            <ul className="space-y-4 text-blue-100/40 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">ERP Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Network Infrastructure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI & Data Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ICT Consultancy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-glacier">Company</h4>
            <ul className="space-y-4 text-blue-100/40 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About KiliGrid</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ICT Equipment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-glacier">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-glacier shrink-0" size={20} />
                <span className="text-sm text-blue-100/40">Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-glacier shrink-0" size={20} />
                <span className="text-sm text-blue-100/40">+255 744 862 577</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-glacier shrink-0" size={20} />
                <span className="text-sm text-blue-100/40">info@kiligridtech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-blue-100/20">
            © {new Date().getFullYear()} KiliGrid Technology. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-blue-100/20">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
