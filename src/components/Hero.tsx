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
          {/* Professional Avatar/Bitmoji */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-8 mt-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-primary p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-neutral-50/10 backdrop-blur-sm flex items-center justify-center text-4xl sm:text-6xl font-bold text-white">
                👨‍💻
              </div>
            </div>
            <div className="absolute -inset-2 bg-gradient-primary rounded-full blur-xl opacity-20 animate-pulse-glow"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight relative px-4">
            <span className="block relative">
              <span className="relative z-10 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                Vaibhav
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent blur-sm opacity-25 scale-105">
                Vaibhav
              </span>
            </span>
            <span className="block relative mt-1 sm:mt-2">
              <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">
                Pratap Singh
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent blur-sm opacity-25 scale-105">
                Pratap Singh
              </span>
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up-delay">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl sm:text-4xl">🔍</span>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90">
              QA Engineer & Software Testing Specialist
            </p>
            <span className="text-3xl sm:text-4xl">⚡</span>
          </div>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
            Detail-oriented QA professional with expertise in manual and automated testing, 
            API testing, and performance optimization. Passionate about delivering high-quality software solutions.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="animate-fade-in-up-delay flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base text-white/90 px-4">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="break-all sm:break-normal">+91-8770067658</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span className="break-all sm:break-normal">vaibhavsinghofficial21@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Gurugram, India</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="animate-fade-in-up-delay flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="shadow-glow hover:shadow-electric-glow transition-all duration-300 hover:scale-105 glow-border w-full sm:w-auto"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-cyan-300 hover:border-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-blue-glow backdrop-blur-sm w-full sm:w-auto"
            onClick={() => window.open('https://www.linkedin.com/in/vaibhav-pratap-singh-370305239', '_blank')}
          >
            <Linkedin className="w-5 h-5" />
            View LinkedIn
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="animate-fade-in-up-delay flex justify-center gap-6 mb-12">
          <a 
            href="https://www.linkedin.com/in/vaibhav-pratap-singh-370305239" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-electric-glow glow-border"
            aria-label="Connect with Vaibhav on LinkedIn"
          >
            <Linkedin className="w-7 h-7 text-cyan-300" aria-hidden="true" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce-gentle">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-cyan-300 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-blue-glow"
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