import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Cpu, GraduationCap, CheckCircle } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CC Assist",
      subtitle: "AI-driven Legal Platform",
      icon: <Cpu className="w-8 h-8 text-primary" />,
      description: "Created and managed detailed test cases and scenarios in Azure Test Plans based on user stories to validate document intelligence, timesheet automation, and workflow features of an AI-driven legal platform.",
      achievements: [
        "Performed manual, exploratory, and Selenium-driven automated testing to evaluate system behavior and data consistency",
        "Validated AI-generated outputs for accuracy across document review and legal operations",
        "Provided detailed defect reports and feedback to improve product reliability across releases",
        "Executed performance testing with JMeter to identify bottlenecks in critical workflows"
      ],
      technologies: ["Azure Test Plans", "Selenium", "Postman", "JMeter", "Copilot AI Agents", "SQL"],
      category: "AI Platform",
      gradient: "from-primary to-accent"
    },
    {
      title: "E-LearnPro",
      subtitle: "Online Learning Management System (LMS)",
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      description: "Worked as a QA Engineer on E-LearnPro, a web-based Learning Management System used by universities to manage courses, assessments, and student data. Ensured end-to-end quality through manual, automation, and API testing.",
      achievements: [
        "Developed structured test plans and test cases in TestRail covering end-to-end QA processes",
        "Validated user management, course creation, content delivery, and grading systems",
        "Performed API testing, keyword-driven automation, and manual verification",
        "Reproduced and documented defects in bug tracking software for efficient resolution"
      ],
      technologies: ["TestRail", "API Testing", "Keyword Driven Automation", "Manual Testing", "Bug Tracking"],
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