import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 2, suffix: "+", label: "Years Experience" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Counter target={s.value} suffix={s.suffix} />
                <p className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
