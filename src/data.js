export const personal = {
  name: 'Soham Das Biswas',
  role: 'DevOps Engineer',
  email: 'sohamdb456@gmail.com',
  phone: '+91 8167735148',
  location: 'Durgapur, West Bengal, India',
  github: 'https://github.com/SohamDasBiswas',
  linkedin: 'https://www.linkedin.com/in/soham-das-biswas-b5460b1a9/',
  twitter: 'https://twitter.com/SOHAMDASBISWAS1',
  instagram: 'https://www.instagram.com/soham_das_biswas/',
  youtube: 'https://www.youtube.com/channel/UCF07e0z2L-4AeGE41MTRlRw',
  bio: "Results-driven DevOps Engineer with 1+ year of experience architecting scalable multi-cloud infrastructure, automating CI/CD pipelines, and ensuring high-availability systems on AWS and Azure. Proficient in IaC, container orchestration, cost governance, and SRE. B.Tech in CSE from Kalyani Government Engineering College.",
  typewriterPhrases: [
    'Multi-Cloud Architect',
    'CI/CD Pipeline Engineer',
    'AWS & Azure Specialist',
    'Site Reliability Engineer',
    'DevOps Enthusiast',
  ],
  stats: [
    { num: '1+', label: 'Years Exp' },
    { num: '15+', label: 'Systems Maintained' },
    { num: '99.9%', label: 'Uptime SLA' },
    { num: '4', label: 'Cloud Platforms' },
  ],
};

export const skills = [
  {
    category: 'Cloud & Infrastructure',
    icon: 'fa-cloud',
    items: [
      { name: 'AWS', icon: '☁️', level: 92 },
      { name: 'Azure', icon: '🔷', level: 88 },
      { name: 'DigitalOcean', icon: '🌊', level: 78 },
      { name: 'Interserver', icon: '🖥️', level: 70 },
      { name: 'S3 / CloudFront', icon: '🪣', level: 90 },
      { name: 'App Gateway', icon: '🔀', level: 82 },
    ],
  },
  {
    category: 'DevOps & CI/CD',
    icon: 'fa-code-branch',
    items: [
      { name: 'GitHub Actions', icon: '⚙️', level: 90 },
      { name: 'Jenkins', icon: '🤖', level: 82 },
      { name: 'CI/CD Pipelines', icon: '🔄', level: 91 },
      { name: 'Linux / Bash', icon: '🐧', level: 85 },
      { name: 'YAML', icon: '📄', level: 88 },
    ],
  },
  {
    category: 'Containers & Monitoring',
    icon: 'fa-cube',
    items: [
      { name: 'Docker', icon: '🐳', level: 89 },
      { name: 'ECS / ECR', icon: '📦', level: 85 },
      { name: 'ALB / VMSS', icon: '⚖️', level: 83 },
      { name: 'Grafana', icon: '📊', level: 80 },
      { name: 'CloudWatch', icon: '👁️', level: 82 },
    ],
  },
  {
    category: 'Development',
    icon: 'fa-laptop-code',
    items: [
      { name: 'Python', icon: '🐍', level: 75 },
      { name: 'React.js', icon: '⚛️', level: 72 },
      { name: 'JavaScript', icon: '🟨', level: 70 },
      { name: 'MongoDB', icon: '🍃', level: 72 },
      { name: 'PostgreSQL', icon: '🐘', level: 68 },
    ],
  },
];

export const experience = [
  {
    title: 'DevOps Engineer',
    company: 'IntegrityWeb Informatics',
    type: 'Full-Time Remote',
    date: '03/2025 – Present',
    current: true,
    points: [
      'Architected multi-cloud environments spanning AWS, Azure, DigitalOcean, and Interserver, sustaining 15+ production systems with zero unplanned downtime over six months.',
      'Automated email and file processing on AWS with event-driven workflows, boosting throughput and pipeline reliability by 30%.',
      'Cut AWS infrastructure costs by 20% through right-sizing, reserved instance planning, and recurring usage audits.',
      'Maintained Azure client servers with proactive alerting and incident response, achieving 99.9% availability and full SLA adherence.',
    ],
    tags: ['AWS', 'Azure', 'DigitalOcean', 'Event-Driven', 'SRE', 'Cost Optimization'],
  },
  {
    title: 'AWS DevOps Engineer',
    company: 'Ajastos',
    type: 'Full-Time Remote',
    date: '12/2024 – 03/2025',
    current: false,
    points: [
      'Provisioned AWS environments following Well-Architected Framework standards, cutting setup time by 40%.',
      'Engineered end-to-end delivery workflow using GitHub Actions across three availability zones — S3/CloudFront, ECS/ECR, Docker, ALB, Auto Scaling, MongoDB, and Grafana — slashing deployment time by 55%.',
      'Implemented centralized logging and alerting pipeline, reducing mean time to detect (MTTD) incidents by 50%.',
    ],
    tags: ['GitHub Actions', 'ECS', 'ECR', 'Docker', 'ALB', 'Grafana', 'MongoDB'],
  },
  {
    title: 'Azure DevOps Engineer',
    company: 'Client Project',
    type: 'Freelance Remote',
    date: '03/2024 – 04/2024',
    current: false,
    points: [
      'Built fault-tolerant Azure infrastructure spanning two regions, achieving 99.95% service continuity under SLA constraints.',
      'Configured YAML-based pipelines integrating Azure Static Web Apps, App Service, CDN, PostgreSQL, Docker, and Slack notifications, eliminating 70% of manual deployment steps.',
      'Introduced staging and production promotion gates, cutting rollback time from 45 to 10 minutes and reducing release risk by 65%.',
    ],
    tags: ['Azure', 'YAML Pipelines', 'Docker', 'PostgreSQL', 'CDN', 'Slack'],
  },
  {
    title: 'WordPress Developer',
    company: 'Asynq',
    type: 'Internship Remote',
    date: '01/2024 – 04/2024',
    current: false,
    points: [
      'Developed and customized five client websites alongside cross-functional teams, delivering each project within defined scope and deadlines.',
      'Applied WordPress themes, plugins, and custom configurations to raise performance scores and strengthen user experience across every client site.',
    ],
    tags: ['WordPress', 'PHP', 'CSS', 'Performance Optimization'],
  },
];

