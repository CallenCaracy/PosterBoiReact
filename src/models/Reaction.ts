import { ReactionType } from "./ReactionType"

export type Reactions = {
    id: number,
    postId: number,
    userId: string,
    reactionType: ReactionType,
    reactedAt: string,
}