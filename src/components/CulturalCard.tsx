import { LucideIcon } from "lucide-react";

interface CulturalCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: string;
}

const CulturalCard = ({ icon: Icon, title, description, delay = "0s" }: CulturalCardProps) => {
  return (
    <div
      className="glass-card p-8 fade-in-up group cursor-pointer"
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col items-center text-center space-y-5">
        <div className="relative p-5 rounded-2xl bg-gradient-primary transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow">
          <Icon className="h-9 w-9 text-white" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground font-sans text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CulturalCard;
