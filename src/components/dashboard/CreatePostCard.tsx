import { useState } from "react";
import { Image, Smile, MapPin, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CreatePostCard() {
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const clearPreview = () => {
    setPreview(null);
  };

  return (
    <Card className="p-4 shadow-soft animate-slide-up">
      <div className="flex gap-3">
        <Avatar className="h-10 w-10 shrink-0">
          <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User" />
          <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-3">
          <Textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-20 resize-none border-0 bg-transparent p-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          
          {/* Image Preview */}
          {preview && (
            <div className="relative inline-block animate-scale-in">
              <img
                src={preview}
                alt="Preview"
                className="max-h-48 rounded-lg object-cover border border-border"
              />
              <button
                onClick={clearPreview}
                className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background hover:bg-foreground/80 transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
          
          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex gap-1">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <div className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                  <Image className="h-5 w-5" />
                </div>
              </label>
              <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary">
                <Smile className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary">
                <MapPin className="h-5 w-5" />
              </Button>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              disabled={!content.trim() && !preview}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
