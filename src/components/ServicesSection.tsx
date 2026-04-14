import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, GraduationCap, UtensilsCrossed, BookOpen, Truck } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "High-performance, responsive websites with modern frameworks and SEO optimization." },
  { icon: Smartphone, title: "App Development", desc: "Cross-platform mobile applications with native-like performance and elegant UX." },
  { icon: GraduationCap, title: "School Management System", desc: "Complete ERP solutions for schools — attendance, grading, fees, and communication." },
  { icon: UtensilsCrossed, title: "Restaurant Management", desc: "Order management, table booking, menu systems, and POS integration." },
  { icon: BookOpen, title: "Learning Platforms", desc: "Interactive e-learning portals with video courses, quizzes, and progress tracking." },
  { icon: Truck, title: "Food Delivery Apps", desc: "Full-featured delivery platforms with real-time tracking and payment integration." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            What I <span className="gradient-text">Build</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 hover-lift group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
