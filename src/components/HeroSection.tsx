import { motion } from "framer-motion";
import { ArrowRight, Download, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid" />

      {/* Glow effects */}
      <div className="glow-dot w-96 h-96 bg-primary top-20 -left-20 animate-pulse-glow" />
      <div className="glow-dot w-80 h-80 bg-accent bottom-20 right-10 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-xs font-medium text-muted-foreground mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for freelance work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
            >
              Building Scalable{" "}
              <span className="gradient-text">Modern SaaS</span>{" "}
              Applications
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              Full Stack Developer crafting production-grade web &amp; mobile applications 
              with cutting-edge technologies. Turning complex ideas into elegant, 
              scalable digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Hire Me <ArrowRight size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border border-border hover:bg-secondary transition-colors text-foreground"
              >
                View Projects
              </a>
              <a
                href="/Uday_Roy_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Download size={16} /> Resume
              </a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" />
              <img
                src="src/components/uday5.jpeg"
                alt="Uday Roy"
                className="relative w-full h-full rounded-full object-cover border-2 border-border"
              />
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 glass-card rounded-xl px-3 py-2 text-xs font-semibold shadow-lg"
              >
                ⚡ Full Stack
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-12 glass-card rounded-xl px-3 py-2 text-xs font-semibold shadow-lg"
              >
                🚀 SaaS Builder
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919142620172"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-background" style={{ color: "white" }} />
      </a>
    </section>
  );
};

export default HeroSection;
