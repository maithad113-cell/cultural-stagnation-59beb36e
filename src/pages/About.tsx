import Navigation from "@/components/Navigation";
import { Users, Heart, Globe, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-primary/5">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CulturalConnect</span>
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">
              Connecting cultures through digital creativity and celebrating the beauty of our diverse world
            </p>
          </div>

          {/* Mission Section */}
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-2xl glow flex-shrink-0">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed text-lg">
                    CulturalConnect was born from a vision to bridge communities and celebrate the rich tapestry of 
                    global traditions. We believe that understanding and appreciating cultural diversity is the 
                    foundation of a more united and peaceful world. Through technology and creativity, we bring 
                    together youth from all backgrounds to explore, learn, and celebrate what makes each culture unique.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-accent to-primary rounded-2xl glow flex-shrink-0">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed text-lg">
                    We envision a world where cultural barriers are replaced with bridges of understanding. Where 
                    traditional wisdom meets digital innovation. Where every young person feels empowered to share 
                    their heritage and learn from others. Through art, music, language, and stories, we create 
                    spaces for authentic cultural exchange and meaningful connections.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-2xl glow flex-shrink-0">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">What We Do</h2>
                  <div className="space-y-4 text-muted-foreground font-sans leading-relaxed text-lg">
                    <p>
                      CulturalConnect is a digital platform designed to promote cultural awareness, creativity, 
                      and unity among youth worldwide. We showcase:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Traditional and contemporary art forms from diverse cultures</li>
                      <li>Musical heritage and modern cultural expressions</li>
                      <li>Festivals and celebrations that bring communities together</li>
                      <li>Language learning opportunities with authentic pronunciations</li>
                      <li>Visual stories through our community gallery</li>
                      <li>Inspiring articles and personal cultural narratives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-accent to-primary rounded-2xl glow flex-shrink-0">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">Join Our Movement</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed text-lg">
                    CulturalConnect is more than a website—it's a movement. We invite students, educators, artists, 
                    and cultural enthusiasts to join us in celebrating the beauty of our diverse world. Whether 
                    you're sharing your heritage, learning about others, or simply exploring, you're part of 
                    something bigger: a global community committed to unity through understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Inclusivity</h3>
              <p className="text-muted-foreground font-sans text-sm">
                Every culture, tradition, and voice matters in our global tapestry
              </p>
            </div>
            <div className="glass-card p-6 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground font-sans text-sm">
                Blending traditional wisdom with modern digital creativity
              </p>
            </div>
            <div className="glass-card p-6 text-center animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Unity</h3>
              <p className="text-muted-foreground font-sans text-sm">
                Building bridges of understanding across all communities
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
