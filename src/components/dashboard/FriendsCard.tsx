import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, UserPlus } from "lucide-react";

const friends = [
  { id: 1, name: "Sarah Wilson", avatar: "https://i.pravatar.cc/150?img=5", status: "online", mutualFriends: 12 },
  { id: 2, name: "Mike Chen", avatar: "https://i.pravatar.cc/150?img=8", status: "offline", mutualFriends: 8 },
  { id: 3, name: "Emma Davis", avatar: "https://i.pravatar.cc/150?img=9", status: "online", mutualFriends: 15 },
  { id: 4, name: "Alex Turner", avatar: "https://i.pravatar.cc/150?img=12", status: "away", mutualFriends: 5 },
];

const suggestions = [
  { id: 5, name: "Lisa Park", avatar: "https://i.pravatar.cc/150?img=23", mutualFriends: 4 },
  { id: 6, name: "James Lee", avatar: "https://i.pravatar.cc/150?img=33", mutualFriends: 7 },
];

export default function FriendsCard() {
  return (
    <div className="space-y-4">
      {/* Online Friends */}
      <Card className="p-4 shadow-soft animate-fade-in">
        <h3 className="font-semibold text-foreground mb-3">Friends</h3>
        <div className="space-y-2">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={friend.avatar} alt={friend.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      {friend.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span
                    className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-card ${
                      friend.status === "online"
                        ? "bg-green-500"
                        : friend.status === "away"
                        ? "bg-yellow-500"
                        : "bg-muted-foreground"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground leading-tight">{friend.name}</p>
                  <p className="text-xs text-muted-foreground">{friend.mutualFriends} mutual friends</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Suggestions */}
      <Card className="p-4 shadow-soft animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <h3 className="font-semibold text-foreground mb-3">Suggested Friends</h3>
        <div className="space-y-2">
          {suggestions.map((person) => (
            <div
              key={person.id}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={person.avatar} alt={person.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                    {person.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground leading-tight">{person.name}</p>
                  <p className="text-xs text-muted-foreground">{person.mutualFriends} mutual friends</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-8 gap-1">
                <UserPlus className="h-3.5 w-3.5" />
                Add
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
