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
      className="glass-card p-6 fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-gradient-to-br from-primary to-accent glow">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-display font-bold text-foreground">
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
