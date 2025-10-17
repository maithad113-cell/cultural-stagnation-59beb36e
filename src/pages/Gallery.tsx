import Navigation from "@/components/Navigation";
import { Image as ImageIcon } from "lucide-react";

const Gallery = () => {
  // Placeholder for images - in production, these would be actual image URLs
  const galleryImages = [
    { id: 1, title: "Traditional African Dance", category: "Culture" },
    { id: 2, title: "Asian Lantern Festival", category: "Festivals" },
    { id: 3, title: "Latin American Street Art", category: "Art" },
    { id: 4, title: "Middle Eastern Calligraphy", category: "Art" },
    { id: 5, title: "Indigenous Textiles", category: "Crafts" },
    { id: 6, title: "Global Unity Celebration", category: "Events" },
    { id: 7, title: "Traditional Instruments", category: "Music" },
    { id: 8, title: "Cultural Fashion", category: "Style" },
    { id: 9, title: "Community Gathering", category: "Culture" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-primary/5">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Cultural <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">
              Visual stories celebrating the beauty and diversity of cultures worldwide
            </p>
          </div>

          {/* Filter Tags */}
          <div className="max-w-6xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-sans shadow-glow">
                All
              </button>
              <button className="px-4 py-2 bg-background border border-primary/20 text-foreground rounded-full text-sm font-sans hover:bg-primary/10 transition-colors">
                Culture
              </button>
              <button className="px-4 py-2 bg-background border border-primary/20 text-foreground rounded-full text-sm font-sans hover:bg-primary/10 transition-colors">
                Art
              </button>
              <button className="px-4 py-2 bg-background border border-primary/20 text-foreground rounded-full text-sm font-sans hover:bg-primary/10 transition-colors">
                Festivals
              </button>
              <button className="px-4 py-2 bg-background border border-primary/20 text-foreground rounded-full text-sm font-sans hover:bg-primary/10 transition-colors">
                Music
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="glass-card overflow-hidden group cursor-pointer animate-fade-in-up hover:shadow-float transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <ImageIcon className="h-16 w-16 text-primary/40" />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-foreground mb-2">
                    {image.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-sans">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Upload Section */}
          <div className="max-w-4xl mx-auto mt-16 glass-card p-12 text-center animate-fade-in-up">
            <ImageIcon className="h-12 w-12 text-primary mx-auto mb-6 glow" />
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Share Your Cultural Story
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-8">
              We welcome community submissions celebrating cultural heritage, traditions, and diversity.
              Share your photos and be part of our growing gallery.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg shadow-glow hover:shadow-float transition-all font-sans font-semibold">
              Submit Your Photo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
