import { MapPin, Calendar, Link as LinkIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ProfileCard() {
  return (
    <Card className="overflow-hidden shadow-soft animate-fade-in">
      {/* Cover */}
      <div className="-mt-6 h-26 bg-gray-800" />
      
      {/* Profile Info */}
      <div className="px-4 pb-4">
        <div className="-mt-15 mb-3">
          <Avatar className="h-20 w-20 ring-4 ring-card">
            <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="John Doe" />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl">JD</AvatarFallback>
          </Avatar>
        </div>
        
        <h2 className="text-lg font-bold text-foreground">John Doe</h2>
        <p className="text-sm text-muted-foreground mb-3">Product Designer & Developer</p>
        
        <div className="space-y-1.5 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" />
            <span>Joined March 2023</span>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon className="h-3.5 w-3.5" />
            <span className="text-primary hover:underline cursor-pointer">johndoe.com</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between py-3 border-t border-border">
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">1.2k</p>
            <p className="text-xs text-muted-foreground">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">8.4k</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">523</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
        </div>

        <Button variant="ghost" className="w-full mt-2">
          Edit Profile
        </Button>
      </div>
    </Card>
  );
}
