import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    { title: "Easy Posting", description: "Share your thoughts in seconds with our simple editor." },
    { title: "Connect with Friends", description: "Follow and interact with your friends seamlessly." },
    { title: "Discover Content", description: "Explore trending posts and find communities you love." },
  ];

  return (
    <section className="py-24 px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((f) => (
        <FeatureCard key={f.title} title={f.title} description={f.description} />
      ))}
    </section>
  );
}