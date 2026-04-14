import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Target, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Rocket, label: "Fast Delivery", desc: "Efficient project turnaround" },
  { icon: Target, label: "Goal-Oriented", desc: "Focused on business outcomes" },
  { icon: Zap, label: "Modern Stack", desc: "Latest technologies & best practices" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">About Me</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Passionate About Building{" "}
            <span className="gradient-text">Digital Products</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 text-muted-foreground"
          >
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="text-foreground font-semibold">Uday Roy</span> — a Full Stack Developer 
              currently completing my BCA. I specialize in building production-ready SaaS applications, 
              web platforms, and mobile apps that solve real-world problems.
            </p>
            <p className="leading-relaxed">
              My journey started with curiosity about how software products work, and quickly grew 
              into a passion for building them end-to-end. From database architecture to pixel-perfect 
              UIs, I handle every layer of the stack.
            </p>
            <p className="leading-relaxed">
              I believe in writing clean, scalable code and delivering solutions that drive 
              real business results. Whether it's a school management system or a food delivery platform, 
              I approach every project with the same level of craft and dedication.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Let's Work Together
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="glass-card rounded-xl p-6 hover-lift cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h.icon className="text-primary mb-3" size={28} />
                <h3 className="font-semibold text-foreground">{h.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{h.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
