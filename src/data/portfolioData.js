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
      "AI & Machine Learning Student",
      "Machine Learning Project Builder",
      "Exploring NLP and Deep Learning",
    ],
    description:
      "Computer Science student specialising in AI and Machine Learning, building hands-on projects to deepen my understanding of data, models, and intelligent systems.",
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Contact Me", href: "#contact" },
    focusAreas: [
      "Machine Learning",
      "Deep Learning",
      "Data Analysis",
      "Predictive Modeling",
      "Problem Solving",
    ],
  },
  about: {
    intro:
      "I'm a Computer Science student specialising in AI and Machine Learning, with a focus on learning by building practical machine learning and NLP projects.",
    story:
      "My work centres on understanding machine learning from the ground up: preparing data, experimenting with models, evaluating results, and exploring the ideas behind modern AI systems.",
    highlights: [
      {
        title: "Learning by Building",
        description:
          "Using focused projects in regression, classification, NLP, and neural networks to turn coursework into practical experience.",
      },
      {
        title: "Machine Learning Foundations",
        description:
          "Building familiarity with data preprocessing, feature engineering, model evaluation, optimisation, and clustering.",
      },
      {
        title: "Continuous Exploration",
        description:
          "Continuing to explore deep learning and language-focused machine learning through independent projects and coursework.",
      },
    ],
  },
  skills: [
    {
      title: "Programming",
      items: [
        { name: "Python", level: 85 },
        { name: "C++", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "SQL", level: 70 },
      ],
    },
    {
      title: "ML / AI",
      items: [
        { name: "Scikit-learn", level: 80 },
        { name: "Pandas / NumPy", level: 80 },
        { name: "NLP", level: 75 },
        { name: "Deep Learning", level: 70 },
      ],
    },
  ],
  projects: [
    {
      title: "Chat Intent Discovery with NLP",
      description:
        "An unsupervised NLP project that discovers hidden intents in customer conversations through semantic embeddings and clustering.",
      stack: ["Python", "NLP", "Sentence-BERT", "HDBSCAN"],
      github: "https://github.com/Ritik4259/Chat-intent-detection-using-NLP-and-clustering-same-using-Unsupervised-ML",
      demo: "",
      detail:
        "Compares TF-IDF, Word2Vec, GloVe, and Sentence-BERT representations with K-Means, DBSCAN, and HDBSCAN. The workflow includes text cleaning, tokenisation, lemmatisation, cluster evaluation, PCA, and t-SNE visualisation.",
    },
    {
      title: "Neural Network From Scratch",
      description:
        "A modular neural-network implementation built with Python and NumPy, without TensorFlow or PyTorch.",
      stack: ["Python", "NumPy", "Backpropagation", "Optimisation"],
      github: "https://github.com/Ritik4259/Neural-Network-from-scratch",
      demo: "",
      detail:
        "Implements dense layers, forward and backward propagation, ReLU and Softmax, cross-entropy loss, dropout, L1/L2 regularisation, and optimisers including SGD, AdaGrad, RMSProp, and Adam.",
    },
    {
      title: "AI Automation Workflows",
      description:
        "A collection of AI-powered n8n workflows for automation, productivity, document intelligence, and knowledge retrieval.",
      stack: ["n8n", "LLMs", "RAG", "MCP"],
      github: "https://github.com/Ritik4259/n8n-workflows",
      demo: "",
      detail:
        "Includes AI agents for email, research, scheduling, and messaging; RAG workflows for PDF ingestion and knowledge assistants; and integrations with Google Workspace, Telegram, Pinecone, Slack, Notion, and Spotify.",
    },
    {
      title: "Fake Social Media Account Detection",
      description:
        "A machine learning classification project focused on detecting fake social-media accounts.",
      stack: ["Python", "Classification", "Machine Learning", "Data Analysis"],
      github: "https://github.com/Ritik4259/Fake-Social-Media-Account-Detection",
      demo: "",
      detail:
        "A repository showcasing an applied classification use case for identifying potentially fake social-media accounts from account-related data.",
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
      title: "Programming Foundations",
      subtitle: "Strengthened core programming skills and began building a foundation in data structures, algorithms, and problem solving.",
      type: "Learning",
    },
  ],
  resume: {
    href: "/Ritik%20Spec%20CV.pdf",
    description:
      "Download or preview my current CV.",
  },
  certificates: [
    {
      title: "Improving Deep Neural Networks",
      issuer: "Coursera",
      date: "May 2026",
      href: "https://coursera.org/share/9fe1d4c2d969adaebe04a27e427753e3",
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      date: "Apr 2026",
      href: "https://coursera.org/share/b48b63486aef436526fc9cc3cf111b80",
    },
    {
      title: "Machine Learning with Python",
      issuer: "Coursera",
      date: "Apr 2026",
      href: "https://coursera.org/share/5fd533a5bfb0a513b480134b7d7cf75e",
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
    value: "4",
    label: "Featured GitHub projects",
    description: "Selected from recent hands-on work in machine learning, NLP, and deep learning.",
  },
  {
    value: "4",
    label: "Machine learning focus areas",
    description: "Regression, classification, NLP, and neural-network fundamentals.",
  },
  {
    value: "AI & ML",
    label: "Degree specialisation",
    description: "Computer Science and Engineering at Lovely Professional University.",
  },
];

export const terminalLines = [
  { command: "whoami", output: "Ritik Bhardwaj // B.Tech CSE (AI & ML) Student" },
  {
    command: "focus --today",
    output: "Machine learning, NLP, deep learning, and problem solving",
  },
  { command: "ls skills/", output: "python  c++  scikit-learn  pandas  numpy  nlp" },
  { command: "cat mission.txt", output: "Keep building strong foundations in AI and machine learning." },
];
