import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  num: string;
  title: string;
  role: string;
  description: string;
  category: string;
  tags: string[];
  features: string[];
  tech: string[];
  gradient: string;
  demoUrl: string;
  repoUrl: string;
}

export interface Certificate {
  icon: string;
  title: string;
  issuer: string;
  issuerKey: string;
  date: string;
  color: string;
  url: string;
}

export interface Skill { name: string; level: number; }
export interface Award { icon: string; title: string; org: string; }

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  readonly personal = {
    name:      'Miguel-Vernard E. Pinpin',
    email:     'miggypin1218@gmail.com',
    phone:     '09 976 212 0086',
    location:  'Angeles, Pampanga, Philippines',
    school:    'Holy Angel University',
    org:       'Code Geeks',
    github:    'https://github.com/Miggyyypinpan?tab=repositories',
    linkedin:  'https://www.linkedin.com/in/miguel-pinpin-34b436316/',
    fcc:       'https://www.freecodecamp.org/miggyyypinpan',
    bio1: `Currently pursuing a Bachelor of Science in Information Technology in Web Development at Holy Angel University, I create interactive and usable web applications by combining technology with creative design concepts.`,
    bio2: `As an active member of Code Geeks at HAU, I attend conferences on software development, contribute to UI/UX design initiatives, and continuously expand my industry knowledge. I'm passionate about crafting interfaces that are both functional and visually compelling.`
  };

  readonly projects: Project[] = [
    {
      id: 1, num: '01',
      title: 'Sharesource',
      role: 'Technical Writer / Front-End Developer',
      description: 'A web-based platform connecting developers and contributors. Contributed by developing intuitive, accessible interfaces and writing clear technical documentation to improve onboarding and usability.',
      category: 'html',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      features: ['Intuitive front-end interface design', 'Clear technical documentation writing', 'Accessible and responsive UI components', 'Collaborative developer-focused UX', 'Cross-browser compatible implementation'],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
      gradient: 'linear-gradient(135deg,#0a1628,#112244,#1a3566)',
      demoUrl: '#', repoUrl: 'https://github.com/Miggyyypinpan?tab=repositories'
    },
    {
      id: 2, num: '02',
      title: 'Tambayan',
      role: 'Figma Designer / Mobile App Designer',
      description: 'A mobile app designed to connect students and locals with nearby restaurants, cafes, and cultural spots — enhancing community interaction and boosting local business visibility around Holy Angel University.',
      category: 'figma',
      tags: ['Figma', 'UI/UX', 'Mobile'],
      features: ['User-centric mobile experience design', 'Interactive Figma prototypes & wireframes', 'Location-based discovery of local spots', 'Student and local community focused UX', 'Brand identity & visual design system'],
      tech: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
      gradient: 'linear-gradient(135deg,#0d1a2e,#162038,#1f2d4a)',
      demoUrl: '#', repoUrl: 'https://github.com/Miggyyypinpan?tab=repositories'
    },
    {
      id: 3, num: '03',
      title: 'MVP Portfolio',
      role: 'Full-Stack Developer / Designer',
      description: 'A personal portfolio website built with HTML, CSS, and JavaScript featuring light/dark mode, scroll animations, skill bars, filterable certifications, and full responsiveness.',
      category: 'html',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      features: ['Multi-page responsive layout', 'Light & dark mode toggle', 'CSS scroll-reveal animations', 'Functional contact form with validation', 'SEO metadata & semantic HTML'],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Angular'],
      gradient: 'linear-gradient(135deg,#0a0a0a,#111820,#162030)',
      demoUrl: '#', repoUrl: 'https://github.com/Miggyyypinpan?tab=repositories'
    }
  ];

  readonly skills: Skill[] = [
    { name: 'HTML5 / CSS3', level: 88 },
    { name: 'JavaScript', level: 72 },
    { name: 'UI/UX Design (Figma)', level: 80 },
    { name: 'Front-End Development', level: 78 },
    { name: 'Technical Writing', level: 85 },
    { name: 'PHP', level: 60 }
  ];

  readonly softSkills = ['Clear Communication', 'Team Collaboration', 'Problem Solving', 'Adaptability', 'Emotional Intelligence', 'Accountability', 'Time Management', 'Critical Thinking'];

  readonly toolbox = [
    { abbr: 'HTML', name: 'HTML5' }, { abbr: 'CSS', name: 'CSS3' },
    { abbr: 'JS', name: 'JavaScript' }, { abbr: 'FIG', name: 'Figma' },
    { abbr: 'PHP', name: 'PHP' }, { abbr: 'GIT', name: 'Git' },
    { abbr: 'ANG', name: 'Angular' }, { abbr: 'SQL', name: 'MySQL' }
  ];

  readonly awards: Award[] = [
    { icon: '🏅', title: "Dean's Lister", org: 'Holy Angel University' },
    { icon: '🎓', title: 'With Honors', org: 'Basic Academy of International Studies' },
    { icon: '🏆', title: 'Champions — SOC Days Volleyball', org: 'Holy Angel University' }
  ];

  readonly certificates: Certificate[] = [
    { icon: '🎨', title: 'Introduction to Figma Course', issuer: 'Simplilearn SkillUp', issuerKey: 'Simplilearn', date: 'Sep 23, 2024', color: '#f97316', url: '#' },
    { icon: '🐘', title: 'Introduction to PHP', issuer: 'Simplilearn SkillUp', issuerKey: 'Simplilearn', date: 'Feb 09, 2025', color: '#f97316', url: '#' },
    { icon: '💡', title: 'Design Thinking for Beginners', issuer: 'Simplilearn SkillUp', issuerKey: 'Simplilearn', date: 'Jul 28, 2025', color: '#f97316', url: '#' },
    { icon: '🌐', title: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy', issuerKey: 'Cisco', date: 'May 16, 2025', color: '#0ea5e9', url: '#' },
    { icon: '⚙️', title: 'JavaScript Essentials 1', issuer: 'Cisco Networking Academy', issuerKey: 'Cisco', date: 'Oct 25, 2024', color: '#0ea5e9', url: '#' },
    { icon: '🔒', title: 'Incident Response', issuer: 'Cisco Networking Academy', issuerKey: 'Cisco', date: 'Oct 06, 2025', color: '#0ea5e9', url: '#' },
    { icon: '🛡️', title: 'Vulnerability Assessment & Risk Management', issuer: 'Cisco Networking Academy', issuerKey: 'Cisco', date: 'Oct 06, 2025', color: '#0ea5e9', url: '#' },
    { icon: '📈', title: 'SEO II Certification', issuer: 'HubSpot Academy', issuerKey: 'HubSpot', date: '2025', color: '#f97316', url: '#' },
    { icon: '🔍', title: 'SEO Certification', issuer: 'HubSpot Academy', issuerKey: 'HubSpot', date: '2025', color: '#f97316', url: '#' },
    { icon: '📣', title: 'Digital Advertising Certification', issuer: 'HubSpot Academy', issuerKey: 'HubSpot', date: '2025', color: '#f97316', url: '#' },
    { icon: '📝', title: 'Content Marketing Certification', issuer: 'HubSpot Academy', issuerKey: 'HubSpot', date: '2025', color: '#f97316', url: '#' },
    { icon: '📊', title: 'Digital Marketing Certification', issuer: 'HubSpot Academy', issuerKey: 'HubSpot', date: '2025', color: '#f97316', url: '#' },
    { icon: '💻', title: 'Responsive Web Design', issuer: 'freeCodeCamp', issuerKey: 'freeCodeCamp', date: '2024', color: '#0d9488', url: 'https://www.freecodecamp.org/miggyyypinpan' },
    { icon: '🔧', title: 'Back-End Development & APIs', issuer: 'freeCodeCamp', issuerKey: 'freeCodeCamp', date: '2024', color: '#0d9488', url: 'https://www.freecodecamp.org/miggyyypinpan' },
    { icon: '⚡', title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', issuerKey: 'freeCodeCamp', date: '2024', color: '#0d9488', url: 'https://www.freecodecamp.org/miggyyypinpan' }
  ];

  readonly resumeSkills = ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'PHP', 'Git', 'Angular', 'UI/UX Design', 'Tech Writing', 'Front-End'];
  readonly stripSkills = ['HTML5','CSS3','JavaScript','Figma','PHP','Git','UI/UX Design','Technical Writing','HTML5','CSS3','JavaScript','Figma','PHP','Git','UI/UX Design','Technical Writing'];
}
