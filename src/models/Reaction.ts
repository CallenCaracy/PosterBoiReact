export type Reactions = {
    id: number,
    postId: number,
    userId: string,
    reactionType: ReactionType,
    reactedAt: string,
}

export type ReactionSummary = {
    reactionTypes?: Partial<Record<keyof typeof ReactionType, number>>;
    userReactionId?: string | null;
    userReactionName?: keyof typeof ReactionType | null;
};


export enum ReactionType {
    Like = 1,
    Heart = 2,
    Haha = 3,
    Wow = 4,
    Sad = 5,
    Angry = 6
}