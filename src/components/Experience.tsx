import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "QA Engineer, Apprentice",
      company: "Clifford Chance Business Services Pvt Ltd",
      location: "Gurugram, India",
      duration: "March 2025 – Nov 2025",
      type: "Apprentice",
      achievements: [
        "Performed end-to-end quality assurance on the CC Assist AI platform, focusing on key modules such as document review, timesheets, and worksheets",
        "Executed both manual and automated tests to ensure functionality, UI consistency, and accuracy of AI-generated outputs",
        "Actively contributed in an Agile environment, collaborating with developers and logging issues in Rally",
        "Designed and executed regression and UI test scripts using Keyword Driven Framework",
        "Performed REST API testing for backend validations using Postman; validated status codes and payloads",
        "Ensured cross-browser UI consistency and layout integrity using Chrome DevTools",
        "Ran performance and load tests on critical features using JMeter, identifying system bottlenecks"
      ],
      skills: ["Keyword Driven Testing", "API Testing", "Performance Testing", "Agile", "Rally", "JMeter", "Postman"]
    },
    {
      title: "QA Engineer, Intern",
      company: "Cuvette Tech",
      location: "Remote",
      duration: "June 2024 – Dec 2025",
      type: "Internship",
      achievements: [
        "Gained hands-on experience in testing web applications built with HTML, CSS, JavaScript, and React.js",
        "Developed a strong understanding of web design principles and responsive layouts",
        "Designed and executed detailed manual test cases for functional, UI, and negative testing",
        "Validated user flows, edge cases, and form validations",
        "Performed exploratory testing to uncover hidden bugs and usability issues",
        "Verified compliance with UI/UX standards and design guidelines"
      ],
      skills: ["Manual Testing", "React.js Testing", "UI/UX Testing", "Exploratory Testing", "Web Technologies"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Professional Experience</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            My journey in quality assurance, from internships to professional roles, 
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
                <Badge 
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 self-start"
                >
                  {exp.type}
                </Badge>
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