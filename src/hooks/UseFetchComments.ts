import { useState, useCallback } from "react";
import type { Comment } from "@/models/Comment";
import { getApiUrl } from "@/utils/env";

interface UseInfiniteCommentsOptions {
    postId?: string;  
    limit?: number;
}

export function useInfinitePosts({ postId, limit = 10 }: UseInfiniteCommentsOptions = {}) {
    if (!postId) throw new Error("postId is required");
    const { BASE_URL, API_VERSION } = getApiUrl();
    const endpoint = `${BASE_URL}/api/v${API_VERSION}/Comment/getCommentsByPostId/${postId}`;

    const [comments, setPosts] = useState<Comment[]>([]);
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

        if (!res.ok) throw new Error("Failed to fetch comments");

        const data: Comment[] = await res.json();

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
        comments,
        loadMore,
        loading,
        hasMore,
    };
}
