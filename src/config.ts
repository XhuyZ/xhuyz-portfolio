export const siteConfig = {
  name: "Huy Nguyen",
  title: "Software Engineer Fresher",
  description: "Portfolio website of XhuyZ",
  accentColor: "#1d4ed8",
  social: {
    email: "xhuyzdev@gmail.com",
    linkedin: "https://www.linkedin.com/in/nguyen-van-huy-2337a431a/",
    github: "https://github.com/XhuyZ",
  },
  aboutMe:
    "I'm a Software Engineering student passionate about Linux and deeply embedded in its ecosystem. With a solid grasp of command-line tools and a broad understanding of software and systems, I thrive on exploring the depths of software development lifecycle and system design.",
  skills: [
    "Neovim",
    "AspNet",
    "Node.js",
    "Springboot",
    "Golang",
    "React.js",
    "Flutter",
    "Kotlin",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Supabase",
    "Kafka",
    "AWS",
    "Linux",
    "Docker",
    "Jenkins",
    "K8s",
  ],
  projects: [
    {
      name: "Harmony Hub",
      description: "Pre-marital Counseling Platform",
      link: "https://github.com/XhuyZ/SP25_SWP391_HarmonyHub_FE",
      skills: ["React", "AspNet", "MySQL", "Vercel"],
    },
    {
      name: "FootballMatch App",
      description:
        "Mobile application for finding teamates or opponents for football match",
      link: "https://github.com/XhuyZ/FMA_FE",
      skills: ["Java", "Firebase", "Cloud Storage", "Sqlite"],
    },
    {
      name: "Lazysys",
      description:
        "A TUI application for managing systemd services, built with Go and BubbleTea. ",
      link: "https://github.com/XhuyZ/lazysys",
      skills: ["Golang", "BubbleTea", "Sqlite", "Linux"],
    },
    {
      name: "Nixvim",
      description: "Neovim configuration using Nix",
      link: "https://github.com/XhuyZ/nixvim",
      skills: ["Nix", "Linux"],
    },
  ],
  experience: [
    {
      company: "FPT Software Academy",
      title: "Full Stack Developer Intern",
      dateRange: "Sep 2024 - Dec 2024",
      bullets: [
        "Developed an online learning platform using React and ASP.NET Core",
        "Implemented authentication, RESTful APIs, and backend services",
        "Gained hands-on experience in backend technologies and deployment",
        "Collaborated in a team environment to deliver production-ready features",
      ],
    },
    {
      company: "Ai Nghia General Clinic",
      title: "Full Stack Developer",
      dateRange: "Jun 2025 - Now",
      bullets: [
        "Built an Android TV application to display patient information",
        "Integrated medical workflows and collaborated with healthcare staff",
        "Implemented RabbitMQ for reliable message processing",
        "Optimized backend services to handle high request volumes efficiently",
        "Worked closely with cross-functional teams to ensure system reliability in a healthcare setting",
      ],
    },
  ],
  education: [
    {
      school: "FPT University HCMC",
      degree: "Bachelor of Software Engineering (Expected 2025)",
      dateRange: "2021 - Present",
      achievements: [
        "Maintained a 3.0 GPA with consistent academic performance",
        "Coursework includes Software Architecture, Database Systems, and Cloud Computing",
      ],
    },
    {
      school: "Coursera",
      degree: "Professional Certificates in Full Stack Development",
      dateRange: "2019 - 2023",
      achievements: ["Completed 500+ hours of hands-on coursework"],
    },
  ],
  blogs: [
    {
      id: "docker-containers-guide",
      title: "Mastering Docker Containers: A Developer's Journey",
      description:
        "Deep dive into containerization, orchestration, and best practices for modern development workflows.",
      image: "/assets/docker.jpg",
      publishedAt: "2024-12-15",
      tags: ["Docker", "DevOps", "Containers"],
      readTime: "8 min read",
      content: {
        sections: [
          {
            id: "introduction",
            title: "Introduction to Containers",
            content:
              "Containerization has revolutionized how we develop and deploy applications. In this comprehensive guide, we'll explore Docker from the ground up.",
            comments: [
              {
                id: 1,
                icon: "🚀",
                text: "This changed my deployment game completely!",
              },
              {
                id: 2,
                icon: "💡",
                text: "Finally understood the difference between VMs and containers",
              },
            ],
          },
          {
            id: "getting-started",
            title: "Getting Started with Docker",
            content:
              "Let's start by understanding what Docker is and why it's become an essential tool for developers worldwide. Docker allows us to package applications with all their dependencies.",
            comments: [
              {
                id: 3,
                icon: "🔧",
                text: "The installation process was smoother than expected",
              },
            ],
          },
          {
            id: "best-practices",
            title: "Docker Best Practices",
            content:
              "Following best practices is crucial for maintainable and secure containerized applications. Here are the key principles every developer should follow.",
            comments: [
              {
                id: 4,
                icon: "⚡",
                text: "Multi-stage builds are game changers!",
              },
              {
                id: 5,
                icon: "🛡️",
                text: "Security tips here are gold",
              },
            ],
          },
        ],
      },
    },
    {
      id: "react-performance-optimization",
      title: "React Performance: Optimization Techniques That Matter",
      description:
        "Learn advanced React optimization techniques to build lightning-fast applications.",
      image: "/assets/react.jpg",
      publishedAt: "2024-11-28",
      tags: ["React", "Performance", "JavaScript"],
      readTime: "12 min read",
      content: {
        sections: [
          {
            id: "introduction",
            title: "Why Performance Matters",
            content:
              "In today's fast-paced digital world, users expect applications to be responsive and fast. Even a few seconds of delay can significantly impact user experience.",
            comments: [
              {
                id: 1,
                icon: "⚡",
                text: "Speed is everything in modern web apps!",
              },
            ],
          },
          {
            id: "memoization",
            title: "Mastering React.memo and useMemo",
            content:
              "Understanding when and how to use memoization can dramatically improve your app's performance. Let's explore these powerful optimization tools.",
            comments: [
              {
                id: 2,
                icon: "🧠",
                text: "Finally understood when to use useMemo vs useCallback",
              },
              {
                id: 3,
                icon: "🎯",
                text: "The examples made it crystal clear",
              },
            ],
          },
        ],
      },
    },
    {
      id: "golang-microservices",
      title: "Building Microservices with Go: A Practical Approach",
      description:
        "Architect scalable microservices using Go, focusing on real-world patterns and practices.",
      image: "/assets/golang.jpg",
      publishedAt: "2024-11-10",
      tags: ["Go", "Microservices", "Architecture"],
      readTime: "15 min read",
      content: {
        sections: [
          {
            id: "introduction",
            title: "Why Go for Microservices?",
            content:
              "Go's simplicity, performance, and excellent concurrency support make it an ideal choice for building microservices. Let's explore why.",
            comments: [
              {
                id: 1,
                icon: "🏗️",
                text: "Go's simplicity is its superpower for microservices",
              },
            ],
          },
          {
            id: "service-design",
            title: "Designing Your First Service",
            content:
              "Proper service design is crucial for maintainable microservices. We'll cover domain-driven design principles and service boundaries.",
            comments: [
              {
                id: 2,
                icon: "🎨",
                text: "Domain boundaries are tricky but this helps a lot",
              },
              {
                id: 3,
                icon: "🔄",
                text: "The communication patterns section is excellent",
              },
            ],
          },
        ],
      },
    },
    {
      id: "linux-productivity-tips",
      title: "Linux Productivity Hacks Every Developer Should Know",
      description:
        "Boost your development productivity with these essential Linux tips, tricks, and command-line tools.",
      image: "/assets/linux.jpg",
      publishedAt: "2024-10-22",
      tags: ["Linux", "CLI", "Productivity"],
      readTime: "10 min read",
      content: {
        sections: [
          {
            id: "introduction",
            title: "Mastering the Command Line",
            content:
              "The command line is a developer's best friend. Once you master these tools, you'll wonder how you ever lived without them.",
            comments: [
              {
                id: 1,
                icon: "⌨️",
                text: "These shortcuts saved me hours already!",
              },
            ],
          },
          {
            id: "advanced-tools",
            title: "Advanced CLI Tools",
            content:
              "Beyond the basic commands lie powerful tools that can transform your workflow. Let's explore some hidden gems.",
            comments: [
              {
                id: 2,
                icon: "🔍",
                text: "ripgrep is now my go-to search tool",
              },
              {
                id: 3,
                icon: "🌟",
                text: "Never knew about these tools, amazing!",
              },
            ],
          },
        ],
      },
    },
    {
      id: "database-design-patterns",
      title: "Database Design Patterns for Modern Applications",
      description:
        "Explore proven database design patterns and when to apply them in your projects.",
      image: "/assets/sql.jpg",
      publishedAt: "2024-09-18",
      tags: ["Database", "PostgreSQL", "Architecture"],
      readTime: "11 min read",
      content: {
        sections: [
          {
            id: "introduction",
            title: "The Foundation of Great Software",
            content:
              "A well-designed database is the foundation of any successful application. Poor database design can cripple even the most elegant code.",
            comments: [
              {
                id: 1,
                icon: "🏛️",
                text: "Database design is truly an art form",
              },
            ],
          },
          {
            id: "normalization",
            title: "Understanding Normalization",
            content:
              "Normalization is crucial for data integrity, but over-normalization can hurt performance. Let's find the right balance.",
            comments: [
              {
                id: 2,
                icon: "⚖️",
                text: "The balance between normalization and performance is tricky",
              },
              {
                id: 3,
                icon: "📊",
                text: "Great examples of when to denormalize",
              },
            ],
          },
        ],
      },
    },
  ],
};
