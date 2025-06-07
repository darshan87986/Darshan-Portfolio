
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gradient">About Me</h2>
        <div className="w-16 h-1 bg-primary mb-10"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80">
              Hello! I'm a passionate full-stack developer with a strong foundation in modern web technologies.
              I enjoy building elegant, efficient applications that solve real-world problems.
            </p>
            
            <p className="text-lg text-foreground/80">
              My journey in software development started with a curiosity about how things work on the web,
              which evolved into a deep appreciation for clean code, thoughtful architecture, and user-centered design.
            </p>
            
            <p className="text-lg text-foreground/80">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="glass p-6">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Bachelor of Computer Applications</h4>
                  <p className="text-sm text-foreground/60">KLE Society's College • 2023 - 2026</p>
                  <p className="text-sm text-foreground/80 mt-1">
                    Focused on software engineering and web technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
