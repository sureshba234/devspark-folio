import { 
  Code, 
  Database, 
  Globe, 
  BarChart3, 
  Brain, 
  Server,
  Palette,
  GitBranch 
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      skills: [
        { name: "Python", level: 90 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "TensorFlow", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "VS Code", level: 95 },
        { name: "Jupyter", level: 85 },
        { name: "Linux", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              
              return (
                <div
                  key={categoryIndex}
                  className="card-gradient p-8 rounded-2xl card-shadow hover-scale transition-smooth animate-fade-in"
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/20 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary to-accent-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;