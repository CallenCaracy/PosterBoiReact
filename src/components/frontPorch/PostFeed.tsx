import PostCard from "@/components/frontPorch/PostCard";
import type { PostsFeedProps } from "@/interfaces/IProps";

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
