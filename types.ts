
// Added React import to provide access to React namespace types
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  metrics?: string;
  image?: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}