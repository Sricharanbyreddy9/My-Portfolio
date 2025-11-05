import { useState, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Download, Github, ChevronDown } from "lucide-react";

function ParticleField() {
  const ref = useRef<any>();
  
  // Memoize sphere positions to prevent recalculation on every render
  const sphere = useMemo(() => {
    const positions = new Float32Array(3000); // Reduced for better performance
    for (let i = 0; i < 3000; i += 3) {
      const radius = 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Slower, smoother rotation
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00D9FF"
          size={0.0015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "AI & LLMs · Spring Boot & Node.js · React & Vue · Cloud Architecture · Microservices at Scale";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background - Static container prevents flicker */}
      <div className="absolute inset-0 z-0 will-change-transform">
        <Canvas 
          camera={{ position: [0, 0, 1] }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          frameloop="demand"
        >
          <ParticleField />
        </Canvas>
      </div>

      {/* Gradient Overlay - No filter animations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-poppins">
          <span className="gradient-text">Sri Charan Byreddy</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          AI & Full-Stack Software Engineer
        </p>

        <div className="h-16 md:h-20 flex items-center justify-center mb-8">
          <p className="text-base md:text-lg text-foreground/80 typing-cursor font-mono">
            {typedText}
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="glass-card px-6 py-3 rounded-full neon-glow-hover">
            <span className="text-primary font-semibold">4+ Years</span>
            <span className="text-muted-foreground ml-2">Experience</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full neon-glow-hover">
            <span className="text-primary font-semibold">2M+ Daily</span>
            <span className="text-muted-foreground ml-2">AI Interactions</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full neon-glow-hover">
            <span className="text-primary font-semibold">99.97%</span>
            <span className="text-muted-foreground ml-2">Uptime</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button
            variant="neon"
            size="lg"
            onClick={() => window.open("https://drive.google.com/file/d/1xWfQI8PTiEZzPOUtCGS1DwPMxkRWlc-V/view?usp=sharing", "_blank")}
            className="gap-2"
          >
            <Download className="w-5 h-5" />
            Resume
          </Button>
          <Button
            variant="glass"
            size="lg"
            onClick={() => window.open("https://github.com/Sricharanbyreddy9", "_blank")}
            className="gap-2"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
