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
  // Short course/context label for cards.
  course: string;
  stack: string[];
  summary: string;
  // Shorter summary for cards; the full one shows on the detail page.
  cardSummary: string;
  // Small highlight line on the card, e.g. awards.
  badge?: string;
  honors?: string[];
  // Full sentences used on the resume page.
  highlights: string[];
  // Why the project exists, shown right after the overview.
  why?: string[];
  // One-line summary of my own contributions, shown near the top of the detail page.
  contributions?: string[];
  // Takeaways, shown at the end of the detail page.
  lessons?: string[];
  // Sectioned one-line points for the detail page; falls back to highlights.
  details?: Section[];
  // Screenshots under public/, shown on the detail page.
  images?: { src: string; caption: string }[];
  // Simple concept diagram shown on the detail page.
  flow?: Flow;
  links: Link[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'feelink',
    name: 'FeelInk',
    role: 'Team Lead & Scrum Master',
    period: 'Fall 2024 – Fall 2025',
    context: 'Capstone Project · team of 4',
    course: 'Capstone Project',
    stack: ['React', 'Spring Boot', 'MongoDB', 'Gemini API'],
    cardSummary: 'An AI emotional support platform where users draw, chat, and get empathetic replies.',
    badge: '🏆 3 awards',
    summary:
      'An emotional support platform where users can draw and chat with an AI companion.',
    honors: [
      '3rd Place, 30th InnoServe Awards (2025)',
      'Honorable Mention, MOE Intelligent Innovation Contest (2025)',
      'Honorable Mention, CSE Capstone Competition (2025)',
      "Selected for NTOU's Summer Practical Learning Program (Summer 2025)",
    ],
    highlights: [
      'Designed a crisis-aware response flow: a separate Gemini call rated recent messages on a five-level rubric, and the level shaped the reply — from ordinary conversation up to crisis hotlines and nearby counseling services found via web search.',
      'Implemented real-time chat over Server-Sent Events, streaming Gemini output as it was generated and persisting every message to MongoDB so conversations survived server restarts.',
      'Set up CI/CD where GitHub Actions ran 1,300+ JUnit and Jest tests with coverage and SonarQube analysis on every push and pull request, then deployed each commit automatically.',
      'Resolved a pre-competition outage caused by oversized drawings by GZIP-compressing canvas data and moving it to MongoDB GridFS, restoring service in time for the InnoServe demo.',
    ],
    why: [
      'Several of my friends were struggling but hesitated to seek professional help.',
      'Stigma around mental health care made counseling feel intimidating.',
      'I proposed FeelInk as a gentler first step: a place to express feelings by drawing and talking.',
    ],
    contributions: [
      'Led a team of 4 as Team Lead and Scrum Master, from idea to three awards.',
      "Set up the team's Git workflow, code review, and CI/CD pipeline.",
      'Designed the high-level backend architecture, AI chat, and crisis detection.',
      'Built real-time chat that streams Gemini replies over Server-Sent Events.',
      'Fixed a production outage the day before the InnoServe Awards.',
    ],
    details: [
      {
        title: 'Features',
        points: [
          { text: 'Drawing canvas with special brushes, shapes, and editing tools' },
          { text: 'Three AI companions, each with its own personality' },
          { text: 'Empathetic AI chat that streams replies in real time' },
          { text: 'AI-generated objects and images placed right on the canvas' },
          { text: 'Daily emotion report with eight emotion scores and inferred needs' },
          { text: 'Warning-sign detection with relaxation and counseling resources' },
        ],
      },
      {
        title: 'Architecture',
        points: [
          { label: 'Frontend', text: 'React and Fabric.js, deployed on Vercel' },
          { label: 'Backend', text: 'Spring Boot REST API, deployed on Google Cloud Run' },
          { label: 'Database', text: 'MongoDB Atlas' },
          { label: 'AI', text: 'Gemini API on Vertex AI' },
        ],
      },
      {
        title: 'Engineering Workflow',
        points: [
          { text: 'Introduced a Git branching workflow with pull requests for every change.' },
          { text: 'Set up code review on pull requests before merging into the main branch.' },
          { text: "Ran the team's 1,300+ JUnit and Jest tests on every push and pull request." },
          { text: 'Added coverage reports and SonarQube analysis to every change before merge.' },
          { text: 'Deployed each commit automatically with GitHub Actions.' },
        ],
      },
      {
        title: 'Crisis-Aware AI Responses',
        points: [
          { text: 'Planned and designed a crisis-aware response flow.' },
          { text: 'Developed the rubric as a team, with input from a school counselor and our advisor.' },
          { text: "A separate Gemini call scored each user's recent messages against it." },
          { text: 'The level set the reply, from ordinary conversation up to crisis support.' },
          { text: 'Lower levels offered breathing exercises, relaxing music, and positive reading.' },
          { text: 'At the highest levels, replies pointed to crisis hotlines and nearby counseling services.' },
        ],
      },
      {
        title: 'Real-Time Chat',
        points: [
          { text: 'Streamed Gemini output to the browser over Server-Sent Events.' },
          { text: 'Replies appeared as they were generated, with no silent wait.' },
          { text: 'Persisted every message to MongoDB so conversations survived server restarts.' },
        ],
      },
      {
        title: 'Fixing an Outage Before the Awards',
        points: [
          { text: 'A teammate found the service down the day before the InnoServe Awards.' },
          { text: 'Split the team up to investigate different parts of the system.' },
          { text: 'Traced the failure from the frontend through the API to the backend.' },
          { text: 'Pinpointed the cause in MongoDB: full-size drawings had used up our free-tier storage.' },
          { text: 'Had the team research possible fixes in parallel.' },
          { text: 'Found the fix: GZIP-compress drawings and store them in MongoDB GridFS.' },
          { text: 'Moved to a new database instance and capped upload sizes.' },
          { text: 'Restored service in time to win third place.' },
        ],
      },
      {
        title: 'Design Decisions',
        points: [
          { text: 'Fed emotion and topic predictions into prompts to make replies more empathetic.' },
          { text: 'Gave each chat room its own Gemini chat session to keep memories separate.' },
          { text: "Chose prompt design over RAG and fine-tuning, which the project didn't need." },
        ],
      },
    ],
    flow: {
      title: 'How It Works',
      steps: [
        { title: 'Create', items: ['Draw freely on the canvas', 'Chat with an AI companion'] },
        { title: 'Analyze', items: ["AI reads the user's messages", 'Rates emotion and risk level'] },
        {
          title: 'Support',
          items: ['Empathetic replies', 'Creative help on the canvas', 'Daily emotion reports', 'Crisis resources when needed'],
        },
      ],
      loop: 'Each reply invites the user to keep creating and talking',
    },
    lessons: [
      'Skipping code review to save time only costs more time later.',
      'Building for vulnerable users means designing safeguards, not just features.',
      'AI judgments need real validation, not just test cases we wrote ourselves.',
      'Capacity planning and monitoring belong before launch, not after an outage.',
      'I want to keep learning how to prevent failures, not just react to them.',
    ],
    links: [
      { label: 'Demo video', url: 'https://youtu.be/wIL9Pozo4Vw' },
      { label: 'Frontend repo', url: 'https://github.com/PeiJeSsu/feelink_frontend' },
      { label: 'Backend repo', url: 'https://github.com/PeiJeSsu/feelink_backend' },
    ],
    featured: true,
  },
  {
    slug: 'class-reservation-system',
    name: 'Class Reservation System',
    role: 'Team Lead & Scrum Master',
    period: 'Fall 2024',
    context: 'Software Engineering Course · team of 5',
    course: 'Software Engineering',
    stack: ['React', 'Spring Boot', 'MongoDB', 'Docker'],
    cardSummary: 'A classroom booking platform for students, with room and key management for administrators.',
    summary:
      'A platform for booking campus classrooms and managing rooms and keys.',
    highlights: [
      'Built the booking service, rejecting overlapping, duplicate, and banned-user or banned-room requests up front so users learned immediately that a slot was unavailable.',
      'Engineered Firebase authentication with email/password and Google sign-in, email verification, and role-based access; school-email registration ensured only verified students could book.',
      'Containerized the Spring Boot backend with Docker and deployed it on Render, with the React frontend on Vercel.',
    ],
    contributions: [
      'Led a team of 5 as Team Lead and Scrum Master.',
      "Introduced the team's Git branch and pull request workflow.",
      'Co-wrote the requirements, design, and test documents.',
      'Designed the data model for users, classrooms, and booking requests.',
      'Built the booking service and Firebase authentication.',
      'Containerized the backend with Docker and deployed the full stack.',
      'Planned our testing and ran the JMeter performance tests.',
    ],
    flow: {
      title: 'How It Works',
      steps: [
        { title: 'Find', items: ['Filter classrooms by floor and room', 'Check the weekly schedule'] },
        { title: 'Request', items: ['Pick a time slot', 'Submit a booking request'] },
        { title: 'Review', items: ['Admin reviews the request', 'Approves or rejects it'] },
      ],
    },
    details: [
      {
        title: 'Features',
        points: [
          { text: 'Classroom search by floor and room, with key status and borrower' },
          { text: "Weekly timetable view of each classroom's bookings" },
          { text: 'Booking requests for any open time slot' },
          { text: 'Admin review to approve or reject each request' },
          { text: 'Role-based access, so borrowers and admins see different content' },
          { text: 'Room bans for maintenance and key tracking for admins' },
          { text: 'School-email sign-up with verification, plus Google sign-in' },
          { text: 'Campus map and multi-language interface' },
        ],
      },
      {
        title: 'Architecture',
        points: [
          { label: 'Frontend', text: 'React, deployed on Vercel' },
          { label: 'Backend', text: 'Spring Boot REST API in Docker, deployed on Render' },
          { label: 'Database', text: 'MongoDB Atlas' },
          { label: 'Auth', text: 'Firebase Authentication' },
        ],
      },
      {
        title: 'Team Process',
        points: [
          { text: 'Tracked sprints and tasks on Jira.' },
          { text: 'Ran sprint planning, reviews, and retrospectives as Scrum Master.' },
          { text: 'Broke features into user stories with a user story map.' },
          { text: 'Introduced Git branches and pull requests after earlier projects broke from shared files.' },
          { text: "Co-wrote the SRD, SDD, and STD as the project's requirements, design, and test documents." },
        ],
      },
      {
        title: 'Helping a Teammate Catch Up',
        points: [
          { text: 'One teammate fell behind on tasks the rest of us saw as simple.' },
          { text: "Taking over their work would have been faster, but it wouldn't help them grow." },
          { text: 'Instead, I worked through the features with them step by step.' },
          { text: 'They learned the workflow along the way and soon kept pace on their own.' },
          { text: 'After that, the team rarely ran into this kind of problem again.' },
        ],
      },
      {
        title: 'Booking Service',
        points: [
          { text: 'Rejected any request that overlapped an approved booking.' },
          { text: 'Blocked duplicate requests and bookings for banned rooms.' },
          { text: 'Told users right away that a slot was taken, instead of waiting for an admin.' },
        ],
      },
      {
        title: 'Authentication & Access',
        points: [
          { text: 'Built sign-up and login with Firebase, using email/password or Google.' },
          { text: "Required a school email based on the student's ID, with email verification." },
          { text: 'Gave borrowers and administrators different permissions by role.' },
        ],
      },
      {
        title: 'Across the Stack',
        points: [
          { text: 'Helped design and build the classroom search and request review pages.' },
          { text: 'Helped design and build the login and registration pages.' },
          { text: 'Helped design and build the booking, classroom, and user APIs.' },
        ],
      },
      {
        title: 'Testing',
        points: [
          { text: 'Planned system, API, performance, and automated UI testing.' },
          { text: 'Wrote and ran performance tests with JMeter.' },
          { text: 'Compiled the final test report.' },
        ],
      },
      {
        title: 'Design Decisions',
        points: [
          { text: 'Verified students through student-ID email addresses instead of photo checks.' },
          { text: 'Let admins flag unreturned keys instead of detecting them automatically.' },
          { text: 'Showed bookings as a weekly timetable, easier to read than text.' },
          { text: 'Chose Vercel and Render for deployment because the team already knew them.' },
        ],
      },
    ],
    lessons: [
      'Writing requirements first kept us focused instead of changing direction over and over.',
      'A design document kept our modules cleanly separated instead of tangled together.',
      'Planning in sprints beats building whatever comes to mind.',
      'Regular Scrum meetings let me see where everyone was and shift resources early.',
      'Reviewing each sprint as a team helped us decide what to add next and what to drop.',
      'Teaching a stuck teammate takes more of my time now but costs the team less later.',
    ],
    links: [
      { label: 'Demo video', url: 'https://youtu.be/sMxRTr58JmI' },
      { label: 'GitHub repo', url: 'https://github.com/PeiJeSsu/Classroom-Reservation' },
    ],
    featured: true,
  },
  {
    slug: 'health-management-system',
    name: 'Health Management System',
    role: 'Team Lead',
    period: 'Spring 2024',
    context: 'Java Programming Course · 3-person team',
    course: 'Java Programming',
    stack: ['Java', 'JavaFX', 'Coze AI API'],
    cardSummary: 'A health tracker that calculates nutrition and calorie needs and gives AI-powered advice.',
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

export type Flow = {
  title: string;
  steps: { title: string; items: string[] }[];
  loop?: string;
};

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
          { text: 'The lab adopted my recommended setup: Ubuntu Server with k0s.' },
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
