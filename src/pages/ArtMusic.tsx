import Navigation from "@/components/Navigation";
import { Palette, Music, Guitar, Mic2, Brush, Camera } from "lucide-react";

const ArtMusic = () => {
  const artForms = [
    {
      icon: Palette,
      title: "Traditional Art",
      description: "Explore centuries-old art techniques passed down through generations, from African textiles to Asian calligraphy.",
      color: "from-primary to-accent",
    },
    {
      icon: Brush,
      title: "Modern Expression",
      description: "Contemporary artists blending cultural heritage with modern mediums and digital creativity.",
      color: "from-accent to-primary",
    },
    {
      icon: Camera,
      title: "Visual Stories",
      description: "Photography and visual arts capturing the essence of cultural celebrations and daily life.",
      color: "from-primary to-accent",
    },
  ];

  const musicForms = [
    {
      icon: Music,
      title: "Traditional Rhythms",
      description: "Discover the drums, flutes, and stringed instruments that carry ancestral melodies.",
      color: "from-accent to-primary",
    },
    {
      icon: Guitar,
      title: "Cultural Instruments",
      description: "Learn about unique instruments like the djembe, sitar, kora, and their cultural significance.",
      color: "from-primary to-accent",
    },
    {
      icon: Mic2,
      title: "Contemporary Fusion",
      description: "Modern musicians blending traditional sounds with hip-hop, jazz, and global beats.",
      color: "from-accent to-primary",
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
              Art & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Music</span>
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">
              Where creativity meets culture - celebrating artistic expression across the globe
            </p>
          </div>

          {/* Art Section */}
          <section className="max-w-6xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-foreground mb-8 text-center animate-fade-in-up">
              Visual Arts
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {artForms.map((art, index) => (
                <div
                  key={art.title}
                  className="glass-card p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-4 bg-gradient-to-br ${art.color} rounded-2xl glow mb-4 inline-block`}>
                    <art.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {art.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {art.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Music Section */}
          <section className="max-w-6xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-foreground mb-8 text-center animate-fade-in-up">
              Musical Heritage
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {musicForms.map((music, index) => (
                <div
                  key={music.title}
                  className="glass-card p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className={`p-4 bg-gradient-to-br ${music.color} rounded-2xl glow mb-4 inline-block`}>
                    <music.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {music.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {music.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Artists Section */}
          <section className="max-w-6xl mx-auto">
            <div className="glass-card p-12 text-center animate-fade-in-up">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Celebrating Cultural Artists
              </h2>
              <p className="text-lg text-muted-foreground font-sans mb-8 max-w-2xl mx-auto">
                From master painters and sculptors to musicians and performers, we honor the artists 
                who keep cultural traditions alive while innovating for the future.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-sans">
                  Traditional Crafts
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-sans">
                  Contemporary Art
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-sans">
                  Musical Performances
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-sans">
                  Digital Creativity
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ArtMusic;
