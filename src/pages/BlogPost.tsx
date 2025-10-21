import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = {
    "1": {
      title: "The Power of Cultural Exchange in the Digital Age",
      author: "CulturalConnect Team",
      date: "May 15, 2025",
      category: "Cultural Unity",
      readTime: "5 min read",
      content: `
        <p>In an era where screens mediate most of our interactions, cultural exchange has found new pathways to flourish. Technology, often criticized for creating barriers, has paradoxically become one of the most powerful tools for fostering global understanding among youth.</p>

        <h2>Breaking Down Geographic Barriers</h2>
        <p>Today's young people can connect with peers from any corner of the world with just a few clicks. This accessibility has transformed how cultural exchange happens. Virtual exchange programs, social media platforms, and collaborative online projects allow students to engage in meaningful cross-cultural dialogues without the need for expensive travel.</p>

        <h2>The Rise of Digital Cultural Ambassadors</h2>
        <p>Young content creators are emerging as cultural ambassadors, sharing their traditions, languages, and daily lives with global audiences. Through platforms like YouTube, TikTok, and Instagram, they're demystifying cultural differences and highlighting our shared humanity.</p>

        <h2>Challenges and Opportunities</h2>
        <p>While digital platforms offer unprecedented opportunities for cultural exchange, they also present challenges. The risk of cultural appropriation, superficial engagement, and the digital divide are real concerns that need addressing.</p>

        <p>However, when approached thoughtfully, digital cultural exchange can:</p>
        <ul>
          <li>Build empathy and reduce prejudice</li>
          <li>Preserve endangered languages and traditions</li>
          <li>Create economic opportunities through cultural entrepreneurship</li>
          <li>Foster global citizenship among young people</li>
        </ul>

        <h2>The Path Forward</h2>
        <p>As we navigate this digital landscape, it's crucial to approach cultural exchange with respect, curiosity, and humility. Technology is merely a tool—its impact depends on how we use it. By fostering genuine connections, celebrating diversity, and remaining open to learning, young people are using digital platforms to build a more understanding and united world.</p>

        <p>The future of cultural exchange is digital, but its heart remains deeply human. As we continue to bridge physical distances through technology, let's ensure we're also bridging the gaps in understanding, empathy, and appreciation for the beautiful diversity of human cultures.</p>
      `
    },
    "2": {
      title: "Preserving Traditional Art in Modern Times",
      author: "Amara Johnson",
      date: "May 10, 2025",
      category: "Art & Creativity",
      readTime: "7 min read",
      content: `
        <p>Traditional art forms carry the soul of cultures, passing down stories, values, and techniques through generations. Yet in our rapidly modernizing world, many of these precious art forms face the threat of extinction. Young artists today are rising to the challenge, finding innovative ways to preserve ancestral techniques while making them relevant for contemporary audiences.</p>

        <h2>The Challenge of Preservation</h2>
        <p>Traditional arts face multiple challenges in the modern era. Urbanization pulls young people away from their ancestral homes where these arts are practiced. Mass-produced goods often undercut the market for handcrafted traditional items. And the time-intensive nature of learning traditional techniques can seem impractical in today's fast-paced world.</p>

        <h2>Innovation Through Fusion</h2>
        <p>Rather than viewing tradition and modernity as opposing forces, young artists are creating exciting fusions. They're taking traditional techniques and applying them to contemporary subjects. They're using social media to showcase their work to global audiences. They're collaborating across cultures to create new forms that honor multiple traditions.</p>

        <h2>Success Stories</h2>
        <p>Around the world, we're seeing inspiring examples of traditional art finding new life:</p>
        <ul>
          <li>Japanese washi papermakers incorporating modern designs while maintaining centuries-old techniques</li>
          <li>African textile artists gaining international recognition through sustainable fashion</li>
          <li>Indigenous pottery traditions finding new markets through fair trade networks</li>
          <li>Traditional dance forms being documented and taught through online platforms</li>
        </ul>

        <h2>The Role of Technology</h2>
        <p>Digital tools are proving invaluable for preservation. High-resolution documentation ensures techniques aren't lost even if practitioners become few. Virtual reality allows people worldwide to experience traditional art forms. Online marketplaces connect traditional artists with global customers willing to pay fair prices for authentic craftsmanship.</p>

        <h2>Why It Matters</h2>
        <p>Preserving traditional art isn't just about nostalgia. These art forms embody unique ways of seeing and understanding the world. They represent sustainable practices developed over centuries. They provide economic opportunities for communities. And they enrich our global cultural heritage, reminding us of the incredible creativity and diversity of human expression.</p>

        <p>The young artists leading this movement understand something crucial: tradition doesn't have to mean stagnation. By breathing new life into ancient practices, they're ensuring these treasures won't just survive—they'll thrive.</p>
      `
    },
    "3": {
      title: "Music as a Universal Language",
      author: "David Chen",
      date: "May 5, 2025",
      category: "Music",
      readTime: "6 min read",
      content: `
        <p>They say music is the universal language, and nowhere is this more evident than in how musical traditions from different cultures can speak to hearts across all boundaries. From the rhythmic complexity of African drumming to the delicate melodies of Asian string instruments, music carries emotions and stories that transcend words.</p>

        <h2>The Science of Musical Connection</h2>
        <p>Research shows that our brains respond to music in remarkably similar ways across cultures. While we may be most familiar with the musical traditions of our own culture, we can appreciate and be moved by music from anywhere in the world. This universal responsiveness makes music one of the most powerful tools for cultural exchange.</p>

        <h2>Traditional Instruments, Global Appeal</h2>
        <p>Traditional instruments are finding new audiences worldwide:</p>
        <ul>
          <li>The African djembe has become popular in drum circles globally</li>
          <li>The Japanese koto inspires contemporary composers</li>
          <li>Latin American rhythms influence pop music worldwide</li>
          <li>Middle Eastern scales are being explored by jazz musicians</li>
        </ul>

        <h2>Fusion and Innovation</h2>
        <p>Some of the most exciting music today comes from artists who blend traditional instruments and styles with contemporary genres. These fusion artists aren't diluting tradition—they're proving its vitality and relevance. They're showing that traditional music isn't museum pieces but living traditions that can evolve and adapt.</p>

        <h2>Music as Cultural Ambassador</h2>
        <p>Music festivals celebrating world music have become important venues for cultural exchange. When audiences hear gamelan orchestras from Indonesia or throat singing from Tuva, they're not just entertained—they're exposed to different ways of creating and thinking about music. This exposure builds curiosity and respect for other cultures.</p>

        <h2>Preserving Musical Heritage</h2>
        <p>Like other traditional arts, musical traditions face challenges. Fewer young people are learning traditional instruments. Some musical forms are practiced by only a handful of elderly masters. But digital recording and online education are helping preserve these precious traditions for future generations.</p>

        <h2>The Power of Collaboration</h2>
        <p>Perhaps most exciting are the collaborations between musicians from different traditions. When a blues guitarist jams with a sitar player, when hip-hop beats meet traditional chants, magic happens. These collaborations show that different musical traditions aren't competing—they're in conversation, each enriching the other.</p>

        <p>Music reminds us that despite our differences, humans share fundamental emotions and experiences. When we listen to music from another culture, we're invited into that culture's way of expressing joy, sorrow, celebration, and longing. In this way, music truly is a universal language—one that helps us understand and appreciate the beautiful diversity of human experience.</p>
      `
    },
    "4": {
      title: "Festival Traditions: More Than Just Celebrations",
      author: "Fatima Al-Hassan",
      date: "April 28, 2025",
      category: "Festivals",
      readTime: "8 min read",
      content: `
        <p>Around the world, communities gather to celebrate festivals that have been observed for centuries, sometimes millennia. To outsiders, these might seem like colorful parties. But look deeper, and you'll find that festivals are complex expressions of a culture's values, history, and worldview.</p>

        <h2>The Deeper Meaning of Celebration</h2>
        <p>Every festival tells a story. It might commemorate historical events, mark agricultural cycles, honor deities or ancestors, or celebrate community bonds. These celebrations are how cultures pass down their most important lessons and values from one generation to the next.</p>

        <h2>Universal Themes, Unique Expressions</h2>
        <p>While festivals around the world look different, many share common themes:</p>
        <ul>
          <li><strong>Renewal and Beginning:</strong> New Year celebrations exist in nearly every culture, though the timing and rituals vary widely</li>
          <li><strong>Gratitude:</strong> Harvest festivals across cultures express thanks for abundance</li>
          <li><strong>Light Over Darkness:</strong> From Diwali to Hanukkah, many festivals symbolize hope and goodness</li>
          <li><strong>Community and Connection:</strong> Festivals bring people together, strengthening social bonds</li>
        </ul>

        <h2>The Role of Food</h2>
        <p>Special foods aren't just treats—they're often rich with symbolism. Round foods might represent completeness or the cycle of life. Certain ingredients might be chosen for their associations with prosperity or health. The act of preparing and sharing festival foods becomes a way of connecting with tradition and with each other.</p>

        <h2>Adapting Traditions</h2>
        <p>As cultures evolve and communities become more diverse, festival traditions adapt. Diaspora communities celebrate festivals in new contexts, sometimes blending elements from multiple traditions. Urban celebrations might differ from rural ones. Yet the core meanings often remain, showing the resilience of cultural traditions.</p>

        <h2>Festivals as Education</h2>
        <p>For young people, participating in festivals is hands-on education in their culture. They learn:</p>
        <ul>
          <li>Historical narratives that shape their community's identity</li>
          <li>Values like generosity, gratitude, or perseverance</li>
          <li>Traditional arts, crafts, music, and dance</li>
          <li>The importance of community and family ties</li>
        </ul>

        <h2>Sharing Festival Joy</h2>
        <p>In our interconnected world, festival celebrations are increasingly being shared across cultural boundaries. Non-Indians celebrate Holi's joyful colors. Non-Chinese enjoy Lunar New Year festivities. This sharing, when done respectfully, enriches everyone and builds cross-cultural understanding.</p>

        <h2>The Future of Festivals</h2>
        <p>Some worry that modern life is eroding festival traditions. But around the world, we see young people finding new ways to keep festivals alive. They're using social media to share celebrations. They're organizing community festivals in new locations. They're explaining the deeper meanings behind the festivities.</p>

        <p>Festivals remind us that celebration is a fundamental human need. They give us permission to pause our daily routines, to gather with others, to reflect on what matters. In preserving and sharing these traditions, we're not just maintaining the past—we're ensuring that future generations have access to the wisdom, joy, and meaning embedded in these beautiful celebrations.</p>
      `
    },
    "5": {
      title: "Language Learning: A Gateway to Cultural Understanding",
      author: "Maria Rodriguez",
      date: "April 22, 2025",
      category: "Language",
      readTime: "5 min read",
      content: `
        <p>Learning a new language opens more than just communication channels—it opens minds. Every language is a unique lens through which to view the world, carrying within it the accumulated wisdom, humor, and perspective of the culture that created it.</p>

        <h2>More Than Just Words</h2>
        <p>When you learn how another culture names things, you learn what they value. Languages that have dozens of words for snow tell you something about the importance of winter in that culture. Languages rich in words for family relationships reveal the centrality of kinship. Even grammar structures can reflect cultural values—some languages make it nearly impossible to speak without acknowledging the relative status of speakers, reflecting hierarchical social structures.</p>

        <h2>The Power of a Greeting</h2>
        <p>Something as simple as learning to say "hello" in someone's language can transform an interaction. It shows respect. It demonstrates effort and interest. It signals that you see the other person not as a generic stranger but as a member of a specific culture you value enough to learn about.</p>

        <h2>Breaking Down Barriers</h2>
        <p>Language barriers can make the unfamiliar seem threatening. When we can't communicate, it's easy to feel isolated or to view others with suspicion. But even basic language skills can break down these barriers. Suddenly, "them" becomes "us"—people who share the universal human experiences of joy, struggle, humor, and hope.</p>

        <h2>Cultural Concepts in Language</h2>
        <p>Some of the most fascinating aspects of language learning are the untranslatable words—concepts that exist in one language but have no direct equivalent in another:</p>
        <ul>
          <li><strong>Hygge (Danish):</strong> The cozy contentment of being with loved ones</li>
          <li><strong>Ubuntu (Zulu):</strong> "I am because we are"—the interconnectedness of humanity</li>
          <li><strong>Wabi-sabi (Japanese):</strong> Finding beauty in imperfection and impermanence</li>
          <li><strong>Saudade (Portuguese):</strong> A deep emotional state of melancholic longing</li>
        </ul>
        <p>Learning these concepts expands our emotional vocabulary and our way of experiencing the world.</p>

        <h2>Technology as a Bridge</h2>
        <p>Today's language learners have advantages previous generations couldn't imagine. Apps gamify learning. Video chat connects learners with native speakers worldwide. Social media provides authentic language practice. These tools make language learning more accessible than ever.</p>

        <h2>Start Small, Dream Big</h2>
        <p>You don't need to become fluent to make meaningful connections. Learning even a few key phrases shows respect and opens doors. "Please," "thank you," "how are you?"—these simple expressions, spoken in someone's native language, can transform your interactions and your understanding.</p>

        <h2>The Journey Itself</h2>
        <p>Language learning teaches humility—you become a student, making mistakes, sometimes looking foolish. This experience of being outside your comfort zone builds empathy for others navigating unfamiliar linguistic and cultural terrain. It reminds us that intelligence and eloquence aren't the same as language proficiency.</p>

        <p>In learning another language, we learn that there are multiple valid ways of expressing ideas, organizing thoughts, and viewing reality. This understanding—that your way isn't the only way—is perhaps the most valuable lesson of all. It's the foundation of cultural humility and the beginning of genuine cross-cultural understanding.</p>
      `
    },
    "6": {
      title: "Youth Voices: Shaping the Future of Cultural Heritage",
      author: "Kwame Osei",
      date: "April 15, 2025",
      category: "Youth Perspective",
      readTime: "9 min read",
      content: `
        <p>The guardians of cultural heritage have traditionally been elders—and rightly so. They hold the memories, the stories, the knowledge passed down through generations. But today's young people aren't just inheriting these traditions—they're actively shaping how cultural heritage evolves and survives in the modern world.</p>

        <h2>A Generation of Cultural Innovators</h2>
        <p>Young people today face a unique challenge: honoring the past while navigating a rapidly changing present. Rather than seeing this as a conflict, many are finding creative ways to bridge both worlds. They're tradition bearers and innovators, respectful of heritage while unafraid to adapt and evolve.</p>

        <h2>Digital Preservation</h2>
        <p>Youth are using technology to document and preserve cultural practices in unprecedented ways:</p>
        <ul>
          <li>Creating YouTube channels teaching traditional crafts and recipes</li>
          <li>Documenting elder knowledge through podcasts and video interviews</li>
          <li>Building online archives of cultural practices and languages</li>
          <li>Using social media to make cultural heritage accessible and engaging</li>
        </ul>

        <h2>Redefining Authenticity</h2>
        <p>One powerful shift is how young people are redefining cultural authenticity. They're pushing back against the notion that tradition must be static. Instead, they argue that cultures have always evolved, and honoring tradition doesn't mean freezing it in time. This perspective allows for innovation while maintaining connection to roots.</p>

        <h2>Cultural Entrepreneurship</h2>
        <p>Young entrepreneurs are finding ways to make cultural heritage economically sustainable. They're creating businesses around traditional crafts, launching fashion lines inspired by ancestral designs, and producing modern products using traditional techniques. This economic viability helps ensure these traditions survive and thrive.</p>

        <h2>Bridging Communities</h2>
        <p>Youth from diaspora communities face unique challenges in maintaining connections to their heritage. Yet many are finding powerful ways to bridge their multiple identities. They're organizing cultural events, teaching heritage languages to peers, and creating spaces where diverse experiences of culture can coexist.</p>

        <h2>The Role of Education</h2>
        <p>Young advocates are pushing for education systems that value and teach cultural heritage:</p>
        <ul>
          <li>Advocating for indigenous language instruction in schools</li>
          <li>Developing curricula that include diverse cultural perspectives</li>
          <li>Creating peer-to-peer cultural education programs</li>
          <li>Using their platforms to educate others about their cultures</li>
        </ul>

        <h2>Facing Challenges</h2>
        <p>This generation faces real obstacles. Globalization can feel like cultural homogenization. Economic pressures often make traditional livelihoods unsustainable. Discrimination and stereotyping can make some youth feel their heritage is something to hide rather than celebrate.</p>

        <h2>Finding Strength in Heritage</h2>
        <p>Yet increasingly, young people are finding strength and pride in their cultural heritage. They're recognizing that cultural identity doesn't limit them—it enriches them. Their unique perspectives, shaped by both traditional values and modern realities, position them to be powerful advocates for cultural understanding.</p>

        <h2>A Call to Action</h2>
        <p>To older generations: Support young people's innovative approaches to cultural preservation. Trust that evolution doesn't mean abandonment. Create spaces for youth voices in cultural institutions and decision-making.</p>

        <p>To peers: Don't be afraid to claim your heritage, even if you feel you don't know "enough." Learn what you can, when you can. Ask questions. Make mistakes. Your interest and effort matter.</p>

        <h2>The Future Is Bright</h2>
        <p>The future of cultural heritage isn't about perfectly preserving the past. It's about taking the wisdom, beauty, and values of our ancestors and finding ways to make them relevant and vibrant in today's world. Young people around the globe are doing exactly that—and in doing so, they're ensuring that cultural diversity remains one of humanity's greatest treasures.</p>

        <p>The youth aren't just the future of cultural heritage—they're its present, actively shaping how traditions survive, evolve, and flourish in the 21st century. And that's something worth celebrating.</p>
      `
    }
  };

  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-primary/5">
        <Navigation />
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-primary/5">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8 animate-fade-in-up"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-sans mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none glass-card p-8 md:p-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Share Section */}
          <div className="mt-12 glass-card p-8 text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Enjoyed this article?
            </h3>
            <p className="text-muted-foreground mb-6">
              Share your thoughts or explore more stories about cultural heritage and unity.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/blog">
                <button className="px-6 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-sans font-semibold">
                  Read More Articles
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-glow hover:shadow-float transition-all font-sans font-semibold">
                  Share Your Story
                </button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <style>{`
        .article-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
          font-family: var(--font-display);
        }
        
        .article-content p {
          margin-bottom: 1.25rem;
          line-height: 1.75;
          color: hsl(var(--muted-foreground));
        }
        
        .article-content ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
          list-style-type: disc;
        }
        
        .article-content li {
          margin-bottom: 0.75rem;
          line-height: 1.75;
          color: hsl(var(--muted-foreground));
        }
        
        .article-content strong {
          color: hsl(var(--foreground));
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;