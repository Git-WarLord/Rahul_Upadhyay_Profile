// Portfolio content data - all copy and structured data in one place

export const portfolioData = {
  meta: {
    title: "Rahul Upadhyay | Data Engineer & AI Systems Builder",
    description: "Data Engineer with 6+ years of production software experience. I design ETL pipelines, build AI-powered automation, and turn raw data into business decisions.",
    keywords: ["Data Engineer", "Data Science", "ETL Pipelines", "AI Automation", "LLM Integration", "Python", "SQL", "React", "Full-Stack Engineer", "Pune"],
  },
  
  hero: {
    eyebrow: "DATA ENGINEER • AI SYSTEMS BUILDER",
    headline: "I Turn Raw Data\nInto Decisions.",
    subheadline: "Data Engineer with 6+ years of production software behind me.\nI design pipelines, automate with AI, and build systems\nthat transform raw data into real business outcomes.",
    ctas: [
      { label: "See My Work", href: "#projects", icon: "arrow-right" },
      { label: "Download Resume", href: "/Rahul_Upadhyay_Resume.pdf", icon: "download" },
    ],
    stats: [
      { value: "6+", label: "Years in Production" },
      { value: "50K+", label: "Records Processed Daily" },
      { value: "3", label: "AI Features Shipped" },
      { value: "40%", label: "Efficiency via Automation" },
    ],
  },
  
  story: {
    eyebrow: "THE JOURNEY",
    headline: "The Engineer Who Learned\nto Think in Data.",
    subheadline: "I didn't pivot to data. I evolved into it.\nEvery system I built taught me that data is the product.",
    chapters: [
      {
        id: 1,
        year: 2018,
        title: "First Production Code",
        company: "Askanta Infotech",
        description: "Wrote my first production JavaScript at 19. Shipped real code, survived real deadlines. Learned that every user interaction generates data — and that data tells a story if you know how to read it.",
        tags: ["JavaScript", "ES6+", "HTML/CSS", "Git"],
      },
      {
        id: 2,
        year: 2020,
        title: "Engineering at Scale",
        company: "Sai Associates",
        duration: "5 years",
        description: "Built production React applications for 5 years. Optimised load times, integrated analytics tracking, and made data-informed UI decisions. Learned that the best features aren't designed by intuition — they're validated by data.",
        tags: ["React.js", "Analytics", "Performance", "CRO"],
        achievements: ["5 Years Production React", "Cross-Browser Optimization"],
      },
      {
        id: 3,
        year: 2025,
        title: "First Data + AI Role",
        company: "Saurabh Flexipack Systems",
        description: "Stopped just building interfaces — started building automation systems. Designed n8n pipelines, integrated AI APIs for content generation, and automated lead workflows. Delivered measurable business impact: 30% more leads, 40% faster content production.",
        tags: ["AI APIs", "n8n Automation", "Data Workflows", "Google Ads", "Meta Ads"],
        achievements: ["30% Lead Uplift ↑", "40% Content Time Saved ↓"],
      },
      {
        id: 4,
        year: 2026,
        title: "Data Engineering & AI",
        company: "Elite Unique Services",
        role: "Software Engineer — Data Engineering & AI Automation",
        badge: "CURRENT — JUNE 2026",
        description: "Now I architect the full data stack: ETL pipelines that move 50K+ records, data warehouses that serve BI dashboards, LLM integrations that automate decision-making, and AI chatbots that handle real customer queries. This is where 6 years of engineering meets data science.",
        tags: ["ETL Pipelines", "Data Warehousing", "LLM/GenAI", "BI Dashboards", "Python", "CI/CD"],
      },
    ],
  },
  
  skills: {
    eyebrow: "ARSENAL",
    headline: "Data-First. Full-Stack Capable.",
    subheadline: "I operate across the entire data lifecycle — from ingestion to insight.\nThe engineering background means I ship it to production, not just a notebook.",
    categories: [
      {
        icon: "database",
        title: "Data Engineering",
        skills: [
          { name: "SQL & Relational Databases", level: 90 },
          { name: "ETL Pipeline Design", level: 85 },
          { name: "Python (Data Processing)", level: 80 },
          { name: "Data Warehouse Architecture", level: 75 },
          { name: "BI Dashboards & Reporting", level: 78 },
        ],
      },
      {
        icon: "brain",
        title: "AI & Automation",
        skills: [
          { name: "LLM Integration (GPT/Claude)", level: 90 },
          { name: "Prompt Engineering & Design", level: 88 },
          { name: "AI-Powered Workflow Automation", level: 85 },
          { name: "n8n / Zapier Pipelines", level: 85 },
          { name: "GenAI Application Development", level: 82 },
        ],
      },
      {
        icon: "server",
        title: "Backend & Infrastructure",
        skills: [
          { name: "Node.js / Express.js", level: 88 },
          { name: "REST API Architecture", level: 90 },
          { name: "MongoDB / Firebase", level: 85 },
          { name: "CI/CD & GitHub Actions", level: 80 },
          { name: "AWS S3 / Cloud Deployment", level: 72 },
        ],
      },
      {
        icon: "layout",
        title: "Frontend Engineering",
        skills: [
          { name: "React.js / Next.js", level: 92 },
          { name: "TypeScript / JavaScript", level: 90 },
          { name: "Tailwind CSS", level: 92 },
          { name: "Framer Motion / Animations", level: 85 },
          { name: "Responsive Design & UX", level: 90 },
        ],
      },
      {
        icon: "trending-up",
        title: "Growth & Analytics",
        skills: [
          { name: "Google Ads / Meta Ads", level: 85 },
          { name: "SEO & Web Analytics", level: 82 },
          { name: "CRO (Conversion Optimisation)", level: 80 },
        ],
      },
    ],
    learning: [
      "Apache Airflow",
      "Snowflake / BigQuery",
      "Pandas / NumPy / Scikit-learn",
      "Apache Spark",
      "dbt (Data Build Tool)",
      "Power BI / Tableau",
      "Machine Learning Fundamentals",
      "Statistics & Probability",
    ],
  },
  
  projects: [
    {
      id: 1,
      title: "AiGenTrax.com",
      subtitle: "AI Agency Platform — Full-Stack + LLM Architecture",
      featured: true,
      description: "Architected and shipped a complete AI agency platform from zero — backend API layer, React frontend, CMS, 3 live AI demo features (GPT + Claude orchestration), and full SEO infrastructure. Solo-built. This is what happens when a data-minded engineer gets a blank canvas.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "OpenAI API", "Claude API", "LLM Orchestration", "Tailwind", "Vercel", "CI/CD"],
      metrics: [
        { label: "Lighthouse Score", value: "90+" },
        { label: "AI Features Live", value: "3" },
        { label: "LCP Load Time", value: "<1.5s" },
        { label: "SEO Score", value: "100/100" },
      ],
      links: [
        { label: "Visit Site", href: "https://www.AiGenTrax.com", type: "live" },
        { label: "GitHub", href: "#", type: "github" },
      ],
    },
    {
      id: 2,
      title: "ShopNow",
      subtitle: "E-Commerce Engine with Sales Analytics Pipeline",
      featured: false,
      description: "Full-stack e-commerce platform with JWT auth, Razorpay payment webhooks, real-time inventory tracking, and a custom admin analytics dashboard that surfaces sales trends, revenue metrics, and customer behaviour patterns.",
      tags: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Razorpay", "AWS S3", "Analytics"],
      features: ["Role-based access control", "Payment webhook pipeline", "Sales analytics dashboard", "Inventory data tracking"],
    },
    {
      id: 3,
      title: "ETL Pipeline & BI Dashboard",
      subtitle: "End-to-End Data Pipeline",
      featured: false,
      description: "Building a production ETL pipeline — data extraction from multiple sources, transformation with Python, loading into a structured warehouse, and visualization through a real-time BI dashboard. The full data engineering lifecycle.",
      tags: ["Python", "SQL", "ETL", "Data Warehousing", "BI Tools", "React Dashboard"],
      status: "SHIPPING SOON — 2026",
    },
  ],
  
  experience: [
    {
      id: 1,
      company: "Elite Unique Services",
      role: "Software Engineer — Data Engineering & AI Automation",
      period: "Jun 2026 – Present",
      badge: "CURRENT",
      bullets: [
        "Designed and deployed ETL pipelines processing 50K+ records daily across multiple data sources",
        "Architected data warehouse schema and built BI dashboards for real-time business intelligence",
        "Integrated LLM APIs (GPT-4, Claude) into production workflows for automated decision support",
        "Built AI-powered chatbot handling customer queries with context-aware response generation",
        "Automated CRM and HR workflows, reducing manual processing time by 35%",
        "Established CI/CD pipelines and authored system architecture documentation for the engineering team",
      ],
    },
    {
      id: 2,
      company: "Saurabh Flexipack Systems",
      role: "Digital Marketing & Web Executive — AI Automation Focus",
      period: "Jan 2025 – Jun 2026",
      duration: "1.5 years",
      bullets: [
        "Engineered n8n/Zapier automation pipelines that increased lead generation by 30%",
        "Integrated AI APIs into content production workflow, cutting content creation time by 40%",
        "Managed Google Ads & Meta campaigns with data-driven A/B testing and budget optimisation",
        "Built automated reporting dashboards to track campaign ROI and lead conversion funnels",
      ],
    },
    {
      id: 3,
      company: "Sai Associates",
      role: "Front-End Developer",
      period: "Mar 2020 – Jan 2025",
      duration: "5 years",
      bullets: [
        "Developed and maintained production React.js applications serving thousands of users",
        "Integrated analytics tracking and built data-informed UI optimisations that improved conversion rates",
        "Executed CRO strategies backed by user behaviour data and heatmap analysis",
        "Achieved sub-2s load times through performance profiling and bundle optimisation",
      ],
    },
    {
      id: 4,
      company: "Askanta Infotech",
      role: "JavaScript Developer",
      period: "Jul 2018 – Feb 2020",
      duration: "1.5 years",
      bullets: [
        "Shipped production web applications using vanilla JavaScript and ES6+ standards",
        "Participated in code reviews, established Git workflows, and contributed to team engineering practices",
        "Optimised frontend performance through efficient DOM manipulation and event handling",
      ],
    },
  ],
  
  differentiator: {
    headline: "Most data scientists can't ship production code.\nMost engineers can't think in data.\nI do both.",
    columns: [
      {
        icon: "code",
        title: "I SHIP CODE",
        description: "6+ years of production-grade React, Node, and MongoDB apps. Engineering isn't my side skill — it's my foundation. I don't prototype. I deploy.",
      },
      {
        icon: "chart-line",
        title: "I ARCHITECT DATA",
        description: "ETL pipelines, data warehouses, BI dashboards — I design end-to-end data infrastructure that turns messy sources into clean, actionable intelligence.",
      },
      {
        icon: "zap",
        title: "I AUTOMATE WITH AI",
        description: "Not just API calls. I design LLM orchestration systems, AI-powered workflows, and GenAI features that run in production — not just in notebooks.",
      },
    ],
  },
  
  stats: [
    { value: "6", label: "Years Production Engineering" },
    { value: "50", label: "K+ Records Processed Daily" },
    { value: "30", label: "% Lead Growth via Automation" },
    { value: "40", label: "% Time Saved with AI Workflows" },
    { value: "3", label: "AI Features Shipped to Production" },
  ],
  
  contact: {
    eyebrow: "LET'S CONNECT",
    headline: "Let's Build Something Intelligent.",
    subheadline: "I'm looking for my next Data Engineering or AI role —\nsomewhere I can architect data systems, ship AI features,\nand make data the product.",
    email: "rahulmohanupadhyay@gmail.com",
    phone: "+91 9762330053",
    website: "www.AiGenTrax.com",
    links: [
      { label: "LinkedIn", href: "#", icon: "linkedin" },
      { label: "GitHub", href: "#", icon: "github" },
    ],
  },
  
  nav: {
    links: [
      { label: "About", href: "#story" },
      { label: "Skills", href: "#skills" },
      { label: "Work", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
  },
};
