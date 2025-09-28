import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      value: "+91-8770067658",
      href: "tel:+918770067658"
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email",
      value: "vaibhavsinghofficial21@gmail.com",
      href: "mailto:vaibhavsinghofficial21@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      value: "Gurugram, India",
      href: "#"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-accent" />,
      title: "LinkedIn",
      value: "linkedin.com/in/vaibhavpratapsingh",
      href: "https://linkedin.com/in/vaibhavpratapsingh"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Connect</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ready to discuss your next project or explore opportunities? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-card hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Get In Touch</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Whether you're looking for a dedicated QA professional, need consultation on testing strategies, 
                or want to collaborate on exciting projects, I'm always open to new opportunities and challenges.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4 p-4 rounded-lg bg-neutral-50 hover:bg-primary/5 transition-colors duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-white group-hover:bg-primary/10 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </p>
                      <p className="text-neutral-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Message */}
            <Card className="p-8 bg-card hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold text-card-foreground">Quick Message</h4>
              </div>
              <p className="text-neutral-600 mb-6">
                Prefer a more direct approach? You can reach out to me directly via:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  className="flex-1"
                  onClick={() => window.location.href = 'mailto:vaibhavsinghofficial21@gmail.com'}
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.location.href = 'tel:+918770067658'}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card hover-lift">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full shadow-glow"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;