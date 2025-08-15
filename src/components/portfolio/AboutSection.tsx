const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Computer Science student with a deep fascination for both 
                  web development and data science. My journey began with curiosity about 
                  how websites work, which led me to master full-stack development.
                </p>
                <p>
                  As I delved deeper into technology, I discovered the power of data and 
                  machine learning. This combination of web development skills and data 
                  science knowledge allows me to create intelligent, data-driven applications 
                  that solve real-world problems.
                </p>
                <p>
                  I believe in the power of technology to transform ideas into reality, 
                  and I'm constantly learning new frameworks, algorithms, and best practices 
                  to stay at the forefront of innovation.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="card-gradient p-8 rounded-2xl card-shadow">
                <h3 className="text-xl font-semibold mb-6 text-primary">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Computer Science Student</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-secondary rounded-full"></div>
                    <span>Full-Stack Web Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <span>Data Science Enthusiast</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Machine Learning Explorer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-secondary rounded-full"></div>
                    <span>Problem Solver</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;