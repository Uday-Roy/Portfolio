import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    price: "₹5,000 – ₹15,000",
    desc: "Perfect for personal brands & small businesses",
    features: ["Responsive Design", "SEO Optimized", "Contact Form", "5-7 Day Delivery", "1 Revision Round"],
    popular: false,
  },
  {
    name: "Business Website",
    price: "₹15,000 – ₹50,000",
    desc: "Multi-page websites for growing businesses",
    features: ["Up to 10 Pages", "CMS Integration", "SEO & Analytics", "Admin Panel", "3 Revision Rounds", "3 Months Support"],
    popular: true,
  },
  {
    name: "Full Stack Web App",
    price: "₹50,000 – ₹2,00,000+",
    desc: "Custom SaaS platforms & complex web applications",
    features: ["Custom Architecture", "User Auth & Roles", "Payment Integration", "API Development", "Database Design", "Dedicated Support"],
    popular: false,
  },
  {
    name: "Mobile App",
    price: "₹80,000 – ₹3,00,000+",
    desc: "Cross-platform apps for iOS & Android",
    features: ["React Native / Flutter", "Push Notifications", "Offline Support", "App Store Deployment", "Backend API", "6 Months Support"],
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Affordable, high-quality development tailored for the Indian market.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-xl p-6 flex flex-col ${
                p.popular
                  ? "border-2 border-primary glass-card shadow-lg"
                  : "glass-card"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
              <p className="text-2xl font-bold gradient-text mt-2">{p.price}</p>
              <p className="text-sm text-muted-foreground mt-2 mb-6">{p.desc}</p>
              <ul className="space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 block text-center py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:bg-secondary text-foreground"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
