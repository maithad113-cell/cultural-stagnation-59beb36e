import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, Instagram, Youtube } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-primary/5">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">
              Have questions, ideas, or want to collaborate? We'd love to hear from you!
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass-card p-8 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Send Us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  <Send className="h-4 w-4 mr-2" />
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Connect With Us
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground font-sans">
                    We're here to support your cultural journey. Whether you have feedback, 
                    want to share your story, or explore collaboration opportunities, reach out!
                  </p>

                  <div className="pt-4 border-t border-primary/20">
                    <h3 className="font-display font-bold text-foreground mb-3">
                      Follow Our Journey
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                      <a
                        href="#"
                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                        aria-label="YouTube"
                      >
                        <Youtube className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                      <a
                        href="#"
                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                        aria-label="TikTok"
                      >
                        <svg className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="font-display font-bold text-foreground mb-4">
                  Collaboration Opportunities
                </h3>
                <ul className="space-y-3 text-muted-foreground font-sans text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cultural exchange programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Educational partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Artist features and showcases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Content contributions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
