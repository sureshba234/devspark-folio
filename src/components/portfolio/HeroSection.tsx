import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Full-Stack Developer</span>
              <br />
              <span className="text-foreground">& Data Scientist</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Computer Science student passionate about building innovative web applications 
              and extracting insights from data. Combining the power of modern web technologies 
              with machine learning to create intelligent solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow transition-smooth"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              
              <Button
                onClick={scrollToAbout}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth hover-scale"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth hover-scale"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-bounce-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-20 animate-pulse-glow" />
              <img
                src={heroPortrait}
                alt="Professional portrait"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 card-shadow hover-scale transition-smooth"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;