import { useEffect, useState } from "react";
import { ArrowDown, Code, Terminal, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Welcome to my portfolio.";
  const [showArrow, setShowArrow] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);

  const icons = [Code, Terminal, Database];
  const IconComponent = icons[currentIcon];

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowArrow(true), 500);
      }
    }, 100);

    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 3000);

    return () => {
      clearInterval(typeInterval);
      clearInterval(iconInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 bg-background text-foreground">
      {/* Background blur circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-2xl" />

      <div className="w-full max-w-3xl z-10 p-6 rounded-xl bg-card shadow-lg">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-primary/20 p-3 rounded-full">
            <IconComponent className="text-primary w-6 h-6" />
          </div>
          <div>
            <p className="text-green-500 text-xs">$ whoami</p>
            <h1 className="text-4xl font-bold">
              Darshan <span className="text-primary">J</span>
            </h1>
            <p className="text-lg text-muted-foreground">Full Stack Developer</p>
          </div>
        </div>

        <div className="mb-6 border-l-2 border-primary/40 pl-4 py-2">
          <p className="text-green-500 text-xs mb-2">$ echo $MESSAGE</p>
          <p className="text-base md:text-lg">
            {typedText}
            <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse" />
          </p>
        </div>

        <p className="text-green-500 text-xs mb-2">$ ls projects/</p>
        <div className="grid grid-cols-3 gap-2 text-sm mb-6">
          <div className="bg-secondary/20 p-2 rounded">Smart-Watts</div>
          <div className="bg-secondary/20 p-2 rounded">Cultural-Explorer</div>
          <div className="bg-secondary/20 p-2 rounded">Elevate-Career</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>

      {showArrow && (
        <div className="absolute bottom-12 flex flex-col items-center text-sm text-muted-foreground">
          <span>Scroll Down</span>
          <ArrowDown className="mt-1 animate-bounce w-5 h-5" />
        </div>
      )}
    </section>
  );
};

export default Hero;
