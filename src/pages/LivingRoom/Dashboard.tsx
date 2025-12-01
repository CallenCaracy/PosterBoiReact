import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import ProfileCard from "@/components/dashboard/ProfileCard";
import CreatePostCard from "@/components/dashboard/CreatePostCard";
import PostsCard from "@/components/dashboard/PostsCard";
import FriendNChat from "@/components/dashboard/FriendNChatCard";

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
            <Navbar />

            <main className="flex-1 py-10 px-6 md:px-20 grid grid-cols-5 gap-4">
                <ProfileCard/>
                <CreatePostCard/>
                <PostsCard/>
                <FriendNChat/>
            </main>

            <Footer />
        </div>
    );
}
