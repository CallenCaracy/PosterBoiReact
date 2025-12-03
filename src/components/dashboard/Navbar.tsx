import { Bell, Home, MessageCircle, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "@/assets/PosterBoi_Logo.png"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
            <img src={Image} alt="background image sign in" className="h-full w-full object-cover object-center dark:not-odd:not-last:"></img>
          </div>
          <span className="hidden text-xl font-bold text-foreground sm:block">PosterBoi</span>
        </div>

        {/* Search */}
        <div className="hidden flex-1 max-w-md mx-8 md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border border-border bg-secondary/50 py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          <Button variant="outline" size="icon" className="rounded-full">
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Users className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full relative">
            <MessageCircle className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              3
            </span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
              5
            </span>
          </Button>
          <div className="ml-2 pl-2 border-l border-border">
            <Avatar className="h-9 w-9 ring-2 ring-primary/20 transition-all hover:ring-primary/40 cursor-pointer">
              <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User" />
              <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
            </Avatar>
          </div>
        </nav>
      </div>
    </header>
  );
}
