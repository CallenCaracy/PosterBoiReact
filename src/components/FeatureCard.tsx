export default function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}