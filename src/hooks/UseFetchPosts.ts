import { useState, useCallback } from "react";
import type { Post } from "@/models/Post";
import { getApiUrl } from "@/utils/env";

interface UseInfinitePostsOptions {
  limit?: number;
}

export function useInfinitePosts({ limit = 10 }: UseInfinitePostsOptions = {}) {
  const { BASE_URL, API_VERSION } = getApiUrl();
  const endpoint = `${BASE_URL}/api/v${API_VERSION}/Post/getAllPosts`;

  const [posts, setPosts] = useState<Post[]>([]);
  const [after, setAfter] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const query = new URLSearchParams({
        limit: String(limit),
        ...(after ? { after } : {})
      });

      const res = await fetch(`${endpoint}?${query.toString()}`, {
        method: "GET",
      });

      if (!res.ok) throw new Error("Failed to fetch posts");

      const data: Post[] = await res.json();

      if (data.length < limit) {
        setHasMore(false);
      }

      const newCursor = data.at(-1)?.createdAt ?? null;

      setPosts(prev => [...prev, ...data]);
      setAfter(newCursor);
    } catch (err) {
      console.error("Infinite scroll error:", err);
    } finally {
      setLoading(false);
    }
  }, [after, limit, endpoint, loading, hasMore]);

  return {
    posts,
    loadMore,
    loading,
    hasMore,
  };
}
