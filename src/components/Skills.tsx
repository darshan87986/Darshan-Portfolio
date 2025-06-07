
import { Badge } from "./ui/badge";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "mongoDB"],
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "GitHub", "Postman", "VS Code", "MongoDB Compass"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Skills</h2>
        <div className="w-16 h-1 bg-primary mb-10"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="glass p-6">
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Next.js",
              "Tailwind CSS",
              "Git",
              "AWS",
              "Python"
            ].map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
