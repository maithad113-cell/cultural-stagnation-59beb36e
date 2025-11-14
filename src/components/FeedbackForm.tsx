import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MessageSquare, Send } from "lucide-react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedback.trim()) {
      toast.error("Please enter your feedback");
      return;
    }

    if (feedback.trim().length > 500) {
      toast.error("Feedback must be less than 500 characters");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast.success("Thank you for your feedback!");
      setFeedback("");
      setIsSubmitting(false);
      setIsOpen(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full shadow-float hover:shadow-glow transition-all"
          aria-label="Open feedback form"
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          Feedback
        </Button>
      ) : (
        <div className="glass-card p-6 w-80 animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-display font-bold text-foreground">
              Send Feedback
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close feedback form"
            >
              ✕
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="feedback" className="text-sm font-sans">
                Your feedback helps us improve
              </Label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts, suggestions, or report issues..."
                className="mt-2 min-h-[120px] resize-none"
                maxLength={500}
                aria-describedby="feedback-hint"
              />
              <p id="feedback-hint" className="text-xs text-muted-foreground mt-1">
                {feedback.length}/500 characters
              </p>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Feedback
                </>
              )}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
