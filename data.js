/**
 * Portfolio Content & Central Configuration
 * Pratik Yadav - Full-Stack & AI Developer
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "PRATIK YADAV",
    role: "Full-Stack & AI Developer",
    location: "Prayagraj, India",
    education: "BCA (Sem II) @ C.M.P. Degree College, Univ. of Allahabad",
    focus: "Full-Stack Web Apps, LLM APIs & AI Products",
    tagline: "CODE / CURIOSITY / ITERATION",
    heroTitle: "I BUILD USEFUL THINGS.",
    bio: "A student developer who enjoys building web applications, exploring new technologies, and turning ideas into real, impactful projects.",
    currently: "Building ExamLohe v2.0, exploring Claude API & contributing to open source.",
    github: "https://github.com/Pratik-y-SDE",
    linkedin: "https://www.linkedin.com/in/pratik-yadav-07a961398/",
    email: "pratikyadav.sde@gmail.com"
  },

  projects: [
    {
      id: "student-toolkit",
      featured: true,
      number: "01",
      title: "Student Toolkit (ExamLohe)",
      subtitle: "CBSE Board Exam Preparation Platform",
      category: "Web Application",
      badge: "Hackathon Solo Build",
      shortDescription: "A collection of useful tools designed to simplify everyday student workflows. Built solo in under a week for STEMINATE Hacks 2026.",
      image: "assets/project-student-toolkit.png",
      technologies: ["React", "FastAPI", "Anthropic Claude API", "CSS3"],
      annotation: "Tools that actually help :)",
      links: {
        github: "https://github.com/Pratik-y-SDE",
        demo: "#"
      },
      caseStudy: {
        overview: "ExamLohe is an all-in-one exam prep workspace for high school students. It unifies note management, interactive timetables, scientific calculation, and AI-assisted concept breakdown into a single distraction-free UI.",
        problem: "Students preparing for board exams often struggle with fragmented tools—using separate apps for notes, schedules, practice questions, and study planning—leading to friction and cognitive overhead.",
        solution: "Created a unified dashboard that combines quick notes, study timetables, practice task trackers, and an intelligent AI study assistant powered by Claude API that explains complex DBMS and Science concepts on demand.",
        features: [
          "Interactive study dashboard with daily task progress and recent notes",
          "AI Study Assistant for automated concept summaries & flashcard generation",
          "Customizable subject timetable and revision scheduler",
          "Distraction-free dark mode interface tailored for long study sessions"
        ],
        architecture: "Frontend built with React + Vite for instant hot module reloading and lightweight state management. Backend powered by Python FastAPI to serve async REST endpoints and streamline Claude API request piping with response caching.",
        challenges: "Optimizing AI prompt token limits while keeping response times under 1.2s for real-time study assistance. Solved by implementing local caching for frequently queried syllabus topics.",
        learned: "Mastered full-stack API contract design between FastAPI and React, prompt engineering for educational explanations, and rapid MVP iteration under hackathon time constraints."
      }
    },
    {
      id: "stormtracker",
      featured: true,
      number: "02",
      title: "STORMTRACKER",
      subtitle: "AI Cyclone Detection & Tracking System",
      category: "AI & Computer Vision",
      badge: "GDG Hackathon Project",
      shortDescription: "A cyclone detector built for Code for Community Hackathon (CMP HackSquad x GDG Prayagraj), refined across three successive versions.",
      image: "",
      technologies: ["Python", "FastAPI", "OpenCV", "TensorFlow", "React"],
      annotation: "Refined over 3 successive iterations.",
      links: {
        github: "https://github.com/Pratik-y-SDE",
        demo: "#"
      },
      caseStudy: {
        overview: "STORMTRACKER processes meteorological satellite imagery to detect cyclone formation early, estimate storm intensity, and predict coastal impact trajectories.",
        problem: "Early detection of severe atmospheric storms in coastal regions requires processing high-resolution satellite imagery rapidly to alert local disaster response units.",
        solution: "Developed a computer vision pipeline that analyzes satellite cloud patterns, detects eye formation, and categorizes storm intensity using deep learning models.",
        features: [
          "Real-time satellite image upload and automated cyclone feature extraction",
          "Intensity classification and storm speed trajectory estimation",
          "Interactive map view showing affected regions and danger radiuses",
          "Historical cyclone analysis comparison tool"
        ],
        architecture: "Python ML backend with OpenCV image pre-processing and TensorFlow inference engine. FastAPI serves prediction results to a responsive React frontend dashboard.",
        challenges: "Handling noisy satellite imagery with cloud cover artifacts. Addressed by applying contrast-limited adaptive histogram equalization (CLAHE) during image preprocessing.",
        learned: "Deepened understanding of spatial computer vision techniques, satellite data processing, and presenting complex analytical data in intuitive UI maps."
      }
    },
    {
      id: "opencluely",
      featured: false,
      number: "03",
      title: "OpenCluely — Kotlin Language Support",
      subtitle: "Open Source Contribution (PR #59)",
      category: "Open Source",
      badge: "PR #59 Merged",
      shortDescription: "Contributed Kotlin programming language support to TechyCSR/OpenCluely repository, expanding the platform's multi-language developer coverage.",
      image: "",
      technologies: ["Kotlin", "Git", "GitHub Workflow"],
      annotation: "Merged into upstream master.",
      links: {
        github: "https://github.com/TechyCSR/OpenCluely/pull/59",
        demo: "https://github.com/TechyCSR/OpenCluely"
      },
      caseStudy: {
        overview: "OpenCluely is an open-source developer tool for codebase intelligence. Contributed full Kotlin syntax highlighting, grammar parsing specs, and execution mapping.",
        problem: "The project lacked support for Kotlin developers, limiting its adoption among Android and JVM engineers.",
        solution: "Implemented Kotlin language definitions, test cases, and configuration bindings following the project's contributor standards.",
        features: [
          "Kotlin syntax grammar definition and parser mapping",
          "Automated unit tests covering Kotlin code snippets",
          "Updated contributor documentation and language matrix"
        ],
        architecture: "Integrated with OpenCluely's plugin-based language dispatcher system.",
        challenges: "Ensuring backward compatibility with existing language plugins while adhering strictly to project code style guide.",
        learned: "Gained valuable experience navigating unfamiliar codebases, participating in open-source code reviews, and writing robust pull requests."
      }
    },
    {
      id: "freeapi",
      featured: false,
      number: "04",
      title: "FreeAPI (apihub) — Search Fix",
      subtitle: "Open Source Contribution (PR #357)",
      category: "Open Source / Backend",
      badge: "PR #357 Merged",
      shortDescription: "Implemented case-insensitive regex search and pagination fix for quotes, books, and YouTube search endpoints in Hitesh Choudhary's apihub.",
      image: "",
      technologies: ["Node.js", "Express", "MongoDB", "REST APIs"],
      annotation: "Enhancing developer APIs for thousands of users.",
      links: {
        github: "https://github.com/hiteshchoudhary/apihub/pull/357",
        demo: "https://github.com/hiteshchoudhary/apihub"
      },
      caseStudy: {
        overview: "FreeAPI (apihub) provides free mock REST APIs for front-end developers globally. Fixed case-sensitivity bugs across multiple search endpoints.",
        problem: "Search queries were strictly case-sensitive, causing empty query responses when users typed lowercase or mixed-case keywords.",
        solution: "Refactored MongoDB query controllers to use case-insensitive regular expression indexing (`$options: 'i'`) and normalized query parameters.",
        features: [
          "Case-insensitive search across quotes, books, and YouTube API endpoints",
          "Improved API response formatting and edge-case handling for empty queries",
          "Added integration unit tests for query parameters"
        ],
        architecture: "Express.js route controllers interfacing with Mongoose ORM models.",
        challenges: "Modifying core endpoint controllers without breaking existing API response contracts for existing client applications.",
        learned: "Learned best practices for API backwards-compatibility, database query indexing, and contributing to high-visibility open-source projects."
      }
    }
  ],

  techStack: [
    {
      category: "01 FRONTEND",
      items: ["HTML5", "CSS3 / Custom Properties", "JavaScript (ES6+)", "React.js", "Vite", "Responsive Design"]
    },
    {
      category: "02 BACKEND & AI",
      items: ["Python", "FastAPI", "Node.js", "Express", "Anthropic Claude API", "RESTful Architecture"]
    },
    {
      category: "03 DATABASE & STORAGE",
      items: ["MongoDB", "MySQL", "SQLite", "JSON Schema / Local Storage"]
    },
    {
      category: "04 TOOLS & WORKFLOW",
      items: ["Git & GitHub", "VS Code", "Postman", "Linux CLI / Bash", "Vercel / GitHub Pages"]
    }
  ],

  skills: [
    "Frontend Engineering & Responsive UI",
    "LLM API Integration (Claude / OpenAI)",
    "Async REST API Development",
    "Open-Source Contribution & Code Review",
    "Algorithmic Problem Solving",
    "UI Design & Typography Hierarchy",
    "Git Workflow & Branching Strategy"
  ],

  journey: [
    {
      year: "2023",
      title: "First Steps into Programming",
      description: "Mastered core web development fundamentals (HTML, CSS, JavaScript) and started building interactive tools."
    },
    {
      year: "2024",
      title: "Full-Stack Development & Python",
      description: "Explored backend development with Python & Node.js, built full-stack applications, and learned Git version control."
    },
    {
      year: "2025",
      title: "AI Integration & Open Source",
      description: "Started incorporating Generative AI APIs into web apps and submitted first merged pull requests to major open-source repositories."
    },
    {
      year: "2026",
      title: "BCA & Hackathon Wins",
      description: "Enrolled in BCA at CMP Degree College, built ExamLohe & STORMTRACKER for hackathons, currently building production-grade tools."
    }
  ],

  currentlyBuilding: {
    name: "ExamLohe v2.0",
    building: "Smart revision scheduler, automated flashcards, and real-time AI study assistant using Anthropic Claude API.",
    learning: "Advanced FastAPI async streaming, client-side state caching, and responsive editorial micro-interactions.",
    next: "Launching beta version for college peers and publishing an open-source React component kit."
  },

  achievements: [
    {
      title: "STEMINATE Hacks 2026",
      subtitle: "Built Student Toolkit (ExamLohe) solo in under 7 days."
    },
    {
      title: "CMP HackSquad x GDG Prayagraj",
      subtitle: "Code for Community Hackathon participant & STORMTRACKER developer."
    },
    {
      title: "Open Source Contributor",
      subtitle: "Merged PRs in TechyCSR/OpenCluely (#59) and Hitesh Choudhary/apihub (#357)."
    }
  ]
};