export const projects = [
  {
    emoji: '☁️',
    title: 'Full-Stack CI/CD on AWS',
    desc: 'React.js on S3/CloudFront; Node.js on ECS with containerized backend; ALB and auto scaling monitored via Grafana and CloudWatch for a fully automated delivery pipeline.',
    tags: ['React.js', 'S3/CloudFront', 'ECS', 'Docker', 'ALB', 'Grafana'],
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    emoji: '🔷',
    title: 'Azure Microservices Architecture',
    desc: 'Containerized services on Azure Container Apps behind Application Gateway; continuous delivery via GitHub Actions with CDN, PostgreSQL, and Slack notifications.',
    tags: ['Azure', 'Container Apps', 'App Gateway', 'GitHub Actions', 'PostgreSQL'],
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    emoji: '🐍',
    title: 'Python App on Azure VMSS',
    desc: 'Launched a Python web app on VMSS with load balancer, health probes, and rolling Auto Scaling for zero-downtime deployments across multiple availability zones.',
    tags: ['Python', 'Azure VMSS', 'Load Balancer', 'Auto Scaling'],
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    emoji: '🤖',
    title: 'Jenkins VMSS Pipeline',
    desc: 'Automated delivery pipeline to Azure VMSS using Jenkins with Slack alerts and failure-triggered automatic rollback mechanisms for production safety.',
    tags: ['Jenkins', 'Azure VMSS', 'Slack', 'Rollback'],
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    emoji: '⚡',
    title: 'Static Angular App on Azure',
    desc: 'Application hosted on Azure Static Web Apps with a GitHub Actions YAML pipeline for automated builds and deployments triggered on every commit to main.',
    tags: ['Angular', 'Azure Static Web Apps', 'GitHub Actions'],
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    emoji: '🚀',
    title: 'Portfolio Website',
    desc: 'React.js portfolio with neumorphic dark design, hosted on Vercel with automated deployments from GitHub, featuring smooth animations and modern UI/UX.',
    tags: ['React.js', 'Vercel', 'Neumorphic UI', 'CI/CD'],
    github: 'https://github.com/SohamDasBiswas',
    live: '#',
  },
];

export const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Kalyani Government Engineering College',
    period: '2020 – 2024',
    grade: 'CGPA: 8.62',
    icon: '🎓',
  },
  {
    degree: 'Higher Secondary (12th) — Science',
    institution: 'Bidhan Chandra Institution, Durgapur',
    period: '2018 – 2020',
    grade: 'Percentage: 73.6%',
    icon: '📚',
  },
  {
    degree: 'Secondary (10th)',
    institution: 'MAMC Modern High School, Durgapur',
    period: '2006 – 2018',
    grade: 'Percentage: 59.43%',
    icon: '🏫',
  },
];

export const achievements = [
  {
    icon: 'fa-trophy',
    title: 'Coding Fortnight #3 — Rank 5th',
    desc: 'Ranked 5th in the Coding Fortnight #3 contest organized by GDSC RKMGEC on GeeksForGeeks.',
  },
  {
    icon: 'fa-cloud',
    title: 'Google Cloud Facilitator Program',
    desc: 'Earned recognition upon completing three milestones in the Google Cloud Facilitator Program.',
  },
  {
    icon: 'fa-award',
    title: 'AWS Well-Architected Practitioner',
    desc: 'Provisioned AWS environments following Well-Architected Framework standards, certified through project delivery.',
  },
];

export const terminalCommands = {
  help: `Available commands:
  whoami      — about me
  skills      — tech stack
  experience  — work history
  projects    — my projects
  contact     — get in touch
  clear       — clear terminal`,
  whoami: `Soham Das Biswas
DevOps Engineer | Multi-Cloud Architect
Location: Durgapur, West Bengal, India
Email: sohamdb456@gmail.com
GitHub: github.com/SohamDasBiswas`,
  skills: `Cloud: AWS · Azure · DigitalOcean · Interserver
CI/CD: GitHub Actions · Jenkins · YAML Pipelines
Containers: Docker · ECS · ECR · ALB
Monitoring: Grafana · CloudWatch
Dev: Python · React.js · JavaScript · MongoDB`,
  experience: `[Current]  IntegrityWeb Informatics  — DevOps Engineer  (03/2025–Present)
[Previous] Ajastos                  — AWS DevOps Eng.  (12/2024–03/2025)
[Previous] Client Project           — Azure DevOps Eng (03/2024–04/2024)
[Previous] Asynq                    — WordPress Dev.   (01/2024–04/2024)`,
  projects: `1. Full-Stack CI/CD on AWS     — React + ECS + Grafana
2. Azure Microservices Arch.  — Container Apps + GitHub Actions
3. Python App on Azure VMSS   — Auto Scaling + Zero Downtime
4. Jenkins VMSS Pipeline       — Slack Alerts + Auto Rollback
5. Static Angular App on Azure — GitHub Actions YAML
6. Portfolio Website           — React.js + Vercel`,
  contact: `Email:    sohamdb456@gmail.com
Phone:    +91 8167735148
LinkedIn: linkedin.com/in/soham-das-biswas-b5460b1a9
GitHub:   github.com/SohamDasBiswas`,
};
