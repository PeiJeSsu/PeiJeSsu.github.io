// Single source of truth for personal content. Pages read from here,
// so updating the site usually means editing only this file.

export const profile = {
  name: 'Pei-Je Ssu',
  title: 'Software Engineer — Backend & AI',
  location: 'New Taipei City, Taiwan',
  email: 'ssu.pei.je@gmail.com',
  links: {
    github: 'https://github.com/PeiJeSsu',
    linkedin: 'https://www.linkedin.com/in/peijessu/',
  },
  // Set to true once public/profile.jpg exists.
  hasPhoto: true,
  // Set to true once public/resume.pdf exists.
  hasResumePdf: false,
  // Shown as separate lines on the homepage.
  tagline: [
    'B.S. in Computer Science and Engineering from NTOU, 4.0 GPA',
    'Team lead of FeelInk, a 3-time award-winning AI platform',
  ],
  about: [
    "I'm a software engineer focused on backend systems and AI. What excites me about AI is how much room it leaves for imagination: ideas that once sounded far-fetched are now within reach. That's why I enjoy backend work: it turns those ideas into something people can use.",
    "I like to see the whole picture before making a decision, then work through it one piece at a time. As a team lead, what matters most to me is that we succeed together: everyone grows along the way, and our effort turns into results we're all proud of.",
    "I'm currently applying to MSCS programs in the U.S. and open to backend and AI engineering roles. Feel free to reach out. I'm always happy to chat.",
  ],
};

