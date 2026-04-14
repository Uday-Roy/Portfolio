import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    desc: "Real-time analytics platform with interactive charts, user management, and subscription billing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "FoodRush — Delivery App",
    desc: "Full-featured food delivery platform with real-time order tracking, restaurant dashboard, and payments.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    stack: ["Next.js", "Express", "MongoDB", "Socket.io"],
  },
  {
    title: "AI Study Assistant",
    desc: "AI-powered learning tool with quiz generation, document analysis, and personalized study plans.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    stack: ["React", "Python", "OpenAI", "Firebase"],
  },
  {
    title: "EduCore — School ERP",
    desc: "Comprehensive school management system with attendance, grading, fees, and parent communication.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
  },
  {
    title: "PortfolioKit Builder",
    desc: "Drag-and-drop portfolio builder with templates, custom domains, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    stack: ["React", "Firebase", "Tailwind", "Vercel"],
  },
  {
    title: "CloudSync CRM",
    desc: "Customer relationship management tool with pipeline tracking, email automation, and reporting.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    stack: ["React", "Node.js", "MongoDB", "Redis"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Projects</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl overflow-hidden hover-lift group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4 gap-2">
                  <button className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity" aria-label="Live demo">
                    <ExternalLink size={16} />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors" aria-label="GitHub">
                    <Github size={16} />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
