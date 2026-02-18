import { Github, Linkedin, Mail } from "lucide-react";

export const RESUME_DATA = {
    name: "Vishal Kumar Shah",
    role: "Software Engineer & GenAI Specialist",
    about: "Experienced Software Engineer at Accenture specializing in full-stack development with the MEAN stack and cutting-edge Generative AI technologies. Proven expertise in designing and developing scalable, enterprise-grade web applications. Passionate about integrating AI-powered tools such as GitHub Copilot, Azure OpenAI, and custom MCP servers to enhance workflows.",
    contact: {
        email: "vishalkumarshahofficial@gmail.com",
        phone: "+91 8639085939",
        location: "Hyderabad, India",
        social: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/vkumarshah/", icon: Linkedin },
            { name: "GitHub", url: "https://github.com/vkshah2987", icon: Github },
            { name: "Email", url: "mailto:vishalkumarshahofficial@gmail.com", icon: Mail },
        ],
    },
    skills: {
        frontend: ["Angular (2+)", "React.js", "Micro-Frontends (MFE)", "TypeScript", "Redux", "RXJS", "ECMAScript (ES6+)"],
        backend: ["Node.js", "Express.js", "Python", "FastAPI", "Flask", "C++", "NumPy", "Matplotlib"],
        ai: ["RAG", "GenAI", "AgenticAI", "LangChain", "LangGraph", "GitHub Copilot", "Azure OpenAI (GPT-3.5)", "MCP Server (Figma)", "Ollama"],
        uiux: ["HTML5", "CSS3", "SCSS", "LESS", "TailwindCSS", "Kendo UI", "Angular Material", "Figma"],
        database: ["MongoDB", "MySQL", "VectorDB", "pgvector"],
        tools: ["Git", "Github", "Postman", "Vite", "VS Code", "Jupyter Notebook", "Agile", "CI/CD"],
        cloud: ["Docker", "Kubernetes", "AWS (EC2, S3, IAM)"],
    },
    experience: [
        {
            company: "Accenture",
            role: "Software Engineer",
            period: "Nov 2023 - Present",
            location: "Hyderabad, IN",
            description: [
                "Improved operational efficiency by 28% through Angular-based dashboard enhancements.",
                "Reduced manual data validation effort by 35% by automating workflows with backend APIs.",
                "Built internal GenAI knowledge assistant for SOPs and policy documents using RAG.",
                "Containerized services with Docker and explored Kubernetes deployments.",
            ],
        },
        {
            company: "Freelance / Open Source",
            role: "Full Stack Developer",
            period: "2021 - Present",
            location: "Remote",
            description: [
                "Developed and deployed high-performance web applications for diverse global clients.",
                "Built custom MCP servers to bridge LLMs with external tools like Figma and databases.",
                "Contributed to open-source GenAI projects, focusing on RAG optimization and agentic workflows.",
            ],
        }
    ],
    projects: [
        {
            title: "Smart Workspace AI",
            category: "AI & Productivity",
            description: "A context-aware knowledge assistant that answers user queries based on uploaded documents using RAG. Features sub-second latency vector search.",
            tech: ["React", "Node.js", "Python", "LangChain", "FAISS"],
            link: "https://github.com/vkshah2987",
            image: "/assets/project-1.jpg",
        },
        {
            title: "Netflix Clone",
            category: "Streaming Platform",
            description: "Full-stack streaming platform replicating Netflix's UI/UX. Features secure authentication, dynamic lazy loading, and personalized watchlists.",
            tech: ["React", "Redux", "Firebase", "TMDB API"],
            link: "https://vks-stream.netlify.app/",
            image: "/assets/project-2.jpg",
        },
        {
            title: "Figma MCP Server",
            category: "Development Tooling",
            description: "Custom Node.js server exposing Figma design data to LLMs. Enables prompt-driven design-to-code workflows and automated asset extraction.",
            tech: ["Node.js", "MCP Protocol", "Figma API", "Claude Sonnet"],
            link: null,
            image: "/assets/project-3.jpg",
        },
    ],
    certifications: [
        "Microsoft Certified: Azure Fundamentals (AZ-900)",
        "Microsoft Certified: AI Fundamentals (AI-900)",
        "GitHub Copilot Certified (GH-300)",
        "Angular, React and TypeScript Certification",
        "Google GenAI Certification"
    ],
    education: [
        {
            degree: "Bachelor of Technology, Electronics and Computer Engineering",
            school: "Vignan's Institute of Information Technology",
            location: "Visakhapatnam, IN",
            period: "2019-2023",
            grade: "CGPA: 9"
        }
    ],
    accomplishments: [
        {
            title: "Accenture Excellence Award",
            description: "Awarded for outstanding performance and exceptional contribution in 2025."
        },
        {
            title: "Sparkling Star Award",
            description: "Recognized for exemplary achievements and consistent excellence in 2024 and 2025."
        },
        {
            title: "Client Value Creation Award",
            description: "Recognized for delivering high-impact solutions that created measurable value for the client."
        },
        {
            title: "Client Appreciation Certificate",
            description: "Received formal appreciation from the client for exceptional contribution and consistent performance."
        },
        {
            title: "Rapid Career Progression",
            description: "Promoted to Software Engineer within 1.3 years in recognition of high-quality performance and strong technical contributions."
        }
    ]
};
