import { useState, useEffect } from "react";
import { Code, Cloud, Brain } from "lucide-react";
import profileImage from "@/assets/profile.png";

const About = () => {
  const [typedAbout, setTypedAbout] = useState("");
  const aboutText =
    "Full-stack engineer with 4+ years building AI-powered systems and scalable microservices. I architect solutions that handle 850K+ orders daily, integrate LLMs for intelligent recommendations, and maintain 99.97% uptime in production.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && typedAbout === "") {
            let i = 0;
            const typingInterval = setInterval(() => {
              if (i < aboutText.length) {
                setTypedAbout(aboutText.substring(0, i + 1));
                i++;
              } else {
                clearInterval(typingInterval);
              }
            }, 30);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Code, label: "Wayfair Scale", value: "850K+ orders/day, <200ms p95 latency" },
    { icon: Brain, label: "AI Integration", value: "2M+ LLM interactions/day with RAG" },
    { icon: Cloud, label: "High Availability", value: "99.97% uptime, 18+ releases/month" },
  ];

  const skills = [
    "Java",
    "Spring Boot",
    "Node.js",
    "React",
    "Vue",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "LangChain",
    "Hugging Face",
    "RAG",
    "GraphQL",
  ];

  const timeline = [
    {
      company: "Wayfair",
      role: "AI Software Engineer",
      period: "Jul 2024 – Present",
      description:
        "Building microservices at scale with LLM recommendations, GraphQL APIs, analytics pipelines, and CI/CD automation on AWS.",
    },
    {
      company: "Accenture",
      role: "Software Engineer",
      period: "Jul 2020 – Jun 2022",
      description:
        "Developed fintech applications, migrated 1.2M records to PostgreSQL, built Node microservices, Vue dashboards, and implemented Kafka streaming.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-poppins">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Avatar */}
          <div className="md:col-span-1 flex justify-center">
            <div className="glass-card rounded-full p-2 w-64 h-64 flex items-center justify-center neon-glow-hover">
              <img 
                src={profileImage} 
                alt="Sri Charan Byreddy" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Chat-style About */}
          <div className="md:col-span-2 space-y-4">
            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <p className="text-base md:text-lg leading-relaxed">{typedAbout}</p>
            </div>

            {/* Highlight Bubbles */}
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-2xl border border-white/10 flex items-center gap-4 neon-glow-hover"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{highlight.label}</p>
                  <p className="text-base font-semibold">{highlight.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Stripe */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Trusted Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-primary/20 neon-glow-hover"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Experience Timeline</h3>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl border border-white/10 neon-glow-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-primary">{item.company}</h4>
                    <p className="text-muted-foreground">{item.role}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">{item.period}</span>
                </div>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
