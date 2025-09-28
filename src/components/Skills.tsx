import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  TestTube, 
  Zap, 
  BarChart3, 
  Settings,
  Award,
  Trophy
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Testing Methodologies",
      icon: <TestTube className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Manual Testing", level: 95 },
        { name: "Automated Testing", level: 85 },
        { name: "API Testing", level: 90 },
        { name: "Performance Testing", level: 80 },
        { name: "Database Testing", level: 75 },
        { name: "Regression Testing", level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6 text-accent" />,
      skills: [
        { name: "Postman", level: 90 },
        { name: "JMeter", level: 80 },
        { name: "Azure DevOps", level: 85 },
        { name: "Rally", level: 75 },
        { name: "Chrome DevTools", level: 85 },
        { name: "SQL SSMS", level: 80 }
      ]
    },
    {
      title: "Technical Skills",
      icon: <Code2 className="w-6 h-6 text-primary" />,
      skills: [
        { name: "HTML & CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Power BI", level: 70 },
        { name: "Visual Studio", level: 75 },
        { name: "Lighthouse", level: 80 }
      ]
    },
    {
      title: "Analytical Abilities",
      icon: <BarChart3 className="w-6 h-6 text-accent" />,
      skills: [
        { name: "Risk Assessment", level: 90 },
        { name: "Data Analysis", level: 85 },
        { name: "Problem Solving", level: 95 },
        { name: "Pattern Recognition", level: 88 },
        { name: "Attention to Detail", level: 98 },
        { name: "Quality Assurance", level: 95 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Google Data Analytics Certificate",
      issuer: "Coursera",
      year: "2024",
      icon: <Award className="w-5 h-5 text-primary" />,
      description: "Completed 8 practical case studies involving SQL, data cleaning, dashboards, and presentations"
    },
    {
      title: "Code Gladiator Semi-Finalist",
      issuer: "TechGig",
      year: "2024",
      icon: <Trophy className="w-5 h-5 text-accent" />,
      description: "Selected as Semi-Finalist in India's largest coding competition, showcasing strong problem-solving skills"
    }
  ];

  const frameworks = [
    "Agile/Scrum", "Keyword Driven Framework", "DevOps", "CI/CD", 
    "Test-Driven Development", "Behavior-Driven Development"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive skill set in quality assurance, testing methodologies, 
            and modern development tools with proven track record of excellence.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-8 bg-gradient-card hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-neutral-50">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-card-foreground">{skill.name}</span>
                      <span className="text-sm text-neutral-600">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Frameworks & Methodologies */}
        <Card className="p-8 bg-card hover-lift mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-neutral-50">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground">Frameworks & Methodologies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {frameworks.map((framework, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {framework}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Certifications & Awards */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-card-foreground">
            Certifications & Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover-lift hover-glow group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neutral-50 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-primary font-medium mb-2">{cert.issuer} • {cert.year}</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;