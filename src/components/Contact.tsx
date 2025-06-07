"use client";

import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);
  formData.append("_captcha", "false");
  formData.append("_template", "table");

  try {
    const res = await fetch("https://formsubmit.co/ajax/16a7f94e5f1744576e336f4ae45a473b", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const result = await res.json();

    if (res.ok && result.success === "true") {
       toast({
      title: "Network Error",
      description: "Could not connect to the server.",
      variant: "destructive",
    });
      e.currentTarget.reset();
    } else {
      toast({
        title: "Failed to send message.",
        description: result.message || "Please try again later.",
        variant: "destructive",
      });
    }
  } catch (error) {
   
  } finally {
    setIsSubmitting(false);
    toast({ 
      title: "Message Sent!", 
      description: "Thanks for contacting me. I'll reply soon.",
     });
  }
};


  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Contact</h2>
        <div className="w-16 h-1 bg-primary mb-10"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-foreground/70 mb-6">
              I'm currently open to new opportunities and collaborations.
              Feel free to reach out if you have a question or just want to say hi!
            </p>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-primary" />
                <a
                  href="mailto:darshanjarale18@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  darshanjarale18@gmail.com
                </a>
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/darshan87986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-2 hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
                <a
                  href="https://linkedin.com/in/darshan-jarale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-2 hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://x.com/DarshanJarale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-2 hover:bg-white/10 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter />
                </a>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-background/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-background/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-background/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
