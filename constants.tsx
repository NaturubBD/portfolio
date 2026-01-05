
import { Project, Experience, ResearchItem } from './types';

export const NAME = "Plabon Dey";

export const PROFILE_IMAGE = "profile.png";

export const SOCIALS = {
  github: "https://github.com/plabon5150",
  linkedin: "https://linkedin.com/in/plabon5150",
  email: "shuvadey8@gmail.com",
  phone: "+8801867696560",
  address: "Maniknagar Road, Dhaka, Bangladesh"
};

export const ABOUT_ME = "I am on the hunt for a full-time role that not only presents professional challenges but also capitalizes on my robust skill set, which includes exceptional interpersonal abilities, stellar time management, and adept problem-solving capabilities. My goal is to engage in a dynamic environment where these competencies can be put to effective use, driving success and growth.";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'National Bank Chatbot System',
    category: 'Banking',
    description: 'An AI-powered conversational agent for banking services, integrating secure customer handling and FAQ automation.',
    technologies: ['React', 'n8n', 'ollama', 'RAG'],
    image: 'project1.jpg'
  },
  {
    id: '2',
    title: 'TrackNTask Attendance App',
    category: 'Fullstack',
    description: 'A comprehensive attendance tracking system for Android and iOS with location fencing and real-time reporting.',
    technologies: ['Flutter', 'GPS', 'nodejs', 'State Management'],
    image: 'project2.jpg'
  },
  {
    id: '3',
    title: 'Amarsheba Healthcare System',
    category: 'Fullstack',
    description: 'A digital health platform connecting patients with providers, featuring appointment scheduling and medical record management.',
    technologies: ['React.js', 'n8n', 'ollama', 'Postgrs'],
    image: 'project3.jpg'
  },
  {
    id: '4',
    title: 'Machine Automation',
    category: 'Industrial',
    description: 'Real-time monitoring and control system for industrial machinery at a German manufacturing facility.',
    technologies: ['C#', '.NET', 'Modbus', 'Flutter'],
    image: 'project4.jpg',
    videoUrl: 'https://drive.google.com/file/d/1CkRX0Lp78v7RexXwYeqslPKQ8QTsFWIF/view?usp=sharing'
  },
  {
    id: '5',
    title: 'Gatepass System',
    category: 'Industrial',
    description: 'Automated entry and exit authorization system for manufacturing plants, streamlining visitor and staff management.',
    technologies: ['ASP.NET Core', 'React', 'SQL Server', 'MUI'],
    image: 'project5.jpg'
  },
  {
    id: '6',
    title: 'Amargym',
    category: 'Fullstack',
    description: 'A comprehensive gym management and fitness tracking platform for members and trainers, featuring workout scheduling and membership automation.',
    technologies: ['Flutter', 'REST API', 'php', 'Bloc'],
    image: 'project6.jpg'
  },
  {
    id: '7',
    title: 'E-Farmary & Supply Chain',
    category: 'Fullstack',
    description: 'Comprehensive supply chain management system for the agricultural sector, integrating farm-to-table logistics.',
    technologies: ['RAG', 'React.js', 'Postgrs', 'Cloud Infrastructure'],
    image: 'project7.jpg'
  },
  {
    id: '8',
    title: 'Amr Procurement System',
    category: 'Fullstack',
    description: 'Enterprise-level procurement workflow engine, automating requisition, vendor bidding, and purchase orders.',
    technologies: ['Supabase', 'React.js', 'Postgrs', 'Cloud Infrastructure'],
    image: 'project8.jpg'
  },
  {
    id: '9',
    title: 'E-Production Industry System',
    category: 'Industrial',
    description: 'End-to-end production management system for large-scale industrial manufacturing, optimizing floor efficiency.',
    technologies: ['C#', '.NET Core', 'PostgreSQL', 'Dashboard Analytics'],
    image: 'project9.jpg'
  },
  {
    id: '10',
    title: 'Industrial Chatbot System',
    category: 'Industrial',
    description: 'Intelligent support bot for factory workers, providing instant access to machine manuals and troubleshooting guides.',
    technologies: ['Python', 'LangChain', 'RAG', 'Ollama'],
    image: 'project10.jpg'
  }
];

export const RESEARCH: ResearchItem[] = [
  {
    title: "AI-Powered Biometric Banking Protocols",
    domain: "Banking",
    description: "Researching the integration of Machine Learning Models (MLM) and Multi-Cloud Platforms (MCP) for highly secure, low-latency banking attendance and authorization workflows.",
    outcome: "Successfully implemented a production-ready Flutter app on the Play Store with integrated AI biometric validation."
  },
  {
    title: "Real-time Industrial IoT Orchestration",
    domain: "Industrial Automation",
    description: "Investigation into centralized software architectures for real-time monitoring and control of heavy manufacturing equipment, bridging the gap between legacy PLC systems and modern ERP frameworks.",
    outcome: "Reduced manual reporting overhead by 40% through a custom paperless system and real-time machine automation dashboard."
  }
];

export const EDUCATION = [
  {
    institution: "Institute of Engineering and Management",
    location: "Kolkata",
    year: "2018",
    degree: "Bachelor of Science in Electronics and Communication Engineering"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'National Bank PLC',
    role: 'Executive Officer',
    period: 'Apr 2025 - Present',
    description: [
      'Proficient Flutter Developer with a focus on AI integration.',
      'Successfully deployed a banking attendance application on the Google Play Store.',
      'Expertise in leveraging Machine Learning Models (MLM) and Multi-Cloud Platforms (MCP) for app development.'
    ],
    tags: ['Flutter', 'AI', 'Banking']
  },
  {
    company: 'Naturub Accessories Bangladesh Limited',
    role: 'Software Developer',
    period: 'Mar 2021 - Dec 2024',
    description: [
      'Spearheaded software development at Naturub, a German manufacturing firm, focusing on automation and ERP solutions.',
      'Engineered and sustained Production and Accounts ERP systems, enhancing financial and operational management.',
      'Streamlined entry and exit processes by automating Gatepass workflows.',
      'Pioneered the Production Machine Automation project for real-time monitoring of manufacturing equipment.'
    ],
    tags: ['ERP', 'Automation', 'C#', 'SQL Server']
  },
  {
    company: 'Rich IT',
    role: 'Jr. Software Developer',
    period: 'Apr 2019 - Feb 2021',
    description: [
      'Developed Android applications and custom software based on client requirements.',
      'Worked on website design and implementation.',
      'Contributed to embedded systems projects.',
      'Developed an e-commerce platform and an accounts system.'
    ],
    tags: ['Android', 'Web', 'Embedded']
  }
];

export const SKILLS = {
  languages: ['Python', 'JavaScript', 'C#', 'C'],
  ai_automation: ['LLM', 'n8n', 'Ollama', 'RAG', 'LangChain'],
  frontend: ['React.js', 'Flutter', 'jQuery', 'ASP.NET'],
  backend: ['Node.js', 'ASP.NET Core', '.NET', 'Firebase'],
  database: ['MySQL', 'MongoDB'],
  tools: ['Git', 'Linux', 'Docker']
};

export const LANGUAGES = ['Bengali', 'English'];
export const HOBBIES = ['Software Development', 'Embedded Systems', 'Machine Automation'];
