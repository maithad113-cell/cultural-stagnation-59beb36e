import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Image as ImageIcon, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import galleryBanner from "@/assets/gallery-banner.jpg";
import africanDance from "@/assets/gallery-african-dance.jpg";
import lanternFestival from "@/assets/gallery-lantern-festival.jpg";
import streetArt from "@/assets/gallery-street-art.jpg";
import calligraphy from "@/assets/gallery-calligraphy.jpg";
import textiles from "@/assets/gallery-textiles.jpg";
import unity from "@/assets/gallery-unity.jpg";
import instruments from "@/assets/gallery-instruments.jpg";
import fashion from "@/assets/gallery-fashion.jpg";
import community from "@/assets/gallery-community.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();
  
  const galleryImages = [
    { id: 1, title: "Traditional African Dance", category: "Culture", image: africanDance },
    { id: 2, title: "Asian Lantern Festival", category: "Festivals", image: lanternFestival },
    { id: 3, title: "Latin American Street Art", category: "Art", image: streetArt },
    { id: 4, title: "Middle Eastern Calligraphy", category: "Art", image: calligraphy },
    { id: 5, title: "Indigenous Textiles", category: "Crafts", image: textiles },
    { id: 6, title: "Global Unity Celebration", category: "Events", image: unity },
    { id: 7, title: "Traditional Instruments", category: "Music", image: instruments },
    { id: 8, title: "Cultural Fashion", category: "Style", image: fashion },
    { id: 9, title: "Community Gathering", category: "Culture", image: community },
  ];

  const categories = ["All", "Culture", "Art", "Festivals", "Music"];
  
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handlePhotoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const title = formData.get("title") as string;
      const category = formData.get("category") as string;

      if (!selectedFile) {
        toast({
          title: "Error",
          description: "Please select a photo to upload",
          variant: "destructive",
        });
        return;
      }

      // Convert file to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        const base64Data = base64String.split(",")[1];

        const { error } = await supabase.functions.invoke("send-photo-submission", {
          body: {
            name,
            email,
            title,
            category,
            photoBase64: base64Data,
            photoFilename: selectedFile.name,
            photoMimeType: selectedFile.type,
          },
        });

        if (error) throw error;

        toast({
          title: "Success!",
          description: "Your photo has been submitted for review.",
        });

        // Reset form
        (e.target as HTMLFormElement).reset();
        setSelectedFile(null);
      };

      reader.readAsDataURL(selectedFile);
    } catch (error) {
      console.error("Error submitting photo:", error);
      toast({
        title: "Error",
        description: "Failed to submit photo. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
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
          <div className="max-w-4xl mx-auto mt-16 glass-card p-12 animate-fade-in-up">
            <Upload className="h-12 w-12 text-primary mx-auto mb-6 glow" />
            <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
              Share Your Cultural Story
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-8 text-center">
              We welcome community submissions celebrating cultural heritage, traditions, and diversity.
              Share your photos and be part of our growing gallery.
            </p>
            
            <form onSubmit={handlePhotoSubmit} className="space-y-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Photo Title</Label>
                <Input id="title" name="title" placeholder="Traditional Dance Performance" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select 
                  id="category" 
                  name="category" 
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a category</option>
                  <option value="Culture">Culture</option>
                  <option value="Art">Art</option>
                  <option value="Festivals">Festivals</option>
                  <option value="Music">Music</option>
                  <option value="Crafts">Crafts</option>
                  <option value="Events">Events</option>
                  <option value="Style">Style</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="photo">Upload Photo</Label>
                <Input 
                  id="photo" 
                  name="photo" 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileChange}
                  required 
                />
                {selectedFile && (
                  <p className="text-sm text-muted-foreground">
                    Selected: {selectedFile.name}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Your Photo"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
