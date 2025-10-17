import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Palette, Music, Calendar, Languages, Globe, Heart } from "lucide-react";

const KnowMore = () => {
  const sections = [
    {
      icon: Palette,
      title: "Art & Creativity",
      description: "Explore traditional and contemporary art forms that express cultural identity and heritage through visual masterpieces.",
      link: "/art-music",
      gradient: "from-primary to-accent",
    },
    {
      icon: Music,
      title: "Musical Heritage",
      description: "Discover the rhythms, melodies, and instruments that have shaped cultural expression across generations.",
      link: "/art-music",
      gradient: "from-accent to-primary",
    },
    {
      icon: Calendar,
      title: "Festivals & Celebrations",
      description: "Experience the vibrant festivals and ceremonies that bring communities together in joyous celebration.",
      link: "/festivals",
      gradient: "from-primary to-accent",
    },
    {
      icon: Languages,
      title: "Language Diversity",
      description: "Learn greetings, proverbs, and phrases from around the world, connecting through the power of words.",
      link: "/language-hub",
      gradient: "from-accent to-primary",
    },
    {
      icon: Globe,
      title: "Global Traditions",
      description: "Understand the customs, rituals, and practices that define cultural identity across continents.",
      link: "/festivals",
      gradient: "from-primary to-accent",
    },
    {
      icon: Heart,
      title: "Cultural Unity",
      description: "See how diverse cultures share common values of community, respect, and celebration of life.",
      link: "/about",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-primary/5">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Discover <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Cultural Richness</span>
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">
              Dive deeper into the traditions, art forms, and languages that make our world beautifully diverse
            </p>
          </div>

          {/* Content Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <Link
                key={section.title}
                to={section.link}
                className="glass-card p-8 group hover:shadow-float transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 bg-gradient-to-br ${section.gradient} rounded-2xl glow flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto mt-16 glass-card p-12 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Ready to Explore?
            </h2>
            <p className="text-muted-foreground font-sans mb-8">
              Join us on a journey of cultural discovery and celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gallery" className="inline-block">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg shadow-glow hover:shadow-float transition-all font-sans font-semibold">
                  View Gallery
                </button>
              </Link>
              <Link to="/contact" className="inline-block">
                <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all font-sans font-semibold">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KnowMore;
