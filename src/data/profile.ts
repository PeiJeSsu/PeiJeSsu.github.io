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
  { group: 'Programming', items: ['C++', 'Python', 'Java', 'JavaScript'] },
  { group: 'Frameworks & Tech', items: ['Spring Boot', 'React', 'MongoDB', 'RESTful APIs'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Docker'] },
  { group: 'Practices', items: ['Agile/Scrum', 'CI/CD'] },
  { group: 'Languages', items: ['Mandarin (native)', 'English (TOEFL iBT 100 MyBest, TOEIC 875)'] },
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
  // With href, the label is rendered as a link (site-relative paths get the base URL).
  points?: { label?: string; href?: string; text: string }[];
  tags?: string[];
  // Leave out of the one-page resume when the detail is covered elsewhere there.
  hideOnResume?: boolean;
};

export type Experience = {
  slug: string;
  kind: 'Research' | 'Leadership' | 'Education';
  title: string;
  org: string;
  // Shorter org name for cards, where the full one would wrap.
  shortOrg?: string;
  advisor?: string;
  period: string;
  summary: string;
  tags: string[];
  sections: Section[];
};

export const experience: Experience[] = [
  {
    slug: 'ntou-bs-cse',
    kind: 'Education',
    title: 'Computer Science and Engineering',
    org: 'B.S., National Taiwan Ocean University',
    period: 'Fall 2022 – Fall 2025',
    summary: 'Graduated a semester early with a focus on systems and software engineering.',
    tags: ['GPA 4.0/4.0', 'Top 7.2% in Dept', 'Early Graduation'],
    sections: [
      {
        title: 'Academics',
        points: [
          { label: 'GPA', text: '4.0/4.0, ranked 9/125 in department (top 7.2%)' },
        ],
      },
      {
        title: 'Early Graduation',
        hideOnResume: true,
        description: 'Completed the degree in 3.5 years instead of the usual 4 by meeting every requirement:',
        points: [
          { text: 'Finished all required credits a semester ahead of schedule.' },
          { text: 'Ranked in the top 20% of my class.' },
          { text: 'Met the English proficiency requirement for early graduation.' },
        ],
      },
      {
        title: 'Honors',
        points: [
          { text: 'Academic Excellence Scholarship (1st in class), Fall 2025' },
          { text: 'CTBC Bank Scholarship, Fall 2022 – Fall 2025' },
          { text: 'Chu Chi Association Scholarship, Fall 2022 – Fall 2025' },
        ],
      },
      {
        title: 'Capstone Project',
        hideOnResume: true,
        points: [
          { label: 'FeelInk', href: '/projects/feelink', text: 'AI-powered emotional support platform' },
          { text: 'Team Lead & Scrum Master of a team of 4' },
          { text: 'Won three awards, including 3rd place at the 30th InnoServe Awards' },
        ],
      },
      {
        title: 'Course Projects',
        hideOnResume: true,
        points: [
          {
            label: 'Class Reservation System',
            href: '/projects/class-reservation-system',
            text: 'Software Engineering',
          },
          {
            label: 'Health Management System',
            href: '/projects/health-management-system',
            text: 'Java Programming',
          },
          { text: 'Hiking Information Website — Web Programming' },
        ],
      },
      {
        title: 'Relevant Coursework',
        points: [
          { label: 'Theory', text: 'Data Structures, Algorithms, Graph Algorithms' },
          { label: 'Math', text: 'Discrete Mathematics, Linear Algebra, Probability Theory' },
          {
            label: 'Systems',
            text: 'Operating Systems, Computer Organization, Computer Networks, Database Systems',
          },
          {
            label: 'Software',
            text: 'Software Engineering, Programming Languages, Software Formal Methods',
          },
        ],
      },
    ],
  },
  {
    slug: 'ncku-research-intern',
    kind: 'Research',
    title: 'Research Intern',
    org: 'Database and Software Engineering Lab, NCKU',
    shortOrg: 'DBSE Lab, NCKU',
    advisor: 'Prof. Hewijin Jiau',
    period: 'Summer 2024',
    summary:
      'A research internship spanning cloud infrastructure and software engineering.',
    tags: ['Container Orchestration', 'Cloud Infrastructure', 'Requirements Analysis', 'Software Design'],
    sections: [
      {
        title: 'Cloud Infrastructure Research',
        description:
          "A study to plan and set up the lab's infrastructure, from choosing the OS to automating setup.",
        points: [
          { text: 'Learned container orchestration and Linux server management from scratch.' },
          { text: 'Built test environments on VirtualBox VMs.' },
          { text: 'Evaluated Ubuntu Server and Debian as the base operating system.' },
          { text: 'Tested Kubernetes, K3s, and k0s to find which ran reliably in our environment.' },
          { text: 'Reported findings and a recommendation to my team lead.' },
          { text: 'The lab adopted my recommended setup: Ubuntu Server with K3s.' },
          { text: 'Automated remote setup over SSH with Ansible playbooks and Bash scripts.' },
          { text: 'Wrote scripts that the lab later reused.' },
          { text: "Resolved a long-running kubeconfig issue by tracing the cluster's config files." },
        ],
      },
      {
        title: 'Clean Code Learning Platform for Novice Programmers',
        description:
          'A platform for studying how to help novice programmers write readable, maintainable code.',
        points: [
          { text: 'Studied Clean Code and Refactoring to learn how professional developers write code.' },
          { text: 'Researched existing code quality tools such as SonarQube to see how they guide developers.' },
          { text: 'Proposed platform features grounded in those established practices.' },
          { text: 'Took part in requirements discussions from elicitation to specification, following Waterfall.' },
          { text: 'Discussed use cases, user stories, and system design with senior lab members.' },
          { text: 'Helped turn the research goal into specifications the team could build and evaluate.' },
          { text: 'Presented progress and ideas at daily team meetings.' },
        ],
      },
    ],
  },
  {
    slug: 'team-lead-scrum-master',
    kind: 'Leadership',
    title: 'Team Lead & Scrum Master',
    org: 'Team Projects, NTOU',
    period: 'Fall 2023 – Fall 2025',
    summary:
      'Led four team projects to on-time delivery and served as Scrum Master on two of them.',
    tags: ['Team Lead ×4', 'Scrum Master ×2', 'Agile/Scrum', 'CI/CD', 'Code Review', 'Jira'],
    sections: [
      {
        title: 'Projects Led',
        points: [
          {
            label: 'FeelInk',
            href: '/projects/feelink',
            text: 'Capstone Project · team of 4 · Team Lead & Scrum Master',
          },
          {
            label: 'Class Reservation System',
            href: '/projects/class-reservation-system',
            text: 'Software Engineering · team of 5 · Team Lead & Scrum Master',
          },
          {
            label: 'Health Management System',
            href: '/projects/health-management-system',
            text: 'Java Programming · team of 3 · Team Lead',
          },
          { text: 'Hiking Information Website —Web Programming · team of 2 · Team Lead' },
        ],
      },
      {
        title: 'Delivery',
        points: [
          { text: 'Led all four projects to on-time completion with every core feature delivered.' },
          { text: 'Broke requirements into milestones and reprioritized whenever progress slipped.' },
          { text: 'Led the FeelInk team to three competition awards, including 3rd place at InnoServe.' },
        ],
      },
      {
        title: 'Engineering Standards',
        points: [
          { text: 'Early projects shared code by passing files around, which often led to broken code.' },
          { text: 'Introduced a Git branching workflow and code review standards to fix this.' },
          { text: 'Later added CI/CD, greatly reducing breakages on the main branch.' },
        ],
      },
      {
        title: 'Agile Process',
        points: [
          { text: 'Ran sprint planning, reviews, and retrospectives on a fixed cadence.' },
          { text: 'Kept new requests in the backlog instead of letting them derail the sprint.' },
          { text: 'Tracked progress on Jira so everyone could see where things stood.' },
        ],
      },
      {
        title: 'Decision-Making',
        points: [
          { text: 'On FeelInk, had teammates prototype and deploy competing tech stacks.' },
          { text: 'Compared their pros and cons together, then decided as a team.' },
          { text: 'Explained the reasoning behind each decision so everyone stayed aligned.' },
        ],
      },
      {
        title: 'Team Support',
        points: [
          { text: "Assigned tasks based on each member's strengths and interests." },
          { text: 'On the Class Reservation System, noticed a teammate stalling on the workflow.' },
          { text: 'Built features alongside them until they could keep pace on their own.' },
        ],
      },
    ],
  },
];
