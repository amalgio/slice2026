export interface EventRound {
  title: string;
  time?: string;
  description: string;
  rules: string[];
}

export interface Coordinator {
  name: string;
  role?: string;
  phone: string;
  email?: string;
}

export interface EventItem {
  id: string;
  name: string;
  category: 'Technical' | 'Non-Technical' | 'Flagship' | 'Workshop';
  //shortDescription: string;
  //fullDescription: string;
  roundsCount: number;
  teamSize: string;
  timing: string;
  venue: string;
  //cashPrize?: string;
  iconName: string; // Lucide icon identifier
  rounds: EventRound[];
  genrules: string[];
  coordinators: Coordinator[];
  requirements?: string[];
  sponsor?: boolean;
  featured?: boolean;
}

export interface Sponsor {
  id: string;
  name: string;
  tier?: 'Diamond' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  logoUrl: string;
  websiteUrl?: string;
  description: string;
  thollai?:boolean;
  phone?: string[];
  email?: string;
}

export interface PolaroidPhoto {
  id: string;
  title: string;
  caption: string;
  year: string;
  imageUrl: string;
  rotation: number; // e.g. -3, 2, -1 for scattered desk look
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Registration' | 'Events' | 'Venue & Logistics' | 'General';
}

export interface FacultyMember {
  name: string;
  designation: string;
  department: string;
  photoUrl: string;
  role: string;
  email?: string;
  linkUrl?: string;
}
