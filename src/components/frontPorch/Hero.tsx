import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="grow flex flex-col justify-center items-center bg-linear-to-b from-indigo-50 to-white">
      <h2 className="text-5xl font-extrabold mb-6">Share Your Moments, Your Way</h2>
      <p className="text-lg text-gray-600 mb-8">
        PosterBoi lets you post, connect, and discover content in a fun and safe environment.
      </p>
      <div className="flex gap-4">  
        <Link to="/preview">
          <Button className="w-auto">Browse without an account</Button>
        </Link>
      </div>
    </section>
  );
}
