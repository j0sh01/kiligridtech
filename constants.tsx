
import React from 'react';
import { 
  Cpu, 
  Network, 
  ShieldCheck, 
  Database, 
  Factory, 
  Building2, 
  GraduationCap, 
  ShoppingCart,
  MessageSquare,
  Globe,
  Settings,
  Users,
  Briefcase,
  Layout,
  LifeBuoy,
  BarChart3
} from 'lucide-react';
import { Service, Industry } from './types';

export const COLORS = {
  primary: '#1E3A8A', // Deep Ocean Blue
  secondary: '#F8FAFC', // Kilimanjaro Snow
  accent: '#7DD3FC', // Glacier Blue
  ice: '#E0F2FE', // Ice Blue
};

export const SERVICES: Service[] = [
  {
    id: 'erp',
    title: 'ERP Solutions',
    description: 'Custom modules for integrated business management. Compliant reporting and multi-currency support.',
    icon: <Database className="w-8 h-8" />,
    metrics: 'Operational Clarity',
    image: '/erp-systems.png'
  },
  {
    id: 'networks',
    title: 'Network Infrastructure',
    description: 'Enterprise fiber optics, wireless mesh, and secure redundant server room architecture.',
    icon: <Network className="w-8 h-8" />,
    metrics: '99.9% Connectivity',
    image: '/network-infrastructure.png'
  },
  {
    id: 'security',
    title: 'Security Systems',
    description: 'Integrated surveillance, Biometric access control, and smart security infrastructure.',
    icon: <ShieldCheck className="w-8 h-8" />,
    metrics: 'Advanced Protection',
    image: '/security-infratructure.png'
  },
  {
    id: 'ai-data',
    title: 'AI & Data Analytics',
    description: 'Leveraging machine learning and big data to drive strategic decision-making and operational intelligence.',
    icon: <BarChart3 className="w-8 h-8" />,
    metrics: 'Predictive Insights',
    image: '/ai-data-analytics.png'
  },
  {
    id: 'consultancy',
    title: 'IT Consultancy',
    description: 'Strategic planning, infrastructure audits, and digital transformation roadmaps.',
    icon: <MessageSquare className="w-8 h-8" />,
    metrics: 'Expert Guidance',
    image: '/it-consultancy.png'
  },
  {
    id: 'marketing',
    title: 'Digital Systems',
    description: 'Presence management and automated lead generation systems for scaling growth.',
    icon: <Globe className="w-8 h-8" />,
    metrics: 'Seamless Integration',
    image: '/digital-system.png'
  }
];

export const MODULES = [
  { id: 'acc', key: 'accounting', icon: <Building2 className="w-6 h-6" /> },
  { id: 'inv', key: 'inventory', icon: <Database className="w-6 h-6" /> },
  { id: 'crm', key: 'crm', icon: <Users className="w-6 h-6" /> },
  { id: 'mrp', key: 'mrp', icon: <Settings className="w-6 h-6" /> },
  { id: 'pur', key: 'purchase', icon: <ShoppingCart className="w-6 h-6" /> },
  { id: 'hr', key: 'hr', icon: <Briefcase className="w-6 h-6" /> },
  { id: 'prj', key: 'projects', icon: <Layout className="w-6 h-6" /> },
  { id: 'web', key: 'ecommerce', icon: <Globe className="w-6 h-6" /> },
  { id: 'sup', key: 'support', icon: <LifeBuoy className="w-6 h-6" /> },
  { id: 'pos', key: 'pos', icon: <ShoppingCart className="w-6 h-6" /> },
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'mfg',
    name: 'Manufacturing',
    description: 'Bill of Materials, production planning, and quality control systems.',
    icon: <Factory className="w-6 h-6" />
  },
  {
    id: 'finance',
    name: 'Banking & Finance',
    description: 'General ledger, asset management, and high-security infrastructure.',
    icon: <Building2 className="w-6 h-6" />
  },
  {
    id: 'edu',
    name: 'Education',
    description: 'Campus management, e-learning platforms, and student data systems.',
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    id: 'retail',
    name: 'Retail & Hospitality',
    description: 'POS systems, multi-store inventory, and guest management tools.',
    icon: <ShoppingCart className="w-6 h-6" />
  }
];

export const KiliIcon = ({ className }: { className?: string }) => (
  <img
    src="/KiliGridLinkedin-removebg-preview.png"
    alt="KiliGrid Logo"
    className={className}
    onError={(e) => {
      (e.currentTarget as HTMLImageElement).src = '/fallback-icon.svg';
    }}
  />
);
