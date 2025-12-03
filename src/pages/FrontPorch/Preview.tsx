import PostsFeed from "@/components/FrontPorch/PostFeed";
import Navbar from "@/components/FrontPorch/Navbar";

export default function Preview() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
                <section className="lg:col-span-6 space-y-4">
                    <PostsFeed />
                </section>
            </main>
        </div>
    );
}