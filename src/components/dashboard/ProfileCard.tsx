import { Card } from "../ui/card";

export default function PostsCard() {
    return (
        <Card className="row-span-5 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                User Profile
            </h2>
            <p className="text-gray-700 dark:text-gray-300">Here you could show avatar, bio, stats, etc.</p>
        </Card>        
    );
}