export const skills = [
  { group: 'Languages', items: ['C++', 'Python', 'Java', 'JavaScript'] },
  { group: 'Frameworks & Tech', items: ['Spring Boot', 'React', 'MongoDB', 'RESTful APIs'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Docker'] },
  { group: 'Practices', items: ['Agile/Scrum', 'CI/CD'] },
];

export type Link = { label: string; url: string };

export type Project = {
  slug: string;
  name: string;
  role: string;
  period: string;
  context: string;
  stack: string[];
  summary: string;
  honors?: string[];
  highlights: string[];
  links: Link[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'feelink',
    name: 'FeelInk',
    role: 'Team Lead',
    period: 'Spring 2025 – Fall 2025',
    context: 'Capstone Project · 4-person team',
    stack: ['React', 'Spring Boot', 'MongoDB', 'Gemini API'],
    summary:
      "An AI-powered emotional support platform that analyzes users' drawings and chats to understand their emotions and respond with empathy.",
    honors: [
      '3rd Place, 30th InnoServe Awards (2025)',
      'Honorable Mention, MOE Intelligent Innovation Contest (2025)',
      'Honorable Mention, CSE Capstone Competition (2025)',
    ],
    highlights: [
      'Designed a crisis-aware response flow: a separate Gemini call rated recent messages on a five-level rubric, and the level shaped the reply — from ordinary conversation up to crisis hotlines and nearby counseling services found via web search.',
      'Implemented real-time chat over Server-Sent Events, streaming Gemini output as it was generated and persisting every message to MongoDB so conversations survived server restarts.',
      'Set up CI/CD where GitHub Actions ran 1,300+ JUnit and Jest tests with coverage and SonarQube analysis on every push and pull request, then deployed each commit automatically.',
      'Resolved a pre-competition outage caused by oversized drawings by GZIP-compressing canvas data and moving it to MongoDB GridFS, restoring service in time for the InnoServe demo.',
    ],
    links: [
      { label: 'Frontend repo', url: 'https://github.com/PeiJeSsu/feelink_frontend' },
      { label: 'Backend repo', url: 'https://github.com/PeiJeSsu/feelink_backend' },
    ],
    featured: true,
  },
  {
    slug: 'class-reservation-system',
    name: 'Class Reservation System',
    role: 'Team Lead',
    period: 'Fall 2024',
    context: 'Software Engineering Course · 5-person team',
    stack: ['React', 'Spring Boot', 'MongoDB', 'Firebase', 'Docker'],
    summary:
      'A classroom booking platform that simplifies room reservations for students and streamlines classroom and key management for administrators.',
    highlights: [
      'Built the booking service, rejecting overlapping, duplicate, and banned-user or banned-room requests up front so users learned immediately that a slot was unavailable.',
      'Engineered Firebase authentication with email/password and Google sign-in, email verification, and role-based access; school-email registration ensured only verified students could book.',
      'Containerized the Spring Boot backend with Docker and deployed it on Render, with the React frontend on Vercel.',
    ],
    links: [{ label: 'GitHub repo', url: 'https://github.com/PeiJeSsu/Classroom-Reservation' }],
    featured: true,
  },
  {
    slug: 'health-management-system',
    name: 'Health Management System',
    role: 'Team Lead',
    period: 'Spring 2024',
    context: 'Java Programming Course · 3-person team',
    stack: ['Java', 'JavaFX', 'Coze AI API'],
    summary:
      'A health platform that calculates nutrition, calories, BMR, and TDEE from diet and exercise, and uses Coze AI to forecast trends, give recommendations, and answer health questions.',
    highlights: [
      'Created a reusable JavaFX GUI template that teammates plugged their modules into, giving every screen a consistent layout.',
      'Added goal setting, progress tracking, and reminders for diet and exercise, with file-based storage for profiles and records.',
    ],
    links: [],
    featured: true,
  },
];

export type Section = {
  title?: string;
  description?: string;
  points?: { label?: string; text: string }[];
  tags?: string[];
};

export type Experience = {
  slug: string;
  kind: 'Research' | 'Leadership' | 'Education';
  title: string;
  org: string;
  period: string;
  summary: string;
  tags: string[];
  sections: Section[];
};

export const experience: Experience[] = [
  {
    slug: 'ncku-research-intern',
    kind: 'Research',
    title: 'Research Intern',
    org: 'Database and Software Engineering Lab, National Cheng Kung University · Prof. Hewijin Jiau',
    period: '2024',
    summary:
      "Evaluated container orchestration stacks for the lab's infrastructure and helped specify a learning platform that teaches novice programmers to write clean code.",
    tags: ['Kubernetes', 'K3s', 'k0s', 'Docker', 'Helm', 'Nginx', 'Bash'],
    sections: [
      {
        title: 'Cloud Infrastructure Research',
        description:
          "A study to select the container and orchestration stack that best fit the lab's infrastructure.",
        points: [
          {
            text: "Compared k0s, K3s, and Kubernetes alongside Docker, Helm, and Nginx through hands-on testing on remote VMs to inform the lab's technology choice; the lab later reused several of my Bash scripts and findings.",
          },
          {
            text: 'Taught myself container orchestration and remote server management over SSH, deployed test environments across multiple machines, and resolved a long-running cluster configuration problem by working through its configuration files.',
          },
        ],
      },
      {
        title: 'Clean Code Learning Platform for Novice Programmers',
        description:
          'A learning platform built to run experiments on how to help novice programmers write readable, maintainable code.',
        points: [
          {
            text: "Studied Clean Code and Refactoring to propose features grounded in established practices, so the platform's guidance reflected habits professional developers actually follow; presented progress and ideas at daily team meetings.",
          },
          {
            text: 'Following the Waterfall process, wrote use cases and user stories, took part in requirements elicitation through specification, and reviewed system designs, turning the research goal into specs the team could build and evaluate.',
          },
        ],
      },
    ],
  },
  {
    slug: 'team-lead-scrum-master',
    kind: 'Leadership',
    title: 'Team Lead & Scrum Master',
    org: 'Team Projects, National Taiwan Ocean University',
    period: 'Fall 2023 – Fall 2025',
    summary:
      'Led four team projects to on-schedule delivery and served as Scrum Master on two full-stack projects, introducing Git workflows, code review, and CI/CD along the way.',
    tags: ['Team Lead ×4', 'Scrum Master ×2', 'Agile/Scrum', 'Jira', 'CI/CD'],
    sections: [
      {
        points: [
          {
            label: 'Delivery',
            text: 'Led all four of my team projects to on-schedule completion with every core feature delivered, breaking requirements into milestones and reprioritizing with the team whenever progress slipped.',
          },
          {
            label: 'Engineering Standards',
            text: 'After a broken shared codebase and tangled code in early projects, introduced a Git branching workflow and code review standards, and later CI/CD, greatly reducing breakages on the main branch.',
          },
          {
            label: 'Agile Process',
            text: 'Ran sprint planning, reviews, and retrospectives on a fixed cadence as Scrum Master on two full-stack projects, so new requests went into the backlog instead of derailing work, and progress stayed visible on Jira.',
          },
          {
            label: 'Decision-Making',
            text: 'Settled technical disagreements by having the team research the options, present findings, and vote, and explained the reasoning behind each decision so everyone stayed aligned.',
          },
          {
            label: 'Team Support',
            text: "Assigned tasks by each member's strengths and interests; when one teammate stalled, identified unfamiliarity with the workflow as the cause and built features alongside them until they could keep pace on their own.",
          },
        ],
      },
    ],
  },
  {
    slug: 'ntou-bs-cse',
    kind: 'Education',
    title: 'B.S. in Computer Science and Engineering',
    org: 'National Taiwan Ocean University, Keelung, Taiwan',
    period: 'Aug 2022 – Jan 2026',
    summary:
      'Graduated a semester early with a 4.0/4.0 GPA, ranked 9/125 in the department (top 7.2%).',
    tags: ['GPA 4.0/4.0', 'Top 7.2%', 'Early Graduation'],
    sections: [
      {
        title: 'Academics',
        points: [
          { label: 'GPA', text: '4.0/4.0, ranked 9/125 in department (top 7.2%)' },
          { label: 'TOEFL iBT', text: '100/120 (MyBest) · 90/120 (single test)' },
        ],
      },
      {
        title: 'Honors',
        points: [
          { text: 'Academic Excellence Scholarship — 1st in class, Fall 2025' },
          { text: 'CTBC Bank Scholarship, Fall 2022 – Fall 2025' },
          { text: 'Chu Chi Association Scholarship, Fall 2022 – Fall 2025' },
        ],
      },
      {
        title: 'Relevant Coursework',
        points: [
          { label: 'Theory', text: 'Data Structures, Algorithms, Graph Algorithms' },
          { label: 'Math', text: 'Discrete Mathematics, Linear Algebra, Probability Theory' },
          {
            label: 'Systems',
            text: 'Operating Systems, Computer Organization, Computer Networks, Database Management Systems',
          },
          {
            label: 'Software',
            text: 'Software Engineering, Programming Languages, Software Formal Methods',
          },
        ],
      },
    ],
  },
];
