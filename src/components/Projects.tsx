import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Cpu, GraduationCap, CheckCircle } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CC Assist",
      subtitle: "AI-driven Platform",
      icon: <Cpu className="w-8 h-8 text-primary" />,
      description: "Contributed to the quality assurance of an AI-driven platform focused on document analysis, timesheet automation and other features. Validated feature functionality and AI behavior through manual test execution and automation scripts.",
      achievements: [
        "Validated AI model accuracy and system performance across multiple deployments",
        "Provided detailed feedback on model behavior to support continuous improvement",
        "Ensured end-to-end functionality of document analysis features",
        "Implemented comprehensive testing strategies for timesheet automation"
      ],
      technologies: ["AI Testing", "Document Analysis", "Automation", "Performance Testing", "Model Validation"],
      category: "AI Platform",
      gradient: "from-primary to-accent"
    },
    {
      title: "E-LearnPro",
      subtitle: "Online Learning Management System (LMS)",
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      description: "Worked as a QA Engineer on E-LearnPro, a web-based Learning Management System used by universities to manage courses, assessments, and student data. Ensured end-to-end quality through manual, automation, and API testing.",
      achievements: [
        "Verified user registration and authentication workflows",
        "Tested course creation and content upload functionality",
        "Validated quiz and assessment systems with grading mechanisms",
        "Ensured performance tracking and analytics accuracy",
        "Conducted comprehensive API testing for backend services"
      ],
      technologies: ["LMS Testing", "API Testing", "User Management", "Assessment Systems", "Performance Analytics"],
      category: "Educational Platform",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Key projects that showcase my expertise in quality assurance across diverse platforms 
            and technologies, from AI systems to educational platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-card hover-lift hover-glow transition-all duration-500"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-neutral-50 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-neutral-600 font-medium">{project.subtitle}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-card-foreground">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-neutral-600 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-card-foreground">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="border-neutral-200 text-neutral-600 hover:border-primary hover:text-primary transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            className="shadow-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Discuss Your Next Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;