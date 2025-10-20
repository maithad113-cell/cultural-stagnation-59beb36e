import Navigation from "@/components/Navigation";
import { Calendar, Globe, PartyPopper, Sparkles, Sun, Moon } from "lucide-react";
import festivalsBanner from "@/assets/festivals-banner.jpg";

const Festivals = () => {
  const festivals = [
    {
      name: "Kwanzaa",
      region: "Pan-African",
      description: "A week-long celebration honoring African heritage, culture, and values through unity and community.",
      icon: Sparkles,
      period: "December 26 - January 1",
    },
    {
      name: "Diwali",
      region: "South Asia",
      description: "The festival of lights celebrating the triumph of light over darkness and good over evil.",
      icon: Sun,
      period: "October/November",
    },
    {
      name: "Lunar New Year",
      region: "East Asia",
      description: "A time for family reunions, ancestral respect, and welcoming prosperity for the coming year.",
      icon: Moon,
      period: "January/February",
    },
    {
      name: "Carnival",
      region: "Latin America & Caribbean",
      description: "Vibrant street celebrations with music, dance, and elaborate costumes before Lent.",
      icon: PartyPopper,
      period: "February/March",
    },
    {
      name: "Timkat",
      region: "Ethiopia",
      description: "Orthodox Christian celebration of Epiphany with colorful processions and water ceremonies.",
      icon: Sparkles,
      period: "January 19",
    },
    {
      name: "Eid al-Fitr",
      region: "Islamic World",
      description: "Joyous celebration marking the end of Ramadan with prayers, feasting, and charity.",
      icon: Globe,
      period: "Variable (Lunar Calendar)",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-primary/5">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Banner Image */}
        <div className="relative h-64 md:h-96 mb-16 overflow-hidden">
          <img src={festivalsBanner} alt="Global Festivals" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        </div>

        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Global <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Festivals</span>
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">
              Celebrate the vibrant traditions that bring communities together around the world
            </p>
          </div>

          {/* Festivals Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {festivals.map((festival, index) => (
              <div
                key={festival.name}
                className="glass-card p-6 animate-fade-in-up hover:shadow-float transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl glow">
                    <festival.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-foreground mb-1">
                      {festival.name}
                    </h3>
                    <p className="text-sm text-primary font-sans flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      {festival.region}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-3">
                  {festival.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{festival.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Calendar Section */}
          <div className="max-w-6xl mx-auto glass-card p-12 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Calendar className="h-12 w-12 text-primary mx-auto mb-6 glow" />
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Festival Calendar
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-8 max-w-2xl mx-auto">
              Mark your calendar and join in celebrating cultural diversity throughout the year. 
              Each festival offers a unique window into the values, traditions, and joy of different communities.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="font-display font-bold text-foreground text-2xl mb-1">Spring</p>
                <p className="text-sm text-muted-foreground">New beginnings</p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className="font-display font-bold text-foreground text-2xl mb-1">Summer</p>
                <p className="text-sm text-muted-foreground">Harvest celebrations</p>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="font-display font-bold text-foreground text-2xl mb-1">Autumn</p>
                <p className="text-sm text-muted-foreground">Gratitude & unity</p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className="font-display font-bold text-foreground text-2xl mb-1">Winter</p>
                <p className="text-sm text-muted-foreground">Light & renewal</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Festivals;
