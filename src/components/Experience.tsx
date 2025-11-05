import { Building2, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Wayfair",
      role: "AI Software Engineer",
      period: "Jul 2024 – Present",
      logo: Building2,
      highlights: [
        "Process <strong>850K+ orders/day</strong> with p95 latency <strong><200ms</strong> using Java microservices",
        "Built LLM-powered recommendation engine serving <strong>2M+ interactions/day</strong> using LangChain & RAG",
        "Architected GraphQL gateway handling <strong>500K+ users</strong> with optimized query resolvers",
        "Designed ELK-based analytics pipeline processing <strong>TB-scale logs</strong> daily",
        "Led CI/CD automation achieving <strong>18+ releases/month</strong> with zero-downtime deployments",
        "Maintained <strong>99.97% uptime</strong> on AWS infrastructure with auto-scaling & monitoring",
      ],
    },
    {
      company: "Accenture",
      role: "Full Stack Engineer",
      period: "Jul 2020 – Jun 2022",
      logo: TrendingUp,
      highlights: [
        "Developed fintech apps processing <strong>75K+ transactions/day</strong> with <strong>99.8% accuracy</strong>",
        "Migrated <strong>1.2M records</strong> from legacy systems to PostgreSQL with zero data loss",
        "Built Node.js microservices handling <strong>60K+ daily API requests</strong>",
        "Created real-time Vue.js dashboards with <strong>sub-second refresh</strong> rates",
        "Implemented Kafka streaming for <strong>50K+ events/hour</strong> with exactly-once semantics",
        "Designed <strong>RBAC system</strong> with comprehensive audit logging for compliance",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-poppins">
          <span className="gradient-text">Professional Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl border border-white/10 neon-glow-hover reveal-fade-in"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/10">
                  <exp.logo className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-1">{exp.company}</h3>
                  <p className="text-lg text-foreground/80 mb-1">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="flex items-start gap-3 text-foreground/90"
                  >
                    <span className="text-primary mt-1.5">▸</span>
                    <span dangerouslySetInnerHTML={{ __html: highlight }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
