import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Vaibhav</span>
            <span className="block gradient-text bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Pratap Singh
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up-delay">
          <p className="text-xl md:text-2xl font-medium mb-4 text-white/90">
            QA Engineer & Software Testing Specialist
          </p>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Detail-oriented QA professional with expertise in manual and automated testing, 
            API testing, and performance optimization. Passionate about delivering high-quality software solutions.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="animate-fade-in-up-delay flex flex-wrap justify-center gap-6 mb-8 text-white/90">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>+91-8770067658</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>vaibhavsinghofficial21@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Gurugram, India</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="animate-fade-in-up-delay flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="shadow-glow"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
            onClick={() => window.open('https://linkedin.com/in/vaibhavpratapsingh', '_blank')}
          >
            <Linkedin className="w-5 h-5" />
            View LinkedIn
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="animate-fade-in-up-delay flex justify-center gap-6 mb-12">
          <a 
            href="https://linkedin.com/in/vaibhavpratapsingh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Connect with Vaibhav on LinkedIn"
          >
            <Linkedin className="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce-gentle">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-white hover:bg-white/10"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-6 h-6" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;