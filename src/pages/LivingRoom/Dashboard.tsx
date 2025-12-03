import Navbar from "@/components/dashboard/Navbar";
import ProfileCard from "@/components/dashboard/ProfileCard";
import CreatePostCard from "@/components/dashboard/CreatePostCard";
import PostsFeed from "@/components/dashboard/PostFeed";
import FriendsCard from "@/components/dashboard/FriendsCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Sidebar - Profile */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <ProfileCard />
            </div>
          </aside>

          {/* Main Feed */}
          <section className="lg:col-span-6 space-y-4">
            <CreatePostCard />
            <PostsFeed />
          </section>

          {/* Right Sidebar - Friends */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <FriendsCard />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
