import { ReactionType, type ReactionSummary } from "@/models/Reaction";

// export function getTopReactions(
//   summary?: Record<string, number>,
//   topN = 3
// ): ReactionType[] {
//   if (!summary) return [];

//   return Object.entries(summary)
//     .filter((entry): entry is [keyof typeof ReactionType, number] =>
//       entry[0] in ReactionType
//     )
//     .sort((a, b) => b[1] - a[1])
//     .map(([key]) => ReactionType[key])
//     .slice(0, topN);
// }

export function getTopReactions(
  summary?: ReactionSummary,
  topN: number = 3
): ReactionType[] {
  if (!summary) return [];

  return Object.entries(summary)
    .filter(([key]) => !["userReactionId", "userReactionType"].includes(key))
    .map(([key, count]) => {
      const reactionType = ReactionType[key as keyof typeof ReactionType];
      return reactionType ? [reactionType, count] : null;
    })
    .filter((entry): entry is [ReactionType, number] => entry !== null)
    .sort((a, b) => b[1] - a[1])
    .map(([reactionType]) => reactionType)
    .slice(0, topN);
}

export const reactionStyles: Record<ReactionType, string> = {
  [ReactionType.Like]: "text-green-500",
  [ReactionType.Heart]: "text-pink-500",
  [ReactionType.Haha]: "text-yellow-400",
  [ReactionType.Wow]: "text-orange-500",
  [ReactionType.Sad]: "text-blue-500",
  [ReactionType.Angry]: "text-red-500",
};