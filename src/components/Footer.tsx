import { Github, Linkedin, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

const socials = [
  { icon: MessageCircle, href: "https://wa.me/919142620172", label: "WhatsApp" },
  { icon: Github, href: "https://github.com/udayroy", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/udayroy", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/udayroy", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/udayroy", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/udayroy", label: "X (Twitter)" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-bold gradient-text">Uday Roy</h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Where Ideas Become Intelligent Software. Building scalable, modern applications 
              that drive real business results.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>udayroytech@gmail.com</li>
              <li>+91 9142620172</li>
              <li>Narpatganj, Araria</li>
              <li>Bihar, India — 854335</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Uday Roy. All rights reserved.</p>
          <p className="italic">Where Ideas Become Intelligent Software</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
