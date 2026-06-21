/**
 * Types definition for PT. Barokah Informatika Solusindo Company Profile.
 */

export interface NavItem {
  id: string;
  label: string;
  elementId: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  iconName: string;
}

export interface StarStatistic {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  techStack: string[];
  benefitWord: string;
  badge: string;
  graphicType: 'webapp' | 'mobileapp' | 'cloudsystem' | 'consultancy';
}

export interface BentoFeature {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  size: 'large' | 'small' | 'tall';
  illustrationType: 'chart' | 'radar' | 'code' | 'nodes' | 'shield';
}

export interface ProjectCaseStudy {
  id: string;
  clientName: string;
  industry: string;
  title: string;
  description: string;
  impactMetrics: { value: string; label: string }[];
  accentColor: string;
  mockupPreset: 'dashboard' | 'mobile' | 'api';
}

export interface Testimonial {
  id: string;
  content: string;
  authorName: string;
  role: string;
  companyName: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface InquiryFormInput {
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  urgency: 'low' | 'medium' | 'high';
  notes: string;
}
