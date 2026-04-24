import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Test Engineer",
      company: "Clifford Chance Business Services Pvt Ltd",
      location: "Gurugram / Delhi, India",
      duration: "Mar 2025 – Present",
      type: "Full-time",
      achievements: [
        "Performed end-to-end quality assurance using modern testing methodologies for enterprise AI platforms, validating complex workflows across document review, timesheets, and legal operations with Azure DevOps and Copilot AI Agents",
        "Analyzed user stories and requirements to design structured test cases, scenarios, and test plans in Azure Test Plans and Azure DevOps, ensuring comprehensive feature coverage",
        "Executed manual, automated, API, and database testing with Selenium, Postman, and SQL scripts to validate system behavior, data integrity, and AI-generated outputs",
        "Designed and executed regression and UI automation scripts using a Keyword Driven Framework, improving repeatability and test efficiency",
        "Performed REST API testing using Postman to validate request/response payloads, status codes, and backend integrations",
        "Identified, reproduced, and documented defects with clear, detailed steps in Azure Test Plans and Rally",
        "Conducted exploratory testing to assess product robustness, uncover edge cases, and improve system reliability",
        "Executed performance and load testing using JMeter, identifying bottlenecks and improving system scalability",
        "Collaborated with developers, QA engineers, and stakeholders in Agile sprints using Azure DevOps to prioritize testing based on business risk",
        "Owned testing for multiple applications and coordinated releases using Azure Test Plans and Microsoft Azure DevOps"
      ],
      skills: ["Selenium", "Azure DevOps", "Keyword Driven Framework", "API Testing", "Performance Testing", "Agile", "JMeter", "Postman", "Copilot AI Agents"]
    },
    {
      title: "QA Engineer",
      company: "Cuvette Tech",
      location: "Remote",
      duration: "Jun 2024 – Dec 2024",
      type: "",
      achievements: [
        "Performed quality assurance testing on web applications built with HTML, CSS, JavaScript, and React.js, applying modern testing methodologies",
        "Designed and executed detailed manual test cases covering functional, UI, negative, and edge-case scenarios, uncovering critical defects",
        "Performed exploratory testing to identify usability issues and hidden defects, improving product quality",
        "Validated user workflows, form validations, and system behaviour against requirements and design standards",
        "Collaborated in a startup environment, adopting Agile testing methodologies to accelerate testing cycles"
      ],
      skills: ["Manual Testing", "React.js Testing", "UI/UX Testing", "Exploratory Testing", "Agile"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Professional Experience</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            My journey in quality assurance across enterprise Legal Tech and AI-powered applications, 
            building expertise in modern testing methodologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 bg-gradient-card hover-lift group">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Building className="w-5 h-5" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-neutral-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                {exp.type && (
                  <Badge 
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 self-start"
                  >
                    {exp.type}
                  </Badge>
                )}
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4 text-card-foreground">Key Achievements</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge 
                      key={idx}
                      variant="outline"
                      className="border-neutral-200 text-neutral-700 hover:border-primary hover:text-primary transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;