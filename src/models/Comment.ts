import type { User } from "./User"

export type Comment = {
    id: number
    postId: number
    commentMessage: string
    imgUrl?: string
    createdAt: string
    updatedAt: string
    userId: string
    user: User
    parentCommentId: number,
    childComments: Comment[]
}