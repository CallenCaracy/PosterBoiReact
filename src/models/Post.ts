import type { User } from "@/models/User"
import type { ReactionType } from "./ReactionType";

export type Post = {
    id: number;
    title: string;
    imgUrl?: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    user: User;
    reactionCount: number;
    reactionSummary?: Partial<Record<ReactionType, number>>
    commentCount: number;
}