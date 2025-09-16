import type { ComponentType, ReactNode } from "react";

export interface User {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  location?: string;
  isReturning?: boolean;
  preferences?: string[];
  searchHistory?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: ComponentType<{
    className?: string;
    size?: number | string;
    "aria-hidden"?: boolean;
  }>;
  description?: string;
  featured?: boolean;
}

export interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  thumbnail?: string;
  description?: string;
}

export interface Service {
  id: string;
  name: string;
  summary: string;
  icon?: ComponentType<{ className?: string }>;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  expiresOn?: string;
  isSponsored?: boolean;
  terms?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  content: string;
  avatar?: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  vendorName: string;
  expiresOn?: string;
  isPaid: boolean;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  publishedOn: string;
  category: string;
  link: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  publishedOn: string;
  link: string;
}

export interface Business {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  location: string;
  categories: string[];
  rating: number;
  reviewCount: number;
  isPaid: boolean;
  heroImage: string;
  gallery: MediaItem[];
  services: Service[];
  offers: Offer[];
  testimonials: Testimonial[];
  reviews: Review[];
  promotions?: Promotion[];
  activities?: Activity[];
  news?: NewsArticle[];
  team?: TeamMember[];
  contactEmail?: string;
  contactPhone?: string;
  website?: string;
  socialLinks?: Record<string, string>;
}

export interface SearchFormValues {
  location: string;
  keywords: string;
}

export interface SearchContextValue {
  query: SearchFormValues;
  results: Business[];
  isSearching: boolean;
  performSearch: (values: SearchFormValues) => void;
  clearSearch: () => void;
}

export interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  logIn: (user: User) => void;
  logOut: () => void;
  updatePreferences: (preferences: string[]) => void;
}

export interface VendorProfile extends Business {
  address: string;
  workingHours: string;
  news: NewsArticle[];
  team: TeamMember[];
  testimonials: Testimonial[];
  reviews: Review[];
  offers: Offer[];
  services: Service[];
  gallery: MediaItem[];
  activities?: Activity[];
  additionalContent?: ReactNode;
}
