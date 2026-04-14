import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.open(`mailto:udayroytech@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Contact</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">Have a project in mind?</h3>
            <p className="text-muted-foreground">
              I'd love to hear about your project. Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">udayroytech@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-medium text-foreground">+91 9142620172</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Narpatganj, Araria, Bihar, India</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919142620172"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: "#25D366", color: "white" }}
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-6 space-y-5"
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
