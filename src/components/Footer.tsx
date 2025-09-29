import { Heart, ArrowUp, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/vaibhav-pratap-singh-370305239",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:vaibhavsinghofficial21@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: "tel:+918770067658",
      label: "Phone"
    }
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center text-center md:text-left">{/* Brand */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-2">
              Vaibhav Pratap Singh
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-2 text-neutral-400">
              <span className="text-lg">🔍</span>
              <span className="text-sm sm:text-base">QA Engineer & Software Testing Specialist</span>
              <span className="text-lg">⚡</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center order-1 md:order-2">
            <h4 className="text-lg font-semibold mb-4 gradient-text">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-3 py-2 rounded-full bg-neutral-100/10 border border-primary/30 text-white/90 hover:bg-primary/20 hover:text-white hover:border-primary/50 transition-all duration-300 hover:shadow-blue-glow hover:scale-105 backdrop-blur-sm text-xs sm:text-sm"
                  aria-label={`Navigate to ${link} section`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right order-3">
            <h4 className="text-lg font-semibold mb-4 gradient-text">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={social.label}
                  className="p-3 rounded-full bg-neutral-100/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-blue-glow transform backdrop-blur-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">{/* Footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400 text-center md:text-left text-sm sm:text-base">
              © {currentYear} Vaibhav Pratap Singh. Made with{" "}
              <Heart className="w-4 h-4 inline text-red-500" /> and passion for quality.
            </p>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-neutral-400 hover:text-white hover:bg-neutral-800/50 border border-primary/30 hover:border-primary/50 hover:shadow-blue-glow transition-all duration-300"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline ml-2">Back to top</span>
              <span className="sm:hidden ml-2">Top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;