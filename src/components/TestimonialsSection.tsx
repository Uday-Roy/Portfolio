import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    text: "Uday built our entire SaaS platform from scratch. The quality, speed, and attention to detail was exceptional. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Priya Singh",
    role: "School Principal",
    text: "The school management system he developed transformed our entire workflow. Parents, teachers, and staff love using it.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Amit Kumar",
    role: "Restaurant Owner",
    text: "Our restaurant app has increased online orders by 40%. The real-time tracking feature is a game-changer for our business.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sneha Patel",
    role: "EdTech CEO",
    text: "Working with Uday felt like having a CTO on the team. He understands both technology and business needs perfectly.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic">
              "{testimonials[current].text}"
            </p>
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              className="w-14 h-14 rounded-full mx-auto mb-3 object-cover border-2 border-border"
            />
            <h4 className="font-semibold text-foreground">{testimonials[current].name}</h4>
            <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
          </motion.div>

          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors text-foreground"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors text-foreground"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
