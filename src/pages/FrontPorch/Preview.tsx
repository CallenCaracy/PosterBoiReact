import PostsFeed from "@/components/frontPorch/PostFeed";
import Navbar from "@/components/frontPorch/Navbar";
import { useRef, useEffect } from "react";
import { useInfinitePosts } from "@/hooks/UseFetchPosts";
import { Label } from "@/components/ui/label";

export default function Preview() {
    const { posts, loadMore, loading, hasMore, error } = useInfinitePosts();
    const loadMoreRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    if (!loadMoreRef.current || error) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting && hasMore && !loading) {
            loadMore();
        }
        },
        { rootMargin: "100px" }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
    }, [hasMore, loading]);

    console.log(posts, hasMore)
    return (
        <div className="min-h-screen bg-background">
        <Navbar />
        <main className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
            <section className="lg:col-span-6 space-y-4">
            <PostsFeed posts={posts} />
            </section>

            {hasMore && !loading && (
            <button
                onClick={loadMore}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 mt-4"
            >
                Load More
            </button>
            )}
            {loading && <Label className="text-center mt-4 justify-center text-xl">Loading...</Label>}

            {error && (
            <div className="mt-4 text-center">
                <Label className="text-red-500 justify-center text-xl">{error}</Label>
            </div>
            )}

            <div ref={loadMoreRef}></div>
        </main>
        </div>
    );
}