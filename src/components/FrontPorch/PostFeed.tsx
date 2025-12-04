import PostCard from "@/components/frontPorch/PostCard";
import type { Post } from "@/models/Post";

interface PostsFeedProps {
  posts: Post[];
}


export default function PostsFeed({ posts }: PostsFeedProps) {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
