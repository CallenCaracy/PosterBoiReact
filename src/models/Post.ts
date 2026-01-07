import type { User } from "@/models/User"
import type { ReactionSummary } from "./Reaction";

// export type Post = {
//     id: number;
//     title: string;
//     imgUrl?: string;
//     description: string;
//     createdAt: string;
//     updatedAt: string;
//     userId: string;
//     user: User;
//     reactionCount: number;
//     reactionSummary?: Partial<Record<ReactionType, number>>
//     commentCount: number;
// }

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
    reactionSummary: ReactionSummary
    commentCount: number;
}