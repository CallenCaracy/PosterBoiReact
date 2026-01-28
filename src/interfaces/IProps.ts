import type { Post } from "@/models/Post";
import type { ReactNode } from "react";

export default interface IAuthProviderProps {
    children: ReactNode;
}

export interface PostsFeedProps {
  posts: Post[];
}

export interface PostCardProps {
  post: Post;
}

export interface ImageModalProps {
  src: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
}