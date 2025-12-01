import { Card } from "../ui/card";

export default function PostsCard() {
    return (
        <Card className="col-start-5 col-span-4 row-start-1 row-span-5 bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Friends & Chats</h2>
            <div className="flex-1 overflow-y-auto space-y-3">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md">Friend 1 / Chat snippet</div>
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md">Friend 2 / Chat snippet</div>
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md">Friend 3 / Chat snippet</div>
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md">Friend 4 / Chat snippet</div>
            </div>
        </Card>
    );
}