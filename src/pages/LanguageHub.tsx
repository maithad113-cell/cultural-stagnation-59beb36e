import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Languages, Volume2, BookOpen, Globe } from "lucide-react";

const LanguageHub = () => {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const playPronunciation = (language: string, greeting: string) => {
    setPlayingAudio(language);
    
    const utterance = new SpeechSynthesisUtterance(greeting);
    utterance.rate = 0.8;
    utterance.pitch = 1;
    
    utterance.onend = () => {
      setPlayingAudio(null);
    };
    
    window.speechSynthesis.speak(utterance);
  };
  const greetings = [
    { language: "Swahili", greeting: "Jambo", pronunciation: "JAHM-boh", meaning: "Hello" },
    { language: "Mandarin", greeting: "你好", pronunciation: "Nǐ hǎo", meaning: "Hello" },
    { language: "Arabic", greeting: "السلام عليكم", pronunciation: "As-salamu alaykum", meaning: "Peace be upon you" },
    { language: "Hindi", greeting: "नमस्ते", pronunciation: "Namaste", meaning: "I bow to you" },
    { language: "French", greeting: "Bonjour", pronunciation: "bon-ZHOOR", meaning: "Good day" },
    { language: "Spanish", greeting: "Hola", pronunciation: "OH-lah", meaning: "Hello" },
    { language: "Japanese", greeting: "こんにちは", pronunciation: "Konnichiwa", meaning: "Good afternoon" },
    { language: "Zulu", greeting: "Sawubona", pronunciation: "sah-woo-BOH-nah", meaning: "I see you" },
    { language: "Yoruba", greeting: "Ẹ káàárọ̀", pronunciation: "eh-KAH-ah-roh", meaning: "Good morning" },
  ];

  const proverbs = [
    {
      origin: "African Proverb",
      text: "If you want to go fast, go alone. If you want to go far, go together.",
      language: "Pan-African Wisdom",
    },
    {
      origin: "Chinese Proverb",
      text: "A journey of a thousand miles begins with a single step.",
      language: "Mandarin",
    },
    {
      origin: "Arabic Saying",
      text: "The most beloved of people to Allah are those who are most beneficial to people.",
      language: "Arabic",
    },
    {
      origin: "Sanskrit Wisdom",
      text: "Vasudhaiva Kutumbakam - The world is one family",
      language: "Sanskrit",
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
              Language <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">
              Connect through words - learn greetings, proverbs, and phrases from cultures around the world
            </p>
          </div>

          {/* Greetings Section */}
          <section className="max-w-6xl mx-auto mb-20">
            <div className="flex items-center gap-3 mb-8 justify-center animate-fade-in-up">
              <Languages className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-display font-bold text-foreground">
                Global Greetings
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {greetings.map((item, index) => (
                <div
                  key={item.language}
                  className="glass-card p-6 animate-fade-in-up hover:shadow-float transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground mb-1">
                        {item.language}
                      </h3>
                      <p className="text-2xl font-display text-primary mb-2">
                        {item.greeting}
                      </p>
                    </div>
                    <button
                      onClick={() => playPronunciation(item.language, item.greeting)}
                      className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                      aria-label={`Pronounce ${item.language} greeting`}
                    >
                      <Volume2 className={`h-5 w-5 text-primary ${playingAudio === item.language ? 'animate-pulse' : 'group-hover:animate-glow'}`} />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground font-sans mb-1">
                    <span className="font-semibold">Pronunciation:</span> {item.pronunciation}
                  </p>
                  <p className="text-sm text-muted-foreground font-sans">
                    <span className="font-semibold">Meaning:</span> {item.meaning}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Proverbs Section */}
          <section className="max-w-6xl mx-auto mb-20">
            <div className="flex items-center gap-3 mb-8 justify-center animate-fade-in-up">
              <BookOpen className="h-8 w-8 text-accent" />
              <h2 className="text-4xl font-display font-bold text-foreground">
                Cultural Wisdom
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {proverbs.map((proverb, index) => (
                <div
                  key={proverb.origin}
                  className="glass-card p-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Globe className="h-6 w-6 text-primary mb-4" />
                  <p className="text-lg font-display italic text-foreground mb-4 leading-relaxed">
                    "{proverb.text}"
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-sans">{proverb.origin}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {proverb.language}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fun Facts Section */}
          <section className="max-w-4xl mx-auto">
            <div className="glass-card p-12 text-center animate-fade-in-up">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Did You Know?
              </h2>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <p className="text-muted-foreground font-sans leading-relaxed">
                  <span className="text-primary font-semibold">•</span> There are over 7,000 languages spoken worldwide, each with unique expressions and cultural nuances.
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  <span className="text-primary font-semibold">•</span> The Zulu greeting "Sawubona" literally means "I see you" - acknowledging the person's worth and humanity.
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  <span className="text-primary font-semibold">•</span> Many African languages are tonal, meaning the pitch of your voice changes the meaning of words.
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  <span className="text-primary font-semibold">•</span> Learning greetings in someone's native language shows respect and opens doors to deeper cultural connection.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LanguageHub;
