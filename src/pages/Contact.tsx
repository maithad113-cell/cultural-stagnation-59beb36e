import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, Instagram, Youtube, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
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

                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-3 text-foreground">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:maithad113@gmail.com" className="hover:text-primary transition-colors">
                        maithad113@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:0115633444" className="hover:text-primary transition-colors">
                        011 563 3444
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-primary/20">
                    <h3 className="font-display font-bold text-foreground mb-3">
                      Follow Our Journey
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.youtube.com/channel/UCen77l_b9QsN_4P0QdESC3Q"
                        target="_blank"
                        rel="noopener"
                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                        aria-label="YouTube"
                      >
                        <Youtube className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      More social channels coming soon!
                    </p>
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
