
import { Award, Trophy, Medal } from "lucide-react";
import { Badge } from "./ui/badge";

const Achievements = () => {
  const achievements = [
    {
      title: "TechNova 2025",
      position: "2nd Place",
      description: "Secured 2nd place in a national-level Tech Analysis Competition organized by KLE Society's BCA Institutions" ,
      tech: ["Python", "Matplotlib", "Pandas"],
      icon: Trophy,
    },
    {
      title: "Odyssey 2025",
      position: "Winner",
      description: " Developed a “Smart Watts” project to monitor, calculate, and optimize electricity consumption for sustainable usage.",
      tech: ["React", "Express", "Node.js"],
      icon: Award,
    },
    {
      title: "Hacknova 2025",
      position: "1st Place",
      description: "A user-friendly platform offering study materials, aptitude tests, and mock interviews (AI/mentor-based) to help users prepare for placements and job interviews.",
      tech: ["Vite TypeScript", "React", "shadcn-ui","Tailwind CSS"],
      icon: Medal,
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Achievements</h2>
        <div className="w-16 h-1 bg-primary mb-10"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="glass p-6 border-t-2 border-primary transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <achievement.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{achievement.title}</h3>
                  <span className="text-primary font-semibold text-sm">{achievement.position}</span>
                </div>
              </div>
              
              <p className="text-foreground/70 mb-4">{achievement.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {achievement.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-background/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
