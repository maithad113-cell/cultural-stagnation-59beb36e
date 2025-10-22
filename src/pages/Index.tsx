import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FloatingLanterns from "@/components/FloatingLanterns";
import CulturalCard from "@/components/CulturalCard";
import { Palette, Music, Calendar, Languages, Image, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-cultural-unity.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
      } else {
        setIsLoading(false);
      }
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-primary/5 pattern-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-primary/5 pattern-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Cultural Unity" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        <FloatingLanterns />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Connecting Cultures
              </span>
              <br />
              <span className="text-foreground">Through Unity</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-display italic text-muted-foreground max-w-2xl mx-auto">
              "In diversity, there is beauty and strength. Together, we celebrate the richness of our traditions."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/know-more">
                <Button size="lg" className="text-lg px-8 py-6 shadow-glow hover:shadow-float transition-all">
                  Explore Cultures
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary hover:bg-primary/10">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Discover Our World
            </h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Explore the richness of global traditions, art, music, and languages that unite us all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link to="/art-music">
              <CulturalCard
                icon={Palette}
                title="Art & Music"
                description="Discover traditional and modern art forms, cultural instruments, and melodious expressions from around the world"
                delay="0.1s"
              />
            </Link>
            
            <Link to="/festivals">
              <CulturalCard
                icon={Calendar}
                title="Festivals"
                description="Celebrate the vibrant festivals that bring communities together across continents and cultures"
                delay="0.2s"
              />
            </Link>
            
            <Link to="/language-hub">
              <CulturalCard
                icon={Languages}
                title="Language Hub"
                description="Learn greetings, proverbs, and phrases from diverse languages, connecting hearts through words"
                delay="0.3s"
              />
            </Link>
            
            <Link to="/gallery">
              <CulturalCard
                icon={Image}
                title="Gallery"
                description="Immerse yourself in stunning visual stories celebrating cultural beauty and diversity"
                delay="0.4s"
              />
            </Link>
            
            <Link to="/blog">
              <CulturalCard
                icon={BookOpen}
                title="Blog & Stories"
                description="Read inspiring articles and personal reflections on cultural identity, unity, and creativity"
                delay="0.5s"
              />
            </Link>
            
            <Link to="/about">
              <CulturalCard
                icon={Music}
                title="Our Mission"
                description="Learn about our vision to connect youth through digital creativity and cultural awareness"
                delay="0.6s"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Join Our Cultural Journey
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-8">
              Be part of a global movement celebrating diversity, creativity, and unity
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-10 py-6">
                Connect With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
