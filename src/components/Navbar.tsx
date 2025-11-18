import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-12 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">PosterBoi</h1>
      <div className="flex gap-4">
        <Link to="/login">
            <Button variant="outline" >Login</Button>
        </Link>
        <Link to="/signup">
            <Button>Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
}