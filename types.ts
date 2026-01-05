
export interface Project {
  id: string;
  title: string;
  category: 'Industrial' | 'Banking' | 'Fullstack';
  description: string;
  technologies: string[];
  image: string;
  videoUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface ResearchItem {
  title: string;
  domain: 'Banking' | 'Industrial Automation';
  description: string;
  outcome: string;
}

// Added ChatMessage interface to resolve export error in AIChat.tsx
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}