import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { formatDistanceToNow } from 'date-fns'
import { useInfiniteComments } from "@/hooks/UseFetchComments";
import type { PostCardProps } from "@/interfaces/IProps";

export default function PostCard({ post }: PostCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [liked] = useState(false);
  const [likeCount] = useState(post.reactionCount);

  const {
    comments,
    loadMore,
    loading,
    hasMore,
    error,
  } = useInfiniteComments({ postId: post.id });

  const handleOpen = () => {
    setIsOpen(true);
    if (comments.length === 0) {
      loadMore();
    }
  };

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Card className="p-4 shadow-soft hover:shadow-medium transition-shadow duration-300 animate-slide-up">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.user.pfpUrl} alt={post.user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {post.user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground leading-tight">{post.user.name}</p>
            <p className="text-xs text-muted-foreground">@{post.user.name} · {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex gap-2">
        <p className="text-lg font-bold text-foreground leading-snug">{post.title}:</p>
        <p className="text-foreground mb-1 leading-relaxed">{post.description}</p>
      </div>

      {/* Image */}
      {post.imgUrl && (
        <div className="-mx-4">
          <img
            src={post.imgUrl}
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
          <Button variant="ghost" size="sm" className="gap-1.5 rounded-full text-muted-foreground" onClick={isOpen ? handleClose : handleOpen}>
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs">{post.commentCount}</span>
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border pt-4 max-h-64 overflow-y-auto">
          {comments.length === 0 && !loading && !error && (
            <p className="text-center text-muted-foreground">No comments yet.</p>
          )}

          {comments.map(comment => (
            <div key={comment.id} className="flex gap-3 mb-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={comment.user.pfpUrl} alt={comment.user.name} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {comment.user.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-foreground">{comment.user.name}</p>
                <p className="text-sm text-muted-foreground">{comment.commentMessage}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}

          {error && <p className="text-red-500 text-center">{error}</p>}

          {loading && <p className="text-center text-muted-foreground">Loading comments...</p>}

          {hasMore && !loading && (
            <div className="flex justify-center">
              <Button size="sm" variant="outline" onClick={loadMore}>
                Load More Comments
              </Button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
