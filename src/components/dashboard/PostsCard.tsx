import { Card } from "../ui/card";

export default function PostsCard() {
    return (
        <Card className="col-start-2 col-span-3 row-start-2 row-span-4 bg-muted dark:bg-gray-800 rounded-lg shadow p-6 overflow-y-auto scroll-auto">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Posts</h2>
            <div className="space-y-4">
                <Card className="col-start-2 col-span-2 row-start-2 row-span-4 bg-white dark:bg-gray-800 rounded-lg shadow p-6 overflow-y-auto h-full">Post 1 content...</Card>
                <Card className="col-start-2 col-span-2 row-start-2 row-span-4 bg-white dark:bg-gray-800 rounded-lg shadow p-6 overflow-y-auto h-full">Post 2 content...</Card>
                <Card className="col-start-2 col-span-2 row-start-2 row-span-4 bg-white dark:bg-gray-800 rounded-lg shadow p-6 overflow-y-auto h-full">Post 3 content...</Card>
                <Card className="col-start-2 col-span-2 row-start-2 row-span-4 bg-white dark:bg-gray-800 rounded-lg shadow p-6 overflow-y-auto h-full">Post 4 content...</Card>
            </div>
        </Card>
    );
}