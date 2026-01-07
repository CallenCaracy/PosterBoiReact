export type Reactions = {
    id: number,
    postId: number,
    userId: string,
    reactionType: ReactionType,
    reactedAt: string,
}

export type ReactionSummary = {
    reactionSummary?: Partial<Record<ReactionType, number>>
    userReactionId?: string;
    userReactionType?: string;
}

export enum ReactionType {
    Like = 1,       //Like
    Heart = 2,      //Love
    Haha = 3,       //Haha
    Wow = 4,        //Wow
    Sad = 5,        //Sad
    Angry = 6       //Angry
}