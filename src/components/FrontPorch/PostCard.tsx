import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { formatDistanceToNow } from 'date-fns'
import { useInfiniteComments } from "@/hooks/UseFetchComments";
import { getTopReactions, reactionStyles } from "@/utils/ReactionHelper";
import type { PostCardProps } from "@/interfaces/IProps";

export default function PostCard({ post }: PostCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [liked] = useState(false); // remove this after testing we implement this in dashoard
  const [likeCount] = useState(post.reactionCount);

  const {
    comments,
    loadMore,
    loading,
    hasMore,
    error,
  } = useInfiniteComments({ postId: post.id });

  // const parentComments = comments.filter(c => c.parentCommentId === null);
  // const [replyingTo, setReplyingTo] = useState<number | null>(null);
  // const [replyMessage, setReplyMessage] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
    if (comments.length === 0 && post.commentCount > 0) {
      loadMore();
    }
  };

  // const handleReplyClick = (parentId: number) => {
  //   setReplyingTo(prev => (prev === parentId ? null : parentId));
  // };

  // const submitReply = () => {
  //   if (!replyingTo || !replyMessage.trim()) return;

  //   const newComment: Comment = {
  //     userId: "f0a73b1f-85d5-4bc1-9aef-a6a3fd3dc91b",
  //     commentMessage: replyMessage,
  //     imgUrl: "test",
  //     createdAt: new Date().toISOString(),
  //     parentCommentId: replyingTo,
  //     childComments: []
  //   };

  //   setComments(prev =>
  //     prev.map(c =>
  //       c.id === replyingTo
  //         ? { ...c, childComments: [...c.childComments, newComment] }
  //         : c
  //     )
  //   );

  //   setReplyMessage("");
  //   setReplyingTo(null);
  // };

  const handleClose = () => {
    setIsOpen(false)
  }

  const topReactions = getTopReactions(post.reactionSummary, 3);

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
            <p className="text-xs text-muted-foreground">@{post.user.username !== "" ? post.user.username: "Unknown"} · {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>
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
      {post.imgUrl ? (
        <div className="-mx-4">
          <img
            src={post.imgUrl}
            alt="Post"
            className="w-full object-cover max-h-96"
          />
        </div>
      ) : null}

      {/* Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            className={`gap-1.5 rounded-full ${liked ? 'text-destructive hover:text-destructive' : 'text-muted-foreground'}`}
          >
          <div className="flex items-center gap-1">
            {topReactions.length > 0 ? (
              topReactions.map((r, i) => (
                <Heart
                  key={i}
                  className={`h-4 w-4 -ml-1 ${reactionStyles[r]} ${
                    i === 0 ? "" : "border border-background rounded-full"
                  }`}
                />
              ))
            ) : (
              <Heart className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
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

          {/* Render top-level comments */}
          {comments
            .filter(c => c.parentCommentId === null)
            .map(parent => (
              <div key={parent.id} className="mb-3">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={parent.user.pfpUrl} alt={parent.user.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {parent.user.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{parent.user.name}</p>
                    <p className="text-sm text-muted-foreground">{parent.commentMessage}</p>
                    {parent.imgUrl ? (
                      <div className="-mx-4">
                        <img
                          src={parent.imgUrl}
                          alt="Post"
                          className="w-full object-cover max-h-96"
                        />
                      </div>
                    ) : null}
                    <p className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(parent.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>

                {parent.childComments.length > 0 && (
                  <div className="ml-8 mt-2">
                    {parent.childComments.map(child => (
                      <div key={child.id} className="flex gap-3 mb-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={child.user.pfpUrl} alt={child.user.name} />
                          <AvatarFallback>
                            {child.user.name.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-semibold">{child.user.name}</p>
                          <p className="text-sm text-muted-foreground">{child.commentMessage}</p>
                          {child.imgUrl ? (
                            <div className="-mx-4">
                              <img
                                src={child.imgUrl}
                                alt="Post"
                                className="w-full object-cover max-h-40 rounded-2xl"
                              />
                            </div>
                          ) : null}
                          <p className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(child.createdAt), { addSuffix: true })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
