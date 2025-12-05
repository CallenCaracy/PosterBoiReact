import { useState, useCallback } from "react";
import type { Comment } from "@/models/Comment";
import { getApiUrl } from "@/utils/env";
import type { UseInfiniteCommentsOptions } from "@/interfaces/IOptions";
import { MAX_RETRIES } from "@/utils/constants";

export function useInfiniteComments({ postId, limit = 10 }: UseInfiniteCommentsOptions = {}) {
    if (!postId) throw new Error("postId is required");
    const { BASE_URL, API_VERSION } = getApiUrl();
    const endpoint = `${BASE_URL}/api/v${API_VERSION}/Comment/getCommentsByPostId/${postId}`;

    const [comments, setPosts] = useState<Comment[]>([]);
    const [after, setAfter] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [retryCount, setRetryCount] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return;
        if (retryCount >= MAX_RETRIES ) {
           setError("Failed to load posts. Please try again.");
           return;
        }

        setLoading(true);
        setError(null);

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
            setRetryCount(0);
        } catch (err) {
            setRetryCount(c => c + 1);
            await new Promise(r => setTimeout(r, 500 * (retryCount + 1)));
            if (retryCount + 1 >= MAX_RETRIES) {
                setError("Failed to load comments. Please try again.");
                setHasMore(false);
            }
        } finally {
            setLoading(false);
        }
    }, [after, limit, endpoint, loading, hasMore, retryCount]);

    return {
        comments,
        loadMore,
        loading,
        hasMore,
        error,
    };
}
