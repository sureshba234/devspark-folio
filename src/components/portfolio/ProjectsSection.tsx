import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, Globe, BarChart3 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application built with React, Node.js, and MongoDB. Features user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      category: "Full-Stack",
      icon: Globe,
      demoUrl: "#",
      githubUrl: "#",
      image: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "Stock Price Predictor",
      description: "Machine learning model using LSTM networks to predict stock prices. Built with Python, TensorFlow, and deployed with Flask API for real-time predictions.",
      technologies: ["Python", "TensorFlow", "Flask", "Pandas", "NumPy"],
      category: "Machine Learning",
      icon: BarChart3,
      demoUrl: "#",
      githubUrl: "#",
      image: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing large datasets using Python, Plotly, and Streamlit. Features real-time data processing and dynamic chart generation.",
      technologies: ["Python", "Plotly", "Streamlit", "Pandas", "PostgreSQL"],
      category: "Data Science",
      icon: Database,
      demoUrl: "#",
      githubUrl: "#",
      image: "bg-gradient-to-br from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            machine learning, and data science.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              
              return (
                <div
                  key={index}
                  className="card-gradient rounded-2xl overflow-hidden card-shadow hover-scale transition-smooth group animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Project image/icon area */}
                  <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth" />
                    <IconComponent className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-smooth" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
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

export default ProjectsSection;