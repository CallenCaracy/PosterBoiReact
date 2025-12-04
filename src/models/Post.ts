import type { User } from "@/models/User"

export type Post = {
    id: number;
    title: string;
    imgUrl: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    user: User;
    reactionCount: number;
    commentCount: number;
}