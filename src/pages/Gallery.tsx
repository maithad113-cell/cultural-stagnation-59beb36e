import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Image as ImageIcon } from "lucide-react";
import galleryBanner from "@/assets/gallery-banner.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
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

  const categories = ["All", "Culture", "Art", "Festivals", "Music"];
  
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-primary/5">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Banner Image */}
        <div className="relative h-64 md:h-96 mb-16 overflow-hidden">
          <img src={galleryBanner} alt="Cultural Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        </div>

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
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-sans transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-background border border-primary/20 text-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
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
            <Link to="/contact">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg shadow-glow hover:shadow-float transition-all font-sans font-semibold">
                Submit Your Photo
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
