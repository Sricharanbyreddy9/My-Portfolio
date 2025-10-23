import { useState } from "react";
import { ExternalLink, Github, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "LoanSentinel",
      subtitle: "AI-Powered Loan Risk Prediction & Monitoring",
      description: "Full-stack AI system predicting loan default risk with ML, NLP, and real-time dashboards.",
      tech: ["FastAPI", "Node.js", "Vue.js", "Supabase", "PostgreSQL", "NLP", "PyTorch"],
      links: {
        code: "https://github.com/Sricharanbyreddy9/LoanSentinel",
        readme: "https://github.com/Sricharanbyreddy9/LoanSentinel#readme",
      },
      details: {
        overview: "Complete AI workflow showing ML predictions, backend APIs, database persistence, and real-time frontend visualization.",
        highlights: [
          "Real-time predictions with RandomForest & optional PyTorch models",
          "NLP keyword-based risk detection from loan application text",
          "Postman-validated APIs across 3 services (ML:8000, Node:5050, Vue:5173)",
          "KPI dashboards with risk trends, tables, and what-if simulators",
          "Persistent prediction logs in Supabase PostgreSQL",
          "Handles 80K+ loan dataset with scalable architecture",
        ],
        architecture: "ML API (FastAPI) → Node.js API (Express) → Vue Dashboard → Supabase DB",
      },
    },
    {
      title: "RAGCare",
      subtitle: "Retrieval-Augmented Healthcare Assistant",
      description: "HIPAA-style medical knowledge retrieval with structured citations and clinician-friendly UI.",
      tech: ["Flask", "FastAPI", "FAISS", "Chroma", "OpenAI", "Groq", "NLP"],
      links: {
        code: "https://github.com/Sricharanbyreddy9/RAGCare-Retrieval-Augmented-Healthcare-Assistant",
      },
      details: {
        overview: "Healthcare-focused RAG system providing accurate medical information with proper citations.",
        highlights: [
          "FAISS/Chroma vector databases for fast retrieval",
          "Structured citations for clinical validation",
          "Prompt-safe outputs preventing hallucinations",
          "HIPAA-style data handling demonstrations",
          "Integration with OpenAI and Groq models",
          "Clinician-friendly interface for medical queries",
        ],
      },
    },
    {
      title: "DailyHarvest Grocery App",
      subtitle: "Modern E-Commerce Platform",
      description: "Full-featured grocery app with cart, checkout, and product catalog.",
      tech: ["React", "Supabase", "Tailwind CSS", "Zustand", "Mobile-First"],
      links: {
        code: "https://github.com/Sricharanbyreddy9/daily-harvest-app",
      },
      details: {
        overview: "Clean, modern grocery shopping experience with seamless cart and checkout flow.",
        highlights: [
          "Mobile-first responsive design",
          "Real-time cart management with Zustand",
          "Product catalog with search and filters",
          "Secure checkout flow",
          "Supabase backend for products and orders",
          "Optimized performance and UX",
        ],
      },
    },
    {
      title: "Cold Email Generator",
      subtitle: "GenAI + LangChain",
      description: "AI-powered cold email generation using LangChain and generative AI for personalized outreach.",
      tech: ["Python", "LangChain", "GPT-4", "Streamlit", "OpenAI API"],
      links: {
        code: "https://github.com/Sricharanbyreddy9/Cold-Email-Generator--GenAI--LangChain",
      },
      details: {
        overview: "Automated cold email generation leveraging generative AI for personalized and context-aware messaging.",
        highlights: [
          "LangChain integration for structured AI workflows",
          "Context-aware email personalization",
          "Streamlit interface for easy interaction",
          "GPT-4 powered content generation",
          "Template management and customization",
        ],
      },
    },
    {
      title: "Generative AI Customer Support",
      subtitle: "Enterprise-Scale AI Assistant",
      description: "LangChain-powered support system handling 10K+ daily interactions with GPT-4 and RAG.",
      tech: ["Spring Boot", "Hibernate", "LangChain", "GPT-4", "RAG", "Microservices"],
      details: {
        overview: "Production AI assistant reducing resolution time from 12 min to 2 min with multilingual support.",
        highlights: [
          "Reduced avg resolution time from 12 min to 2 min",
          "Handles 10K+ interactions/day with 95%+ accuracy",
          "Multilingual support (EN/ES/FR) with context awareness",
          "RAG over 25K+ document knowledge base",
          "Scalable microservices architecture on AWS",
          "Real-time sentiment analysis and escalation",
        ],
      },
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-poppins">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden neon-glow-hover reveal-fade-in group"
            >
              {/* Gradient Cover */}
              <div className="h-40 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--neon-cyan))]/10 to-[hsl(var(--neon-magenta))]/10 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                <p className="text-foreground/80 mb-4 line-clamp-2">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 rounded-md text-xs border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-muted/50 rounded-md text-xs">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {project.links?.code && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.links.code, "_blank")}
                      className="gap-1.5"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  )}
                  {project.links && 'demo' in project.links && project.links.demo && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open((project.links as any).demo, "_blank")}
                      className="gap-1.5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  )}
                  {project.links?.readme && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.links.readme, "_blank")}
                      className="gap-1.5"
                    >
                      <FileText className="w-4 h-4" />
                      Case Study
                    </Button>
                  )}
                  <Button
                    variant="neon"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card/95 backdrop-blur-xl border border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-primary">
              {selectedProject?.subtitle}
            </DialogDescription>
          </DialogHeader>

          {selectedProject?.details && (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Overview</h4>
                <p className="text-foreground/80">{selectedProject.details.overview}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Key Highlights</h4>
                <ul className="space-y-2">
                  {selectedProject.details.highlights?.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span className="text-foreground/80">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.details.architecture && (
                <div>
                  <h4 className="font-semibold mb-2">Architecture</h4>
                  <p className="text-foreground/80 font-mono text-sm bg-muted/50 p-3 rounded-lg">
                    {selectedProject.details.architecture}
                  </p>
                </div>
              )}

              <div>
                <h4 className="font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-primary/10 rounded-full text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
