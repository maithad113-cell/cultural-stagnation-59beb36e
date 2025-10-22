import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Calendar, User, ArrowRight, BookOpen, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import blogBanner from "@/assets/blog-banner.jpg";

const Blog = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const blogPosts = [
    {
      id: 1,
      title: "The Power of Cultural Exchange in the Digital Age",
      excerpt: "How technology is bridging cultural divides and fostering global understanding among youth...",
      author: "CulturalConnect Team",
      date: "May 15, 2025",
      category: "Cultural Unity",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Preserving Traditional Art in Modern Times",
      excerpt: "Exploring how young artists are reimagining ancestral techniques with contemporary mediums...",
      author: "Amara Johnson",
      date: "May 10, 2025",
      category: "Art & Creativity",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Music as a Universal Language",
      excerpt: "From African drums to Asian strings, discover how musical traditions connect hearts across continents...",
      author: "David Chen",
      date: "May 5, 2025",
      category: "Music",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Festival Traditions: More Than Just Celebrations",
      excerpt: "Understanding the deeper meanings and values embedded in cultural festivals worldwide...",
      author: "Fatima Al-Hassan",
      date: "April 28, 2025",
      category: "Festivals",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Language Learning: A Gateway to Cultural Understanding",
      excerpt: "Why learning even basic phrases in another language opens doors to meaningful connections...",
      author: "Maria Rodriguez",
      date: "April 22, 2025",
      category: "Language",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Youth Voices: Shaping the Future of Cultural Heritage",
      excerpt: "Young people share how they're keeping traditions alive while innovating for tomorrow...",
      author: "Kwame Osei",
      date: "April 15, 2025",
      category: "Youth Perspective",
      readTime: "9 min read",
    },
  ];

  const handleArticleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const title = formData.get("title") as string;
      const category = formData.get("category") as string;
      const content = formData.get("content") as string;

      const { error } = await supabase.functions.invoke("send-article-submission", {
        body: {
          name,
          email,
          title,
          category,
          content,
        },
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your article has been submitted for review.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error submitting article:", error);
      toast({
        title: "Error",
        description: "Failed to submit article. Please try again.",
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
          <img src={blogBanner} alt="Stories and Insights" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        </div>

        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Stories & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">
              Explore articles, reflections, and voices celebrating cultural identity, creativity, and unity
            </p>
          </div>

          {/* Featured Post */}
          <div className="max-w-5xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="glass-card overflow-hidden hover:shadow-float transition-all duration-300 cursor-pointer">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="aspect-video md:aspect-square bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-20 w-20 text-primary/40" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-sans mb-4 w-fit">
                    Featured
                  </span>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <Link to={`/blog/${blogPosts[0].id}`} className="flex items-center gap-2 text-primary font-sans font-semibold hover:gap-3 transition-all">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <div
                key={post.id}
                className="glass-card overflow-hidden hover:shadow-float transition-all duration-300 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 0.05}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary/40" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-sans mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-primary font-sans font-semibold text-sm hover:gap-3 transition-all">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Article Submission Section */}
          <div className="max-w-4xl mx-auto mt-16 glass-card p-12 animate-fade-in-up">
            <Edit className="h-12 w-12 text-primary mx-auto mb-6 glow" />
            <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
              Share Your Story
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-8 text-center">
              Have a cultural experience or insight you'd like to share? We welcome guest contributions from our community.
            </p>
            
            <form onSubmit={handleArticleSubmit} className="space-y-6 max-w-2xl mx-auto">
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
                <Label htmlFor="title">Article Title</Label>
                <Input id="title" name="title" placeholder="The Beauty of Cultural Exchange" required />
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
                  <option value="Cultural Unity">Cultural Unity</option>
                  <option value="Art & Creativity">Art & Creativity</option>
                  <option value="Music">Music</option>
                  <option value="Festivals">Festivals</option>
                  <option value="Language">Language</option>
                  <option value="Youth Perspective">Youth Perspective</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Article Content</Label>
                <Textarea 
                  id="content" 
                  name="content" 
                  placeholder="Share your cultural story, insights, or experiences..."
                  className="min-h-[200px]"
                  required 
                />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Your Article"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
