export interface MetaProps {
  title: string;
  description: string;
  image?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fadeIn" | "fadeInUp" | "scaleIn" | "slideInRight";
}

// Theme Types
export type Theme = "light" | "dark" | "system";

// API Response Types
export interface APIResponse<T> {
  data: T;
  status: "success" | "error";
  message?: string;
}
