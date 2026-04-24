import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Detail-Oriented",
      description: "Meticulous attention to detail in testing processes and quality assurance"
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Analytical Mindset",
      description: "Strong problem-solving skills with pattern recognition expertise"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Collaborative",
      description: "Proven experience working in Agile environments with cross-functional teams"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent" />,
      title: "Quality Focused",
      description: "Committed to delivering high-quality software through comprehensive testing"
    }
  ];

  const skills = [
    "Quality Assurance", "Manual Testing", "Automation Testing", "API Testing", 
    "Performance Testing", "Database Testing", "Agile Methodology", "Test Case Design",
    "Defect Management", "Exploratory Testing", "Selenium", "Azure DevOps",
    "Power Automate", "Copilot AI Agents", "Test Management Tools"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Software Test Engineer specialising in end-to-end testing of enterprise Legal Tech and 
            AI-powered applications — bridging QA, product, and legal stakeholders to deliver 
            business-critical releases with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Main Content */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-card hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">My Journey</h3>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Completed my B.Tech in Computer Science from AKTU and quickly took ownership of testing 
                  enterprise AI platforms at Clifford Chance Business Services — supporting AI adoption 
                  across the firm and ensuring quality across multiple legal tech applications.
                </p>
                <p>
                  I don't just find bugs — I lead test planning, build automation frameworks, and own 
                  releases end-to-end. My keyword-driven framework cut regression time by 30%, and I 
                  took full ownership of quality for several high-impact legal tech products from sprint 
                  planning to production.
                </p>
                <p>
                  From Selenium automation and AI output validation to API stress-testing with Postman 
                  and performance profiling with JMeter — I ensure enterprise-grade quality at every layer.
                </p>
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-8 bg-card hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-neutral-100 text-neutral-700 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card hover-lift hover-glow group transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-neutral-50 group-hover:bg-primary/10 transition-colors duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-card-foreground">{highlight.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{highlight.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <Card className="p-8 bg-card hover-lift">
          <h3 className="text-2xl font-bold mb-6 text-card-foreground">Education</h3>
          <div className="border-l-4 border-primary pl-6">
            <h4 className="text-xl font-semibold text-card-foreground">
              Bachelor of Technology in Computer Science Engineering
            </h4>
            <p className="text-primary font-medium mb-2">APJ Abdul Kalam Technical University (AKTU)</p>
            <p className="text-neutral-600">September 2021 - June 2025</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;