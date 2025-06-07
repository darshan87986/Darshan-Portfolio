
import { ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Smart Watts",
      description:
        "An electricity monitoring and optimization platform enabling users to track,analyze, and reduce energy consumption through real-time usage data, cost estimation, and interactive dashboards.",
      image: "https://media.istockphoto.com/id/655696888/photo/glowing-light-bulb-with-business-icons-ideas-creativity-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=GpYOmAtoy1-KnxCLKLI7wdq8NMXhi-4eCUBwTU6v3LY=",
      tags: ["React", "Next.js"],
      github: "https://github.com/darshan87986/SmartWatts",
      demo: "https://smart-watts-three.vercel.app/",
    },
    {
      title: "Cutural-Explorer",
      description:
        "A culture and heritage exploration platform enabling users to discover, contribute, and review verified local landmarks and traditions using interactive maps and media galleries.",
      image: "https://images.unsplash.com/photo-1726126747807-32c165b4f0bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q3VsdHVyYWwlMjBhbmQlMjBIZXJpdGFnZSUyMGV4cGxvcmVyfGVufDB8fDB8fHww",
      tags: ["React", "Next.js", "Tailwind CSS", "supabase"],
      github: "https://github.com/darshan87986/cultural-explorer",
      demo: "https://cultural-explorer.vercel.app/",
    },
    {
      title: "Elevate Career",
      description:
        "A user-friendly platform offering study materials, aptitude tests, and mock interviews (AI/mentor-based) to help users prepare for placements and job interviews.",
      image: "https://media.istockphoto.com/id/499924122/photo/e-learning-concept-with-a-teacher-presenting-online-education-program.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wmb58Lo3xBNvoUxKiXM96Ybb1Dhy6LUUVV_0PHS8vN0=",
      tags: ["Next.js", "React.js", "Tailwind CSS"],
      github: "https://github.com/darshan87986/elevate-your-career-path-64",
      demo: "https://elevate-your-career-path-64-9cc69mem0.vercel.app/",
    },
    {
      title: "E-commerce site",
      description:
        "Developed a responsive seller-side e-commerce dashboard to manage products, orders, and inventory.",
      image: "https://plus.unsplash.com/premium_photo-1683288662040-5ca51d0880b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEUlMjBjb21tZXJjZSUyMHNpdGUlMjA0a3xlbnwwfHwwfHx8MA%3D%3D",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/darshan87986/ecommProject",
      // demo: "https://weather-dashboard.demo.com",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Projects</h2>
        <div className="w-16 h-1 bg-primary mb-10"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card p-6 rounded-xl">
              <div className="aspect-video rounded-lg bg-secondary/50 mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-foreground/70">
            View more projects on my GitHub
          </p>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/darshan87986"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} />
              Visit GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
