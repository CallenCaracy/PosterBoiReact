import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useState } from "react";

export default function CreatePostCard() {
    const [preview, setPreview] = useState<string | null>(null);

    return (
        <Card className="col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Create Post
                </h2>
                <Button className="rounded-sm bg-black text-white hover:bg-white hover:text-black transition">
                    Post
                </Button>
            </div>

            {/* Textarea */}
            <div className="mb-4">
                <Textarea
                    placeholder="What's on your mind?"
                    className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                />
            </div>

            {/* Upload + Preview */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Upload Button */}
                <Label className="cursor-pointer rounded-sm bg-black text-white hover:bg-white hover:text-black transition px-4 py-2">
                    Upload
                    <Input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setPreview(URL.createObjectURL(file));
                            }
                        }}
                    />
                </Label>

                {/* Image Preview */}
                {preview && (
                    <img
                        src={preview}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-md border border-gray-300 dark:border-gray-700"
                    />
                )}
            </div>
        </Card>
    );
}
