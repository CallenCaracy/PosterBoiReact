import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PostCardProps {
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timeAgo: string;
}

export default function PostCard({
  author,
  content,
  image,
  likes,
  comments,
  shares,
  timeAgo,
}: PostCardProps) {
  const [liked] = useState(false);
  const [likeCount] = useState(likes);

  return (
    <Card className="p-4 shadow-soft hover:shadow-medium transition-shadow duration-300 animate-slide-up">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {author.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground leading-tight">{author.name}</p>
            <p className="text-xs text-muted-foreground">@{author.username} · {timeAgo}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <p className="text-foreground mb-3 leading-relaxed">{content}</p>

      {/* Image */}
      {image && (
        <div className="mb-3 -mx-4">
          <img
            src={image}
            alt="Post"
            className="w-full object-cover max-h-96"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            className={`gap-1.5 rounded-full ${liked ? 'text-destructive hover:text-destructive' : 'text-muted-foreground'}`}
          >
            <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
            <span className="text-xs">{likeCount}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1.5 rounded-full text-muted-foreground">
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs">{comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1.5 rounded-full text-muted-foreground">
            <Share2 className="h-4 w-4" />
            <span className="text-xs">{shares}</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
