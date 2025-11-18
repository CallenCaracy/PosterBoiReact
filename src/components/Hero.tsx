import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-32 bg-linear-to-b from-indigo-50 to-white">
      <h2 className="text-5xl font-extrabold mb-6">Share Your Moments, Your Way</h2>
      <p className="text-lg text-gray-600 mb-8">
        PosterBoi lets you post, connect, and discover content in a fun and safe environment.
      </p>
      <Button className="px-8 py-3 text-lg">Get Started</Button>
    </section>
  );
}
