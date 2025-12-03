import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Wilson",
      avatar: "https://i.pravatar.cc/150?img=5",
      username: "sarahw",
    },
    content: "Just finished an amazing hike in the mountains! The views were absolutely breathtaking. Nature has a way of putting everything into perspective. 🏔️",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    likes: 234,
    comments: 18,
    shares: 5,
    timeAgo: "2h ago",
  },
  {
    id: 2,
    author: {
      name: "Mike Chen",
      avatar: "https://i.pravatar.cc/150?img=8",
      username: "mikechen",
    },
    content: "Working on some exciting new features for our app. Can't wait to share what we've been building! The team has been crushing it lately. 💻🚀",
    likes: 89,
    comments: 12,
    shares: 3,
    timeAgo: "4h ago",
  },
  {
    id: 3,
    author: {
      name: "Emma Davis",
      avatar: "https://i.pravatar.cc/150?img=9",
      username: "emmad",
    },
    content: "Coffee and code - my favorite way to start the morning. There's something magical about solving problems before the world wakes up. ☕",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop",
    likes: 156,
    comments: 24,
    shares: 8,
    timeAgo: "6h ago",
  },
  {
    id: 4,
    author: {
      name: "Alex Turner",
      avatar: "https://i.pravatar.cc/150?img=12",
      username: "alexturner",
    },
    content: "Just launched my new portfolio! Spent weeks perfecting every detail. Would love to hear your thoughts and feedback. Link in bio! 🎨",
    likes: 312,
    comments: 45,
    shares: 22,
    timeAgo: "8h ago",
  },
];

export default function PostsFeed() {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <div key={post.id} style={{ animationDelay: `${index * 0.1}s` }}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
}
