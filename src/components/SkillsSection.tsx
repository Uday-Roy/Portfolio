import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "REST APIs", level: 88 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 80 },
      { name: "Redis", level: 65 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Vercel", level: 88 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 72 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Skills</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: ci * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-lg font-bold mb-5 text-foreground">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-foreground">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${s.level}%` } : {}}
                        transition={{ duration: 1, delay: ci * 0.1 + 0.3, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
