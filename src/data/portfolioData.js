export const portfolioData = {
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Resume", href: "#resume" },
    { label: "Certs", href: "#certificates" },
    { label: "Education", href: "#education" },
    { label: "Platforms", href: "#platforms" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "Ritik Bhardwaj",
    tagline: "B.Tech CSE (AI & ML) Student",
    rotatingTitles: [
      "Aspiring Machine Learning Engineer",
      "Building Human-Centered AI Experiences",
      "Designing Intelligent Full-Stack Products",
    ],
    description:
      "I blend machine learning curiosity with product-focused engineering to build clean, high-impact experiences that feel fast, thoughtful, and future-ready.",
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Contact Me", href: "#contact" },
    focusAreas: [
      "Machine Learning",
      "Deep Learning",
      "Data Analysis",
      "Predictive Modeling",
      "Computer Vision",
      "Problem Solving",
    ],
  },
  about: {
    intro:
      "I'm a Computer Science student specializing in AI & Machine Learning, driven by the idea that useful intelligence should feel seamless, intuitive, and deeply practical.",
    story:
      "My favorite work lives at the intersection of mathematical thinking, rapid experimentation, and polished user experiences. I enjoy moving from model ideas to complete products that recruiters and users can actually explore.",
    highlights: [
      {
        title: "Curiosity-Led Learning",
        description:
          "Constantly exploring model behavior, training workflows, and product design patterns to sharpen both theory and execution.",
      },
      {
        title: "Problem-Solving Mindset",
        description:
          "Breaking ambiguous problems into measurable systems, then iterating with a bias for clarity, experimentation, and impact.",
      },
      {
        title: "Built for Momentum",
        description:
          "I value consistent progress, strong fundamentals, and shipping experiences that feel polished from code to interaction.",
      },
    ],
  },
  skills: [
    {
      title: "Programming",
      items: [
        { name: "Python", level: 91 },
        { name: "C++", level: 82 },
        { name: "JavaScript", level: 84 },
        { name: "SQL", level: 76 },
      ],
    },
    {
      title: "ML / AI",
      items: [
        { name: "TensorFlow", level: 80 },
        { name: "Scikit-learn", level: 88 },
        { name: "Pandas / NumPy", level: 90 },
        { name: "Computer Vision", level: 74 },
      ],
    },
  ],
  projects: [
    {
      title: "Car Price Prediction",
      description:
        "A machine learning project focused on estimating car prices from input features to support faster and more informed pricing decisions.",
      stack: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      github: "https://github.com/Ritik4259/Car-Price-Prediction",
      demo: "",
      detail:
        "Built around a supervised learning workflow with data preprocessing, feature handling, and model evaluation to predict vehicle prices from structured inputs.",
    },
    {
      title: "Fake Social Media Account Detection",
      description:
        "A classification project aimed at identifying fake social media accounts using behavioral and profile-based signals.",
      stack: ["Python", "Classification", "Data Analysis", "Scikit-learn"],
      github: "https://github.com/Ritik4259/INT395---Fake-Social-Media-Account-Detection",
      demo: "",
      detail:
        "Focused on detecting suspicious account patterns by preparing structured data, training classification models, and evaluating predictive performance.",
    },
    {
      title: "Diabetes Prediction",
      description:
        "A healthcare-oriented prediction model for estimating diabetes risk from medical input features.",
      stack: ["Python", "Healthcare ML", "Pandas", "Scikit-learn"],
      github: "https://github.com/Ritik4259/Diabetes-Prediction",
      demo: "",
      detail:
        "Designed to demonstrate practical machine learning in a healthcare context, with a clean prediction pipeline and interpretable structured inputs.",
    },
    {
      title: "Valuefy Assessment",
      description:
        "A technical assessment project showcasing problem solving, implementation quality, and structured engineering thinking.",
      stack: ["JavaScript", "Problem Solving", "Frontend", "Assessment Project"],
      github: "https://github.com/Ritik4259/Valuefy-assessment",
      demo: "",
      detail:
        "Built as an assessment submission with emphasis on clarity, execution, and translating requirements into a working technical solution.",
    },
  ],
  timeline: [
    {
      year: "2026",
      title: "Advanced AI & ML Coursework",
      subtitle: "Deepened foundations across ML workflows and experimentation",
      type: "Coursework",
    },
    {
      year: "2025",
      title: "Certification Milestones",
      subtitle: "Completed focused certifications in Python, data science, and model development",
      type: "Certification",
    },
    {
      year: "2025",
      title: "Hackathons & Problem Solving",
      subtitle: "Built rapid prototypes, collaborated under time constraints, and sharpened coding instincts",
      type: "Experience",
    },
    {
      year: "2024",
      title: "Full-Stack + AI Portfolio Projects",
      subtitle: "Started building end-to-end products blending intelligence, design, and deployment readiness",
      type: "Project Work",
    },
  ],
  resume: {
    href: "/Ritik%20CV%20(4).pdf",
    description:
      "Download or preview my latest resume directly from the portfolio for a faster recruiter workflow.",
  },
  certificates: [
    {
      title: "Supervised Machine Learning: Classification",
      issuer: "Coursera",
      date: "Feb 2026",
      href: "https://coursera.org/share/d0f6a535c4ad60d9ace8bafd564d267c",
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "Coursera",
      date: "Jan 2026",
      href: "https://coursera.org/share/d7b16772ec8e3011601df1e0ca599ba7",
    },
    {
      title: "Supervised Machine Learning: Regression",
      issuer: "Coursera",
      date: "Jan 2026",
      href: "https://coursera.org/share/8ea7594e3c0d214499a00bcf1d17b5dc",
    },
    {
      title: "Data Analysis with Python",
      issuer: "Coursera",
      date: "Jan 2026",
      href: "https://coursera.org/share/bce77ac96c81a99bd72e39ee4ac597b0",
    },
  ],
  education: [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology - Computer Science and Engineering (AI and ML)",
      scoreLabel: "CGPA",
      score: "8.76",
      period: "Aug 2023 - Present",
    },
    {
      institution: "Army Public School",
      location: "Dhaula Kuan, Delhi",
      degree: "Intermediate",
      scoreLabel: "Percentage",
      score: "79%",
      period: "Mar 2021 - Mar 2022",
    },
    {
      institution: "Army Public School",
      location: "Bareilly Cantt, UP",
      degree: "Matriculation",
      scoreLabel: "Percentage",
      score: "91.6%",
      period: "Mar 2019 - Mar 2020",
    },
  ],
  contact: {
    email: "ritikbhardwaj535@gmail.com",
    intro:
      "Whether it's an internship, a machine learning collaboration, or a high-impact product idea, I'd love to connect.",
    socials: [
      { label: "GitHub", href: "https://github.com/Ritik4259" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ritikbhardwaj535/" },
    ],
    codingPlatforms: [
      { label: "LeetCode", href: "https://leetcode.com/u/ritik_1111/" },
      { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/ritik_1111?tab=activity" },
      { label: "Codolio", href: "https://codolio.com/profile/ritik__111" },
    ],
  },
};

export const stats = [
  {
    value: "4+",
    label: "Flagship portfolio project concepts",
    description: "Built to communicate range across AI, full-stack systems, and UX polish.",
  },
  {
    value: "10+",
    label: "Core tools across ML and web engineering",
    description: "Comfortable moving between experimentation, data pipelines, and modern interfaces.",
  },
  {
    value: "Infinite",
    label: "Curiosity for learning",
    description: "The through-line behind every course, project, and late-night technical rabbit hole.",
  },
];

export const terminalLines = [
  { command: "whoami", output: "Ritik Bhardwaj // AI & ML Student // Builder" },
  {
    command: "focus --today",
    output: "Machine learning systems, product UX, and recruiter-ready storytelling",
  },
  { command: "ls skills/", output: "python  cpp  tensorflow  scikit-learn  pandas  numpy" },
  { command: "cat mission.txt", output: "Turn complex ideas into elegant, useful, intelligent products." },
];
