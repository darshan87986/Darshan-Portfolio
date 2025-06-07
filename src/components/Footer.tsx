
import { Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-foreground/60 mb-4 md:mb-0">
          © {new Date().getFullYear()} Darshan Jarale. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={scrollToTop}
            className="glass p-2 hover:bg-white/10 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <span className="flex items-center gap-2">
              <Github size={18} />
              Built with ReactJS & TailwindCSS
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
