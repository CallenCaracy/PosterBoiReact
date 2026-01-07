import { ReactionType } from "@/models/ReactionType";

export function getTopReactions(
  summary?: Record<string, number>,
  topN = 3
): ReactionType[] {
  if (!summary) return [];

  return Object.entries(summary)
    .filter((entry): entry is [keyof typeof ReactionType, number] =>
      entry[0] in ReactionType
    )
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => ReactionType[key])
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