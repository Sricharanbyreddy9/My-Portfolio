import { Server, Code2, Brain, Cloud, Database, Activity } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Backend",
      icon: Server,
      skills: ["Java", "Spring Boot", "Node.js", "Express", "FastAPI", "Microservices", "REST APIs", "GraphQL"],
    },
    {
      category: "Frontend",
      icon: Code2,
      skills: ["React", "Vue.js", "TypeScript", "Vite", "Tailwind CSS", "Redux", "Zustand", "SPA"],
    },
    {
      category: "AI/LLMs",
      icon: Brain,
      skills: ["LangChain", "GPT-4", "RAG", "Hugging Face", "NLP", "PyTorch", "FAISS", "Prompt Engineering"],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "ELK Stack", "CI/CD"],
    },
    {
      category: "Data/DB",
      icon: Database,
      skills: ["PostgreSQL", "Redis", "MongoDB", "Supabase", "Kafka", "SQL", "Data Modeling", "Migrations"],
    },
    {
      category: "Testing/Monitoring",
      icon: Activity,
      skills: ["Jest", "JUnit", "Postman", "Prometheus", "Grafana", "New Relic", "Unit Testing", "E2E Testing"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-poppins">
          <span className="gradient-text">Technical Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl border border-white/10 neon-glow-hover reveal-fade-in"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted/50 rounded-full text-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
